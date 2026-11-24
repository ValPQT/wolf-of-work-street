# Wolf of Work Street — digital add-on (PWA)

Live trading screen for the **Wolf of Work Street** board game (English Game, My Digital School Angers).
One phone in the middle of the table: stock values, challenge timer, Market News and final settlement.
Soft Coins, bets and challenge cards stay on the table.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'appli (V2) |
| `manifest.json` | Nom, couleurs et icônes : c'est ce qui rend l'appli installable |
| `sw.js` | Service worker : met les fichiers en cache pour jouer hors ligne |
| `fonts/` | Polices Archivo et Archivo Black, intégrées pour le hors ligne |
| `icons/` | Icônes de l'appli, faites à partir du logo |
| `.nojekyll` | Dit à GitHub Pages de servir les fichiers tels quels |

## Mise en ligne sur GitHub Pages

1. Sur GitHub, crée un dépôt **public** nommé `wolf-of-work-street` (GitHub Pages gratuit demande un dépôt public).
2. Envoie le **contenu** du dossier, pas le dossier lui-même. `index.html` doit être à la racine du dépôt.

```bash
cd wolf-of-work-street
git init
git add .
git commit -m "Wolf of Work Street PWA"
git branch -M main
git remote add origin https://github.com/ValPQT/wolf-of-work-street.git
git push -u origin main
```

3. Dans le dépôt : **Settings → Pages → Build and deployment**, puis **Source : Deploy from a branch**, **Branch : `main` / `(root)`**, et **Save**.
4. Attends 1 à 2 minutes. L'appli est en ligne sur : **https://valpqt.github.io/wolf-of-work-street/**

## Installer l'appli sur un téléphone

- **Android (Chrome)** : ouvre le lien, puis appuie sur le bouton **Install** de l'écran d'accueil de l'appli (ou menu ⋮ → *Installer l'application*).
- **iPhone (Safari)** : ouvre le lien, puis bouton **Partager** → **Sur l'écran d'accueil**.

Une fois installée, l'appli s'ouvre en plein écran et fonctionne **sans internet**.

## Fonctions ajoutées pour le téléphone

- **Hors ligne** : le service worker garde tous les fichiers en cache après la première visite.
- **Écran toujours allumé** (*Wake Lock API*) : pendant une partie, le téléphone ne se met pas en veille. Si le navigateur ne la gère pas, l'appli marche quand même.
- **Vibration** à la fin du chrono (Android ; l'iPhone ne vibre pas depuis une page web).
- **Sauvegarde automatique** de la partie dans le téléphone (`localStorage`) : si on ferme l'appli par erreur, on reprend où on en était.

## Mettre à jour l'appli

Après une modification, change le numéro de version en haut de `sw.js` (`wows-v1` → `wows-v2`), puis fais un nouveau `git push`. Sans ça, les téléphones garderont l'ancienne version en cache.
