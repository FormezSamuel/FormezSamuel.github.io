const chat = {
  1: {
    text: `
    Elsa et sa promo sortent d'une journée de cours intense. Les examens de fin d'année approchent et les jeunes créateurs travaillent sur leur projet final durant de longues heures d'atelier.
    <br /><br />
    Myriam, la meilleure amie d'Elsa, rassemble tout le monde devant l'école. "QUI EST CHAUD POUR UNE BIÈRE EN TERRASSE ?" 🍻😎
    `,
    options: [{
      text: 'Aller boire un coup',
      data: 'aller-boire-un-coup',
      thread: {
        image: 'aller boire un coup.png'
      },
      next: 2
    },
    {
      text: 'Rentrer chez elle travailler',
      data: 'rentrer-chez-elle-travailler',
      thread: {
        image: 'rentrer travailler.png'
      },
      next: 20
    }
  ]
},
2: {
  text: `
  Elsa se fit désirer quelques instants, mais avec ce soleil, l'image d'une bonne bière à la terrasse d'un bar était inévitable !
  <br /><br />
  Ils s'installèrent à la terrasse d'un pub du centre-ville. C'est vrai que ça faisait du bien. Les examens d'années approchant toute la classe avait besoin de souffler. Une fois servis, ils trinquèrent tous à la santé, à leur réussite, et à encore une demi-douzaine d'autre trucs.
  <br /><br />
  Alors que la soirée battait son plein, seul une partie du groupe était restée encore au pub. Elsa, Myriam et deux de leurs amis avaient commandé de la nourriture et s'étaient installés dans un coin du bar.
  <br /><br />
  Le pub se remplissait au fur et à mesure que les heures passaient. Après une autre tournée de bière, Myriam lança l'idée d'aller danser...
  <br /><br />
  "Aller qui est chaud pour danser là !! Faites pas vos nouilles allez !!!"
  <br /><br />
  Elsa jouait avec son verre de bière, elle considéra son amie.
  `,
  options: [{
    text: 'Aller danser avec les autres',
    data: 'Aller danser avec les autres',
    thread: {
      image: 'Aller danser avec les autres.png'
    },
    next: 3
  },
  {
    text: 'Rester au bar et les regarder de loin',
    data: 'Rester au bar et les regarder de loin',
    thread: {
      image: 'Rester au bar et les regarder de loin.png'
    },
    next: 6
  }
]
},
3: {
  text: `
  Elsa hésita un moment, mais c'est vrai que les musiques étaient sympas et elle avait vraiment envie de danser. Elle suivit les autres vers un coin de la piste et commença à se balancer.
  <br /><br />
  Rock, électro, ballade irlandaise et gigue traditionnelle, à la fin Elsa ne sentait plus ses pieds. La petite troupe quitta le pub sur les coups de 2 h du matin, ils étaient encore un peu sous, mais surtout très fatigués
  <br /><br />
  "J'en connais qui ne vont pas assumer demaiiiiin", lança Myriam dans un demi-éclat de rire.
  <br /><br />
  Ils se séparèrent à l'entrée du métro. Elsa pris la ligne 1 pendant 10 min puis marcha 5 min avant d'arriver à son appartement. Elle lâcha son sac et son manteau sur son canapé et tomba comme une masse sur son lit ... Le réveil allait être dur ...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
4: {
  text: `
  Le lendemain matin, Elsa avait du mal à émerger. Elle s'y reprit à 5 fois pour faire sa couture proprement. Mélange de souvenirs de ce qui s'était passé la veille et de manque de sommeil...
  <br /><br />
  Myriam remarqua que son amie peinait à garder sa concentration. Elle allait s'installer à côté pour mener son enquête, mais fut stoppée nette par l'arrivée soudaine de leur professeur.
  <br /><br />
  Il regardait Elsa coudre la pièce de broderie sur le col de sa robe, puis dit :
  <br /><br />
  "Vous êtes encore bien en retard par rapport à hier, votre jury d'examen est dans 2 semaines pour rappel... Si vous ne vous impliquez pas plus que ça chez vous le soir ... L'obtention de votre diplôme est mise en danger ..."
  <br /><br />
  Il renifla et s'en alla inspecter le travail d'un autre élève.
  <br /><br />
  Elsa pesta dans son coin et reprit le fil de son travail.
  `,
  options: [{
    text: 'Suivant',
    data: 'suivant',
    thread: {
      image: 'la pause de 10 h - par defaut.png'
    },
    next: 5
  }, ]
},
5: {
  text: `
  À la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Elsa regardait son fil d'actualité Instagram, à la recherche de l'illumination sûrement. Myriam vint s'asseoir à côté.
  <br /><br />
  "Tu veux que je passe chez toi ce soir ? Te filer un coup de main pour ta robe ?"
  <br /><br />
  Elsa regarda son ami :"Non ça va t'inquiètes, c'est gentil..."
  <br /><br />
  Myriam réfléchit un instant : "Alors si je venais ce soir et qu'on se faisait une soirée film ?"
  <br /><br />
  Elsa considéra Myriam et ajouta : "bon... Deal... Mais tu ramènes les chips !"
  <br /><br />
  Les deux filles se levèrent à la sonnerie et se dirigèrent vers la salle de cours.
  <br /><br />
  Fin
  `,
},
6: {
  text: `
  Elsa se leva et se dirigea vers Myriam : "Je passe mon tour pour ce soir, mais je vous garde à l'œil ! ", puis elle alla s'asseoir près du bar.
  <br /><br />
  Elle regarda ses amis danser pendant plusieurs dizaines de minutes et recommanda un verre.
  <br /><br />
  "Ce siège est libre ?"
  <br /><br />
  Elsa se retourna "oh oui .. Oui, mes amis sont en train de danser donc je suppose..."
  <br /><br />
  Un jeune homme d'une vingtaine d'années pris place à côté d'Elsa. Il commanda un verre et fit mine de trinquer avec Elsa.
  <br /><br />
  "Tu ne veux pas aller danser avec vos amis ? "
  <br /><br />
  Elsa se tourna vers l'inconnu :"oh,nan, je suis bien ici ", elle sourit timidement, sûrement à cause des effets de l'alcool.
  <br /><br />
  Le mystérieux inconnu bu son verre,: "Je m'appelle Simon, je peux te payer un verre ?"
  <br /><br />
  Elsa regarda le fond de bière dans son verre et hésita.
  <br /><br />
  `,
  options: [{
    text: 'Accepter le verre de Simon',
    data: 'Accepter le verre de Simon',
    thread: {
      image: 'Accepter le verre de Simon.png'
    },
    next: 7
  },
  {
    text: 'Refuser le verre de Simon',
    data: 'Refuser le verre de Simon',
    thread: {
      image: 'Refuser le verre de Simon.png'
    },
    next: 13
  }
]
},
7: {
  text: `
  Troublée par le sourire de Simon, et plus tout à fait au clair avec ses idées à cause des nombreux verres qu'elle avait déjà pris, elle accepta la proposition.
  <br /><br />
  "Allez santé !"
  <br /><br />
  ...
  <br /><br />
  "Et du coup, tu fais quoi dans la vie ?"
  - "Moi ? Nah euh ... À vrai dire pour l'instant, je suis étudiante..."
  - "Alors aux études ! Santé !"
  <br /><br />
  ...
  <br /><br />
  -"Je ne dis pas ça comme ça ... Mais je te trouve hyper mignonne."
  - "C'est gentil... ", dit elle en rougissant
  - "Ca te dit qu'on aille passer la soirée dans un endroit plus cozy ? Histoire d'être un peu plus relax ?"
  <br /><br />
  `,
  options: [{
    text: 'Accepter de suivre Simon',
    data: 'Accepter de suivre Simon',
    thread: {
      image: 'Accepter de suivre Simon.png'
    },
    next: 9
  },
  {
    text: 'Refuser de suivre Simon',
    data: 'Refuser de suivre Simon',
    thread: {
      image: 'Refuser de suivre Simon.png'
    },
    next: 8
  }
]
},
8: {
  text: `
  Elsa hésita :
  "J'ai déjà beaucoup bu, et mes amis sont encore là ... ils vont s'inquiéter"
  <br /><br />
  Simon se leva et s'approcha d'Elsa,
  <br /><br />
  "Tu peux les prévenir si tu veux..."
  <br /><br />
  Il s'avança encore, se montrant de plus en plus oppressant.
  <br /><br />
  Elsa se sentie mal à l'aise, en danger, elle prit ses affaires d'un coup sec et se rua en courant vers la sortie, elle courut aussi vite qu'elle pouvait, regardant par dessus son épaule si on la suivait.
  <br /><br />
  Elle prit la ligne 1du métro pendant 10 min.
  <br /><br />
  Elle envoya un sms à Myriam pour la prévenir :
  <br /><br />
  "je suis rentrée je ne me sentais pas bien, à demain bisous 😘"
  <br /><br />
  Elle marcha ensuite 5 min avant d'arriver à son appartement. Elle lâcha son sac et son manteau sur son canapé et tomba comme une masse sur son lit ... Le réveil allait être dur ...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
9: {
  text: `
  - "si tu veux oui, laisse-moi juste prévenir mes amis et je te suis."
  <br /><br />
  Elsa se dirigea vers la piste de danse et murmura à l'oreille de Myriam. Cette dernière la serra dans ses bras et retourna danser.
  <br /><br />
  Simon paya la dernière tournée et rejoignit Elsa dehors.
  <br /><br />
  Ils se dirigèrent vers l'appartement du jeune homme à 10 min de marche du bar.
  <br /><br />
  À peine arrivé devant la porte de l'appartement, Simon saisit Elsa par la taille et l'embrassa. Surprise, la jeune femme sursauta, mais elle accepta de suivre le jeune homme à l'intérieur de son appartement...
  <br /><br />
  `,
  options: [{
    text: 'Passer la nuit avec Simon',
    data: 'Passer la nuit avec Simon',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 10
  }, ]
},
10: {
  text: `
  Le lendemain matin, Elsa avait du mal à émerger. Elle s'y reprit à 5 fois pour faire sa couture proprement. Mélange de souvenirs de ce qui s'était passé la veille et de manque de sommeil...
  <br /><br />
  Myriam remarqua que son amie peinait à garder sa concentration. Elle allait s'installer à côté pour mener son enquête, mais fut stoppée nette par l'arrivée soudaine de leur professeur.
  <br /><br />
  Il regardait Elsa coudre la pièce de broderie sur le col de sa robe, puis dit :
  <br /><br />
  "Vous êtes encore bien en retard par rapport à hier, votre jury d'examen est dans 2 semaines pour rappel... Si vous ne vous impliquez pas plus que ça chez vous le soir ... L'obtention de votre diplôme est mise en danger ..."
  <br /><br />
  Il renifla et s'en alla inspecter le travail d'un autre élève.
  <br /><br />
  Elsa pesta dans son coin et reprit le fil de son travail.
  `,
  options: [{
    text: 'Suivant',
    data: 'suivant',
    thread: {
      image: 'la pause de 10 h - Simon.png'
    },
    next: 11
  }, ]
},
11: {
  text: `
  À la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Son téléphone se mit à vibrer, elle avait reçu un message sur Snapchat.
  <br /><br />
  C'était un message de Simon, le mec du bar avec qui elle avait passé la nuit.
  <br /><br />
  "C'était vraiment bien la nuit dernière, t'es incroyable ... Je voulais savoir si tu étais dispo ce soir "
  <br /><br />
  Elsa soupira.
  <br /><br />
  "Écoute Simon, hier soir, j'étais bourrée, on s'est bien amusé... Mais j'aimerais qu'on en reste là... Ne m'en veux pas ... Mais c'est peut-être mieux comme ça"
  <br /><br />
  Elle glissa son téléphone dans sa poche de pantalon et se leva.
  <br /><br />
  Elle reçut un message avant de rentrer dans la salle.
  `,
  options: [{
    text: 'Regarder le téléphone',
    data: 'Regarder le téléphone',
    thread: {
      image: 'Simon le connard.png'
    },
    next: 12
  }, ]
},
12: {
  text: `
  "Je ne pensais pas que t'étais ce genre de meuf, mais ok ... Je vais te la faire courte..."
  <br /><br />
  Elle reçut ensuite plusieurs Snap de 5 s avec des photos d'elle nue prises pendant la nuit.
  <br /><br />
  Elsa se crispa sur son téléphone, horrifiée par ce qu'elle voyait...
  <br /><br />
  "Tu te rappelles encore l'adresse de chez moi ? On dit 20 h ? J'ai vraiment hâte de te revoir .
  <br /><br />
  Elsa resta figée, une boule dans la gorge.
  <br /><br />
  "C'était qui ? ", demanda Myriam
  <br /><br />
  Elsa se retourna d'un coup vers sa meilleure amie et la regarda gravement, sans dire un mot...
  <br /><br />
  "Hey ça va, Elsa ?"
  <br /><br />
  "Je..."
  <br /><br />
  Elle éclata en larmes.
  <br /><br />
  fin
  `,
},
13: {
  text: `
  Elsa fit tourner une dernière fois la bière dans le fond de son verre et le posa sur le bar.
  <br /><br />
  "Nan, c'est gentil, mais j'ai déjà trop bu..."
  <br /><br />
  Simon sourit, "il serait criminel de laisser une jolie jeune femme comme toi mourir de soif, permets moi d'insister". Il se leva et s'approcha d'Elsa."
  <br /><br />
  Elsa recula un peu, mal à l'aise. À vrai dire, elle espérait que Myriam l'apercevrait ou que le barman lui viendrait en aide.
  <br /><br />
  Simon s'approcha encore, mais il fut stoppé net en voyant quelqu'un poser sa main sur l'épaule d'Elsa
  <br /><br />
  "Mélissa te voilà ... On te cherchait..."
  <br /><br />
  Simon se figea et regarda le jeune homme qui venait d'arriver.
  <br /><br />
  "Je vous interromps....excusez moi... Adèle te cherchait partout, on ne va pas tarder à rentrer..."
  <br /><br />
  Simon soupira et s'en alla en grognant.
  <br /><br />
  Le jeune homme fraîchement arrivé soupira et s'assit à côté d'Elsa :"excusez-moi pour la mise en scène...J'ai cru comprendre qu'il vous incommodait..."
  <br /><br />
  Elsa considéra le jeune homme un moment puis rougit un peu gênée:"Je vous remercie sincèrement...Je ne savais pas comment j'allais me sortir de là..."
  <br /><br />
  Les deux pouffèrent de rire.
  <br /><br />
  "Je m'appelle Martin", le jeune homme lui tendit la main.
  <br /><br />
  "Elsa", elle lui serra la main.
  <br /><br />
  ...
  <br /><br />
  Elsa et Martin quittèrent le bar un peu avant 1 h du matin.
  <br /><br />
  "Alors comme ça, tu es dessinateur de bd ? Je comprends mieux ton entrée en scène ! ", elle rit
  <br /><br />
  - "Oui, je sais ça a l'air cool comme ça, mais en vrai, c'est très contraignant ...Mais je n'ai pas envie de t'ennuyer avec ça..."
  <br /><br />
  Martin avait proposé de raccompagner Elsa jusqu'en bas de chez elle, pour être sûr qu'il ne lui arrive rien.
  <br /><br />
  Après 20 bonnes minutes de marche, les deux jeunes adultes arrivèrent en bas de l'immeuble où habitait Elsa.
  <br /><br />
  -"Voilà, tu es chez toi, et pas de mecs louches à l'horizon"
  <br /><br />
  -"Merci pour m'avoir escortée, et merci pour la soirée, c'était vraiment cool..."
  <br /><br />
  Elsa sortit ses clefs de sa poche et ouvrit la porte du hall de sa résidence.
  `,
  options: [{
    text: 'Proposer à Martin de monter',
    data: 'Proposer à Martin de monter',
    thread: {
      image: 'Proposer a Martin de monter.png'
    },
    next: 15
  },
  {
    text: 'Saluer Martin et rentrer',
    data: 'Saluer Martin et rentrer',
    thread: {
      image: 'Saluer Martin et rentrer.png'
    },
    next: 14
  }
]
},
14: {
  text: `
  "J'espère vraiment qu'on pourra se refaire ça", lança Elsa amusée
  <br /><br />
  "Moi aussi !, répondit Martin, bonne nuit !"
  <br /><br />
  Elsa referma la porte et regarda Martin s'éloigner.
  <br /><br />
  Elle lâcha son sac et son manteau sur son canapé et tomba comme une masse sur son lit ... Le réveil allait être dur ...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
15: {
  text: `
  Elsa s'arrêta un instant et se tourna vers Martin.
  <br /><br />
  "Tu veux monter 5 min ?"
  `,
  options: [{
    text: 'Passer la nuit avec Martin',
    data: 'Passer la nuit avec Martin',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 16
  }, ]
},
16: {
  text: `
  Le lendemain matin, Elsa avait du mal à émerger. Elle s'y reprit à 5 fois pour faire sa couture proprement. Mélange de souvenirs de ce qui s'était passé la veille et de manque de sommeil...
  <br /><br />
  Myriam remarqua que son amie peinait à garder sa concentration. Elle allait s'installer à côté pour mener son enquête, mais fut stoppée nette par l'arrivée soudaine de leur professeur.
  <br /><br />
  Il regardait Elsa coudre la pièce de broderie sur le col de sa robe, puis dit :
  <br /><br />
  "Vous êtes encore bien en retard par rapport à hier, votre jury d'examen est dans 2 semaines pour rappel... Si vous ne vous impliquez pas plus que ça chez vous le soir ... L'obtention de votre diplôme est mise en danger ..."
  <br /><br />
  Il renifla et s'en alla inspecter le travail d'un autre élève.
  <br /><br />
  Elsa pesta dans son coin et reprit le fil de son travail.
  `,
  options: [{
    text: 'Suivant',
    data: 'Suivant',
    thread: {
      image: 'La pause de 10h -MARTIN.png'
    },
    next: 17
  }, ]
},
17: {
  text: `
  la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Son téléphone se mit à vibrer, elle avait reçu une photo par message.
  <br /><br />
  On y voyait une boucle d'oreille posée sur une table blanche avec une feuille en papier à côté.
  <br /><br />
  "Oyé, par mandat, nous recherchons la jeune femme qui a perdu cette boucle d'oreille. Toutes les jeunes femmes de 23 ans du pays devront essayer cette boucle d'oreille afin que nous en trouvions la propriétaire. Cette dernière se verra invitée au cinéma dimanche après-midi.
  Pour voir le film qui lui conviendra !"
  `,
  options: [{
    text: 'Répondre',
    data: 'Répondre',
    thread: {
      image: 'cendrillon avec martin.png'
    },
    next: 18
  }, ]
},

18: {
  text: `
  Elsa éclata de rire.
  <br /><br />
  Elle tapa frénétiquement sur son téléphone.
  <br /><br />
  "Oh! Je ne sais pas comment faire, mon horrible marâtre ne me laisserait jamais sortir de la maison "
  <br /><br />
  Martin répondit :
  <br /><br />
  "il me faudra vous enlever alors ! Avec mon carrosse citrouille !"
  <br /><br />
  Il lui envoya la photo d'un scooter en mauvais état.
  <br /><br />
  Elsa éclata de rire tandis qu'elle rangeait son téléphone dans sa poche.
  <br /><br />
  "Avec qui tu discutes ? ", demanda Myriam
  <br /><br />
  "Bah...Le prince charmant ! ", répondit Elsa en haussant les épaules
  <br /><br />
  Myriam ne saisissait pas la blague et regarda son amie interloquée.
  <br /><br />
  Elsa éclata de rire
  <br /><br />
  Fin
  `,
},
20: {
  text: `
  "Désolé ma belle, répond Elsa, mais je suis nulle part sur ma robe pour la fin d'année, et là j'ai juste envie de me vautrer sur mon canapé... Mais ce week-end si t'es ok, on peut se faire ça" 😘
  <br /><br />
  Myriam prend Elsa dans ses bras puis les deux amis se séparent. Au même moment, Elsa reçoit un sms :
  <br /><br />
  "Votre commande n°7525 : "La vie de Bakura Hikoge, tome 8", est arrivée à votre boutique Mang'attack, vous pouvez venir la retirer selon votre disponibilité sur présentation de ce message"
  `,
  options: [{
    text: 'Rentrer directement chez elle',
    data: 'Rentrer directement chez elle',
    thread: {
      image: 'Exam final ou cosplay.png'
    },
    next: 21
  },
  {
    text: 'Passer par la boutique de manga',
    data: 'Passer par la boutique de manga',
    thread: {
      image: 'la boutique de manga.png'
    },
    next: 25
  }
]
},
21: {
  text: `
  À peine rentrée chez elle, Elsa jeta son sac sur son canapé et s'effondra sur une chaise dans un long soupir. Elle démarra son ordinateur.
  <br /><br />
  Elle cliqua sur plusieurs dossiers intitulés "inspiration", ouvrit plusieurs photos, puis se dirigea dans sa chambre.
  <br /><br />
  C'était une petite chambre dont le sol était jonché de tissus, de mousseline, de fils... Au milieu, se tenaient 2 mannequins de couture.
  <br /><br />
  Sur l'un, était accrochée une robe dans le style charleston des années 1920. Sur l'autre mannequin, était accrochée une robe en mousseline blanche, avec des pièces d'armures en mousse.
  <br /><br />
  Elsa regardait un des mannequins, puis l'autre, avant de revenir au précédent :
  <br /><br />
  "Je n'ai vraiment pas la foi de continuer à travailler sur ma robe pour les cours ... Mais faut que je cartonne sinon mes parents ne voudront jamais que je poursuive en école de costume...
  <br /><br />
  Mais de l'autre côté ..Le concours de cosplay de la japan expo est dans 1 mois et demi... Et mon costume d'elfe a vraiment besoin de retouches...Pffff"
  `,
  options: [{
    text: 'Travailler sur la robe style charleston (examen final - beaux arts)',
    data: 'Travailler sur la robe style charleston (examen final - beaux arts)',
    thread: {
      image: 'charleston.png'
    },
    next: 22
  },
  {
    text: 'Travailler sur le costume pour le concours de cosplay de la japan en Juillet',
    data: 'Travailler sur le costume pour le concours de cosplay de la japan en Juillet',
    thread: {
      image: 'cosplay.png'
    },
    next: 32
  }
]
},
22: {
  text: `
  Il n'était pas loin de minuit quand Elsa décida qu'il était grand temps d'arrêter de travailler et d'aller se coucher.
  <br /><br />
  Elle installa sa robe au milieu de sa chambre et la regarda pendant quelques instants. Certes, il manquait encore une dizaine d'heures de travail, mais le tout commençait à prendre forme.
  <br /><br />
  Elsa misait beaucoup sur cet examen de fin d'année. Si elle arrivait à obtenir des résultats plus que convaincants, ses parents accepteraient de la laisser aller dans une grande école de couture.
  <br /><br />
  Elle rangea sa création bien soigneusement dans un coin et se glissa directement sous sa couette, complètement exténuée de sa journée.
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'jour 2 - eleve modele.png'
    },
    next: 23
  }
]
},

23: {
  text: `
  C'est d'un pas décidé qu'Elsa se rendit à son école de bonne heure.
  <br /><br />
  Elle s'installa dans le fond à l'atelier, impatiente de montrer l'avancé de son travail à son amie Myriam.
  <br /><br />
  Elle eue juste le temps de faire quelques ajustements avant que les cours ne commencent.
  <br /><br />
  Elsa resta très studieuse, essayant d'avancer un maximum durant la première partie de la matinée. Elle reçu les compliments de son professeur, qui la félicita pour la qualité et l'avancement de son projet.
  <br /><br />
  Elle avait un bon pressentiment pour le jury de fin d'année. Encore un petit effort et l'école supérieure de couture était à sa portée.
  `,
  options: [{
    text: 'suivant',
    data: 'Suivant',
    thread: {
      image: 'pause 10h - eleve modele.png'
    },
    next: 24
  }
]
},
24: {
  text: `
  À la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Elsa s'adossa contre les marches, profitant du rayon de soleil qui tapait dans la cour intérieure. Elle se sentait réellement soulagée par les retours de son professeur. Elle plaçait de réels espoir dans sa robe et comptait mettre le paquet dessus.
  <br /><br />
  Myriam la tira de ses songes alors qu'elle s'asseyait à côté d'elle.
  <br /><br />
  "Ta robe est incroyable ma belle...T'as tellement taffé dessus c'est ouf ..."
  <br /><br />
  Elsa se redressa : "J'ai vraiment envie de montrer à mes parents que je veux faire ça, si je cartonne au jury de fin d'année c'est gagné...Hey ça te dis que ce soir, on souffle un peu ? J'ai envie de chill à la maison ? Tu veux venir ?"
  <br /><br />
  Myriam réfléchit quelques instants : "D'accord, mais j'ai ULTRA faim alors prévois une montagne de bouffe !"
  <br /><br />
  La sonnerie retentit et les deux jeunes femmes se redirigèrent vers leur salle de classe.
  <br /><br />
  Fin
  `,
},
25: {
  text: `
  Trop impatiente de savoir ce qui allait se passer dans l'avant-dernier tome de son manga préféré, Elsa fonça à la boutique de livre pour s'emparer de son dû. Elle ne connaissait que trop bien le magasin...
  <br /><br />
  Elle y avait même travaillé 2 mois l'été dernier pour gagner un peu d'argent. En entrant, Elsa remarqua qu'il y avait beaucoup de monde pour un jeudi après-midi...
  <br /><br />
  Elle serpenta à travers les rayons du magasin, mais au moment d'arriver jusqu'à la caisse, un livre en tête d'une allée retint son attention.
  <br /><br />
  Sur la couverture, on voyait une femme aux cheveux rouges, avec une armure argentée, brandissant fièrement un étendard de guerre azur déchirée.
  <br /><br />
  "Ils ont enfin sorti l'art book !"
  <br /><br />
  Elsa sursauta et le livre manqua de lui tomber des mains. Elle se retourna d'un coup sec.
  <br /><br />
  "Oh pardon, je ne voulais pas te faire peur... Je t'ai vu regarder le livre et je croyais que tu jouais toi aussi au jeu..."
  <br /><br />
  Le garçon la dépassait d'une bonne tête au moins. Elsa scruta avec attention son soudain interlocuteur. Il souriait un peu gêné de l'avoir effrayée, il lui tendit sa main pour la saluer.
  <br /><br />
  "Je m'appelle Dimas."
  <br /><br />
  Elsa pouffa de rire et repris ses esprits en lui serrant la main.
  <br /><br />
  "Elsa...Nan t'inquiètes.. J'étais juste en train de regarder la couverture ...En fait j'aime beaucoup les costumes des personnages et celui de la guerrière sur la couverture est assez incroyable..."
  <br /><br />
  Dimas prit un autre exemplaire du livre et montra une page en particulier à Elsa
  <br /><br />
  "Si tu aimes les armures alors jette un coup d'œil à celle-ci"
  <br /><br />
  ....
  <br /><br />
  Une heure, plus tard, Elsa sortit de la boutique, le livre sous le bras et son manga dans un sachet.
  <br /><br />
  "Si jamais t'as besoin d'autre inspirations n'hésite pas ... Tu sais ou me joindre maintenant !" Lança Dimas en reculant petit à petit
  <br /><br />
  "Ca marche ! Merci beaucoup et à bientôt alors ! ", lança Elsa en levant la main pour saluer Dimas
  <br /><br />
  `,
  options: [{
    text: 'Elsa salue Dimas et rentre chez elle',
    data: 'Elsa salue Dimas et rentre chez elle',
    thread: {
      image: 'Exam final ou cosplay.png'
    },
    next: 26
  }
]
},
26: {
  text: `
  À peine rentrée chez elle, Elsa jeta son sac sur son canapé et s'effondra sur une chaise dans un long soupir. Elle démarra son ordinateur.
  <br /><br />
  Elle cliqua sur plusieurs dossiers intitulés "inspiration", ouvrit plusieurs photos, puis se dirigea dans sa chambre.
  <br /><br />
  C'était une petite chambre dont le sol était jonché de tissus, de mousseline, de fils... Au milieu, se tenaient 2 mannequins de couture.
  <br /><br />
  Sur l'un, était accrochée une robe dans le style charleston des années 1920. Sur l'autre mannequin, était accrochée une robe en mousseline blanche, avec des pièces d'armures en mousse.
  <br /><br />
  Elsa regardait un des mannequins, puis l'autre, avant de revenir au précédent :
  <br /><br />
  "Je n'ai vraiment pas la foi de continuer à travailler sur ma robe pour les cours ... Mais faut que je cartonne sinon mes parents ne voudront jamais que je poursuive en école de costume...
  <br /><br />
  Mais de l'autre côté ..Le concours de cosplay de la japan expo est dans 1 mois et demi... Et mon costume d'elfe a vraiment besoin de retouches...Pffff"
  `,
  options: [{
    text: 'Travailler sur la robe style charleston (examen final - beaux arts)',
    data: 'Travailler sur la robe style charleston (examen final - beaux arts)',
    thread: {
      image: 'charleston.png'
    },
    next: 27
  },
  {
    text: 'Travailler sur le costume pour le concours de cosplay de la japan en Juillet',
    data: 'Travailler sur le costume pour le concours de cosplay de la japan en Juillet',
    thread: {
      image: 'cosplay.png'
    },
    next: 118
  }
]
},
27: {
  text: `
  Il n'était pas loin de minuit quand Elsa décida qu'il était grand temps d'arrêter de travailler et d'aller se coucher.
  <br /><br />
  Elle installa sa robe au milieu de sa chambre et la regarda pendant quelques instants. Certes, il manquait encore une dizaine d'heures de travail, mais le tout commençait à prendre forme.
  <br /><br />
  Elsa misait beaucoup sur cet examen de fin d'année. Si elle arrivait à obtenir des résultats plus que convaincants, ses parents accepteraient de la laisser aller dans une grande école de couture.
  <br /><br />
  Elle rangea sa création bien soigneusement dans un coin et se glissa directement sous sa couette, complètement exténuée de sa journée.
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'jour 2 - eleve modele.png'
    },
    next: 28
  }
]
},
28: {
  text: `
  C'est d'un pas décidé qu'Elsa se rendit à son école de bonne heure.
  <br /><br />
  Elle s'installa dans le fond à l'atelier, impatiente de montrer l'avancé de son travail à son amie Myriam.
  <br /><br />
  Elle eue juste le temps de faire quelques ajustements avant que les cours ne commencent.
  <br /><br />
  Elsa resta très studieuse, essayant d'avancer un maximum durant la première partie de la matinée. Elle reçu les compliments de son professeur, qui la félicita pour la qualité et l'avancement de son projet.
  <br /><br />
  Elle avait un bon pressentiment pour le jury de fin d'année. Encore un petit effort et l'école supérieure de couture était à sa portée.
  `,
  options: [{
    text: 'suivant',
    data: 'Suivant',
    thread: {
      image: 'pause de 10 h dimas.png'
    },
    next: 29
  }
]
},
29: {
  text: `
  À la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Son téléphone se mit à vibrer, elle décrocha directement.
  <br /><br />
  "Salut, c'est Dimas, de la boutique de manga, je croyais sincèrement que tu m'avais donné un faux numéro 😅..."
  <br /><br />
  Elsa pouffa de rire :"Salut 😁, je ne vais pas te mentir ça m'a traversé l'esprit à un moment, mais bon t'as pas le profil du tueur psychopathe...Ou alors tu es très fort pour jouer la comédie ! 😈"
  <br /><br />
  Dimas éclata de rire
  <br /><br />
  "Voilà il y a un bar geek qui vient d'ouvrir à République, et je voulais savoir si tu voulais aller y faire un tour, ils ont des livres, des jeux de société... et askip les serveurs sont tous cosplayés... Ça ne pique pas un peu ta curiosité ? 🤔"
  `,
  options: [{
    text: 'Accepter',
    data: 'Accepter',
    thread: {
      image: 'Bar Avec Dimas.png'
    },
    next: 30
  },
  {
    text: 'Refuser ',
    data: 'Refuser ',
    thread: {
      image: 'Pas de bar avec dimas 2.png'
    },
    next: 31
  }
]
},
30: {
  text: `
  Elsa réfléchit quelques instants.
  <br /><br />
  "Mmh tu es plutôt doué en affaires... OK, mais à une condition !"
  <br /><br />
  Dimas sourit : "Laquelle ?"
  <br /><br />
  "Je paye la 1re tournée ! Oh ! Je dois te laisser les cours reprennent, on se dit à ce soir alors ?"
  <br /><br />
  "A ce soir !"
  <br /><br />
  Elsa rangea son téléphone dans sa poche et bondit sur ses deux pieds.
  <br /><br />
  "C'était qui ? ", demanda Myriam
  <br /><br />
  "Quelqu'un !", répondit Elsa un sourire jusqu'aux oreilles
  <br /><br />
  "Ne me dis pas que .... RACONTE-MOI TOUT !"
  <br /><br />
  Elsa fit mine d'esquiver Myriam et se précipita dans la classe en riant, talonnée par sa meilleure amie.
  <br /><br />
  fin
  `,
},
31: {
  text: `
  Elsa réfléchit quelques instants.
  <br /><br />
  "Je... Je suis vraiment désolée, mais je vais devoir décliner... Je dois travailler sur une robe pour mon jury de fin d'année, je viens de me faire rappeler à l'ordre ce matin, si je ne la finis pas à temps, je n'aurais pas mon diplôme..."
  <br /><br />
  Dimas se racla la gorge :"Oh, pas de problème, je comprends, si t'as besoin n'hésite pas... Bon courage avec ta robe...Passe une bonne journée"
  <br /><br />
  "Merci, toi aussi passe une bonne journée..."
  <br /><br />
  Elsa poussa un long soupir.
  <br /><br />
  "C'était qui ? ", demanda Myriam
  <br /><br />
  "Un mec que j'ai rencontré hier à la boutique de manga, il voulait qu'on aille boire un verre ..Mais j'ai peur que ça aille trop vite...Et puis je me vois mal fréquenter quelqu'un avec les jurys, les exams de fin d'année..."
  <br /><br />
  Myriam posa ses poings sur ses hanches et regarda Elsa d'un air grave : "Mais t'es sérieuse meuf ? Et ne me sort pas le couplet sur le jury de fin d'année... Y a encore 15 jours et t'as super bien avancé... Accorde-toi une soirée ... Il est mignon au moins ?"
  <br /><br />
  Elsa pouffa de rire et se précipita sur son téléphone :
  <br /><br />
  "Allô Dimas, oui déso, c'est moi... Dis-moi....T'es toujours dispo ce soir ?.."
  <br /><br />
  Fin
  `,
},
32: {
  text: `
  La nuit tomba rapidement. Elsa finit par s'éclairer avec sa lampe de bureau. Sur son mannequin de couture, l'armure commençait à prendre forme. Elsa restait concentrée tandis qu'elle finissait de coudre deux pièces de tissus ensemble. Elle s'appuya en arrière contre le dossier de sa chaise mi-satisfaite de son travail, mi-fatiguée. Elle ne put résister à l'envi d'essayer sur-le-champ sa création.
  <br /><br />
  Elle fila dans sa salle de bain l'enfiler puis pris la pose devant son grand miroir. Elle tournait sur elle-même, en regardant comment sa robe voletait.
  <br /><br />
  Elle saisit son téléphone et se prit en photo sous plusieurs angles. Elle alluma ensuite son ordinateur et posta plusieurs des photos sur sa page de cosplay sur Twitter. Elsa avait décidé de créer ce compte histoire de partager ses créations, recevoir des retours d'autres créateurs de costumes...
  <br /><br />
  Elsa se dirigea ensuite vers sa cuisine afin de manger un morceau.
  <br /><br />
  ...
  <br /><br />
  Elsa était dans son canapé, en train de finir de regarder une série sur Netflix quand son téléphone se mit a vibrer.
  <br /><br />
  `,
  options: [{
    text: 'Saisir le téléphone',
    data: 'Saisir le téléphone',
    next: 33
  }
]
},
33: {
  text: `
  Alors que l'écran s'allumait, elle vit une foule de notifications suite à son dernier post. Les mains tremblantes, elle cliqua sur les icônes de l'application et commença à faire défiler les commentaires.
  <br /><br />
  Elle reconnaissait la personne qui avait posté le 1er commentaire, c'était Myriam
  <br /><br />
  "T'es trop belle ma puce, 100%, tu gagnes le concours !"
  <br /><br />
  Elsa continuait de sourire alors qu'elle lisait les commentaires des gens de sa classe.
  <br /><br />
  Elle se raidit en lisant un des commentaires suivant
  <br /><br />
  xx-Kevin-54 : gross vache té moch
  <br /><br />
  Ce n'était pas la première fois qu'Elsa avait affaire à ce genre de commentaires ...Mais c'était à chaque fois difficile
  <br /><br />
  Arnaud-P : ton gro cul sa fai parti du costume aussi ?
  <br /><br />
  Jennifer-Love : @Mystoos hey téma le boule de la meuf...a coté t'es bonne chéri
  <br /><br />
  Dark-Sasuke-93 : si lé elfe c'est des meufs bonne..toi t'es quoi ?
  <br /><br />
  Elsa commençait à avoir la gorge nouée, elle ne comprenait pas pourquoi les gens se montraient aussi odieux. Plus elle défilait les commentaires, plus elle avait l'impression d'avoir une cible sur la tête.
  <br /><br />
  Tous ces pseudos qui se suivaient et toutes ces remarques de plus en plus horrible.
  `,
  options: [{
    text: 'répondre aux insultes',
    data: 'répondre aux insultes',
    thread: {
      image: 'repondre aux insultes.png'
    },
    next: 50
  },
  {
    text: 'bloquer les personnes ',
    data: 'bloquer les personnes ',
    thread: {
      image: 'bloquer les personnes.png'
    },
    next: 51
  },
  {
    text: 'supprimer son compte twitter ',
    data: 'supprimer son compte twitter ',
    thread: {
      image: 'Supprimer son compte twiter.png'
    },
    next: 52
  }
]
},
50: {
  text: `
  Rien n'y faisait, Elsa ne comprenait pas pourquoi elle était victime d'autant de remarques cinglantes. Elle essayait de répondre aux insultes, en demandant le but de ce lynchage, mais tout ce qu'elle récolta, c'est d'autres sarcasmes et plus de railleries encore...
  <br /><br />
  Mais alors qu'elle était en train d'écrire, elle vu quelqu'un répondre à sa place :
  <br /><br />
  Vilina-cosplay : "Tu devrais aller te coucher, il est tard Kevin et tu as école demain, vu ton orthographe ça ne serait pas un mal que tu arrêtes de dormir pendant les cours...
  <br /><br />
  Elsa resta bloquée un moment sur le commentaire qu'elle venait de lire. Vilina était une cosplayeuse professionnelle, une des créatrices qu'Elsa suivait et à qui elle voulait ressembler.
  <br /><br />
  Mais Vilina n'était pas la seule venue défendre Elsa, plusieurs autres grands noms du monde du cosplay étaient à présent intervenus, soit pour répondre aux critiques, soit pour soutenir Elsa et la féliciter pour la qualité de ses créations.
  <br /><br />
  Elsa mit une bonne heure à lire toutes les marques d'affection de sa communauté et des autres cosplayeuses. Même si la soirée avait mal débuté, Elsa pouvait aller se coucher sur une note positive, et c'est avec un large sourire qu'elle se glissa sous sa couette...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
51: {
  text: `
  Elsa prenait ces commentaires personnellement, et ressentit de la colère dirigée directement envers ces pseudos virtuels qui l'insultaient.
  <br /><br />
  Elle en bloqua un, puis deux, en signalant à chaque fois le compte, espérant que Twitter les bannisse... Après une bonne heure de tri, elle referma son ordi, plutôt satisfaite de sa modération, mais toujours blessée par ce qui venait de se passer.
  <br /><br />
  Elle se blottit sous la couette en espérant que la nuit l'aiderait à passer à autre chose...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
52: {
  text: `
  Bientôt, la tristesse d'Elsa se transforma en une vive colère... Pourquoi des gens qu'elle ne connaissait pas agissaient de la sorte ... Elle décida que ça devait cesser... Elle jeta son téléphone sur le canapé et se connecta sur son ordi.
  <br /><br />
  Décidée, elle se rendit dans les paramètres de son compte Twitter et lança la procédure de suppression.
  <br /><br />
  "J'ai créé ce compte parce que ça me faisait plaisir de partager mes créations pas pour m'en prendre plein la gueule gratuitement ..."
  <br /><br />
  Elle entra son mot de passe pour confirmer la suppression de son compte puis referma son ordi d'un claquement sec, avant d'aller se blottir sous sa couette, en espérant que demain ce cauchemar serait bien loin...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 4
  }, ]
},
118: {
  text: `
  La nuit tomba rapidement. Elsa finit par s'éclairer avec sa lampe de bureau. Sur son mannequin de couture, l'armure commençait à prendre forme. Elsa restait concentrée tandis qu'elle finissait de coudre deux pièces de tissus ensemble. Elle s'appuya en arrière contre le dossier de sa chaise mi-satisfaite de son travail, mi-fatiguée. Elle ne put résister à l'envi d'essayer sur-le-champ sa création.
  <br /><br />
  Elle fila dans sa salle de bain l'enfiler puis pris la pose devant son grand miroir. Elle tournait sur elle-même, en regardant comment sa robe voletait.
  <br /><br />
  Elle saisit son téléphone et se prit en photo sous plusieurs angles. Elle alluma ensuite son ordinateur et posta plusieurs des photos sur sa page de cosplay sur Twitter. Elsa avait décidé de créer ce compte histoire de partager ses créations, recevoir des retours d'autres créateurs de costumes...
  <br /><br />
  Elsa se dirigea ensuite vers sa cuisine afin de manger un morceau.
  <br /><br />
  ...
  <br /><br />
  Elsa était dans son canapé, en train de finir de regarder une série sur Netflix quand son téléphone se mit a vibrer.
  <br /><br />
  `,
  options: [{
    text: 'Saisir le téléphone',
    data: 'Saisir le téléphone',
    next: 119
  }
]
},
119: {
  text: `
  Alors que l'écran s'allumait, elle vit une foule de notifications suite à son dernier post. Les mains tremblantes, elle cliqua sur les icônes de l'application et commença à faire défiler les commentaires.
  <br /><br />
  Elle reconnaissait la personne qui avait posté le 1er commentaire, c'était Myriam
  <br /><br />
  "T'es trop belle ma puce, 100%, tu gagnes le concours !"
  <br /><br />
  Elsa continuait de sourire alors qu'elle lisait les commentaires des gens de sa classe.
  <br /><br />
  Elle se raidit en lisant un des commentaires suivant
  <br /><br />
  xx-Kevin-54 : gross vache té moch
  <br /><br />
  Ce n'était pas la première fois qu'Elsa avait affaire à ce genre de commentaires ...Mais c'était à chaque fois difficile
  <br /><br />
  Arnaud-P : ton gro cul sa fai parti du costume aussi ?
  <br /><br />
  Jennifer-Love : @Mystoos hey téma le boule de la meuf...a coté t'es bonne chéri
  <br /><br />
  Dark-Sasuke-93 : si lé elfe c'est des meufs bonne..toi t'es quoi ?
  <br /><br />
  Elsa commençait à avoir la gorge nouée, elle ne comprenait pas pourquoi les gens se montraient aussi odieux. Plus elle défilait les commentaires, plus elle avait l'impression d'avoir une cible sur la tête.
  <br /><br />
  Tous ces pseudos qui se suivaient et toutes ces remarques de plus en plus horrible.
  `,
  options: [{
    text: 'répondre aux insultes',
    data: 'répondre aux insultes',
    thread: {
      image: 'repondre aux insultes.png'
    },
    next: 120
  },
  {
    text: 'bloquer les personnes ',
    data: 'bloquer les personnes ',
    thread: {
      image: 'bloquer les personnes.png'
    },
    next: 121
  },
  {
    text: 'supprimer son compte twitter ',
    data: 'supprimer son compte twitter ',
    thread: {
      image: 'Supprimer son compte twiter.png'
    },
    next: 122
  }
]
},
120: {
  text: `
  Rien n'y faisait, Elsa ne comprenait pas pourquoi elle était victime d'autant de remarques cinglantes. Elle essayait de répondre aux insultes, en demandant le but de ce lynchage, mais tout ce qu'elle récolta, c'est d'autres sarcasmes et plus de railleries encore...
  <br /><br />
  Mais alors qu'elle était en train d'écrire, elle vu quelqu'un répondre à sa place :
  <br /><br />
  Vilina-cosplay : "Tu devrais aller te coucher, il est tard Kevin et tu as école demain, vu ton orthographe ça ne serait pas un mal que tu arrêtes de dormir pendant les cours...
  <br /><br />
  Elsa resta bloquée un moment sur le commentaire qu'elle venait de lire. Vilina était une cosplayeuse professionnelle, une des créatrices qu'Elsa suivait et à qui elle voulait ressembler.
  <br /><br />
  Mais Vilina n'était pas la seule venue défendre Elsa, plusieurs autres grands noms du monde du cosplay étaient à présent intervenus, soit pour répondre aux critiques, soit pour soutenir Elsa et la féliciter pour la qualité de ses créations.
  <br /><br />
  Elsa mit une bonne heure à lire toutes les marques d'affection de sa communauté et des autres cosplayeuses. Même si la soirée avait mal débuté, Elsa pouvait aller se coucher sur une note positive, et c'est avec un large sourire qu'elle se glissa sous sa couette...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 123
  }, ]
},
121: {
  text: `
  Elsa prenait ces commentaires personnellement, et ressentit de la colère dirigée directement envers ces pseudos virtuels qui l'insultaient.
  <br /><br />
  Elle en bloqua un, puis deux, en signalant à chaque fois le compte, espérant que Twitter les bannisse... Après une bonne heure de tri, elle referma son ordi, plutôt satisfaite de sa modération, mais toujours blessée par ce qui venait de se passer.
  <br /><br />
  Elle se blottit sous la couette en espérant que la nuit l'aiderait à passer à autre chose...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 123
  }, ]
},
122: {
  text: `
  Bientôt, la tristesse d'Elsa se transforma en une vive colère... Pourquoi des gens qu'elle ne connaissait pas agissaient de la sorte ... Elle décida que ça devait cesser... Elle jeta son téléphone sur le canapé et se connecta sur son ordi.
  <br /><br />
  Décidée, elle se rendit dans les paramètres de son compte Twitter et lança la procédure de suppression.
  <br /><br />
  "J'ai créé ce compte parce que ça me faisait plaisir de partager mes créations pas pour m'en prendre plein la gueule gratuitement ..."
  <br /><br />
  Elle entra son mot de passe pour confirmer la suppression de son compte puis referma son ordi d'un claquement sec, avant d'aller se blottir sous sa couette, en espérant que demain ce cauchemar serait bien loin...
  `,
  options: [{
    text: 'Dormir',
    data: 'Dormir',
    thread: {
      image: 'Jour 2 - chemin cancre.png'
    },
    next: 123
  }, ]
},
123: {
  text: `
  Le lendemain matin, Elsa avait du mal à émerger. Elle s'y reprit à 5 fois pour faire sa couture proprement. Mélange de souvenirs de ce qui s'était passé la veille et de manque de sommeil...
  <br /><br />
  Myriam remarqua que son amie peinait à garder sa concentration. Elle allait s'installer à côté pour mener son enquête, mais fut stoppée nette par l'arrivée soudaine de leur professeur.
  <br /><br />
  Il regardait Elsa coudre la pièce de broderie sur le col de sa robe, puis dit :
  <br /><br />
  "Vous êtes encore bien en retard par rapport à hier, votre jury d'examen est dans 2 semaines pour rappel... Si vous ne vous impliquez pas plus que ça chez vous le soir ... L'obtention de votre diplôme est mise en danger ..."
  <br /><br />
  Il renifla et s'en alla inspecter le travail d'un autre élève.
  <br /><br />
  Elsa pesta dans son coin et reprit le fil de son travail.
  `,
  options: [{
    text: 'Suivant',
    data: 'Suivant',
    thread: {
      image: 'pause de 10 h dimas.png'
    },
    next: 124
  }, ]
},
124: {
  text: `
  À la pause de 10 h, Elsa sortit dehors histoire de s'aérer un peu l'esprit. Elle s'assit dans la cage d'escalier de la cour intérieure.
  <br /><br />
  Son téléphone se mit à vibrer, elle décrocha directement.
  <br /><br />
  "Salut, c'est Dimas, de la boutique de manga, je croyais sincèrement que tu m'avais donné un faux numéro 😅..."
  <br /><br />
  Elsa pouffa de rire :"Salut 😁, je ne vais pas te mentir ça m'a traversé l'esprit à un moment, mais bon t'as pas le profil du tueur psychopathe...Ou alors tu es très fort pour jouer la comédie ! 😈"
  <br /><br />
  Dimas éclata de rire
  <br /><br />
  "Voilà il y a un bar geek qui vient d'ouvrir à République, et je voulais savoir si tu voulais aller y faire un tour, ils ont des livres, des jeux de société... et askip les serveurs sont tous cosplayés... Ça ne pique pas un peu ta curiosité ? 🤔"
  `,
  options: [{
    text: 'Accepter',
    data: 'Accepter',
    thread: {
      image: 'Bar Avec Dimas.png'
    },
    next: 125
  },
  {
    text: 'Refuser ',
    data: 'Refuser ',
    thread: {
      image: 'Pas de bar avec dimas.png'
    },
    next: 126
  }
]
},
125: {
  text: `
  Elsa réfléchit quelques instants.
  <br /><br />
  "Mmh tu es plutôt doué en affaires... OK, mais à une condition !"
  <br /><br />
  Dimas sourit : "Laquelle ?"
  <br /><br />
  "Je paye la 1re tournée ! Oh ! Je dois te laisser les cours reprennent, on se dit à ce soir alors ?"
  <br /><br />
  "A ce soir !"
  <br /><br />
  Elsa rangea son téléphone dans sa poche et bondit sur ses deux pieds.
  <br /><br />
  "C'était qui ? ", demanda Myriam
  <br /><br />
  "Quelqu'un !", répondit Elsa un sourire jusqu'aux oreilles
  <br /><br />
  "Ne me dis pas que .... RACONTE-MOI TOUT !"
  <br /><br />
  Elsa fit mine d'esquiver Myriam et se précipita dans la classe en riant, talonnée par sa meilleure amie.
  <br /><br />
  fin
  `,
},
126: {
  text: `
  Elsa réfléchit quelques instants.
  <br /><br />
  "Je... Je suis vraiment désolée, mais je vais devoir décliner... Je dois travailler sur une robe pour mon jury de fin d'année, je viens de me faire rappeler à l'ordre ce matin, si je ne la finis pas à temps, je n'aurais pas mon diplôme..."
  <br /><br />
  Dimas se racla la gorge :"Oh, pas de problème, je comprends, si t'as besoin n'hésite pas... Bon courage avec ta robe...Passe une bonne journée"
  <br /><br />
  "Merci, toi aussi passe une bonne journée..."
  <br /><br />
  Elsa poussa un long soupir.
  <br /><br />
  "C'était qui ? ", demanda Myriam
  <br /><br />
  "Un mec que j'ai rencontré hier à la boutique de manga, il voulait qu'on aille boire un verre .. Mais t'as bien vu ce matin, je n'ai pas le temps avec ma robe et tout .."
  <br /><br />
  Myriam posa ses poings sur ses hanches et regarda Elsa d'un air grave : "Mais t'es sérieuse meuf ? Ca ne t'est pas venu à l'esprit de lui demander de passer chez toi ??? "
  <br /><br />
  "Tu veux dire chez moi ce soir ?"
  <br /><br />
  "Bah oui grosse nouille... Bien sûr, je serai là, il vous faut un chaperon !"
  <br /><br />
  Elsa se précipita sur son téléphone :
  <br /><br />
  "Allo Dimas, oui déso, c'est moi...Dis-moi....T'es toujours dispo ce soir ?.."
  <br /><br />
  Fin
  `,
},

}
