# Brief de développement — Site web Le Boudoir Beauté

Document de cadrage à donner tel quel à Claude Code pour développer le site. Toutes les décisions ci-dessous ont été validées avec le client (Léopold, pour le compte de Claire, gérante du Boudoir Beauté) le 11/08/2026.

## 1. Le projet

Institut de beauté et de bien-être individuel, tenu par Claire (esthéticienne diplômée BTS + CQP Spa Praticien, 10 ans d'expérience), reçoit uniquement sur rendez-vous à son domicile à Vendeuvre-sur-Barse (Aube). Le site doit donner envie de prendre rendez-vous, poser un cadre clair (règlement intérieur) et afficher les tarifs de façon lisible.

**Objectif du site** : vitrine professionnelle, pas de réservation en ligne, pas d'e-commerce. Conversion attendue = appel téléphonique.

## 2. Stack technique

- **Site statique HTML/CSS/JS**, sans framework, sans base de données.
- Développement 100% local pour l'instant.
- Une fois validé : push sur un repo GitHub, puis hébergement statique (Render, ou alternative gratuite type Netlify/GitHub Pages/Vercel — à décider selon les besoins de Claire au moment de l'hébergement, budget non tranché).
- Nom de domaine : pas encore réservé, à prévoir plus tard.
- **Responsive obligatoire** (mobile-first : la majorité des clientes consulteront depuis leur téléphone). Nav du haut simple et accessible à toutes les tailles d'écran (menu burger en mobile).
- Site en français.
- Prévoir un **favicon** à partir du logo existant.

## 3. Sitemap

1. **Accueil** (`/index.html`)
2. **Massages** (`/prestations/massages.html`)
3. **Soins Visage** (`/prestations/soins-visage.html`)
4. **Onglerie** (`/prestations/onglerie.html`)
5. **Épilations** (`/prestations/epilations.html`)
6. **Maquillage** (`/prestations/maquillage.html`)
7. **Bronzage** (`/prestations/bronzage.html`)
8. **Contact** (`/contact.html`)
9. **Mentions légales** (`/mentions-legales.html`) — pied de page uniquement, pas dans la nav principale
10. **Politique de confidentialité / cookies** (`/confidentialite.html`) — pied de page uniquement

Navigation principale (header) : Accueil · Massages · Soins Visage · Onglerie · Épilations · Maquillage · Bronzage · Contact. Si 6 prestations + Accueil + Contact est trop chargé en desktop, regrouper les prestations sous un menu déroulant "Prestations" avec les 6 sous-pages.

Pas de page "Qui suis-je" ni "Marques partenaires" séparée : ce contenu vit en sections courtes sur l'Accueil (voir §5).

## 4. Direction artistique — validée : "Intemporelle"

Reprend fidèlement la charte existante (logo, bons cadeaux et grilles tarifs déjà imprimés), avec un léger rafraîchissement web.

**Couleurs**
- Bleu marine (couleur principale, texte/titres/boutons) : `#1F3B57`
- Doré/beige (accent) : `#C9A66B`
- Fond crème/blanc cassé : `#F7F4EC`
- Blanc pur pour les cartes/sections de contraste : `#FFFFFF`

**Typographie**
- Titres et logo : serif élégante, type **Cormorant Garamond** (Google Fonts) — proche de la police du logo existant.
- Texte courant, nav, boutons : sans-serif fine, type **Jost** (Google Fonts) — cohérent avec la police utilisée sur les grilles tarifs déjà imprimées.

**Style général** : beaucoup de blanc/espace, bordures fines, pas d'effets criards (pas de gradients agressifs, pas d'ombres lourdes), ligne graphique épurée qui fait écho au logo (silhouette au trait fin). Boutons d'action en bleu marine plein, texte crème.

**Logo** : réutiliser le fichier existant tel quel (`Charte/3D502EFE-01BD-4BEA-9B56-A7EC11944A21.jpeg`), pas de refonte.

## 5. Page Accueil — contenu détaillé

Sections dans l'ordre :

1. **Hero** : logo + accroche + photo(s) du lieu (dossier `Charte/`, ex. la cabine de massage avec fresque plage) + bouton CTA "Prendre rendez-vous" → `tel:0661693375`.
2. **Bio courte de Claire** (issue de `Qui-je-sui.txt`), condensée pour le web :
   > "Je m'appelle Claire, esthéticienne diplômée (BTS esthétique, CQP Spa Praticien) et passionnée de bien-être depuis 10 ans. J'ai créé Le Boudoir Beauté pour offrir des soins personnalisés, dans un cadre chaleureux, sur rendez-vous, à Vendeuvre-sur-Barse. Spécialisée en massages et soins du visage, je propose aussi épilation, onglerie, maquillage et bronzage progressif."
3. **Règlement du Boudoir Beauté** (texte intégral extrait de la photo `Charte/Règlement intérieur.jpeg`, à retranscrire tel quel, avec les mêmes pictos si possible : 🅿️ 🕐 👠 ⏰ 📅 🚫 🚻) :
   - Vous pouvez stationner devant, dans la rue.
   - Veuillez respecter l'heure de votre rendez-vous, si vous êtes en avance je vous invite à patienter et à toquer à l'heure de votre rendez-vous.
   - Merci de vous déchausser à l'entrée afin de garder les lieux propres.
   - Tout retard de plus de 10min entraîne l'annulation de votre rendez-vous. Ce n'est pas à la cliente suivante d'en pâtir pour votre retard.
   - Si vous annulez votre rendez-vous moins de 48h avant ou si vous ne vous présentez pas, la prestation vous sera facturée la fois suivante (sauf justificatif médical). Pensez que vous prenez la place de quelqu'un qui serait venu.
   - La pièce n'étant pas très grande je ne peux recevoir qu'une personne à la fois, merci de venir sans accompagnateurs ni enfants.
   - Les toilettes ne sont pas ouvertes au public, merci de prendre vos dispositions en amont.
   - *Merci de votre compréhension*
4. **Marques partenaires** (issu de `Coordonnée.txt`), en 2 blocs avec logos (dossier `Marque-Partenaire/`) :
   - **Minimaliste** : "Des produits pensés pour faire plus avec moins, soins 100% naturels et bio. Formulés avec un minimum d'ingrédients mais un maximum d'actifs. Nos produits sont bio en moyenne à 80% (le seuil légal français est de 20%)."
   - **Sun Institute** : "Numéro 1 du bronzage professionnel depuis 2004. Solutions de bronzage sans UV, naturelles et uniformes. Soin Monoï visage et corps formulé à 94,49% d'ingrédients naturels, sans parabènes, sans OGM, végan, fabriqué en France."
5. **Avis Google** : widget **Trustindex** (plan gratuit), en bas de page. *Action requise côté Claire* : créer/connecter son compte Trustindex à la fiche Google Business "Le Boudoir Beauté" (43 Rue de la Côte d'Or, 10140 Vendeuvre-sur-Barse) — je n'ai pas trouvé de lien Google Maps direct vers la fiche via recherche web, il faudra le récupérer directement depuis le compte Google Business de Claire ou en recherchant "Le Boudoir Beauté Vendeuvre-sur-Barse" sur Google Maps.
6. **Encart Bons cadeaux + Contact**, texte exact à utiliser :
   > "Si vous souhaitez offrir un moment de bien-être, contactez-moi. Toutes les prestations sont disponibles en bons cadeaux."
   Ajouter en dessous les conditions (issues de `Charte/` photo "ATTENTION") :
   > "Les bons cadeaux sont valables 6 mois à compter de la date d'achat, au-delà de celle-ci je serai contrainte de refuser (sauf justificatif médical). Il est donc important que vous preniez rendez-vous au plus tôt quand vous recevez votre bon cadeau. Si vous ne pouvez/voulez pas l'effectuer vous pouvez en faire bénéficier quelqu'un d'autre (sur présentation du bon en question). Il est échangeable contre une prestation de même valeur ou peut être utilisé en plusieurs fois."
   Bouton CTA téléphone + lien vers la page Contact. **Pas de vente en ligne / paiement** — uniquement informatif, la cliente doit appeler.

## 6. Pages Prestations — contenu détaillé

Chaque page : en-tête (hero photo avec effet de fondu si la catégorie a une photo forte — voir §6bis, sinon en-tête simple sans photo), courte intro si pertinente, tableau des tarifs (fidèle aux visuels fournis), galerie photo (dossier correspondant), bouton "Prendre rendez-vous" en bas de page (`tel:0661693375`).

## 6bis. Effet hero image → fondu au scroll

Sur les pages prestations qui disposent d'une photo forte, ajouter en haut de page une image plein cadre qui se **dissout progressivement pendant le scroll** vers le fond crème de la page, avant de laisser place au contenu (tarifs, galerie).

**Règle de pertinence — ne pas systématiser** :
- **Accueil et Contact : jamais cet effet.** Ces deux pages gardent une mise en page standard.
- **Pages prestations : seulement si la catégorie a une vraie bonne photo.** Aujourd'hui, ça concerne **Massages, Onglerie et Maquillage** (dossiers photo fournis). Pour **Soins Visage, Bronzage et Épilations**, ne pas faire l'effet et ne pas mettre de placeholder générique — en-tête texte simple en attendant que Claire fournisse des photos. Si elle en fournit plus tard pour une de ces catégories, ajouter l'effet à ce moment-là sur cette page uniquement.

**Implémentation** : fondu dynamique réel au scroll (pas un simple dégradé CSS statique), via JavaScript léger (`IntersectionObserver` ou opacité liée à `scroll`), sans librairie externe. Tester particulièrement sur mobile pour que ça reste fluide et n'entrave pas la lecture des tarifs juste en dessous.

### Massages (`Massage/` — 5 photos disponibles)
| Prestation | Durée | Prix |
|---|---|---|
| Massage à la Bougie — Relaxant | 50' | 70€ |
| Massage Californien — Relaxant | 50' | 60€ |
| Massage Abhyanga — Apaisant, anti-stress | 50' | 60€ |
| Massage Balinais — Relaxant profond | 50' | 60€ |
| Massage Lomi-Lomi — Musculaire | 50' | 60€ |
| Massage Drainant — Drainant doux | 50' | 60€ |
| Massage KOBIDO — Massage du visage | 50' | 60€ |
| Massage Détente personnalisé — Relaxant | 25' | 35€ |
| Initiation Massage bébé — Apprendre aux parents à masser leur bébé | 25' | 35€ |
| Massage crânien — Relaxation du cuir chevelu | 20' | 25€ |
| Relaxation plantaire — Massage relaxant des pieds | 20' | 25€ |

### Soins Visage (pas de dossier photo dédié — voir §8)
| Prestation | Durée | Prix |
|---|---|---|
| Soin visage complet (avec massage du dos) | 80' | 70€ |
| Soin visage | 60' | 60€ |
| Nettoyage express | 30' | 35€ |

### Onglerie (`Ongles/` — 7 photos disponibles) — précision "mains ou pieds"
| Prestation | Prix |
|---|---|
| Dépose + Manucure express + pose de vernis semi-permanent | 30€ |
| Manucure express + pose de vernis semi-permanent | 25€ |
| Dépose + Manucure express | 15€ |
| Soin complet (Manucure, gommage et massage) | 35€ |

### Épilations (`épillation/` — 1 photo disponible, voir §8)
| Prestation | Prix |
|---|---|
| Sourcils, Lèvres ou Menton | 8€ |
| Visage | 14€ |
| Aisselles | 12€ |
| 1/2 Jambes ou Cuisses ou Bras | 18€ |
| Jambes complètes | 28€ |
| Maillot simple | 12€ |
| Maillot échancré | 20€ |

### Maquillage (`Maquillage/` — 2 photos disponibles)
| Prestation | Prix |
|---|---|
| Maquillage | 30€ |
| Forfait Mariée (essai + jour J) | 59€ |

### Bronzage (pas de dossier photo dédié — voir §8)
Sous-titre : "Soin bronzant et hydratant, naturel et sans danger"

**Passeport Visage + Décolleté**
| Formule | Prix |
|---|---|
| 1 séance | 15€ |
| 8 séances | 50€ |
| 22 séances | 130€ |

**Passeport Corps + Visage**
| Formule | Prix |
|---|---|
| 1 séance | 45€ |
| 5 séances | 120€ |
| 10 séances | 210€ |

## 7. Page Contact — contenu détaillé

Issu de `Coordonnée.txt` :

- **Adresse** : Le Boudoir Beauté, 43 rue de la Côte d'Or, 10140 Vendeuvre-sur-Barse
- **Uniquement sur rendez-vous**
- **Téléphone** : 06 61 69 33 75 (lien `tel:`)
- **Email** : leboudoirbeaute10@gmail.com (lien `mailto:`)
- **Horaires** : du lundi au samedi, 9h30–19h30
- **Instagram** : @leboudoirbeaute10
- **Facebook** : Le Boudoir Beauté | Vendeuvre
- **Carte Google Maps** intégrée (iframe), centrée sur l'adresse ci-dessus
- Rappel court de l'encart bons cadeaux avec CTA téléphone

Pas de formulaire de prise de rendez-vous, pas de lien vers un outil de réservation en ligne (choix explicite de Claire : elle gère son planning elle-même, uniquement par téléphone).

## 8. Assets images — inventaire et mapping

Toutes les photos sont dans `Image-basse/`, triées par dossier :

| Dossier source | Nombre de photos | Utilisation |
|---|---|---|
| `Charte/` | 5 (dont le logo et le règlement) | Photos d'ambiance du lieu → hero Accueil |
| `Massage/` | 8 (dont doublons avec Charte) | Galerie page Massages |
| `Ongles/` | 7 | Galerie page Onglerie |
| `Maquillage/` | 2 | Galerie page Maquillage |
| `Marque-Partenaire/` | 9 | Section marques partenaires (Accueil) |
| `épillation/` | 1 (`Sourcil-homme.jpeg`) | Galerie page Épilations (peu fourni) |

**Manque identifié** : aucun dossier photo dédié pour **Soins Visage** et **Bronzage**. En attendant que Claire fournisse des photos, utiliser en placeholder 1-2 photos du dossier `Charte/` (ambiance générale de l'institut) sur ces deux pages, à remplacer dès que possible.

## 9. Avis Google

- Solution retenue : **Trustindex**, plan gratuit.
- Widget intégré en bas de page d'accueil.
- Prérequis côté Claire : avoir/réclamer sa fiche Google Business Profile, puis connecter Trustindex dessus (se fait depuis le dashboard Trustindex, pas besoin d'un ID technique en amont).
- Si le volume d'avis/vues dépasse le plan gratuit à l'avenir, prévoir un passage payant (quelques euros/mois) — à surveiller après mise en ligne.

## 10. Prise de rendez-vous

- **Téléphone uniquement** : gros bouton/CTA `tel:0661693375` répété sur chaque page (header ou section finale).
- Pas d'accès à un agenda en ligne, pas de widget de réservation (Planity/Fresha existent en référencement externe mais Claire ne veut pas donner accès à son planning via le site).

## 11. Pages légales (obligatoires en France)

À créer dès cette première version, liées en pied de page :

- **Mentions légales** : identité de l'exploitante (à faire préciser par Claire : statut juridique — auto-entreprise probable —, SIRET, adresse, hébergeur du site une fois choisi).
- **Politique de confidentialité / cookies** : mentionner les cookies tiers posés par Google Maps (carte Contact) et Trustindex (widget avis), avec bandeau de consentement cookies (bannière simple, style cohérent avec la charte, blocage des scripts tiers tant que non accepté).

*Information à obtenir de Claire avant rédaction finale des mentions légales* : statut juridique exact et numéro SIRET.

## 12. SEO / bonnes pratiques (à la charge de Claude Code, pas de validation nécessaire)

- Balises meta title/description par page (ex. "Massages bien-être à Vendeuvre-sur-Barse | Le Boudoir Beauté").
- Attributs alt descriptifs sur toutes les images.
- Données structurées `LocalBusiness` (schema.org) avec adresse, horaires, téléphone.
- Site rapide (images optimisées/compressées, pas de librairies lourdes inutiles vu le choix HTML/CSS/JS statique).

## 13. Points encore ouverts / à trancher avec Claire avant mise en ligne

- Statut juridique + SIRET (mentions légales).
- Photos manquantes pour Soins Visage et Bronzage.
- Compte Trustindex à créer et connecter à la fiche Google Business.
- Nom de domaine à choisir/réserver.
- Choix final de l'hébergeur (Render vs alternative gratuite) une fois le site prêt à être mis en ligne.
