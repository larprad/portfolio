const apps = {
  tetris: {
    title: 'Tetris',
    description: `<p> Le célèbre jeu Tétris codé en pur Javascript, sans librairies ni frameworks tierces. Jouable sur smartphones et PC, 3 modes de jeu sont disponibles : </p> <ul> <li><strong>Enduro</strong> : pas de limite de temps, il s’agit de faire le meilleur score alors que la vitesse augmente toutes les 10 lignes. Adapté au débutants. <li><strong>Rush</strong> : 60 secondes pour effectuer un maximum de points. La vitesse de départ est assez élevée et augmente toutes les 5 lignes. Pour joueur expérimenté. <li><strong>Sprint</strong> : Contre la montre où il faut faire 20 lignes le plus rapidement possible. La vitesse de départ est assez élevée et augmente toutes les 5 lignes. Pour joueur expérimenté. </li> </ul>`,
    smallDescription:
      'Le célébre jeu vidéo Tetris codé en pur javascript, sans usage de frameworks ni librairies tierces.',
    link: [
      ['Github', 'https://github.com/larprad/tetris'],
      ['Lien direct', 'https://larprad.github.io/tetris/'],
    ],
    techno: ['js', 'css', 'html'],
    video: './assets/videos/tetris.mp4',
    image: [
      './assets/screenshots/tetris_1.png',
      './assets/screenshots/tetris_2.png',
      './assets/screenshots/tetris_3.png',
    ],
  },

  ohanami: {
    title: 'Ohanami',
    description: `<p>Dans Ohanami le joueur affronte l’ordinateur dans un jeu de carte inspiré des jardins japonais. </p> <p> Le joueur a 3 saisons pour concevoir 3 jardins devant lui en combinant harmonieusement eau, pierre, végétation et, bien sûr, Sakura (cerisier en fleur). </p> <p> Chaque jardin est une rangée ascendante de cartes où une nouvelle carte ne peut être placée qu'en dessous ou au dessus. </p> <p> Le joueur place 2 cartes de sa main dans ses jardins et passe le reste de sa main à l’ordinateur jusqu'à ce que les toutes les cartes soient dans les jardins. </p><p>
    Le jeu propose 3 modes de jeu et 3 niveaux de difficulté pour l'ordinateur. Si vous voulez tenter votre chance, vous devez d'abord lire attentivement les instructions du jeu!</p>`,
    smallDescription:
      "Un des premiers projets sur lequel j'ai travaillé. Jouez contre l'ordinateur dans ce concours de jardinage.",
    link: [
      ['Github', 'https://github.com/larprad/ohanami'],
      ['Lien direct', 'https://larprad.github.io/ohanami/'],
    ],
    techno: ['js', 'css', 'html'],
    video: './assets/videos/ohanami.mp4',
    image: [
      './assets/screenshots/ohanami_1.png',
      './assets/screenshots/ohanami_2.png',
      './assets/screenshots/ohanami_3.png',
      './assets/screenshots/ohanami_4.png',
    ],
  },

  oneWordPlease: {
    title: 'One Word Please',
    description: `<p>L’utilisateur tape un mot de son choix (en anglais), en fonction des différentes options cochées sur le panel de gauche il obtiendra en résultat des mots qui : riment, ont une sonorité similaire, ont le même signification, sont usuellement utilisés pour décrire le mot choisi ou en sont l’opposé.<p> Il est possible de cumuler plusieurs de ces options, ce qui mécaniquement fera diminuer le nombre de résultats. </p> <p> L’utilisateur peut ensuite sauvegarder des mots affichés en résultats. Ils seront conservés lors des prochaines recherches. </p>`,
    smallDescription:
      "Un outil d'aide à l'écriture réalisé en React JS. il permet de trouver et sauvegarder rapidement des synonymes, homonymes, antonymes d'un ou plusieurs mots.",
    link: [
      ['Github', 'https://github.com/larprad/one_word_please'],
      ['Lien direct', 'https://larprad.github.io/one_word_please/'],
    ],
    techno: ['react', 'js', 'css', 'html'],
    video: './assets/videos/oneWordPlease.mp4',
    image: ['./assets/screenshots/oneword_1.png', './assets/screenshots/oneword_2.png'],
  },

  square: {
    title: 'Square!',
    description: `<p>
Une grille de carrés générée procéduralement est présentée au joueur qui doit,
pour gagner, faire en sorte qu’il ne reste plus qu’un seul carré rose ou vert,
ou éventuellement qu’il ne reste qu’une seule couleur sur la grille (ce qui est
plus difficile !).
</p>
<p>
En cliquant sur chacuns des carrés, le joueur va faire changer la couleur de ce
carré ainsi que celle de certains blocs adjacents, ceci en fonction du symbole
présent sur le carré cliqué :
</p>
<ul>
<li>en cliquant sur un symbole <strong>O</strong> les carrés au dessus, en dessous, à gauche
et à droite permuteront de couleur
<li>en cliquant sur le symbole <strong>X</strong> les carrès situés en diagonale permuteront
de couleur.
</li>
</ul>
<p>
Une fois le bloc cliqué, en plus de sa couleur, son symbole permutera pour
devenir <strong>X</strong> ou <strong>O</strong>.
</p>
<p>
2 modes de jeu sont disponibles :
</p>
<ul>
<li><strong>Freemode</strong>, où il est possible de dimensionner la grille à sa guise.
<li><strong>Challenge</strong>, où le joueur devra choisir entre 4 difficultés. Le taille de la
grille est fixée en fonction de la difficulté ainsi que le nombre de clics
maximum pour arriver à la victoire.`,
    smallDescription: "Jeu d'énigmes générées procéduralement.",
    link: [
      ['Github', 'https://github.com/larprad/squaresquaresquare'],
      ['Lien direct', 'https://larprad.github.io/squaresquaresquare/'],
    ],
    techno: ['js', 'css', 'html'],
    video: './assets/videos/square.mp4',
    image: ['./assets/screenshots/square_1.png', './assets/screenshots/square_2.png'],
  },

  monster: {
    title: 'Monsters',
    description: `<p>
    Une application CRUD (Create Read Delete Update) basique dans laquelle des
    entrées peuvent être créées et mise à jour. Chaque entrée dispose d’un nom, une
    description et une image.
    </p>
    <p>
    Un filtre est disponible afin de pouvoir agir sur le nombre d’entrées affichées
    ainsi que d’une fonction de triage par date de création.
    </p>
    <p>
    Le front-end a été réalisé avec React JS, le routage des pages avec React Router
    v6 le back-end avec Node JS et Express JS. La base de donnée est sous le modèle
    SQlite3.
    </p>`,
    smallDescription:
      'Base de données persistante de monstres mythiques. Créez, éditez, supprimez vos propres créations.',
    link: [
      ['Github', 'https://github.com/larprad/monsters'],
      ['Lien direct', 'https://mythicalmonsters.herokuapp.com/'],
    ],
    techno: ['react', 'node', 'sql', 'js', 'css', 'html'],
    video: './assets/videos/monsters.mp4',
    image: [
      './assets/screenshots/monsters_1.png',
      './assets/screenshots/monsters_2.png',
      './assets/screenshots/monsters_3.png',
    ],
  },

  spotijam: {
    title: 'Spotijam',
    description: `<p>Connectez vous à Spotify puis gérez vos playlists. Il est possible de rechercher des morceaux de musique dans la base de données de Spotify pour ensuite les ajouter à une playlist existante.</p>`,
    smallDescription: 'Créez et éditez vos playlists Spotify.',
    link: [
      ['Github', 'https://github.com/larprad/spotijam'],
      ['Lien direct', 'https://larprad.github.io/spotijam/'],
    ],
    techno: ['react', 'js', 'css', 'html'],
    video: './assets/videos/spotijam.mp4',
    image: ['./assets/screenshots/spotijam_1.png', './assets/screenshots/spotijam_2.png'],
  },
};

const technoSource = {
  js: ['JAVASCRIPT', './assets/icons/javascript.svg'],
  css: ['CSS3', './assets/icons/css.svg'],
  html: ['HTML5', './assets/icons/html.svg'],
  react: ['REACT', './assets/icons/react-js.svg'],
  node: ['NODE JS', './assets/icons/node-js.svg'],
  sql: ['SQL', './assets/icons/sql-server.svg'],
};
