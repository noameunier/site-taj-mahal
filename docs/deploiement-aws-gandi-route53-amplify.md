# Héberger le site sur AWS avec un domaine Gandi

Ce guide permet de mettre le site Taj Mahal en ligne sans administrer de serveur :

- **Gandi** est le bureau d’enregistrement : on y achète et renouvelle le nom de domaine.
- **Amazon Route 53** héberge les DNS du domaine.
- **AWS Amplify Hosting** héberge les fichiers du site et le redéploie automatiquement après chaque push sur la branche `main` de GitHub.
- **GitHub** conserve le code et permet à plusieurs personnes d’y contribuer depuis leurs ordinateurs.

> Ce guide ne crée pas de ressource AWS et ne modifie aucun DNS. Le domaine exact et l’autorisation de mise en ligne doivent être confirmés avant de suivre les étapes qui changent les DNS.

## 1. Préparer les éléments nécessaires

Avant de commencer, réunir les éléments suivants :

1. **Le nom de domaine définitif** que le restaurant souhaite acheter chez Gandi, par exemple `tajmahal-manosque.fr` (exemple seulement : vérifier sa disponibilité et choisir le vrai nom).
2. **Un compte Gandi** accessible par la personne responsable du domaine, avec une adresse e-mail à jour et un moyen de paiement.
3. **Un compte AWS** appartenant au responsable du restaurant, avec un moyen de paiement. Activer l’authentification multifacteur (MFA) sur le compte.
4. **Un compte GitHub par personne** qui modifiera le site. Ne pas partager un mot de passe commun.
5. Accès au dépôt GitHub [`noameunier/site-taj-mahal`](https://github.com/noameunier/site-taj-mahal), branche `main`. Le propriétaire doit inviter les autres personnes comme collaborateurs avec le droit d’écriture.
6. Pour modifier le code depuis un ordinateur : Git et Node.js 20 ou une version compatible plus récente.
7. Le nom de domaine doit être choisi avant de configurer le site. Il faudra le remplacer dans les métadonnées du site et le sitemap (voir l’étape 5).

### Si le domaine existe déjà ou sert aux e-mails

Ne pas changer les serveurs DNS tout de suite. Avant toute modification, relever et conserver **tous** les enregistrements DNS existants : MX, SPF, DKIM, DMARC, sous-domaines et autres enregistrements utilisés. Ils devront être recréés dans Route 53 avant le changement des serveurs DNS, sinon les e-mails ou d’autres services pourraient cesser de fonctionner.

## 2. Acheter le domaine chez Gandi

1. Se connecter à [Gandi](https://www.gandi.net/).
2. Rechercher le nom choisi et vérifier qu’il est disponible.
3. Lire le prix **du renouvellement**, pas seulement le tarif de première année. Le domaine est généralement facturé à l’année.
4. Acheter le domaine au nom de la personne ou de l’entreprise qui en sera propriétaire. Utiliser une adresse e-mail qui restera accessible.
5. Activer le renouvellement automatique si le propriétaire souhaite éviter une expiration accidentelle.

Gandi restera le bureau d’enregistrement du domaine. Il ne faut pas transférer le domaine chez AWS : nous allons seulement déléguer la gestion DNS à Route 53.

## 3. Créer la zone DNS dans Route 53

1. Se connecter à la [console AWS](https://console.aws.amazon.com/) avec le compte du propriétaire.
2. Rechercher **Route 53** dans la barre de recherche AWS et ouvrir le service.
3. Dans le menu Route 53, choisir **Hosted zones / Zones hébergées**, puis **Create hosted zone / Créer une zone hébergée**.
4. Dans **Domain name / Nom de domaine**, entrer le domaine nu, sans `https://` ni `www` (exemple : `tajmahal-manosque.fr`).
5. Choisir le type **Public hosted zone / Zone hébergée publique**.
6. Créer la zone.
7. Dans la liste des enregistrements, repérer l’enregistrement **NS** créé automatiquement. Il contient quatre noms de serveurs qui ressemblent à `ns-123.awsdns-45.com`.
8. Copier et conserver ces quatre serveurs : ils seront demandés par Gandi à l’étape suivante.

Ne pas créer une seconde zone pour `www.domaine.fr`. La zone doit être créée pour le domaine nu.

## 4. Déléguer les DNS de Gandi à Route 53

Cette étape indique à Internet que Route 53 est désormais responsable des DNS du domaine.

1. Vérifier une dernière fois si le domaine a déjà des services associés. Si oui, recréer dans Route 53 tous les enregistrements nécessaires, notamment ceux des e-mails, **avant** de continuer.
2. Se connecter à Gandi et ouvrir la page de gestion du domaine.
3. Trouver le réglage des **serveurs de noms / nameservers** (parfois appelé « DNS personnalisés »).
4. Remplacer les serveurs de noms Gandi par les **quatre serveurs NS copiés depuis Route 53**. Saisir chacun dans son champ, sans en oublier.
5. Enregistrer la modification.
6. Attendre la propagation DNS. Cela peut prendre plusieurs heures et, dans certains cas, jusqu’à 48 heures. Pendant cette période, éviter de faire d’autres changements DNS.

Après cette délégation, les futurs enregistrements DNS se géreront dans Route 53, pas dans la zone DNS Gandi. Le domaine, lui, restera renouvelé chez Gandi.

## 5. Mettre le nom de domaine choisi dans le code

Avant la mise en ligne sur le domaine définitif, remplacer l’ancienne adresse par la nouvelle dans les fichiers suivants :

- `src/data/restaurant.ts` : valeur `siteUrl` ;
- `public/robots.txt` : adresse dans la ligne `Sitemap:` ;
- `public/sitemap.xml` : adresse du site dans la balise `<loc>` ;
- `astro.config.mjs` : domaine de secours dans `site` si la variable `SITE_URL` n’est pas configurée.

Utiliser exactement la même adresse partout, avec `https://`, par exemple `https://tajmahal-manosque.fr`. Si vous préférez `www.tajmahal-manosque.fr`, décider cela maintenant et employer la même adresse canonique partout. Amplify pourra rediriger l’autre variante.

Vérifier ensuite les changements sur son ordinateur :

```bash
npm ci
npm run build
```

Si le build réussit, publier ces modifications sur GitHub comme décrit à l’étape 9. Ne pas publier l’adresse fictive donnée en exemple.

## 6. Connecter le dépôt GitHub à Amplify

1. Dans la console AWS, rechercher **AWS Amplify** et ouvrir le service **AWS Amplify**.
2. Choisir **Create new app / Créer une application**, puis l’option de déploiement depuis un dépôt Git (le libellé peut être **Deploy an app / Déployer une application**).
3. Choisir **GitHub** comme fournisseur.
4. Quand GitHub le demande, se connecter et autoriser AWS Amplify à accéder au dépôt `noameunier/site-taj-mahal`. Accorder l’accès uniquement à ce dépôt si GitHub propose ce choix.
5. Revenir à Amplify, choisir le dépôt `site-taj-mahal`, puis la branche **`main`**.
6. Amplify doit détecter le fichier `amplify.yml` présent à la racine du dépôt. Ce fichier indique à Amplify de lancer `npm ci`, puis `npm run build`, et de publier le dossier `dist/`.
7. Vérifier ces commandes et le dossier de sortie avant de continuer. Ne pas ajouter de commandes de déploiement vers S3 : Amplify héberge lui-même les fichiers statiques.
8. Laisser les secrets et variables d’environnement non nécessaires vides. Le site n’a pas besoin de clé AWS ou de mot de passe dans GitHub.
9. Choisir **Save and deploy / Enregistrer et déployer**.
10. Attendre que le premier build affiche **Succeeded / Réussi**. Ouvrir l’URL de test `*.amplifyapp.com` fournie par Amplify et vérifier la page, les photos, la carte, les liens téléphone et les avis.

Si le premier build échoue, ouvrir son journal dans Amplify et corriger l’erreur avant d’associer le domaine.

## 7. Associer le domaine Gandi à Amplify et Route 53

Ne faire cette étape qu’une fois l’application Amplify déployée avec succès et la zone Route 53 créée.

1. Dans Amplify, ouvrir l’application du site.
2. Aller dans **Hosting / Hébergement**, puis **Custom domains / Domaines personnalisés**.
3. Choisir **Add domain / Ajouter un domaine** et saisir le domaine nu (sans `www` ni `https://`).
4. Si Amplify propose d’utiliser ou de créer une zone Route 53, choisir la zone Route 53 déjà créée pour ce domaine. Vérifier qu’il ne s’agit pas d’une seconde zone en doublon.
5. Associer le domaine nu et `www` à la branche **`main`**. Choisir une seule adresse principale et laisser Amplify rediriger l’autre vers elle.
6. Choisir le certificat HTTPS géré par Amplify (option par défaut). Il est renouvelé automatiquement tant que les DNS restent correctement configurés.
7. Si Amplify crée les enregistrements Route 53 automatiquement, vérifier qu’ils apparaissent dans la zone. Sinon, utiliser **View DNS records / Afficher les enregistrements DNS** dans Amplify et les ajouter exactement comme indiqués dans Route 53.
8. Ne pas supprimer les enregistrements de validation CNAME du certificat une fois le domaine actif : AWS en a besoin pour renouveler le certificat.
9. Attendre que le domaine et le certificat affichent un état disponible/actif dans Amplify. La propagation peut prendre jusqu’à 48 heures.
10. Tester les deux variantes, `https://domaine.fr` et `https://www.domaine.fr`. Vérifier qu’elles affichent le site ou que l’une redirige vers l’autre.

Ne pas supprimer l’ancien hébergement ni modifier d’autres DNS tant que le nouveau domaine en HTTPS n’a pas été vérifié.

## 8. Ce qui se passe ensuite automatiquement

Le branchement GitHub-Amplify déclenche un déploiement chaque fois qu’un nouveau commit est poussé sur `main` :

1. GitHub informe Amplify du push.
2. Amplify récupère le code, installe les dépendances et exécute le build.
3. Si le build réussit, Amplify publie la nouvelle version.
4. Si le build échoue, la dernière version publiée avec succès reste en ligne. Consulter les journaux du build dans Amplify pour comprendre l’erreur.

Il n’est pas nécessaire de se connecter à AWS pour les modifications normales du site. Les comptes GitHub des contributeurs suffisent.

## 9. Modifier et publier depuis chaque ordinateur

### Première installation sur un ordinateur

Installer Git et Node.js 20 ou une version compatible récente. Puis ouvrir un terminal (Terminal sur Mac, PowerShell sur Windows) et exécuter :

```bash
git clone https://github.com/noameunier/site-taj-mahal.git
cd site-taj-mahal
npm ci
```

GitHub demandera une connexion pour cloner le dépôt privé ou pousser des changements. Chaque personne utilise son propre compte GitHub ; ne pas partager de jeton ou de mot de passe.

### Pour chaque changement

1. Ouvrir le terminal dans le dossier `site-taj-mahal`.
2. Récupérer les modifications que l’autre personne a déjà publiées :

   ```bash
   git pull --ff-only origin main
   ```

3. Modifier les fichiers du site. Pour prévisualiser localement :

   ```bash
   npm run dev
   ```

   Ouvrir l’adresse locale affichée dans le terminal, généralement `http://localhost:4321`.

4. Arrêter la prévisualisation avec `Ctrl+C`, puis vérifier le build :

   ```bash
   npm run build
   ```

5. Si le build réussit, enregistrer et pousser le changement :

   ```bash
   git add .
   git commit -m "Décrire le changement"
   git push origin main
   ```

6. Dans Amplify, ouvrir l’application et vérifier que le nouveau build se termine avec succès. Le changement est alors en ligne.

### Règle importante pour éviter les conflits

Avant de modifier le site, toujours faire `git pull --ff-only origin main`. Ne pas modifier simultanément le même fichier ; se prévenir quand l’un commence une modification. Pour un usage plus avancé, vous pouvez créer une branche et utiliser une pull request au lieu de pousser directement sur `main`.

## 10. Revenir en arrière si une modification pose problème

La façon la plus sûre est de faire un nouveau commit qui annule le changement fautif, puis de le pousser sur `main`. Amplify déploiera ce nouveau commit automatiquement. Ne pas supprimer des fichiers ou des ressources AWS au hasard pour revenir en arrière.

## 11. Budget et coût indicatif

Les tarifs changent ; vérifier les montants affichés au moment de l’achat et dans la console AWS. Pour l’estimation de cette architecture :

- **Gandi** facture l’enregistrement du domaine à l’année. Pour un `.fr`, sa page affiche actuellement un tarif d’inscription promotionnel de 6 € HT/an et un tarif de renouvellement standard de 23,98 € HT/an (soit environ 28,78 € TTC/an au taux de TVA de 20 %). Le coût mensuel équivalent du renouvellement est donc environ 2,40 €, mais Gandi facture annuellement.
- **Route 53** facture une zone publique 0,50 USD par mois. Les requêtes DNS standard sont facturées 0,40 USD par million ; pour un petit site, cela représente généralement quelques centimes.
- **Amplify** facture notamment le temps de build (tarif standard affiché : 0,01 USD par minute), le stockage distribué (0,023 USD/Go/mois) et le transfert de données sortant (0,15 USD/Go). Des quotas gratuits ou crédits peuvent s’appliquer selon le compte AWS ; ne pas les considérer comme garantis.
- **Amplify fournit le certificat HTTPS géré sans frais supplémentaires** pour ce cas d’hébergement.

Pour un petit site vitrine, quelques modifications par mois et un trafic modeste (par exemple quelques Go de données transférées), prévoir **environ 3 à 6 € par mois en moyenne après le tarif promotionnel de première année**, avec une marge pour la TVA, le taux de change et les variations de trafic. Ce n’est pas un plafond : un trafic important ou un volume de transfert élevé peut augmenter la facture.

Dans AWS Billing, créer une alerte de budget mensuel (par exemple 10 € ou 15 €) et activer les notifications e-mail. Une alerte prévient d’un dépassement ; elle ne bloque pas automatiquement les dépenses.

Liens tarifaires officiels : [Gandi .fr](https://www.gandi.net/en/domain/tld/fr), [Route 53](https://aws.amazon.com/route53/pricing/), [Amplify](https://aws.amazon.com/amplify/pricing/).

## 12. Contrôles finaux

- [ ] Le domaine est enregistré chez Gandi et appartient au responsable prévu.
- [ ] La zone publique Route 53 correspond au domaine exact.
- [ ] Les serveurs de noms de Gandi sont les quatre valeurs NS de Route 53.
- [ ] Les anciens enregistrements e-mail ou autres services, s’il y en avait, ont été recopiés.
- [ ] Amplify est lié au bon dépôt GitHub et à la branche `main`.
- [ ] Le fichier `amplify.yml` configure bien le build et `dist/`.
- [ ] Le domaine et son certificat HTTPS sont actifs dans Amplify.
- [ ] Le domaine public, le sitemap et `robots.txt` utilisent le nouveau domaine.
- [ ] Un commit de test sur `main` a déclenché un déploiement Amplify réussi.
- [ ] L’alerte de budget AWS envoie une notification à la bonne adresse.
