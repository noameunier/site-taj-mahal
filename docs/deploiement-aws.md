# Déploiement AWS (à autoriser séparément)

Cette procédure décrit une cible ; **elle ne crée aucune ressource et n’autorise pas un déploiement**. Le dépôt actuel n’a pas encore de pipeline AWS. Faire valider les permissions, le budget et les changements DNS avant toute mise en œuvre.

## Architecture minimale

- Bucket S3 privé pour les fichiers de `dist/` (blocage complet de l’accès public).
- Distribution CloudFront, origine S3 avec Origin Access Control (OAC), HTTPS uniquement.
- Certificat ACM dans `us-east-1` pour le nom de domaine choisi.
- Enregistrement Route 53 de type Alias seulement après approbation explicite.
- GitHub Actions avec fédération OIDC vers IAM (pas de clés AWS statiques dans GitHub). Séparer l’identité de provisionnement ponctuel de celle de publication continue.

Les identifiants S3/CloudFront, permissions de provisionnement et zone Route 53 doivent être limités aux ressources et au dépôt concernés. Restreindre le rôle de publication à la synchronisation du bucket dédié et à l’invalidation de la distribution. Ne pas accorder `AdministratorAccess` au pipeline.

## Avant de provisionner

1. Confirmer compte AWS, région du bucket, domaine, zone DNS et autorisation de changements DNS.
2. Examiner et faire approuver un template IaC (CloudFormation ou Terraform) qui décrit uniquement les ressources du site.
3. Vérifier les coûts dans AWS Pricing Calculator et activer une alerte de budget. S3/CloudFront et les requêtes sont facturés selon usage ; nom de domaine et taxes éventuelles ne sont pas inclus. Les coûts de transfert, requêtes, logs et invalida­tions peuvent varier ; ne pas promettre un coût nul.
4. Vérifier les options de logs, leur durée de conservation et les coûts avant activation.

## Publication manuelle après approbation

1. Construire : `npm ci && npm run build`.
2. Vérifier localement avec `npm run preview`.
3. Synchroniser **le contenu de** `dist/` vers le bucket dédié, avec une stratégie de cache adaptée (HTML revalidé, fichiers fingerprintés longue durée si fingerprinting ajouté).
4. Invalider les chemins CloudFront modifiés, souvent `/*` pour un petit site.
5. Tester HTTPS, navigation, liens téléphone/itinéraire, pages et ressources, puis vérifier les journaux et métriques.

Exemple d’opérations, à adapter et à n’exécuter qu’avec les autorisations fournies :

```bash
aws s3 sync dist/ s3://<bucket-du-site>/ --delete
aws cloudfront create-invalidation --distribution-id <distribution-id> --paths '/*'
```

`--delete` supprime les fichiers du bucket absent de `dist/` : s’assurer que le bucket est dédié au site et disposer d’une version de retour arrière.

## Domaine modifiable

Le domaine du site est centralisé dans `src/data/restaurant.ts` et le paramètre `site` d’Astro (`SITE_URL`). Un changement de domaine implique également un certificat ACM, la validation DNS, l’alias Route 53, la canonical URL, le sitemap et les métadonnées sociales. Il ne devrait pas imposer de réécrire la carte. Toute mutation DNS reste soumise à approbation.

## Suppression

Après autorisation explicite : sauvegarder les artefacts nécessaires, désactiver puis supprimer la distribution (attendre sa désactivation), supprimer l’alias DNS seulement s’il a été créé pour ce site, supprimer le bucket après vérification et sauvegarde de son contenu, puis retirer le certificat lorsqu’il n’est plus associé et le rôle OIDC. Ne jamais vider ou supprimer un bucket sans vérifier son nom, son contenu et l’accord du propriétaire.
