import type { LangCode } from '@/lib/types';

export interface FaqItem {
  q: string;
  a: string;
}

export interface HelpTab {
  id: string;
  label: string;
  faqs: FaqItem[];
}

export interface HelpContent {
  title: string;
  subtitle: string;
  tabs: HelpTab[];
  contactText: string;
  contactButton: string;
}

export interface TermPoint {
  title: string;
  text: string;
}

export interface TermBlock {
  title: string;
  points: TermPoint[];
}

export interface TermsContent {
  title: string;
  subtitle: string;
  blocks: TermBlock[];
  contactText: string;
}

type Lang = LangCode;

/* ───────────── HELP CONTENT ───────────── */

const helpEUS: HelpContent = {
  title: 'Laguntza eta euskarria',
  subtitle: 'Ezeturen laguntza zentroa',
  tabs: [
    {
      id: 'foto',
      label: 'Argazkigintza eta benetakotasuna',
      faqs: [
        {
          q: 'Zein argazki mota igo ditzaket Ezetura?',
          a: 'Zuk zeuk ateratako bidaia, paisaia, natura, arkitektura edo txoko berezien benetako argazkiak. Guztiz debekatuta daude Adimen Artifizialak sortutako irudiak, internetetik deskargatutakoak edo irudi-bankuetakoak.',
        },
        {
          q: 'Sakelako telefonoarekin ateratako argazkiak onartzen dira?',
          a: 'Bai, noski. Ezetun begirada, argia eta unearen benetakotasuna baloratzen ditugu, ez kameraren prezioa. Bai kamera profesionalekin bai mugikorrekin egindako argazkiak ongi etorriak dira, betiere kalitate eta zorroztasun onekoak badira.',
        },
        {
          q: 'Baimenduta al dago argazkiak editatzea (Lightroom, Photoshop)?',
          a: 'Bai. Errebelatze digitaleko ohiko doikuntzak onartzen dira (argia, kontrastea, kolorea, zuri-balantzea edo birkoadraketa). Onartzen ez dena lekuaren errealitatea aldatzea da, elementu garrantzitsuak gehituz edo kenduz (mendiak, eraikinak edo zeru faltsuak), ezta IAren bidezko betegarri sortzailerik erabiltzea ere.',
        },
        {
          q: 'Zergatik ezin dira argazkiak eskuineko botoiarekin deskargatu?',
          a: 'Gure argazkilari komunitatearen lana eta egile-eskubideak babesteko. Zuzeneko deskarga desgaitzeak irudien baimenik gabeko erabilera edo kopia masiboa saihesten laguntzen du.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Lekuak eta kartografia',
      faqs: [
        {
          q: 'Nola aukeratzen dira helmuga bakoitzeko azaleko argazkiak?',
          a: 'Leku bakoitzaren azala eguneratu egiten da txokoaren benetako irudikapen bisualik onena erakusteko, komunitateak leku horretan hobekien baloratutako argazkiei lehentasuna emanez.',
        },
        {
          q: 'Zer gertatzen da leku bat bi lurralderen arteko mugan badago?',
          a: 'Mugarri geografiko jakin batzuk, hala nola Tre Cime di Lavaredo (Dolomitetan, Belluno eta Bolzano artean) edo Everest mendia (Nepal eta Txina banatzen dituena), ofizialki bi lurraldeetakoak dira. Ezetun modu partekatuan lotuta daude eta justizia osoz agertzen dira mugaren bi aldeetako sailkapenetan.',
        },
        {
          q: 'Zergatik biltzen ditu mapak lekuak zenbaki dinamikoetan?',
          a: 'Ezetuk taldekatze kartografiko adimenduneko sistema bat du: mapa urrun dagoenean, gertuko puntuak zenbaki-burbuiletan biltzen dira pantaila garbi mantentzeko. Zooma hurbiltzean, zirkulua leunki zabaltzen da eta banakako txokoak erakusten ditu.',
        },
        {
          q: 'Zertarako balio du "Joan nahi dut" zerrendak?',
          a: 'Zure bidaia-nahien zerrenda pertsonala da. Galerietan edo mapan aurkitzen dituzun txokoak gordetzeko aukera ematen dizu, beti eskura izateko eta zure hurrengo ibilbideak eta irteerak planifikatzeko.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Balorazioak eta sailkapenak',
      faqs: [
        {
          q: 'Nola kalkulatzen da helmuga baten nota ofiziala Sailkapenetan?',
          a: 'Helmuga ezagutzen eta puntuatzen duten erabiltzaileen benetako balorazioetatik abiatuta kalkulatzen da. Sistemak iritzi kopurua eta noten sendotasuna haztatzen ditu, sailkapenek komunitatearen adostasun bidezko eta fidagarria isla dezaten.',
        },
        {
          q: 'Zer esan nahi dute Fotogenia, Masifikazioa eta antzeko barrek?',
          a: 'Bidaiari eta argazkilarientzat pentsatutako neurri praktikoak dira: begiratu batean erakusten dizute zer potentzial bisual duen leku batek, zenbat jende bildu ohi den bertan eta beste xehetasun batzuk, bertaratu aurretik zer espero jakin dezazun.',
        },
        {
          q: 'Nola funtzionatzen du galeriako "Joerak" algoritmoak?',
          a: 'Joeren atalak azkenaldian interes handiena pizten ari diren argazkiak eta lekuak nabarmentzen ditu (botoak, interakzioak eta azken jarduerak konbinatuz). Horrela, ekarpen berriek benetako ikusgarritasuna dute.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Pasaportea eta komunitatea',
      faqs: [
        {
          q: 'Nola funtzionatzen du Hileko eta Urteko Argazkiaren lehiaketak?',
          a: 'Hilero, komunitateak hobekien baloratutako argazkiek Hileko Argazkiaren aitortza lortzeko lehiatzen dute. Irudi horiek Ezetun Urteko Argazkiaren saria lortzeko hautagai izango den aukeraketaren parte izatera pasatzen dira.',
        },
        {
          q: 'Nola irabazten da esperientzia (XP) eta zer abantaila ditu mailaz igotzeak?',
          a: 'Esperientzia-puntuak (XP) irabazten dituzu aktiboki parte hartzean: benetako argazkiak igotzen, leku berriak proposatzen, balorazioak osatzen eta komunitatearen aitortzak jasotzen. Mailaz igotzeak zure bidaiari-pasaportea eboluzionarazten du eta intsigniak desblokeatzen ditu.',
        },
        {
          q: 'Nola salatu argazki faltsu bat, IA bidez sortua edo desegokia?',
          a: 'IA bidez sortutako, lapurtutako edo arauak betetzen ez dituen irudiren bat ikusten baduzu, argazkiaren bertako salaketa-botoitik salatu dezakezu zuzenean, edo mezu bat idatziz info@ezetu.com helbidera, esteka edo lekuaren izena adieraziz.',
        },
      ],
    },
  ],
  contactText: 'Ez duzu bilatzen ari zarena aurkitzen? Gure taldea hemen dago edozein zalantza tekniko, iradokizun edo arazorekin laguntzeko.',
  contactButton: 'Harremanetan jarri: info@ezetu.com',
};

const helpES: HelpContent = {
  title: 'Ayuda y soporte',
  subtitle: 'Centro de ayuda de Ezetu',
  tabs: [
    {
      id: 'foto',
      label: 'Fotografía y autenticidad',
      faqs: [
        {
          q: '¿Qué tipo de fotos puedo subir a Ezetu?',
          a: 'Fotografías reales de viajes, paisajes, naturaleza, arquitectura o rincones especiales tomadas por ti mismo. No están permitidas imágenes generadas por Inteligencia Artificial, fotos descargadas de internet ni material de bancos de imágenes.',
        },
        {
          q: '¿Se permiten fotos tomadas con el teléfono móvil?',
          a: 'Sí, por supuesto. En Ezetu valoramos la mirada, la luz y la autenticidad del momento, no el precio de la cámara. Tanto fotografías tomadas con cámara profesional como con smartphone son bienvenidas siempre que tengan buena calidad y nitidez.',
        },
        {
          q: '¿Está permitido editar las fotos (Lightroom, Photoshop)?',
          a: 'Sí. Se permiten los ajustes habituales de revelado fotográfico (luz, contraste, color, balance de blancos o reencuadre). Lo que no está permitido es alterar la realidad del lugar añadiendo o eliminando elementos significativos (como montañas, edificios o cielos falsos) ni utilizar herramientas de relleno generativo con IA.',
        },
        {
          q: '¿Por qué no se pueden descargar las fotos con el botón derecho?',
          a: 'Para proteger el trabajo y los derechos de autor de nuestra comunidad de fotógrafos. Desactivar la descarga directa ayuda a evitar el uso no autorizado o la copia masiva de imágenes sin permiso de su creador.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Lugares y cartografía',
      faqs: [
        {
          q: '¿Cómo se eligen las fotos de portada de cada destino?',
          a: 'La portada de cada lugar se actualiza para mostrar la mejor representación visual real del rincón, dando prioridad a las fotografías mejor valoradas por la comunidad en ese destino.',
        },
        {
          q: '¿Qué pasa si un lugar está en la frontera entre dos territorios?',
          a: 'Hitos geográficos concretos como las Tre Cime di Lavaredo (en los Dolomitas, justo en la frontera entre las provincias de Belluno y Bolzano) o el Monte Everest (cuya cima divide Nepal y China) pertenecen oficialmente a ambos territorios. En Ezetu están vinculados de forma compartida y aparecen con total justicia en los rankings de ambos lados de la frontera.',
        },
        {
          q: '¿Por qué el mapa agrupa los lugares en números dinámicos?',
          a: 'Ezetu incorpora un sistema de agrupación cartográfica inteligente: cuando el mapa está alejado, los puntos cercanos se condensan en burbujas numéricas para mantener la pantalla limpia y no saturar de chinchetas. Al hacer clic sobre cualquier número o acercar el zoom, el círculo se expande suavemente y despliega los rincones individuales.',
        },
        {
          q: '¿Para qué sirve la lista "Quiero ir" (Joan nahi dut)?',
          a: 'Es tu lista personal de deseos viajeros. Te permite guardar los rincones que descubres en la galería o en el mapa para tenerlos siempre a mano y planificar tus próximas rutas y escapadas fotográficas.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Valoraciones y rankings',
      faqs: [
        {
          q: '¿Cómo se calcula la nota oficial de un destino en los Rankings?',
          a: 'Se calcula a partir de las valoraciones reales de los usuarios que conocen y puntúan el destino. El sistema pondera el número de opiniones y la consistencia de las notas para que los rankings reflejen un consenso justo y fiable de la comunidad.',
        },
        {
          q: '¿Qué significan las barritas de Fotogenia, Masificación, etc.?',
          a: 'Son métricas prácticas pensadas para viajeros y fotógrafos: te muestran de un vistazo qué potencial visual ofrece un lugar (Fotogenia), cuánta gente suele concentrarse allí (Masificación) y otros aspectos clave de la experiencia para que sepas qué esperar antes de ir.',
        },
        {
          q: '¿Cómo funciona el algoritmo de "Tendencias" en la galería?',
          a: 'La sección de Tendencias destaca las fotografías y lugares que están despertando mayor interés recientemente (combinando votos, interacciones y actividad reciente). De este modo, las nuevas aportaciones tienen visibilidad real y el escaparate se mantiene vivo.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Pasaporte y comunidad',
      faqs: [
        {
          q: '¿Cómo funciona el concurso de la Foto del Mes y del Año?',
          a: 'Cada mes, las fotografías más valoradas por la comunidad compiten por el reconocimiento a la Foto del Mes. Las imágenes destacadas mensualmente pasan a formar parte de la selección que optará al galardón anual de Foto del Año en Ezetu.',
        },
        {
          q: '¿Cómo se gana experiencia (XP) y qué ventajas tiene subir de nivel?',
          a: 'Ganas puntos de experiencia (XP) al participar activamente: subiendo fotografías reales, aportando nuevos lugares, completando valoraciones y recibiendo reconocimientos de la comunidad. Subir de nivel hace evolucionar tu Pasaporte de viajero, desbloquea insignias y refleja tu trayectoria como explorador dentro de Ezetu.',
        },
        {
          q: '¿Cómo denuncio una foto falsa, generada por IA o inapropiada?',
          a: 'Si detectas una imagen generada por IA, robada de otro autor o que incumple las normas de la comunidad, puedes reportarla directamente desde la opción de denuncia de la propia fotografía o escribiéndonos a info@ezetu.com indicando el enlace o el nombre del lugar.',
        },
      ],
    },
  ],
  contactText: '¿No encuentras lo que buscas? Nuestro equipo está aquí para ayudarte con cualquier duda técnica, sugerencia o incidencia.',
  contactButton: 'Contactar: info@ezetu.com',
};

const helpEN: HelpContent = {
  title: 'Help & Support',
  subtitle: 'Ezetu Help Center',
  tabs: [
    {
      id: 'foto',
      label: 'Photography & authenticity',
      faqs: [
        {
          q: 'What kind of photos can I upload to Ezetu?',
          a: 'Real photographs of travels, landscapes, nature, architecture or special spots taken by you. AI-generated images, photos downloaded from the internet or stock-image material are strictly prohibited.',
        },
        {
          q: 'Are photos taken with a mobile phone allowed?',
          a: 'Yes, of course. At Ezetu we value the eye, the light and the authenticity of the moment, not the price of the camera. Both professional-camera and smartphone photos are welcome, as long as they have good quality and sharpness.',
        },
        {
          q: 'Is editing photos allowed (Lightroom, Photoshop)?',
          a: 'Yes. Common digital-developing adjustments are permitted (light, contrast, color, white balance or reframing). What is not allowed is altering the reality of the place by adding or removing significant elements (such as mountains, buildings or fake skies), nor using generative-AI fill tools.',
        },
        {
          q: 'Why can\'t photos be downloaded with the right-click button?',
          a: 'To protect the work and copyright of our community of photographers. Disabling direct download helps prevent unauthorized use or mass copying of images without the creator\'s permission.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Places & cartography',
      faqs: [
        {
          q: 'How are cover photos chosen for each destination?',
          a: 'The cover of each place is updated to show the best real visual representation of the spot, giving priority to the highest-rated photographs by the community for that destination.',
        },
        {
          q: 'What happens if a place is on the border between two territories?',
          a: 'Specific geographical landmarks such as the Tre Cime di Lavaredo (in the Dolomites, right on the border between the provinces of Belluno and Bolzano) or Mount Everest (whose summit divides Nepal and China) officially belong to both territories. In Ezetu they are linked in a shared way and appear with full fairness in the rankings on both sides of the border.',
        },
        {
          q: 'Why does the map group places into dynamic numbers?',
          a: 'Ezetu has an intelligent cartographic clustering system: when the map is zoomed out, nearby points condense into numbered bubbles to keep the screen clean and avoid cluttering it with pins. When you click on any number or zoom in, the circle smoothly expands and reveals the individual spots.',
        },
        {
          q: 'What is the "Want to go" list for?',
          a: 'It is your personal travel wish list. It lets you save the spots you discover in the gallery or on the map so you always have them at hand and can plan your next routes and photographic getaways.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Ratings & rankings',
      faqs: [
        {
          q: 'How is the official score of a destination calculated in the Rankings?',
          a: 'It is calculated from the real ratings of users who know and score the destination. The system weighs the number of opinions and the consistency of the scores so that the rankings reflect a fair and reliable consensus of the community.',
        },
        {
          q: 'What do the Photogenic, Crowding and similar bars mean?',
          a: 'They are practical metrics designed for travelers and photographers: they show you at a glance the visual potential of a place (Photogenic), how many people typically gather there (Crowding) and other key aspects of the experience so you know what to expect before you go.',
        },
        {
          q: 'How does the "Trending" algorithm work in the gallery?',
          a: 'The Trending section highlights the photographs and places that are generating the most interest recently (combining votes, interactions and recent activity). This way, new contributions get real visibility and the showcase stays alive.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Passport & community',
      faqs: [
        {
          q: 'How does the Photo of the Month and Photo of the Year contest work?',
          a: 'Each month, the highest-rated photographs by the community compete for the Photo of the Month recognition. The images highlighted monthly become part of the selection that will compete for the annual Photo of the Year award in Ezetu.',
        },
        {
          q: 'How do you earn experience (XP) and what are the advantages of leveling up?',
          a: 'You earn experience points (XP) by participating actively: uploading real photographs, contributing new places, completing ratings and receiving community recognitions. Leveling up evolves your traveler Passport, unlocks badges and reflects your track record as an explorer within Ezetu.',
        },
        {
          q: 'How do I report a fake, AI-generated or inappropriate photo?',
          a: 'If you spot an AI-generated, stolen or rule-breaking image, you can report it directly from the report button on the photo itself, or by writing to us at info@ezetu.com indicating the link or the name of the place.',
        },
      ],
    },
  ],
  contactText: 'Can\'t find what you\'re looking for? Our team is here to help you with any technical question, suggestion or issue.',
  contactButton: 'Contact us: info@ezetu.com',
};

const helpFR: HelpContent = {
  title: 'Aide et support',
  subtitle: "Centre d'aide d'Ezetu",
  tabs: [
    {
      id: 'foto',
      label: 'Photographie et authenticité',
      faqs: [
        {
          q: 'Quel type de photos puis-je téléverser sur Ezetu ?',
          a: 'De vraies photographies de voyages, de paysages, de nature, d\'architecture ou de coins spéciaux prises par vous-même. Les images générées par intelligence artificielle, les photos téléchargées depuis internet ou le matériel de banques d\'images sont strictement interdits.',
        },
        {
          q: 'Les photos prises avec un téléphone mobile sont-elles acceptées ?',
          a: 'Oui, bien sûr. Sur Ezetu, nous valorisons le regard, la lumière et l\'authenticité du moment, pas le prix de l\'appareil. Les photos prises avec un appareil professionnel ou un smartphone sont les bienvenues, à condition qu\'elles soient de bonne qualité et nettes.',
        },
        {
          q: 'L\'édition des photos est-elle autorisée (Lightroom, Photoshop) ?',
          a: 'Oui. Les ajustements habituels de développement numérique sont autorisés (lumière, contraste, couleur, balance des blancs ou recadrage). Ce qui n\'est pas autorisé, c\'est modifier la réalité du lieu en ajoutant ou en supprimant des éléments significatifs (comme des montagnes, des bâtiments ou des faux ciels), ni utiliser des outils de remplissage génératif par IA.',
        },
        {
          q: 'Pourquoi ne peut-on pas télécharger les photos avec le clic droit ?',
          a: 'Pour protéger le travail et les droits d\'auteur de notre communauté de photographes. Désactiver le téléchargement direct aide à prévenir l\'utilisation non autorisée ou la copie massive d\'images sans l\'autorisation de leur créateur.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Lieux et cartographie',
      faqs: [
        {
          q: 'Comment sont choisies les photos de couverture de chaque destination ?',
          a: 'La couverture de chaque lieu est mise à jour pour montrer la meilleure représentation visuelle réelle du coin, en donnant la priorité aux photographies les mieux notées par la communauté pour cette destination.',
        },
        {
          q: 'Que se passe-t-il si un lieu se trouve à la frontière entre deux territoires ?',
          a: 'Des repères géographiques précis comme les Tre Cime di Lavaredo (dans les Dolomites, juste à la frontière entre les provinces de Belluno et Bolzano) ou le mont Everest (dont le sommet sépare le Népal et la Chine) appartiennent officiellement aux deux territoires. Sur Ezetu, ils sont liés de manière partagée et apparaissent avec une totale équité dans les classements des deux côtés de la frontière.',
        },
        {
          q: 'Pourquoi la carte regroupe-t-elle les lieux en nombres dynamiques ?',
          a: 'Ezetu dispose d\'un système de regroupement cartographique intelligent : lorsque la carte est dézoomée, les points proches se condensent en bulles numérotées pour garder l\'écran propre et éviter la saturation de marqueurs. Quand vous cliquez sur un nombre ou zoomez, le cercle s\'agrandit en douceur et révèle les lieux individuels.',
        },
        {
          q: 'À quoi sert la liste « Envie d\'y aller » ?',
          a: 'C\'est votre liste personnelle de souhaits de voyage. Elle vous permet d\'enregistrer les coins que vous découvrez dans la galerie ou sur la carte pour les avoir toujours à portée de main et planifier vos prochains itinéraires et escapades photographiques.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Évaluations et classements',
      faqs: [
        {
          q: 'Comment est calculée la note officielle d\'une destination dans les Classements ?',
          a: 'Elle est calculée à partir des évaluations réelles des utilisateurs qui connaissent et notent la destination. Le système pondère le nombre d\'avis et la cohérence des notes pour que les classements reflètent un consensus juste et fiable de la communauté.',
        },
        {
          q: 'Que signifient les barres de Photogénie, Affluence, etc. ?',
          a: 'Ce sont des métriques pratiques conçues pour les voyageurs et les photographes : elles vous montrent d\'un coup d\'œil le potentiel visuel d\'un lieu (Photogénie), le nombre de personnes qui s\'y concentrent habituellement (Affluence) et d\'autres aspects clés de l\'expérience afin que vous sachiez à quoi vous attendre avant d\'y aller.',
        },
        {
          q: 'Comment fonctionne l\'algorithme « Tendances » dans la galerie ?',
          a: 'La section Tendances met en avant les photographies et les lieux qui suscitent le plus d\'intérêt récemment (en combinant votes, interactions et activité récente). Ainsi, les nouvelles contributions bénéficient d\'une visibilité réelle et la vitrine reste vivante.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Passeport et communauté',
      faqs: [
        {
          q: 'Comment fonctionne le concours Photo du Mois et Photo de l\'Année ?',
          a: 'Chaque mois, les photographies les mieux notées par la communauté concourent pour la reconnaissance de Photo du Mois. Les images mises en avant chaque mois font partie de la sélection qui concourra pour le prix annuel de Photo de l\'Année sur Ezetu.',
        },
        {
          q: 'Comment gagne-t-on de l\'expérience (XP) et quels sont les avantages de monter de niveau ?',
          a: 'Vous gagnez des points d\'expérience (XP) en participant activement : en téléversant de vraies photographies, en proposant de nouveaux lieux, en complétant des évaluations et en recevant des reconnaissances de la communauté. Monter de niveau fait évoluer votre Passeport de voyageur, débloque des badges et reflète votre parcours en tant qu\'explorateur sur Ezetu.',
        },
        {
          q: 'Comment signaler une fausse photo, générée par IA ou inappropriée ?',
          a: 'Si vous repérez une image générée par IA, volée ou qui enfreint les règles de la communauté, vous pouvez la signaler directement depuis le bouton de signalement de la photo elle-même, ou en nous écrivant à info@ezetu.com en indiquant le lien ou le nom du lieu.',
        },
      ],
    },
  ],
  contactText: 'Vous ne trouvez pas ce que vous cherchez ? Notre équipe est là pour vous aider avec toute question technique, suggestion ou incident.',
  contactButton: 'Nous contacter : info@ezetu.com',
};

const helpIT: HelpContent = {
  title: 'Aiuto e supporto',
  subtitle: 'Centro assistenza di Ezetu',
  tabs: [
    {
      id: 'foto',
      label: 'Fotografia e autenticità',
      faqs: [
        {
          q: 'Che tipo di foto posso caricare su Ezetu?',
          a: 'Fotografie reali di viaggi, paesaggi, natura, architettura o angoli speciali scattate da te. Le immagini generate da intelligenza artificiale, le foto scaricate da internet o materiale di banche immagini sono rigorosamente proibite.',
        },
        {
          q: 'Le foto scattate con il telefono cellulare sono accettate?',
          a: 'Sì, certo. Su Ezetu valorizziamo lo sguardo, la luce e l\'autenticità del momento, non il prezzo della fotocamera. Sia le foto scattate con fotocamere professionali sia con smartphone sono benvenute, purché siano di buona qualità e nitide.',
        },
        {
          q: 'È permesso modificare le foto (Lightroom, Photoshop)?',
          a: 'Sì. Sono permessi gli abituali aggiustamenti di sviluppo digitale (luce, contrasto, colore, bilanciamento del bianco o ricomposizione). Non è permesso alterare la realtà del luogo aggiungendo o rimuovendo elementi significativi (come montagne, edifici o cieli falsi), né utilizzare strumenti di riempimento generativo con IA.',
        },
        {
          q: 'Perché non si possono scaricare le foto con il tasto destro?',
          a: 'Per proteggere il lavoro e i diritti d\'autore della nostra community di fotografi. Disattivare il download diretto aiuta a prevenire l\'uso non autorizzato o la copia massiva di immagini senza il permesso del creatore.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Luoghi e cartografia',
      faqs: [
        {
          q: 'Come vengono scelte le foto di copertina di ogni destinazione?',
          a: 'La copertina di ogni luogo viene aggiornata per mostrare la migliore rappresentazione visiva reale dell\'angolo, dando priorità alle fotografie meglio valutate dalla community per quella destinazione.',
        },
        {
          q: 'Cosa succede se un luogo si trova al confine tra due territori?',
          a: 'Specifici punti di riferimento geografici come le Tre Cime di Lavaredo (nelle Dolomiti, proprio al confine tra le province di Belluno e Bolzano) o il Monte Everest (la cui vetta divide Nepal e Cina) appartengono ufficialmente a entrambi i territori. Su Ezetu sono collegati in modo condiviso e appaiono con piena equità nelle classifiche di entrambi i lati del confine.',
        },
        {
          q: 'Perché la mappa raggruppa i luoghi in numeri dinamici?',
          a: 'Ezetu dispone di un sistema intelligente di raggruppamento cartografico: quando la mappa è rimpicciolita, i punti vicini si condensano in bolle numerate per mantenere lo schermo pulito e non saturarlo di spilli. Quando si clicca su un numero o si zooma, il cerchio si espande dolcemente e rivela i singoli luoghi.',
        },
        {
          q: 'A cosa serve la lista "Vorrei andare"?',
          a: 'È la tua lista personale di desideri di viaggio. Ti permette di salvare gli angoli che scopri nella galleria o sulla mappa per averli sempre a portata di mano e pianificare i tuoi prossimi itinerari ed escursioni fotografiche.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Valutazioni e classifiche',
      faqs: [
        {
          q: 'Come viene calcolato il punteggio ufficiale di una destinazione nelle Classifiche?',
          a: 'Viene calcolato dalle valutazioni reali degli utenti che conoscono e votano la destinazione. Il sistema pondera il numero di opinioni e la coerenza dei punteggi affinché le classifiche riflettano un consenso equo e affidabile della community.',
        },
        {
          q: 'Cosa significano le barre di Fotogenia, Affollamento, ecc.?',
          a: 'Sono metriche pratiche pensate per viaggiatori e fotografi: ti mostrano a colpo d\'occhio il potenziale visivo di un luogo (Fotogenia), quante persone di solito si concentrano lì (Affollamento) e altri aspetti chiave dell\'esperienza per sapere cosa aspettarti prima di andare.',
        },
        {
          q: 'Come funziona l\'algoritmo "Tendenze" nella galleria?',
          a: 'La sezione Tendenze mette in evidenza le fotografie e i luoghi che stanno suscitando maggiore interesse di recente (combinando voti, interazioni e attività recente). In questo modo, i nuovi contributi ottengono visibilità reale e la vetrina resta viva.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Passaporto e community',
      faqs: [
        {
          q: 'Come funziona il concorso Foto del Mese e Foto dell\'Anno?',
          a: 'Ogni mese, le fotografie meglio valutate dalla community competono per il riconoscimento di Foto del Mese. Le immagini messe in evidenza mensilmente entrano a far parte della selezione che concorrerà al premio annuale di Foto dell\'Anno su Ezetu.',
        },
        {
          q: 'Come si guadagna esperienza (XP) e quali vantaggi offre salire di livello?',
          a: 'Guadagni punti esperienza (XP) partecipando attivamente: caricando fotografie reali, proponendo nuovi luoghi, completando valutazioni e ricevendo riconoscimenti dalla community. Salire di livello fa evolvere il tuo Passaporto di viaggiatore, sblocca badge e riflette il tuo percorso come esploratore su Ezetu.',
        },
        {
          q: 'Come segnalo una foto falsa, generata con IA o inappropriata?',
          a: 'Se individui un\'immagine generata con IA, rubata o che viola le regole della community, puoi segnalarla direttamente dal pulsante di segnalazione della foto stessa, oppure scrivendoci a info@ezetu.com indicando il link o il nome del luogo.',
        },
      ],
    },
  ],
  contactText: 'Non trovi quello che cerchi? Il nostro team è qui per aiutarti con qualsiasi dubbio tecnico, suggerimento o problema.',
  contactButton: 'Contattaci: info@ezetu.com',
};

const helpDE: HelpContent = {
  title: 'Hilfe & Support',
  subtitle: 'Ezetu Hilfe-Center',
  tabs: [
    {
      id: 'foto',
      label: 'Fotografie & Authentizität',
      faqs: [
        {
          q: 'Welche Art von Fotos kann ich auf Ezetu hochladen?',
          a: 'Echte Fotografien von Reisen, Landschaften, Natur, Architektur oder besonderen Orten, die von Ihnen selbst aufgenommen wurden. KI-generierte Bilder, aus dem Internet heruntergeladene Fotos oder Stockbild-Material sind strengstens verboten.',
        },
        {
          q: 'Sind Fotos erlaubt, die mit dem Handy aufgenommen wurden?',
          a: 'Ja, natürlich. Bei Ezetu schätzen wir den Blick, das Licht und die Authentizität des Moments, nicht den Preis der Kamera. Sowel Fotos mit professionellen Kameras als auch mit Smartphones sind willkommen, solange sie gute Qualität und Schärfe aufweisen.',
        },
        {
          q: 'Ist das Bearbeiten von Fotos erlaubt (Lightroom, Photoshop)?',
          a: 'Ja. Die üblichen digitalen Entwicklungs-Anpassungen sind erlaubt (Licht, Kontrast, Farbe, Weißabgleich oder Neuzuschneiden). Nicht erlaubt ist es, die Realität des Ortes zu verändern, indem bedeutsame Elemente hinzugefügt oder entfernt werden (wie Berge, Gebäude oder falsche Himmel), noch die Nutzung generativer KI-Füllwerkzeuge.',
        },
        {
          q: 'Warum können Fotos nicht mit der rechten Maustaste heruntergeladen werden?',
          a: 'Um die Arbeit und das Urheberrecht unserer Community von Fotografen zu schützen. Das Deaktivieren des direkten Downloads hilft, unbefugte Nutzung oder massenhaftes Kopieren von Bildern ohne Erlaubnis des Erstellers zu verhindern.',
        },
      ],
    },
    {
      id: 'mapa',
      label: 'Orte & Kartografie',
      faqs: [
        {
          q: 'Wie werden die Titelbilder für jedes Reiseziel ausgewählt?',
          a: 'Das Titelbild jedes Ortes wird aktualisiert, um die beste echte visuelle Darstellung des Winkels zu zeigen, wobei den von der Community am besten bewerteten Fotografien für dieses Reiseziel Vorrang gegeben wird.',
        },
        {
          q: 'Was passiert, wenn ein Ort an der Grenze zwischen zwei Gebieten liegt?',
          a: 'Bestimmte geografische Wahrzeichen wie die Tre Cime di Lavaredo (in den Dolomiten, genau an der Grenze zwischen den Provinzen Belluno und Bozen) oder der Mount Everest (dessen Gipfel Nepal und China trennt) gehören offiziell zu beiden Gebieten. Auf Ezetu sind sie auf geteilte Weise verknüpft und erscheinen mit völliger Fairness in den Rankings auf beiden Seiten der Grenze.',
        },
        {
          q: 'Warum gruppiert die Karte Orte in dynamische Zahlen?',
          a: 'Ezetu verfügt über ein intelligentes kartografisches Cluster-System: Wenn die Karte herausgezoomt ist, verdichten sich nahegelegene Punkte zu nummerierten Blasen, um den Bildschirm sauber zu halten und eine Überladung mit Stecknadeln zu vermeiden. Wenn Sie auf eine Zahl klicken oder hineinzoomen, erweitert sich der Kreis sanft und zeigt die einzelnen Orte.',
        },
        {
          q: 'Wozu dient die Liste „Möchte ich hin“?',
          a: 'Es ist Ihre persönliche Reise-Wunschliste. Sie ermöglicht es Ihnen, die Orte, die Sie in der Galerie oder auf der Karte entdecken, zu speichern, um sie immer griffbereit zu haben und Ihre nächsten Routen und Fototouren zu planen.',
        },
      ],
    },
    {
      id: 'rankings',
      label: 'Bewertungen & Rankings',
      faqs: [
        {
          q: 'Wie wird die offizielle Bewertung eines Reiseziels in den Rankings berechnet?',
          a: 'Sie wird aus den echten Bewertungen von Nutzern berechnet, die das Reiseziel kennen und bewerten. Das System gewichtet die Anzahl der Meinungen und die Konsistenz der Noten, damit die Rankings einen fairen und zuverlässigen Konsens der Community widerspiegeln.',
        },
        {
          q: 'Was bedeuten die Balken für Fotogenität, Überfüllung usw.?',
          a: 'Dies sind praktische Metriken, die für Reisende und Fotografen entwickelt wurden: Sie zeigen Ihnen auf einen Blick das visuelle Potenzial eines Ortes (Fotogenität), wie viele Menschen sich dort üblicherweise aufhalten (Überfüllung) und weitere Schlüsselaspekte der Erfahrung, damit Sie wissen, was Sie erwartet, bevor Sie hingehen.',
        },
        {
          q: 'Wie funktioniert der „Trends“-Algorithmus in der Galerie?',
          a: 'Der Trends-Bereich hebt die Fotografien und Orte hervor, die kürzlich das größte Interesse wecken (durch Kombination von Stimmen, Interaktionen und letzter Aktivität). Auf diese Weise erhalten neue Beiträge echte Sichtbarkeit und die Vitrine bleibt lebendig.',
        },
      ],
    },
    {
      id: 'comunidad',
      label: 'Pass & Community',
      faqs: [
        {
          q: 'Wie funktioniert der Wettbewerb Foto des Monats und Foto des Jahres?',
          a: 'Jeden Monat konkurrieren die von der Community am besten bewerteten Fotografien um die Anerkennung als Foto des Monats. Die monatlich hervorgehobenen Bilder werden Teil der Auswahl, die um den jährlichen Preis Foto des Jahres auf Ezetu wetteifern wird.',
        },
        {
          q: 'Wie verdient man Erfahrung (XP) und welche Vorteile hat das Aufsteigen im Level?',
          a: 'Sie verdienen Erfahrungspunkte (XP) durch aktive Teilnahme: das Hochladen echter Fotografien, das Einbringen neuer Orte, das Ausfüllen von Bewertungen und das Erhalten von Anerkennungen der Community. Das Aufsteigen im Level entwickelt Ihren Reisepass weiter, schaltet Abzeichen frei und spiegelt Ihren Werdegang als Entdecker auf Ezetu wider.',
        },
        {
          q: 'Wie melde ich ein gefälschtes, KI-generiertes oder unangemessenes Foto?',
          a: 'Wenn Sie ein KI-generiertes, gestohlenes oder regelbrechendes Bild erkennen, können Sie es direkt über die Meldefunktion des Fotos selbst melden oder uns unter info@ezetu.com schreiben und dabei den Link oder den Namen des Ortes angeben.',
        },
      ],
    },
  ],
  contactText: 'Sie finden nicht, was Sie suchen? Unser Team ist hier, um Ihnen bei technischen Fragen, Vorschlägen oder Problemen zu helfen.',
  contactButton: 'Kontakt: info@ezetu.com',
};

/* ───────────── TERMS CONTENT ───────────── */

const termsEUS: TermsContent = {
  title: 'Baldintzak eta pribatutasuna',
  subtitle: 'Ezetu komunitate bidezko eta benetakoa izaten laguntzen duten baldintzak.',
  blocks: [
    {
      title: 'Jabetza intelektuala (% 100 egilearena)',
      points: [
        {
          title: 'Zure argazkiak zureak dira',
          text: 'Une oro gordetzen dituzu Ezetura igotzen dituzun argazkien gaineko egile-eskubideen eta jabetza intelektualaren % 100.',
        },
        {
          title: 'Bistaratze-lizentzia',
          text: 'Irudi bat argitaratzean, Ezeturi lizentzia doakoa, ez-esklusiboa eta ezeztagarria ematen diozu plataformaren barruan erakusteko, betiere zure egiletza aitortuz.',
        },
        {
          title: 'Hirugarrenei saldu gabe',
          text: 'Ezetuk ez dizkie inoiz zure argazkiak salduko edo lagako irudi-bankuei edo hirugarrenei zure baimenik gabe.',
        },
      ],
    },
    {
      title: 'Komunitatearen arauak eta AAren aurkako konpromisoa',
      points: [
        {
          title: 'Benetakotasuna ororen gainetik',
          text: 'Erabat debekatuta dago Adimen Artifizial bidez sortutako irudiak, fotomuntaketa engainagarriak edo zuri ez dagozkizun argazkiak igotzea.',
        },
        {
          title: 'Errespetua eta bizikidetza',
          text: 'Ez dira onartuko eduki iraingarriak, spama, ezkutuko publizitatea, ezta ingurune naturalarekiko errespeturik gabeko jokabideak ere.',
        },
        {
          title: 'Moderazioa',
          text: 'Ezetuk arauak hausten dituen edukia kentzeko eskubidea du.',
        },
      ],
    },
    {
      title: 'Pribatutasuna eta datuen babesa (DBEO / RGPD)',
      points: [
        {
          title: 'Zure datuen erabilera arduratsua',
          text: 'Datuak Babesteko Erregelamendu Orokorraren (DBEO) arabera tratatzen ditugu datuak. Zure kontua eta pasaportea kudeatzeko beharrezkoa den informazioa baino ez dugu biltzen.',
        },
        {
          title: 'Daturik ez saltzea',
          text: 'Ez diegu inoiz zure datu pertsonalik saltzen hirugarrenei.',
        },
        {
          title: 'Zure eskubideak',
          text: 'Edonoiz balia ditzakezu eskubideak info@ezetu.com helbidera idatziz.',
        },
      ],
    },
  ],
  contactText: 'Baldintza hauei edo zure datuen tratamenduari buruzko edozein kontsulta gure taldera bidera daiteke.',
};

const termsES: TermsContent = {
  title: 'Términos y privacidad',
  subtitle: 'Las condiciones que hacen de Ezetu una comunidad justa y auténtica.',
  blocks: [
    {
      title: 'Propiedad Intelectual (100 % del autor)',
      points: [
        {
          title: 'Tus fotos son tuyas',
          text: 'Conservas en todo momento el 100 % de los derechos de autor y la propiedad intelectual sobre las fotografías que subas a Ezetu.',
        },
        {
          title: 'Licencia de visualización',
          text: 'Al publicar una imagen, únicamente concedes a Ezetu una licencia gratuita, no exclusiva y revocable para mostrarla dentro de la plataforma (galerías, mapas, rankings, concursos y menciones de la comunidad), siempre reconociendo tu autoría.',
        },
        {
          title: 'Sin venta a terceros',
          text: 'Ezetu nunca venderá ni cederá tus fotografías a bancos de imágenes o terceros sin tu consentimiento expreso. Si decides eliminar una fotografía o cerrar tu cuenta, se retirará de la plataforma.',
        },
      ],
    },
    {
      title: 'Normas de la Comunidad y Compromiso Anti-IA',
      points: [
        {
          title: 'Autenticidad ante todo',
          text: 'Ezetu es una comunidad de fotografía real de viajes y naturaleza. Queda estrictamente prohibido subir imágenes generadas total o parcialmente mediante Inteligencia Artificial, fotomontajes engañosos o fotografías de las que no seas el autor legítimo.',
        },
        {
          title: 'Respeto y convivencia',
          text: 'No se tolerarán contenidos ofensivos, ilegales, spam, publicidad encubierta ni conductas irrespetuosas hacia otros miembros de la comunidad o hacia el entorno natural (promovemos un turismo responsable y respetuoso con cada territorio).',
        },
        {
          title: 'Moderación',
          text: 'Ezetu se reserva el derecho de retirar cualquier contenido que incumpla estas normas y de suspender las cuentas que infrinjan reiteradamente el compromiso de autenticidad.',
        },
      ],
    },
    {
      title: 'Privacidad y Protección de Datos (RGPD)',
      points: [
        {
          title: 'Uso responsable de tus datos',
          text: 'Tratamos tus datos personales conforme al Reglamento General de Protección de Datos (RGPD). Solo recopilamos la información estrictamente necesaria para gestionar tu cuenta, tu perfil de viajero, tu Pasaporte y el funcionamiento seguro de la plataforma.',
        },
        {
          title: 'Cero venta de datos',
          text: 'Nunca vendemos ni alquilamos tus datos personales a terceros con fines comerciales.',
        },
        {
          title: 'Metadatos y ubicación',
          text: 'Las fotografías se vinculan únicamente a los destinos o puntos geográficos públicos que tú elijas asociar; protegemos tu privacidad evitando exponer datos personales sensibles innecesarios.',
        },
        {
          title: 'Tus derechos',
          text: 'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión (derecho al olvido), limitación, oposición y portabilidad escribiéndonos a info@ezetu.com.',
        },
      ],
    },
  ],
  contactText: 'Cualquier consulta sobre estos términos o sobre el tratamiento de tus datos puede dirigirse a nuestro equipo.',
};

const termsEN: TermsContent = {
  title: 'Terms & Privacy',
  subtitle: 'The conditions that make Ezetu a fair and authentic community.',
  blocks: [
    {
      title: 'Intellectual Property (100% the author\'s)',
      points: [
        {
          title: 'Your photos are yours',
          text: 'You retain at all times 100% of the copyright and intellectual property over the photographs you upload to Ezetu.',
        },
        {
          title: 'Display license',
          text: 'By publishing an image, you only grant Ezetu a free, non-exclusive and revocable license to display it within the platform (galleries, maps, rankings, contests and community mentions), always acknowledging your authorship.',
        },
        {
          title: 'No sale to third parties',
          text: 'Ezetu will never sell or transfer your photographs to stock-image banks or third parties without your express consent. If you decide to delete a photograph or close your account, it will be removed from the platform.',
        },
      ],
    },
    {
      title: 'Community Rules & Anti-AI Commitment',
      points: [
        {
          title: 'Authenticity above all',
          text: 'Ezetu is a community of real travel and nature photography. It is strictly prohibited to upload images generated totally or partially by Artificial Intelligence, deceptive photomontages or photographs of which you are not the legitimate author.',
        },
        {
          title: 'Respect and coexistence',
          text: 'Offensive, illegal content, spam, covert advertising or disrespectful behavior toward other community members or the natural environment (we promote responsible tourism that respects each territory) will not be tolerated.',
        },
        {
          title: 'Moderation',
          text: 'Ezetu reserves the right to remove any content that breaches these rules and to suspend accounts that repeatedly violate the authenticity commitment.',
        },
      ],
    },
    {
      title: 'Privacy & Data Protection (GDPR)',
      points: [
        {
          title: 'Responsible use of your data',
          text: 'We process your personal data in accordance with the General Data Protection Regulation (GDPR). We only collect the information strictly necessary to manage your account, your traveler profile, your Passport and the secure operation of the platform.',
        },
        {
          title: 'Zero data sales',
          text: 'We never sell or rent your personal data to third parties for commercial purposes.',
        },
        {
          title: 'Metadata and location',
          text: 'Photographs are linked only to the public destinations or geographic points you choose to associate; we protect your privacy by avoiding the exposure of unnecessary sensitive personal data.',
        },
        {
          title: 'Your rights',
          text: 'You may exercise at any time your rights of access, rectification, erasure (right to be forgotten), restriction, objection and portability by writing to us at info@ezetu.com.',
        },
      ],
    },
  ],
  contactText: 'Any questions about these terms or about the processing of your data may be directed to our team.',
};

const termsFR: TermsContent = {
  title: 'Conditions et confidentialité',
  subtitle: 'Les conditions qui font d\'Ezetu une communauté juste et authentique.',
  blocks: [
    {
      title: 'Propriété intellectuelle (100 % à l\'auteur)',
      points: [
        {
          title: 'Vos photos sont les vôtres',
          text: 'Vous conservez à tout moment 100 % des droits d\'auteur et de la propriété intellectuelle sur les photographies que vous téléversez sur Ezetu.',
        },
        {
          title: 'Licence d\'affichage',
          text: 'En publiant une image, vous accordez uniquement à Ezetu une licence gratuite, non exclusive et révocable pour l\'afficher dans la plateforme (galeries, cartes, classements, concours et mentions de la communauté), en reconnaissant toujours votre paternité.',
        },
        {
          title: 'Pas de vente à des tiers',
          text: 'Ezetu ne vendra ni ne cédera jamais vos photographies à des banques d\'images ou à des tiers sans votre consentement exprès. Si vous décidez de supprimer une photographie ou de fermer votre compte, elle sera retirée de la plateforme.',
        },
      ],
    },
    {
      title: 'Règles de la communauté et engagement anti-IA',
      points: [
        {
          title: 'L\'authenticité avant tout',
          text: 'Ezetu est une communauté de photographie réelle de voyages et de nature. Il est strictement interdit de téléverser des images générées totalement ou partiellement par intelligence artificielle, des photomontages trompeurs ou des photographies dont vous n\'êtes pas l\'auteur légitime.',
        },
        {
          title: 'Respect et coexistence',
          text: 'Les contenus offensants, illégaux, le spam, la publicité déguisée ou les comportements irrespectueux envers d\'autres membres de la communauté ou l\'environnement naturel (nous promouvons un tourisme responsable et respectueux de chaque territoire) ne seront pas tolérés.',
        },
        {
          title: 'Modération',
          text: 'Ezetu se réserve le droit de retirer tout contenu enfreignant ces règles et de suspendre les comptes qui enfreignent à plusieurs reprises l\'engagement d\'authenticité.',
        },
      ],
    },
    {
      title: 'Confidentialité et protection des données (RGPD)',
      points: [
        {
          title: 'Utilisation responsable de vos données',
          text: 'Nous traitons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD). Nous ne collectons que les informations strictement nécessaires pour gérer votre compte, votre profil de voyageur, votre Passeport et le fonctionnement sécurisé de la plateforme.',
        },
        {
          title: 'Zéro vente de données',
          text: 'Nous ne vendons ni ne louons jamais vos données personnelles à des tiers à des fins commerciales.',
        },
        {
          title: 'Métadonnées et localisation',
          text: 'Les photographies sont liées uniquement aux destinations ou points géographiques publics que vous choisissez d\'associer ; nous protégeons votre confidentialité en évitant l\'exposition de données personnelles sensibles inutiles.',
        },
        {
          title: 'Vos droits',
          text: 'Vous pouvez exercer à tout moment vos droits d\'accès, de rectification, d\'effacement (droit à l\'oubli), de limitation, d\'opposition et de portabilité en nous écrivant à info@ezetu.com.',
        },
      ],
    },
  ],
  contactText: 'Toute question concernant ces conditions ou le traitement de vos données peut être adressée à notre équipe.',
};

const termsIT: TermsContent = {
  title: 'Termini e privacy',
  subtitle: 'Le condizioni che fanno di Ezetu una community equa e autentica.',
  blocks: [
    {
      title: 'Proprietà Intellettuale (100% dell\'autore)',
      points: [
        {
          title: 'Le tue foto sono tue',
          text: 'Conservi in ogni momento il 100% dei diritti d\'autore e della proprietà intellettuale sulle fotografie che carichi su Ezetu.',
        },
        {
          title: 'Licenza di visualizzazione',
          text: 'Pubblicando un\'immagine, concedi solo a Ezetu una licenza gratuita, non esclusiva e revocabile per mostrarla all\'interno della piattaforma (gallerie, mappe, classifiche, concorsi e menzioni della community), riconoscendo sempre la tua paternità.',
        },
        {
          title: 'Nessuna vendita a terzi',
          text: 'Ezetu non venderà mai né cederà le tue fotografie a banche immagini o a terzi senza il tuo esplicito consenso. Se decidi di eliminare una fotografia o chiudere il tuo account, verrà rimossa dalla piattaforma.',
        },
      ],
    },
    {
      title: 'Regole della Community e Impegno Anti-IA',
      points: [
        {
          title: 'Autenticità prima di tutto',
          text: 'Ezetu è una community di fotografia reale di viaggi e natura. È severamente proibito caricare immagini generate totalmente o parzialmente mediante Intelligenza Artificiale, fotomontaggi ingannevoli o fotografie di cui non sei il legittimo autore.',
        },
        {
          title: 'Rispetto e convivenza',
          text: 'Non saranno tollerati contenuti offensivi, illegali, spam, pubblicità occulta o comportamenti irrispettosi verso altri membri della community o verso l\'ambiente naturale (promuoviamo un turismo responsabile e rispettoso di ogni territorio).',
        },
        {
          title: 'Moderazione',
          text: 'Ezetu si riserva il diritto di rimuovere qualsiasi contenuto che violi queste regole e di sospendere gli account che infrangono ripetutamente l\'impegno di autenticità.',
        },
      ],
    },
    {
      title: 'Privacy e Protezione dei Dati (GDPR)',
      points: [
        {
          title: 'Uso responsabile dei tuoi dati',
          text: 'Trattiamo i tuoi dati personali conformemente al Regolamento Generale sulla Protezione dei Dati (GDPR). Raccogliamo solo le informazioni strettamente necessarie per gestire il tuo account, il tuo profilo di viaggiatore, il tuo Passaporto e il funzionamento sicuro della piattaforma.',
        },
        {
          title: 'Zero vendita di dati',
          text: 'Non vendiamo né affittiamo mai i tuoi dati personali a terzi per scopi commerciali.',
        },
        {
          title: 'Metadati e posizione',
          text: 'Le fotografie sono collegate unicamente alle destinazioni o ai punti geografici pubblici che scegli di associare; proteggiamo la tua privacy evitando l\'esposizione di dati personali sensibili non necessari.',
        },
        {
          title: 'I tuoi diritti',
          text: 'Puoi esercitare in qualsiasi momento i tuoi diritti di accesso, rettifica, cancellazione (diritto all\'oblio), limitazione, opposizione e portabilità scrivendoci a info@ezetu.com.',
        },
      ],
    },
  ],
  contactText: 'Qualsiasi domanda su questi termini o sul trattamento dei tuoi dati può essere indirizzata al nostro team.',
};

const termsDE: TermsContent = {
  title: 'Nutzungsbedingungen & Datenschutz',
  subtitle: 'Die Bedingungen, die Ezetu zu einer fairen und authentischen Community machen.',
  blocks: [
    {
      title: 'Urheberrecht (100 % des Autors)',
      points: [
        {
          title: 'Ihre Fotos gehören Ihnen',
          text: 'Sie behalten jederzeit 100 % der Urheberrechte und des geistigen Eigentums an den Fotografien, die Sie auf Ezetu hochladen.',
        },
        {
          title: 'Anzeigelizenz',
          text: 'Durch die Veröffentlichung eines Bildes räumen Sie Ezetu lediglich eine kostenlose, nicht-exklusive und widerrufbare Lizenz ein, es innerhalb der Plattform anzuzeigen (Galerien, Karten, Rankings, Wettbewerbe und Community-Nennungen), wobei stets Ihre Urheberschaft anerkannt wird.',
        },
        {
          title: 'Kein Verkauf an Dritte',
          text: 'Ezetu wird Ihre Fotografien niemals ohne Ihre ausdrückliche Zustimmung an Stockbild-Banken oder Dritte verkaufen oder übertragen. Wenn Sie sich entscheiden, eine Fotografie zu löschen oder Ihr Konto zu schließen, wird sie von der Plattform entfernt.',
        },
      ],
    },
    {
      title: 'Community-Regeln & Anti-KI-Verpflichtung',
      points: [
        {
          title: 'Authentizität vor allem',
          text: 'Ezetu ist eine Community für echte Reise- und Naturfotografie. Es ist strengstens verboten, Bilder hochzuladen, die ganz oder teilweise durch Künstliche Intelligenz generiert wurden, irreführende Fotomontagen oder Fotografien, deren rechtmäßiger Autor Sie nicht sind.',
        },
        {
          title: 'Respekt und Zusammenleben',
          text: 'Beleidigende, illegale Inhalte, Spam, verdeckte Werbung oder respektloses Verhalten gegenüber anderen Community-Mitgliedern oder der natürlichen Umgebung (wir fördern verantwortungsvollen Tourismus, der jedes Gebiet respektiert) werden nicht toleriert.',
        },
        {
          title: 'Moderation',
          text: 'Ezetu behält sich das Recht vor, alle Inhalte zu entfernen, die gegen diese Regeln verstoßen, und Konten zu sperren, die wiederholt gegen die Authentizitätsverpflichtung verstoßen.',
        },
      ],
    },
    {
      title: 'Datenschutz & Datenschutz (DSGVO)',
      points: [
        {
          title: 'Verantwortungsvolle Nutzung Ihrer Daten',
          text: 'Wir verarbeiten Ihre personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO). Wir erheben nur die Informationen, die für die Verwaltung Ihres Kontos, Ihres Reiseprofils, Ihres Passes und den sicheren Betrieb der Plattform zwingend erforderlich sind.',
        },
        {
          title: 'Null Datenverkauf',
          text: 'Wir verkaufen oder vermieten Ihre personenbezogenen Daten niemals an Dritte für kommerzielle Zwecke.',
        },
        {
          title: 'Metadaten und Standort',
          text: 'Fotografien werden nur mit den öffentlichen Reisezielen oder geografischen Punkten verknüpft, die Sie zuordnen möchten; wir schützen Ihre Privatsphäre, indem wir die Offenlegung unnötiger sensibler personenbezogener Daten vermeiden.',
        },
        {
          title: 'Ihre Rechte',
          text: 'Sie können jederzeit Ihre Rechte auf Zugang, Berichtigung, Löschung (Recht auf Vergessenwerden), Einschränkung, Widerspruch und Übertragbarkeit ausüben, indem Sie uns unter info@ezetu.com schreiben.',
        },
      ],
    },
  ],
  contactText: 'Anfragen zu diesen Bedingungen oder zur Verarbeitung Ihrer Daten können an unser Team gerichtet werden.',
};

/* ───────────── EXPORTS ───────────── */

const HELP_MAP: Record<Lang, HelpContent> = {
  EUS: helpEUS,
  ES: helpES,
  EN: helpEN,
  FR: helpFR,
  DE: helpDE,
  IT: helpIT,
};

const TERMS_MAP: Record<Lang, TermsContent> = {
  EUS: termsEUS,
  ES: termsES,
  EN: termsEN,
  FR: termsFR,
  DE: termsDE,
  IT: termsIT,
};

export function getHelpContent(lang: string): HelpContent {
  const code = (lang.toUpperCase()) as Lang;
  return HELP_MAP[code] ?? helpES;
}

export function getTermsContent(lang: string): TermsContent {
  const code = (lang.toUpperCase()) as Lang;
  return TERMS_MAP[code] ?? termsES;
}
