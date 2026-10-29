# Restaurant Taj Mahal : Manosque

Site vitrine statique réalisé avec Astro. Les contenus du restaurant et l’intégralité de la carte transcrite sont centralisés dans `src/data/restaurant.ts` et `src/data/menu.ts`.

## Développement local

Prérequis : Node.js 20 ou plus récent et npm.

```bash
npm install
npm run dev
```

Astro affiche l’URL de prévisualisation locale (généralement `http://localhost:4321`). Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

Le build produit un site statique autonome dans `dist/`.

## Modifier le contenu

- **Plat ou prix** : modifier l’entrée correspondante dans `categories` de `src/data/menu.ts`.
- **Composition d’une formule** : modifier `setMenus` dans le même fichier. Les choix alternatifs restent explicitement séparés.
- **Téléphone, adresse, horaires, offre à emporter et année d’ouverture** : modifier `src/data/restaurant.ts`.
- **Domaine** : mettre à jour `siteUrl` dans `src/data/restaurant.ts`, `SITE_URL` à la construction si nécessaire, ainsi que le sitemap et `public/robots.txt`.

Relancer `npm run build`, contrôler `dist/`, puis publier cette version.

## Déploiement

Voir [docs/deploiement-aws.md](docs/deploiement-aws.md). Aucun déploiement ou push distant n’a lieu automatiquement depuis ce dépôt.

## À confirmer avant mise en ligne

- Exploitant, responsable de publication et mentions légales obligatoires.
- Validité actuelle des tarifs, horaires et formules retranscrits du nouveau menu fourni (11 pages).
- Autorisation de publier le PDF original (il n’est pas copié dans le site dans cette première version).
- Photos officielles et éventuel logo, si le restaurant souhaite les utiliser.
- Domaine définitif et validation explicite de tout changement DNS / déploiement AWS.
- Le PDF donne uniquement le Grover indien dans la rubrique des vins blancs. Confirmer que la sélection de vins blancs est complète.
- Confirmer les URLs officielles des comptes sociaux avant d’ajouter des liens vers ceux-ci.

## Vérifications

```bash
npm run check
npm run build
```
