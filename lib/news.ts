export type Article = {
  slug: string
  section: string
  title: string
  summary: string
  image: string
  imageAlt: string
  author: string
  date: string
  readTime: string
  featured?: boolean
  keywords: string[]
  body: string[]
}

export type Section = {
  slug: string
  name: string
  description: string
}

export type Editor = {
  name: string
  role: string
  section: string
  photo: string
  /** Distinción especial dentro de la redacción (Director, Editor de Diseño Web, etc.) */
  note?: string
}

// El orden de las secciones sigue la navegación del periódico.
export const sections: Section[] = [
  {
    slug: "politica",
    name: "Política",
    description:
      "Decisiones de gobierno, Congreso y el pulso del poder, explicados con contexto y rigor.",
  },
  {
    slug: "nacional",
    name: "Nacional",
    description:
      "La actualidad del país al detalle: sociedad, emergencias, regiones y los hechos que definen el día a día de la ciudadanía.",
  },
  {
    slug: "economia",
    name: "Economía",
    description:
      "Mercados, crecimiento, exportaciones y las cifras que afectan al bolsillo y al futuro del país.",
  },
  {
    slug: "internacional",
    name: "Internacional",
    description:
      "Las claves de lo que ocurre en el mundo: conflictos, diplomacia y los grandes acontecimientos que marcan la agenda global.",
  },
  {
    slug: "espectaculos",
    name: "Espectáculos",
    description:
      "Música, televisión, conciertos y la conversación social que marca la agenda cultural.",
  },
  {
    slug: "deportes",
    name: "Deportes",
    description:
      "Competiciones, clásicos y protagonistas del deporte peruano e internacional, con crónicas de cada jornada.",
  },
  {
    slug: "cine",
    name: "Cine",
    description:
      "Estrenos, tráileres, festivales y las grandes producciones de la pantalla grande.",
  },
]

// El orden de los editores sigue el cintillo de secciones del periódico.
export const editors: Editor[] = [
  {
    name: "Adrián Fernández",
    role: "Editor de Internacional",
    section: "internacional",
    photo: "/team/editor-internacional.png",
    note: "Director",
  },
  {
    name: "Jade Villodas",
    role: "Editora de Nacional",
    section: "nacional",
    photo: "/team/editor-nacional.png",
  },
  {
    name: "Jhony Incarroca",
    role: "Editor de Deportes",
    section: "deportes",
    photo: "/team/editor-deportes.png",
  },
  {
    name: "Ángel Gloria",
    role: "Editor de Espectáculos",
    section: "espectaculos",
    photo: "/team/editor-espectaculos-2.png",
  },
  {
    name: "Camila Pérez",
    role: "Editora de Cine",
    section: "cine",
    photo: "/team/editor-espectaculos.png",
  },
  {
    name: "Alejandro Valdez",
    role: "Editor de Política",
    section: "politica",
    photo: "/team/editor-politica.png",
    note: "Editor de Diseño Web",
  },
  {
    name: "Juan Timoteo",
    role: "Editor de Economía",
    section: "economia",
    photo: "/team/editor-economia.png",
  },
]

export const articles: Article[] = [
  // ───────────────────────── INTERNACIONAL ─────────────────────────
  {
    slug: "pacto-la-meca-defensa-colectiva",
    section: "internacional",
    title: "Turquía, Arabia Saudita y Pakistán firman un pacto de defensa colectiva",
    summary:
      "El Pacto de La Meca establece que un ataque armado contra una de las tres naciones será considerado una agresión contra las tres, en un giro histórico para Oriente Medio.",
    image: "/news/pacto-la-meca.png",
    imageAlt: "Banderas de Turquía, Arabia Saudita y Pakistán juntas durante una cumbre diplomática",
    author: "Adrián Fernández",
    date: "1 de septiembre de 2026",
    readTime: "5 min de lectura",
    keywords: ["Turquía", "Arabia Saudita", "Pakistán", "Medio Oriente", "Defensa"],
    body: [
      "El 7 de agosto de 2026, Turquía, Arabia Saudita y Pakistán firmaron el Pacto de La Meca, una alianza trilateral de seguridad y defensa mutua rubricada por los líderes de las tres naciones musulmanas en el Palacio Al-Safa de La Meca. El acuerdo marca un hito en la reconfiguración de las alianzas geopolíticas de Oriente Medio y del mundo islámico.",
      "El pilar central del pacto adopta una cláusula de defensa colectiva inspirada en el Artículo 5 de la OTAN. Las tres naciones establecen de forma explícita que cualquier ataque armado contra una de ellas será considerado una agresión directa a las tres, garantizando la disuasión colectiva en la región.",
      "La alianza combina las mayores fortalezas de cada socio: el capital de Arabia Saudita para financiar proyectos de seguridad, el desarrollo industrial y tecnológico de la defensa turca y la capacidad militar de Pakistán. El acuerdo formaliza e integra pactos bilaterales que ya venían consolidándose.",
      "El origen de esta unión responde a las crecientes tensiones e inestabilidad en Oriente Medio. Ante la inseguridad regional y la percepción de un menor compromiso directo de potencias como Estados Unidos, estas tres potencias medias decidieron construir su propio paraguas de seguridad para proteger sus intereses y recursos estratégicos.",
      "Pese al contundente mensaje defensivo, los tres gobiernos aclararon que el pacto no está dirigido contra ningún país específico —incluido Irán— ni busca reemplazar compromisos internacionales previos. Se presenta como una arquitectura de seguridad regional abierta a la que podrían sumarse otras naciones.",
      "Con la activación del pacto a través de sus primeras reuniones de coordinación en Estambul, el eje Ankara-Riad-Islamabad se posiciona como un bloque militar y político de gran peso global. La Meca no solo sirvió como escenario espiritual para la firma, sino como el punto de partida de un nuevo equilibrio de poder.",
    ],
  },
  {
    slug: "eeuu-iran-intercambio-ataques",
    section: "internacional",
    title: "EE. UU. e Irán vuelven a intercambiar ataques: hay muertos y heridos",
    summary:
      "Irán disparó misiles contra objetivos militares estadounidenses en Jordania y Emiratos en represalia por un ataque a lanzadores iraníes en el estrecho de Ormuz.",
    image: "/news/iran-eeuu.png",
    imageAlt: "Misil en pleno vuelo durante la noche, imagen de tensión militar en Oriente Medio",
    author: "Adrián Fernández",
    date: "1 de septiembre de 2026",
    readTime: "5 min de lectura",
    keywords: ["Irán", "Estados Unidos", "Medio Oriente", "Israel", "Estrecho de Ormuz", "Petróleo"],
    body: [
      "Estados Unidos e Irán intercambiaron ataques en la noche del domingo al lunes tras varias semanas de relativa calma militar. La escalada volvió a poner en el centro de las tensiones al estrecho de Ormuz, la ruta de navegación clave para el suministro mundial de petróleo.",
      "Irán disparó misiles contra objetivos militares estadounidenses en Jordania y Emiratos Árabes Unidos en represalia por un ataque contra lanzadores de cohetes iraníes que, según Estados Unidos, intentaban desplegar minas marinas en el estrecho de Ormuz.",
      "Tras el ataque, el precio mundial del petróleo aumentó un 3%. La ofensiva se produjo pocos días después de que el presidente Donald Trump declarara que el estrecho de Ormuz ya estaba libre de minas, lo que supuso un cambio de planes por parte de la Casa Blanca.",
      "El ataque del domingo fue dirigido a dos lanzacohetes iraníes en la isla de Larak, según el capitán Tim Hawkins, portavoz del Comando Central de Estados Unidos. Al menos dos personas murieron y muchas más resultaron heridas, informó la agencia estatal iraní citando al gobernador del condado de Queshm.",
      "«No buscamos la guerra… Pero ante la agresión, nunca nos quedaremos de brazos cruzados y somos capaces de dar una respuesta decisiva», declaró el presidente Masoud Pezeshkian, según la cadena estatal IRIB.",
      "Para la mañana del lunes, Irán afirmó haber atacado bases utilizadas por el ejército estadounidense en Jordania y Emiratos Árabes Unidos. Este último negó el ataque, condenó la acción como «una escalada peligrosa» y se reservó el derecho a responder.",
    ],
  },
  {
    slug: "leon-xiv-71-anos-vaticano",
    section: "internacional",
    title: "El papa León XIV festeja sus 71 años con un emotivo homenaje en el Vaticano",
    summary:
      "El pontífice fue recibido con cánticos y una torta en la Biblioteca Apostólica del Vaticano, mientras Perú prepara su visita programada para noviembre.",
    image: "/news/leon-xiv.png",
    imageAlt: "Ceremonia de homenaje en el interior de una biblioteca histórica del Vaticano",
    author: "Adrián Fernández",
    date: "14 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Papa León XIV", "Iglesia", "Cristianismo", "Perú", "Vaticano"],
    body: [
      "Este lunes 14 de septiembre, el papa León XIV conmemoró su 71.° aniversario natalicio en las instalaciones de la Biblioteca Apostólica del Vaticano, donde colaboradores y feligreses lo recibieron con un cálido y sorpresivo homenaje.",
      "El líder de la Iglesia católica había acudido a la sede bibliotecaria para encabezar la ceremonia inaugural de una exposición enfocada en la importancia del agua. No obstante, al ingresar, fue recibido entre cánticos de «Cumpleaños feliz» y una torta conmemorativa.",
      "El pontífice, nacido el 14 de septiembre de 1955 en Chicago, manifestó su gratitud ante el detalle. Rememoró a su madre, que trabajó como bibliotecaria, por lo que el espacio tenía un significado especial para él, y reflexionó sobre cómo la providencia divina se manifiesta en pequeños gestos de afecto.",
      "A lo largo del día, las muestras de aprecio se replicaron globalmente. Diversos creyentes congregados en la Plaza de San Pedro enviaron sus felicitaciones, junto a figuras de la política internacional como la jefa de Gobierno italiana, Giorgia Meloni.",
      "En el plano peruano, la fecha coincidió con los preparativos para la llegada del santo padre, programada para noviembre. La Conferencia Episcopal Peruana extendió un saludo e instó a la comunidad católica a prepararse espiritualmente para la histórica cita.",
      "Como parte de las celebraciones, la Orquesta Sinfónica Nacional junto al Coro Nacional de Niños del Perú prepararon un tributo musical dedicado al pontífice, mientras comunidades católicas de múltiples naciones organizaron jornadas de oración por su salud y fortaleza espiritual.",
    ],
  },
  {
    slug: "ben-gvir-declaraciones-gaza",
    section: "internacional",
    title: "«No son ni personas»: Ben-Gvir genera repudio internacional por sus declaraciones sobre Gaza",
    summary:
      "El ministro de Seguridad Nacional de Israel planteó ejecutar asesinatos selectivos en Gaza, unas palabras condenadas por Alemania y la Unión Europea.",
    image: "/news/gaza.png",
    imageAlt: "Vista de edificios dañados en la Franja de Gaza bajo un cielo gris",
    author: "Adrián Fernández",
    date: "24 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: ["Ben-Gvir", "Gaza", "Palestina", "Israel", "Medio Oriente"],
    body: [
      "El 16 de agosto de 2026, el ministro de Seguridad Nacional de Israel, Itamar Ben-Gvir, declaró en un podcast su intención de ejecutar asesinatos selectivos de civiles en Gaza, unas palabras que desataron el repudio internacional.",
      "«Pienso que habría que realizar asesinatos selectivos en Gaza, eliminando entre 30 y 40 personas cada noche. No solo a quienes suponen una amenaza inmediata; hay personas allí que no merecen vivir. No deberían vivir, ni siquiera son personas», afirmó el ministro.",
      "Ben-Gvir expresó además su desacuerdo con el primer ministro Benjamin Netanyahu, quien decidió disminuir la frecuencia de los bombardeos sobre la franja. «Considero que toda Gaza es nuestra», añadió, y planteó enviar a los habitantes de la zona a «sus países de origen».",
      "El canciller alemán, Friedrich Merz, condenó las declaraciones y las catalogó como «llamamientos opuestos a la dignidad humana y al derecho internacional», según el portavoz adjunto de la autoridad.",
      "La portavoz comunitaria de Exteriores, Anitta Hipper, indicó que la Comisión Europea se negó a declarar, pero insistió en que la Unión Europea espera que Israel cumpla en todo momento el derecho internacional humanitario y garantice la protección de los civiles.",
      "Antes de llegar al cargo, Ben-Gvir fue procesado penalmente por su pensamiento supremacista antiárabe y por el apoyo a una organización terrorista con los mismos ideales.",
    ],
  },

  // ───────────────────────── NACIONAL ─────────────────────────
  {
    slug: "lima-sur-inundaciones-vmt",
    section: "nacional",
    title: "Lima Sur bajo el agua: lluvias y colapso del alcantarillado dejan a VMT en emergencia",
    summary:
      "Las intensas lloviznas del 16 de agosto provocaron aniegos y viviendas afectadas. El Gobierno declaró el estado de emergencia en Villa María del Triunfo y Villa El Salvador por 60 días.",
    image: "/news/lima-sur.png",
    imageAlt: "Calle inundada con un bus de transporte público cubierto por el agua en Lima Sur",
    author: "Jade Villodas",
    date: "23 de agosto de 2026",
    readTime: "5 min de lectura",
    keywords: [
      "Lima Sur",
      "Villa María del Triunfo",
      "Villa El Salvador",
      "Lluvias",
      "Inundaciones",
      "Sedapal",
      "Emergencia",
      "DANA Aníbal",
    ],
    body: [
      "Las intensas lloviznas registradas el pasado 16 de agosto provocaron aniegos, viviendas afectadas y graves problemas de tránsito en distintos sectores de Lima Sur. Villa María del Triunfo (VMT) fue uno de los distritos más golpeados, donde el colapso de los sistemas de desagüe agravó la acumulación de agua.",
      "La emergencia se desencadenó durante la tarde y noche del domingo, cuando una persistente llovizna afectó diferentes zonas de Lima Metropolitana. En VMT, sectores como Nueva Esperanza, José Carlos Mariátegui, José Gálvez, Tablada de Lurín e Inca Pachacútec registraron daños en viviendas, vías e infraestructura.",
      "Uno de los puntos más críticos fue el bypass de la avenida Pachacútec, cerca del óvalo Nueva Esperanza, donde el agua acumulada paralizó el tránsito y dejó un bus de transporte público prácticamente cubierto por el aniego. Los vecinos utilizaron sacos de tierra para impedir que el agua ingresara a sus viviendas.",
      "La situación evidenció la vulnerabilidad de la infraestructura urbana frente a precipitaciones poco habituales en Lima. Sedapal desplegó equipos hidrojet y unidades de apoyo para retirar el agua acumulada en las zonas afectadas.",
      "El impacto también alcanzó a las instituciones educativas. La Dirección Regional de Educación de Lima Metropolitana suspendió temporalmente las clases presenciales en colegios afectados de VMT, Villa El Salvador y San Juan de Miraflores.",
      "Finalmente, el domingo 23 de agosto el Gobierno oficializó el Decreto Supremo N.° 117-2026-PCM, mediante el cual declaró el estado de emergencia en Villa María del Triunfo y Villa El Salvador por 60 días, ante los daños ocasionados por las lloviznas asociadas a la proximidad de la DANA «Aníbal».",
    ],
  },
  {
    slug: "keiko-fujimori-visita-puno",
    section: "nacional",
    title: "Keiko Fujimori llega a Puno en medio de cuestionamientos",
    summary:
      "Su visita a Carabaya generó críticas de familiares de víctimas de las protestas de 2023, quienes cuestionaron la forma en que se comunicó su llegada a la región.",
    image: "/news/keiko-puno.png",
    imageAlt: "Feria ganadera de alpacas y llamas en el altiplano de Puno",
    author: "Jade Villodas",
    date: "23 de agosto de 2026",
    readTime: "5 min de lectura",
    keywords: [
      "Puno",
      "Keiko Fujimori",
      "Carabaya",
      "Macusani",
      "Protestas de 2023",
      "Gobierno",
      "Fecasam 2026",
    ],
    body: [
      "La presidenta realizó su primera visita oficial a la región Puno y llegó hasta la provincia de Carabaya, en medio de cuestionamientos por parte de familiares de víctimas de las protestas de 2023. Los dirigentes sostienen que la presencia de la mandataria fue anunciada de manera discreta para evitar manifestaciones en su contra.",
      "Fujimori arribó alrededor de las 10:00 de la mañana al aeropuerto Inca Manco Cápac de Juliaca. Posteriormente, se trasladó en un helicóptero del Ejército hasta Macusani, donde participó en la clausura de la Feria de Alpacas y Llamas (Fecasam 2026).",
      "La visita tomó por sorpresa a parte de los asistentes. Según dirigentes locales, inicialmente se informó que únicamente llegaban ministros de Estado; la presencia de la presidenta se habría confirmado cuando su helicóptero estaba próximo a aterrizar.",
      "Durante la actividad, Fujimori entregó un tractor para el sector alpaquero y anunció proyectos para la región, entre ellos una planta procesadora de fibra de camélidos, el respaldo a la futura Universidad de Carabaya y la construcción de la doble vía Macusani-Nuñoa.",
      "La visita reavivó el reclamo de los familiares de las víctimas de las protestas de enero de 2023. Raúl Samillán, representante de una asociación de víctimas, cuestionó la llegada de la mandataria por la falta de avances en las investigaciones por las muertes registradas.",
      "Fujimori evitó referirse directamente a las demandas de justicia y centró su mensaje en el desarrollo económico de Puno. Reconoció el abandono de algunas zonas del sur y aseguró que su gestión buscará mantener una mayor presencia en la región.",
    ],
  },
  {
    slug: "incendio-valle-del-colca",
    section: "nacional",
    title: "Incendio amenaza sitio arqueológico en el Valle del Colca",
    summary:
      "Las fuertes ráfagas de viento dificultan el control del fuego en Yanque y favorecen su propagación sobre los pastizales secos, cerca del complejo arqueológico de Uyo Uyo.",
    image: "/news/incendio-colca.png",
    imageAlt: "Incendio forestal avanzando sobre pastizales secos en el Valle del Colca",
    author: "Jade Villodas",
    date: "1 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: [
      "Arequipa",
      "Valle del Colca",
      "Yanque",
      "Incendio forestal",
      "Uyo Uyo",
      "Caylloma",
      "COER Arequipa",
      "Emergencia",
    ],
    body: [
      "Un incendio forestal permanece activo en el distrito de Yanque, provincia de Caylloma, Arequipa, y mantiene en alerta a las autoridades debido a su cercanía con el complejo arqueológico de Uyo Uyo. El fuego, iniciado la mañana del sábado 29 de agosto, se extiende por zonas de pastizales naturales y vegetación seca.",
      "Las condiciones climáticas han complicado las labores de control. Los fuertes vientos favorecen la propagación de las llamas y dificultan el trabajo de quienes intentan establecer puntos de contención para impedir que el incendio siga avanzando por el Valle del Colca.",
      "Hasta el momento no se han reportado personas heridas ni viviendas afectadas, y tampoco daños en el complejo arqueológico. Sin embargo, la proximidad del incendio al sitio histórico representa un riesgo por la facilidad con la que el fuego puede desplazarse por los pastizales secos.",
      "El humo se ha extendido hacia diferentes sectores del valle. Según el alcalde de Yanque, José Sarayasi, la presencia de humo alcanza zonas de Coporaque, Yanque y Chivay, y los establecimientos hoteleros cercanos se encuentran a aproximadamente un kilómetro del incendio.",
      "Pobladores y trabajadores municipales se han incorporado a las labores de contención. El alcalde Sarayasi advirtió que los recursos disponibles no son suficientes y solicitó más personal y apoyo, mientras el COER Arequipa mantiene el monitoreo permanente del incendio.",
      "La prioridad continúa siendo contener el fuego antes de que alcance el complejo arqueológico y reducir el riesgo para las comunidades y actividades turísticas cercanas al Valle del Colca.",
    ],
  },
  {
    slug: "monsefu-celebra-leon-xiv",
    section: "nacional",
    title: "Monsefú celebra a León XIV: el recuerdo del obispo que se volvió papa",
    summary:
      "Mientras León XIV cumple 71 años en Roma, en Monsefú, Lambayeque, su cumpleaños vuelve a acompañarse de marinera, gastronomía y tradición.",
    image: "/news/monsefu.png",
    imageAlt: "Celebración tradicional con marinera y gastronomía en Monsefú, Lambayeque",
    author: "Jade Villodas",
    date: "15 de septiembre de 2026",
    readTime: "3 min de lectura",
    keywords: ["León XIV", "Chiclayo", "Monsefú", "Lambayeque", "Papa León XIV", "Perú"],
    body: [
      "El 14 de septiembre tiene un significado especial para Monsefú. Además del cumpleaños del actual pontífice, la fecha coincide con la festividad del Señor Nazareno Cautivo, una de las principales celebraciones religiosas de la localidad.",
      "Durante su etapa al frente de la Diócesis de Chiclayo, Robert Prevost participó en estas actividades y llegó a celebrar allí ocho cumpleaños compartiendo la fecha con sacerdotes, fieles y vecinos.",
      "Este año, la celebración volvió a reunir a vecinos y fieles alrededor de la iglesia San Pedro. La marinera y las expresiones de la cultura lambayecana acompañaron los homenajes, mientras la gastronomía ocupó también un lugar especial.",
      "Entre los platos asociados al antiguo obispo se encuentran el cabrito, el frito de Monsefú, el arroz con pato y el ceviche, además de postres tradicionales. Sus celebraciones, según quienes lo conocieron, solían ser sencillas: un almuerzo, una torta y un momento entre cercanos.",
      "La distancia entre Roma y Lambayeque no ha borrado ese vínculo. Desde que asumió el pontificado, León XIV ha recordado públicamente a la Diócesis de Chiclayo y a la comunidad peruana que acompañó parte importante de su trayectoria pastoral.",
      "La celebración adquiere ahora un significado adicional: el papa tiene previsto regresar al Perú en noviembre, en un viaje que incluirá Chiclayo, la ciudad donde desarrolló una importante etapa de su labor religiosa.",
    ],
  },

  // ───────────────────────── DEPORTES ─────────────────────────
  {
    slug: "universitario-clasico-matute",
    section: "deportes",
    title: "Fiesta crema en Matute: Universitario se quedó con el clásico",
    summary:
      "Universitario venció 2-1 a Alianza Lima en el estadio Alejandro Villanueva con un gol de Lisandro Alzugaray en el tiempo añadido.",
    image: "/news/clasico-matute.png",
    imageAlt: "Jugadores de fútbol celebrando un gol en un estadio lleno durante un clásico",
    author: "Jhony Incarroca",
    date: "24 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: ["Universitario", "Alianza Lima", "Clásico", "Torneo Clausura", "Liga 1", "Fútbol peruano"],
    body: [
      "Universitario de Deportes consiguió una importante victoria frente a Alianza Lima al imponerse por 2-1 en una nueva edición del clásico del fútbol peruano. El encuentro, disputado en el estadio Alejandro Villanueva, se resolvió en los minutos finales.",
      "Desde el inicio, ambos equipos mostraron la importancia del duelo. Alianza Lima buscó aprovechar su condición de local mediante ataques por las bandas, mientras que Universitario apostó por una presión alta y por los espacios de la defensa blanquiazul.",
      "El primer golpe llegó para el cuadro visitante, que se puso en ventaja durante el primer tiempo y obligó a Alianza a adelantar sus líneas. En la segunda mitad, la insistencia local tuvo recompensa con el 1-1 que equilibró el encuentro.",
      "Con el empate, el partido se volvió de ida y vuelta. Cuando parecía que terminaría igualado, Lisandro Alzugaray apareció en el tiempo añadido y convirtió el 2-1, provocando la celebración del conjunto crema.",
      "El resultado significó tres puntos importantes para Universitario, que reforzó su posición en la pelea por los primeros lugares del Torneo Clausura. Para Alianza Lima, la derrota representó un duro golpe por la manera en que se produjo.",
      "El triunfo permite a Universitario llegar con mayor confianza a las siguientes jornadas del campeonato, mientras que Alianza deberá recuperarse rápidamente para no perder terreno en la competencia.",
    ],
  },
  {
    slug: "cienciano-elimina-botafogo",
    section: "deportes",
    title: "Cienciano del Cusco hace historia eliminando a Botafogo en su casa",
    summary:
      "Los dirigidos por Horacio Melgarejo eliminaron a Botafogo en el estadio Nilton Santos y sellaron su clasificación a los cuartos de final de la Copa Sudamericana.",
    image: "/news/cienciano.png",
    imageAlt: "Futbolistas celebrando una clasificación internacional en un estadio brasileño",
    author: "Jhony Incarroca",
    date: "23 de agosto de 2026",
    readTime: "3 min de lectura",
    keywords: ["Cienciano", "Botafogo", "Copa Sudamericana", "Cusco", "Fútbol peruano"],
    body: [
      "Los dirigidos por Horacio Melgarejo eliminaron a Botafogo de Brasil en el estadio Nilton Santos, en Río de Janeiro. Tras un aplastante 5-1 en el partido de ida, la derrota por 1-0 en la vuelta no le alcanzó al cuadro brasileño para revertir la serie.",
      "Con este resultado, Cienciano selló su clasificación a los cuartos de final de la Copa Sudamericana, en una gesta histórica para el club cusqueño.",
      "Pero no todo fue felicidad: al final del partido salieron imágenes en las que se observa al técnico de Cienciano intentar ser agredido por elementos del cuadro brasileño.",
      "En conferencia de prensa, Melgarejo dijo que no se explayaría sobre el tema «porque está todo grabado y no quiero problemas», apuntó.",
      "Por otro lado, Cienciano ya conoce a su siguiente rival en la Copa Sudamericana: se trata del Torque de la primera división uruguaya, ante el cual el equipo del Cusco llega como gran favorito tras su última presentación.",
    ],
  },
  {
    slug: "universitario-remontada-cajamarca",
    section: "deportes",
    title: "A pura garra: Universitario remontó y ganó con autoridad en Cajamarca",
    summary:
      "Los dirigidos por Héctor Cúper reaccionaron tras ir perdiendo 2-0 y terminaron imponiéndose por 4-2 en Cajamarca, manteniéndose como líder del Torneo Clausura.",
    image: "/news/universitario-cajamarca.png",
    imageAlt: "Partido de fútbol nocturno en un estadio de altura en Cajamarca",
    author: "Jhony Incarroca",
    date: "24 de agosto de 2026",
    readTime: "3 min de lectura",
    keywords: ["Universitario", "UTC", "Torneo Clausura", "Liga 1", "Héctor Cúper", "Fútbol peruano"],
    body: [
      "Universitario de Deportes protagonizó una gran remontada este sábado en el estadio Héroes de San Ramón. El conjunto crema venció 4-2 a UTC por la séptima fecha del Torneo Clausura de la Liga 1, luego de comenzar el encuentro con dos goles en contra.",
      "El cuadro cajamarquino sorprendió rápidamente. Luis Arce abrió el marcador a los 16 minutos con un potente remate desde fuera del área, mientras que Abdiel Arroyo amplió la ventaja cuatro minutos después.",
      "Sin embargo, Jairo Concha apareció en el tiempo añadido de la primera mitad y descontó con un preciso tiro libre, devolviendo la esperanza al equipo merengue.",
      "En el segundo tiempo llegó la reacción definitiva. Williams Riveros igualó el encuentro a los 73 minutos y, cuatro minutos después, Álex Valera puso el 3-2. Andy Polo sentenció la remontada a los 80 minutos con el cuarto tanto crema.",
      "Con el 4-2 final, Universitario consiguió tres puntos importantes y alcanzó los 16 puntos, manteniéndose como líder del Torneo Clausura. La remontada demostró la capacidad de reacción del conjunto dirigido por Cúper.",
    ],
  },
  {
    slug: "garcilaso-vence-alianza-lima",
    section: "deportes",
    title: "Garcilaso les bajó el volumen: Alianza cayó en casa",
    summary:
      "Deportivo Garcilaso sorprendió a Alianza Lima y se impuso por 1-0 en el estadio Alejandro Villanueva, terminando con el invicto blanquiazul.",
    image: "/news/garcilaso.png",
    imageAlt: "Ejecución de un penal durante un partido de fútbol en un estadio",
    author: "Jhony Incarroca",
    date: "24 de agosto de 2026",
    readTime: "3 min de lectura",
    keywords: ["Deportivo Garcilaso", "Alianza Lima", "Torneo Clausura", "Liga 1", "Fútbol peruano"],
    body: [
      "Deportivo Garcilaso sorprendió a Alianza Lima y se impuso por 1-0 en el estadio Alejandro Villanueva, por la séptima fecha del Torneo Clausura. El conjunto cusqueño consiguió una importante victoria como visitante y terminó con el invicto de los blanquiazules.",
      "El encuentro fue disputado desde el inicio, con ambos equipos buscando generar ocasiones de peligro. Alianza Lima intentó hacerse fuerte en casa, pero encontró dificultades para superar la defensa de Garcilaso, que mantuvo el orden durante gran parte del partido.",
      "El único gol del encuentro llegó desde el punto de penal. Beto da Silva fue el encargado de ejecutar la pena máxima y convirtió el 1-0 para Deportivo Garcilaso, resultado que se mantendría hasta el final.",
      "La derrota complica a Alianza Lima en la tabla del Torneo Clausura, mientras que Garcilaso reafirma su condición de equipo competitivo lejos de casa.",
    ],
  },

  // ───────────────────────── ESPECTÁCULOS ─────────────────────────
  {
    slug: "cine-2026-taquilla",
    section: "cine",
    title: "El cine de 2026: los grandes éxitos de taquilla y lo que viene",
    summary:
      "Grandes franquicias, historias conocidas y nuevas apuestas han convertido al 2026 en un año de fuerte movimiento para las salas de cine.",
    image: "/news/cine-2026.png",
    imageAlt: "Interior de una sala de cine con una pantalla iluminada y butacas rojas",
    author: "Camila Pérez",
    date: "22 de agosto de 2026",
    readTime: "6 min de lectura",
    keywords: ["Cine", "Taquilla", "Estrenos", "Franquicias", "Películas 2026"],
    body: [
      "El 2026 viene demostrando que las salas de cine todavía tienen mucho que ofrecer. Durante el año, las grandes producciones han conseguido reunir a millones de espectadores y mantener a la taquilla como uno de los principales indicadores del interés del público.",
      "Entre las producciones que más han destacado aparecen Spider-Man: Brand New Day, The Odyssey, Toy Story 5, Michael y Super Mario Galaxy: La película. Aunque pertenecen a géneros diferentes, varias parten de personajes o universos que ya cuentan con una amplia base de seguidores.",
      "Spider-Man: Brand New Day, protagonizada por Tom Holland, se convirtió en uno de los principales protagonistas de la taquilla. Su desempeño vuelve a demostrar el peso que mantienen las películas de superhéroes y los personajes que forman parte de la cultura popular.",
      "El regreso de Toy Story con una quinta entrega muestra otra fórmula que continúa funcionando: la nostalgia. Las franquicias que acompañaron a generaciones anteriores atraen tanto a quienes conocen sus primeras historias como a espectadores más jóvenes.",
      "The Odyssey, dirigida por Christopher Nolan, lleva a la pantalla una de las obras fundamentales de la literatura clásica. Su buena respuesta comercial demuestra que el público también se interesa por historias alejadas de las franquicias de superhéroes.",
      "El calendario todavía guarda algunos de sus estrenos más esperados: Avengers: Doomsday y Dune: Part Three llegarán en diciembre. La combinación de franquicias, nostalgia y nuevas propuestas mantiene la competencia por la taquilla abierta.",
    ],
  },
  {
    slug: "resident-evil-noche-cero",
    section: "cine",
    title: "«Resident Evil: Noche Cero» llega a los cines este septiembre",
    summary:
      "Los seguidores del terror y de los videojuegos podrán regresar al universo de Resident Evil con una nueva película que llegará a las salas el 18 de septiembre de 2026.",
    image: "/news/resident-evil.png",
    imageAlt: "Cartel de cine de terror con ambiente oscuro y tenso",
    author: "Camila Pérez",
    date: "14 de septiembre de 2026",
    readTime: "3 min de lectura",
    keywords: ["Resident Evil", "Cine de terror", "Estrenos 2026", "Videojuegos", "Supervivencia"],
    body: [
      "Los seguidores del terror y de los videojuegos podrán regresar al universo de Resident Evil con «Resident Evil: Noche Cero», una nueva película que llegará a las salas de cine el 18 de septiembre de 2026.",
      "La producción forma parte de una nueva etapa para la franquicia y busca acercarse nuevamente a los elementos que la hicieron conocida: el terror, la supervivencia y el enfrentamiento contra amenazas biológicas.",
      "Uno de los principales atractivos de la película es recuperar el ambiente de tensión característico de Resident Evil. A diferencia de otras entregas, busca conectar tanto con los seguidores de los videojuegos como con el público que se acerca por primera vez a este universo.",
      "La película llegará a las salas peruanas en septiembre, coincidiendo con una temporada en la que el género de terror vuelve a ganar espacio en la cartelera. Los espectadores podrán elegir entre diferentes formatos de exhibición.",
      "Con su llegada a los cines, «Resident Evil: Noche Cero» se suma a los estrenos más esperados del mes y vuelve a poner a la conocida franquicia en el centro de la conversación entre los aficionados al cine de terror.",
    ],
  },
  {
    slug: "gisela-valcarcel-regreso-television",
    section: "espectaculos",
    title: "Gisela Valcárcel anuncia su regreso a la televisión peruana como actriz: «Muy feliz»",
    summary:
      "La exconductora formará parte del elenco de la telenovela «Valentina Valiente», donde compartirá escenas con la protagonista Mayra Goñi.",
    image: "/news/gisela.png",
    imageAlt: "Set de grabación de una telenovela con luces y cámaras",
    author: "Ángel Gloria",
    date: "14 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Gisela Valcárcel", "Televisión", "Telenovela", "Mayra Goñi", "Farándula"],
    body: [
      "Gisela Valcárcel sorprendió al anunciar su regreso a la televisión peruana después de varios años alejada de la pantalla. La exconductora formará parte del elenco de la telenovela «Valentina Valiente» y asumirá una nueva faceta dentro de su trayectoria televisiva.",
      "La popular ‘Señito’ aceptó la invitación del productor general Miguel Zuloaga. Su incorporación representa su regreso a la ficción después de varias décadas y una oportunidad para reencontrarse con la actuación desde una perspectiva distinta a la conducción.",
      "Valcárcel recibió con entusiasmo la propuesta y agradeció a Zuloaga por convocarla. Durante su incorporación también se reencontró con Mayra Goñi, protagonista de la telenovela, y calificó la experiencia como maravillosa.",
      "Consultada sobre la posibilidad de coincidir con Magaly Medina en un set de televisión, la exconductora reconoció que ambas mantienen una percepción formada sobre la otra, relacionada con el negocio audiovisual en el que han desarrollado sus carreras.",
      "Asimismo, se refirió a la entrevista que su hija, Ethel Pozo, sostuvo con Magaly Medina. Valcárcel aclaró que su hija no le pidió autorización y consideró que es normal, pues Ethel es libre de tomar sus propias decisiones.",
    ],
  },
  {
    slug: "cine-peruano-estrenos-septiembre",
    section: "cine",
    title: "El cine peruano se renueva: nuevos estrenos llegan a los cines en septiembre",
    summary:
      "Comedias, documentales, terror y propuestas inspiradas en la cultura peruana forman parte de la nueva cartelera nacional.",
    image: "/news/cine-peruano.png",
    imageAlt: "Marquesina de cine anunciando estrenos de películas peruanas",
    author: "Camila Pérez",
    date: "1 de septiembre de 2026",
    readTime: "3 min de lectura",
    keywords: ["Cine peruano", "Estrenos", "Septiembre", "Cinemark", "Cultura"],
    body: [
      "El cine peruano se prepara para recibir septiembre con una nueva generación de estrenos que llegará a las salas de todo el país. Las producciones nacionales abarcan diferentes géneros, desde la comedia y el romance hasta el documental, el terror y las historias vinculadas con la identidad cultural.",
      "Entre las películas que generan mayor expectativa se encuentra «Separada, pero nunca sola», dirigida por Ani Alva Helfer y protagonizada por Emilia Drago. La comedia sigue a Isabel, una mujer que busca comenzar nuevamente su vida en la selva, y su estreno está previsto para el 3 de septiembre.",
      "La cartelera también incluirá «Ceviche», un documental sobre uno de los platos más representativos de la gastronomía peruana. A esta propuesta se suman películas como «Flor Pucarina, rebelde hasta los huesos» y «Ekeko: El muñeco de la suerte».",
      "La llegada de estas películas demuestra que el cine peruano continúa apostando por historias diversas y por mostrar diferentes aspectos de la cultura y la realidad del país.",
      "Con estos estrenos, las salas peruanas tendrán propuestas dirigidas a públicos diferentes. Septiembre se convierte en una nueva oportunidad para que el público apoye las producciones peruanas.",
    ],
  },
  {
    slug: "venecia-mostra-2026",
    section: "cine",
    title: "Venecia abre el telón: las grandes estrellas del cine llegan a la Mostra 2026",
    summary:
      "Robert Pattinson, Penélope Cruz, Javier Bardem y George Clooney son algunas de las figuras presentes en uno de los festivales cinematográficos más importantes del mundo.",
    image: "/news/venecia.png",
    imageAlt: "Alfombra roja de un festival internacional de cine al atardecer",
    author: "Camila Pérez",
    date: "1 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Festival de Venecia", "Mostra 2026", "Cine internacional", "Estrellas de cine", "Premios"],
    body: [
      "El mundo del cine tiene los ojos puestos en Italia con la llegada de la 83.ª edición del Festival Internacional de Cine de Venecia, uno de los acontecimientos más importantes de la temporada cinematográfica. El festival reúne películas, directores y estrellas antes de la temporada de grandes premios.",
      "Entre los nombres que generan mayor expectativa se encuentran Robert Pattinson, Penélope Cruz, Javier Bardem y George Clooney. La presencia de estas figuras ha aumentado el interés internacional por una edición que combina grandes producciones con propuestas de cine de autor.",
      "Una de las películas más esperadas es «Bunker», dirigida por Florian Zeller y protagonizada por Javier Bardem y Penélope Cruz, quienes interpretan a un matrimonio en crisis. También destaca «Wild Horse Nine», de Martin McDonagh.",
      "La importancia de Venecia va más allá de sus premios: el festival suele ser uno de los primeros escenarios donde las películas comienzan a generar expectativas de cara a la temporada de premios internacionales.",
      "La edición 2026 contará además con Maggie Gyllenhaal como presidenta del jurado de la competencia principal. El festival concluirá con la entrega del León de Oro, máximo reconocimiento del certamen, el 12 de septiembre.",
    ],
  },
  {
    slug: "mana-concierto-lima-40-anos",
    section: "espectaculos",
    title: "Maná regresará al Perú con un único concierto por sus 40 años de trayectoria",
    summary:
      "La banda mexicana de rock en español volverá a Lima el 2 de diciembre de 2026 al Estadio San Marcos, como parte de su gira Vivir Sin Aire Tour 2026.",
    image: "/news/mana.png",
    imageAlt: "Escenario de un concierto de rock con luces y una gran multitud",
    author: "Ángel Gloria",
    date: "24 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: ["Maná", "Concierto", "Lima", "Rock en español", "Música"],
    body: [
      "La banda mexicana de rock en español Maná volverá a Lima el miércoles 2 de diciembre de 2026 para ofrecer un único concierto en el Estadio San Marcos, como parte de su gira Vivir Sin Aire Tour 2026. El espectáculo está previsto para las 8:00 p. m.",
      "Maná, agrupación formada en Guadalajara y liderada por Fher Olvera, está integrada también por Álex González, Sergio Vallín y Juan Calleros. A lo largo de 40 años se ha consolidado como uno de los principales referentes del rock latinoamericano.",
      "Durante su presentación en Lima, el grupo repasará diferentes etapas de su carrera e interpretará canciones como «Rayando el sol», «Oye mi amor», «Vivir sin aire» y «Mariposa traicionera».",
      "Esta será la única presentación de Maná en el Perú durante 2026 y formará parte de su recorrido por Latinoamérica, que también contempla ciudades como Bogotá, Santiago de Chile, Buenos Aires y Ciudad de México.",
      "Las entradas se encuentran disponibles a través de Teleticket, distribuidas en diferentes zonas del Estadio San Marcos, con precios regulares que van desde S/ 184 para Tribuna Norte hasta S/ 863 para Primeras Filas. El ingreso está permitido para mayores de ocho años.",
    ],
  },
  {
    slug: "la-bella-luz-concierto-chincha",
    section: "espectaculos",
    title: "La Bella Luz interrumpe concierto en Chincha tras agresión de un asistente en pleno escenario",
    summary:
      "La presentación de la agrupación de cumbia terminó abruptamente luego de que un asistente presuntamente lanzara agua hacia los músicos durante un concierto gratuito en El Carmen.",
    image: "/news/bella-luz.png",
    imageAlt: "Orquesta de cumbia tocando en un escenario al aire libre de noche",
    author: "Ángel Gloria",
    date: "1 de septiembre de 2026",
    readTime: "3 min de lectura",
    keywords: ["La Bella Luz", "Cumbia", "Conciertos", "Chincha", "Farándula"],
    body: [
      "La presentación de la agrupación de cumbia La Bella Luz terminó abruptamente luego de que un asistente presuntamente lanzara agua hacia los músicos mientras se encontraban sobre el escenario. El hecho ocurrió durante un concierto gratuito en El Carmen, Chincha.",
      "La orquesta se presentó el jueves 27 de agosto en la Plaza de Armas de El Carmen como parte de la Gran Serenata por el 110.° aniversario del distrito. El concierto transcurría con normalidad hasta que uno de los asistentes habría lanzado agua hacia los integrantes de la agrupación.",
      "Las imágenes difundidas en redes muestran al animador reaccionar sorprendido: «¿Qué ha pasado?», preguntó, mientras uno de los músicos respondió: «Han tirado agua». Ante la situación, el cantante pidió identificar y retirar al responsable.",
      "Después del incidente, los integrantes de La Bella Luz decidieron no continuar con el espectáculo. El animador agradeció a los asistentes y lamentó que el comportamiento de una persona afectara el desarrollo del concierto.",
      "Finalmente, la agrupación dio por concluida su presentación y se retiró del lugar. El episodio quedó registrado en video y se viralizó en redes sociales, generando reacciones entre los usuarios.",
    ],
  },
  {
    slug: "peru-mundial-comidas-ceviche",
    section: "espectaculos",
    title: "Perú avanza a cuartos de final del Mundial de Comidas y ya tiene rival para el ceviche",
    summary:
      "Perú clasificó a cuartos de final del Mundial de Comidas tras imponerse a Honduras con casi tres millones de votos. El ceviche se enfrentará a Guatemala.",
    image: "/news/ceviche.png",
    imageAlt: "Plato de ceviche peruano servido con limón y cancha",
    author: "Ángel Gloria",
    date: "1 de septiembre de 2026",
    readTime: "3 min de lectura",
    keywords: ["Ibai Llanos", "Ceviche", "Comida", "Mundial de Comidas", "Perú"],
    body: [
      "Perú clasificó a los cuartos de final del Mundial de Comidas tras imponerse a Honduras con casi tres millones de votos. El ceviche continúa en competencia y se enfrentará a Guatemala en la siguiente etapa del concurso organizado por el creador de contenido español Ibai Llanos.",
      "Este lunes 31 de agosto, Ibai Llanos dio a conocer los resultados de los octavos de final, competencia en la que los usuarios votan por sus platillos favoritos a través de TikTok, YouTube e Instagram. El ceviche peruano superó al platillo de Honduras con una amplia cantidad de votos.",
      "«Espectacular participación de Honduras, pero los peruanos avanzan de ronda. Quieren el bicampeonato con casi tres millones de votos», señaló Ibai Llanos al anunciar la clasificación.",
      "Con la culminación de los octavos, quedaron definidos los ocho países que continúan en competencia. Las llaves de cuartos quedaron conformadas por Colombia frente a Venezuela, Perú contra Guatemala, Argentina ante Uruguay y Bolivia frente a Ecuador.",
      "La clasificación mantiene al ceviche como uno de los principales protagonistas de esta competencia gastronómica digital, que depende de la participación de los usuarios mediante sus votaciones.",
    ],
  },
  {
    slug: "zully-matrimonio-streamer",
    section: "espectaculos",
    title: "La tiktoker Zully sorprende al casarse con un streamer extranjero tras tres meses de conocerse",
    summary:
      "La influencer Zully se casó en Puruchuco, Ate, con el streamer mexicano Nando, en una boda transmitida en vivo que superó el millón de visualizaciones.",
    image: "/news/zully.png",
    imageAlt: "Ceremonia de boda simbólica con transmisión en vivo y público de fans",
    author: "Ángel Gloria",
    date: "22 de agosto de 2026",
    readTime: "3 min de lectura",
    keywords: ["Zully", "Influencers", "Redes sociales", "Matrimonio", "Farándula"],
    body: [
      "La influencer Zully se casó a los 21 años con un joven creador de contenido en Puruchuco, Ate, en una ceremonia que estuvo marcada por la presencia de fans y por la irrupción del exchico reality Piero Arenas.",
      "Zully sorprendió a sus seguidores al contraer matrimonio con el popular streamer mexicano Nando, a quien, según reveló, conoció hace apenas tres meses. La boda simbólica reunió a los padres de la tiktoker y a otros influencers reconocidos.",
      "La ceremonia, transmitida en vivo por el canal de Kick de Zully y que superó el millón de visualizaciones, vivió un momento polémico cuando dos influencers irrumpieron para oponerse a la unión y exponer al mexicano.",
      "Según el exchico reality, el extranjero conversó con su exnovia antes de la boda. Nando admitió que sí lo hizo, pero aclar�� que fue para contarle sobre su nueva etapa personal. Posteriormente, el personal de seguridad retiró a los dos influencers y la ceremonia continuó.",
      "Abigail Sulamita Salazar Cotrina, nombre real de Zully, acumula más de 3 millones de seguidores solo en TikTok y se desempeña también como empresaria. Su esposo ‘Nando’ es un influencer muy conocido en México.",
    ],
  },

  // ───────────────────────── POLÍTICA ─────────────────────────
  {
    slug: "keiko-reforma-malla-curricular",
    section: "politica",
    title: "Keiko Fujimori anuncia reforma de la malla curricular escolar: «sin ningún tipo de ideología»",
    summary:
      "La presidenta presentó el Plan Nacional de Educación 2026-2031 y anunció que la nueva currícula escolar no tendrá ningún tipo de ideología.",
    image: "/news/reforma-educativa.png",
    imageAlt: "Aula de clases peruana con carpetas y una pizarra al fondo",
    author: "Alejandro Valdez",
    date: "14 de septiembre de 2026",
    readTime: "5 min de lectura",
    keywords: ["Keiko Fujimori", "Educación", "Currícula escolar", "Minedu", "PISA", "Fuerza Popular"],
    body: [
      "La presidenta Keiko Fujimori presentó el Plan Nacional de Educación 2026-2031 y anunció que la nueva currícula escolar no tendrá ningún tipo de ideología. El ministro de Educación, José Antonio Chang, afirmó que el Gobierno retirará de las aulas toda interpretación ideológica de la historia.",
      "Como ejemplo, Chang cuestionó que un sector denomine «guerra civil» al periodo del terrorismo interno y sostuvo que ese hecho debe enseñarse como un episodio histórico. El ministro anunció además un proceso de capacitación y evaluación docente ligado al ascenso en la Carrera Pública Magisterial.",
      "El anuncio se inscribe en un discurso que Fujimori y su partido sostienen desde la campaña. La discusión se cruza con la Ley 31745, vigente desde 2023, que obliga a incluir en el currículo contenidos sobre la historia de la subversión y el terrorismo ocurridos entre 1980 y 2000.",
      "Especialistas advierten que el anuncio todavía carece de precisión. El exministro Ricardo Cuenca planteó que el Minedu debe definir qué entiende por un currículo sin ideología.",
      "La exministra Flor Pablo pidió que la reforma no reduzca la historia del conflicto armado a una sola versión: los estudiantes, dijo, deben conocer tanto el terror causado por Sendero Luminoso y el MRTA como las violaciones de derechos humanos cometidas por agentes del Estado.",
      "El anuncio se dio dentro de un plan que incluye la construcción de 2000 colegios y la modernización de otros 3000, además de una evaluación docente con nota mínima de 14. El Gobierno vincula la reforma con los resultados de la prueba PISA 2025.",
    ],
  },
  {
    slug: "salida-pacto-san-jose",
    section: "politica",
    title: "¡Por séptima vez!, plantean la salida del Pacto de San José",
    summary:
      "Un proyecto de ley de Renovación Popular busca facultar al Ejecutivo a denunciar la Convención Americana sobre Derechos Humanos, en una nueva iniciativa de una larga cadena.",
    image: "/news/pacto-san-jose.png",
    imageAlt: "Sala del pleno del Congreso de la República del Perú durante una sesión",
    author: "Alejandro Valdez",
    date: "24 de agosto de 2026",
    readTime: "5 min de lectura",
    keywords: ["Renovación Popular", "Corte IDH", "Pacto San José", "Derechos Humanos", "Congreso"],
    body: [
      "El diputado Gustavo Segura Figueroa, de la bancada Renovación Popular, presentó el 15 de agosto el Proyecto de Ley 00039/2026-2031-CD, que busca facultar al Poder Ejecutivo a denunciar la Convención Americana sobre Derechos Humanos, conocida como el Pacto de San José de Costa Rica.",
      "La propuesta, respaldada por otros diez legisladores de su bancada, se suma a una larga cadena de iniciativas —al menos seis desde 2022— que han buscado apartar al país del sistema interamericano de derechos humanos.",
      "De prosperar, el proyecto autorizaría al Ejecutivo a iniciar el retiro del Perú de la competencia contenciosa de la Corte Interamericana de Derechos Humanos (Corte IDH). El texto precisa que la denuncia no afectaría las obligaciones ya asumidas antes de que surta efecto.",
      "En la exposición de motivos, Segura Figueroa argumenta que los fallos de la Corte IDH han limitado la capacidad del Estado para enfrentar el terrorismo, la extorsión y el sicariato. Cita cifras del INEI según las cuales la percepción de inseguridad urbana llegó a 83,2 % entre noviembre de 2025 y abril de 2026.",
      "Los autores sostienen que denunciar el tratado no equivale a desconocer los derechos humanos, pues estos seguirían amparados por la Constitución y la legislación nacional. La iniciativa deberá ser evaluada por la Comisión de Constitución antes de debatirse en el Pleno.",
    ],
  },
  {
    slug: "congreso-exige-renuncia-oscar-arriola",
    section: "politica",
    title: "Bancadas del Congreso exigen la renuncia de Óscar Arriola tras masacre en Trujillo",
    summary:
      "Legisladores de Ahora Nación, Renovación Popular y Juntos por el Perú pidieron la salida inmediata del comandante general de la PNP; otros defienden su continuidad.",
    image: "/news/arriola.png",
    imageAlt: "Alto mando de la Policía Nacional del Perú durante una conferencia de prensa",
    author: "Alejandro Valdez",
    date: "1 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Óscar Arriola", "PNP", "Congreso", "Trujillo", "Seguridad", "Renovación Popular"],
    body: [
      "La permanencia del comandante general de la Policía Nacional del Perú (PNP), Óscar Arriola, quedó nuevamente cuestionada luego de que varias bancadas del Congreso exigieran su renuncia inmediata tras el asesinato de cuatro personas y el secuestro de un empresario minero en Trujillo.",
      "El pedido lo encabezaron los diputados de Ahora Nación, quienes calificaron el ataque como «la prueba más brutal del fracaso de la conducción policial» y sostuvieron que la continuidad de Arriola «ya no es sostenible».",
      "Renovación Popular se sumó a la exigencia. La diputada Norma Yarrow calificó a Arriola como el «custodio» del prófugo Vladimir Cerrón y afirmó que «no ha dado la talla para el cargo». Su colega Frank Krklec pidió al Gobierno definir públicamente su respaldo.",
      "Desde Juntos por el Perú, el diputado Marino Lavado también reclamó su salida «ante la falta de resultados en la lucha contra la criminalidad».",
      "No todas las voces coinciden. José Baella, oficial general de la PNP e integrante de Renovación Popular, advirtió que remover a Arriola no resolvería la crisis de seguridad, sino que generaría un reordenamiento interno que retrasaría la respuesta policial.",
      "El ataque que reavivó el debate ocurrió la madrugada del domingo en la avenida Húsares de Junín, en Trujillo. Arriola asumió el cargo en octubre de 2025 bajo la Ley 31570, que fija dos años de mandato para el comandante general.",
    ],
  },
  {
    slug: "ejecutivo-facultades-legislativas-66-medidas",
    section: "politica",
    title: "Ejecutivo presenta ante el Congreso pedido de facultades legislativas por 66 medidas",
    summary:
      "Keiko Fujimori pidió celeridad al Legislativo para aprobar un paquete centrado en seguridad ciudadana, simplificación de trámites y respuesta al Fenómeno El Niño.",
    image: "/news/facultades.png",
    imageAlt: "Fachada del Palacio Legislativo del Perú vista desde la plaza",
    author: "Alejandro Valdez",
    date: "1 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Facultades legislativas", "Congreso", "Keiko Fujimori", "Seguridad ciudadana", "PCM"],
    body: [
      "El Poder Ejecutivo presentó formalmente ante la Cámara de Diputados un proyecto de ley para que el Congreso le delegue facultades legislativas por 120 días, con 66 solicitudes agrupadas en ocho ejes, entre ellos seguridad ciudadana, sistema penitenciario y simplificación administrativa.",
      "La iniciativa, aprobada por el Consejo de Ministros el jueves 27 de agosto y remitida por la Presidencia del Consejo de Ministros (PCM), busca «fortalecer la gestión pública y atender las principales prioridades del país».",
      "Dentro del bloque de seguridad, el Ejecutivo plantea modificar el Código Penal y el Código Procesal Penal, declarar a las organizaciones criminales como organizaciones terroristas y habilitar la participación excepcional de las Fuerzas Armadas en la seguridad externa de los penales.",
      "La presidenta Keiko Fujimori pidió al Congreso «celeridad» para debatir el pedido. El ministro de Justicia, Ernesto Álvarez, señaló que el paquete busca además corregir el hacinamiento penitenciario.",
      "El proyecto abarca otros siete ejes: MYPE, empleo, simplificación administrativa y transformación digital, desarrollo productivo y ambiental, régimen tributario, reforma del Estado, y vivienda y saneamiento.",
      "Antes de convertirse en ley, el proyecto debe ser revisado por la comisión correspondiente, pasar al pleno de la Cámara de Diputados y obtener el aval de la Cámara de Senadores para que las facultades sean delegadas por 120 días calendario.",
    ],
  },
  {
    slug: "keiko-fujimori-empresario-argentino",
    section: "politica",
    title: "Keiko Fujimori confirma encuentro con empresario argentino",
    summary:
      "La presidenta reconoció haber acudido a un spa de La Victoria, donde coincidió con Damián Valenzuela, y negó una relación sentimental con él.",
    image: "/news/keiko-empresario.png",
    imageAlt: "Micrófonos de prensa frente a un atril durante una declaración oficial",
    author: "Camila Pérez",
    date: "24 de agosto de 2026",
    readTime: "3 min de lectura",
    keywords: ["Keiko Fujimori", "Damián Valenzuela", "Política peruana", "Gobierno"],
    body: [
      "La presidenta Keiko Fujimori se pronunció este 24 de agosto luego de la difusión de imágenes que la muestran junto al empresario argentino Damián Valenzuela. El caso fue difundido por el semanario Hildebrandt en sus trece y generó repercusión en redes sociales y medios.",
      "Según el reportaje, Fujimori y Valenzuela habrían coincidido en distintas oportunidades en el spa Tomyko, ubicado en Santa Catalina, La Victoria. Las imágenes generaron especulaciones sobre la naturaleza del vínculo entre ambos.",
      "Ante la polémica, Fujimori confirmó que acudió al establecimiento y reconoció su encuentro con el empresario. Sin embargo, negó mantener una relación sentimental con Valenzuela y aseguró que su compromiso está centrado en sus funciones como presidenta.",
      "Valenzuela también fue relacionado con el entorno político de Fujimori durante la campaña electoral. El ministro Marco Vinelli confirmó que el empresario participó en conversaciones con la entonces candidata, aunque aclaró que no podía afirmar que fuera su asesor.",
      "El caso ha puesto nuevamente a la presidenta en el centro de la atención pública. Hasta el momento, no existe confirmación de una relación sentimental más allá de los encuentros reconocidos.",
    ],
  },

  // ───────────────────────── ECONOMÍA ─────────────────────────
  {
    slug: "senado-directores-bcrp",
    section: "economia",
    title: "Senado evaluará a 12 candidatos para elegir a tres nuevos directores del BCRP",
    summary:
      "Seis grupos parlamentarios presentaron sus propuestas para completar el directorio del Banco Central de Reserva para el periodo 2026-2031.",
    image: "/news/bcrp.png",
    imageAlt: "Fachada institucional del Banco Central de Reserva del Perú",
    author: "Juan Timoteo",
    date: "14 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["BCRP", "Julio Velarde", "Senado", "Economía", "Finanzas", "Perú"],
    body: [
      "El Senado inició el proceso para seleccionar a tres nuevos integrantes del directorio del Banco Central de Reserva del Perú (BCR), entre 12 candidatos propuestos por seis grupos parlamentarios. La elección permitirá completar el equipo que dirigirá la política monetaria durante el periodo 2026-2031.",
      "El nuevo directorio del BCR estará conformado por siete miembros. Cuatro son designados por el Poder Ejecutivo, que ratificó a Julio Velarde Flores como presidente y designó a Luis Miguel Palomino, Inés Marylin Choy y Gustavo Adolfo Yamada como directores. Los otros tres deben ser elegidos por el Senado.",
      "Las candidaturas fueron presentadas por seis grupos parlamentarios. Renovación Popular propuso a Juan José Marthans; Buen Gobierno, a Javier Escobal, José Antonio Fernández-Baca y Santiago Roca; y Fuerza Popular, a Diego Macera, Oswaldo Molina y José Ricardo Stok.",
      "Juntos por el Perú propuso a Oscar Dancourt, Kurt Burneo y Raúl Mauro. Completan la lista Alejandro Granda, propuesto por Ahora Nación, y Gonzalo Alegría, presentado por el Partido Cívico Obras.",
      "La selección estará a cargo inicialmente de la Comisión de Procedimientos Especiales, que evaluará la trayectoria de los postulantes hasta el 18 de septiembre; las entrevistas se realizarán entre el 22 y el 24 del mismo mes.",
      "La elección tendrá relevancia para la economía peruana debido al papel del BCR en la conducción de la política monetaria y la estabilidad de precios. Los nuevos directores acompañarán a Velarde durante el próximo periodo institucional.",
    ],
  },
  {
    slug: "peru-crecimiento-2026-america-latina",
    section: "economia",
    title: "Perú crecería 3,4% en 2026 y superaría el promedio económico de América Latina",
    summary:
      "El MEF proyecta que el PBI peruano crecerá 3,4% este año, por encima del 2,2% estimado para América Latina, impulsado por el consumo privado y las exportaciones.",
    image: "/news/pbi.png",
    imageAlt: "Gráfico de crecimiento económico con flechas ascendentes sobre fondo azul",
    author: "Juan Timoteo",
    date: "31 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: [
      "PBI",
      "Crecimiento económico",
      "Perú",
      "América Latina",
      "MEF",
      "Exportaciones",
      "Economía peruana",
    ],
    body: [
      "El Ministerio de Economía y Finanzas proyecta que el PBI peruano crecerá 3,4% este año, por encima del 2,2% estimado para América Latina. El consumo privado, la demanda interna y las exportaciones serían algunos de los principales soportes de la economía nacional.",
      "La proyección coloca al Perú entre las economías con mejor desempeño de la región. Según el MMM 2027-2030, el crecimiento peruano sería superior al de Argentina (2,9%), Colombia (2,5%), Brasil (1,9%), Chile (1,7%) y México (1,2%).",
      "El resultado estaría respaldado principalmente por la demanda interna, el consumo privado y las exportaciones. El MEF también señala que la mejora gradual de la confianza económica favorecería el desempeño nacional.",
      "En contraste, el crecimiento de América Latina y el Caribe enfrentaría un escenario externo menos favorable, con factores como el mayor costo de la energía, la desaceleración del comercio mundial y el limitado espacio fiscal de varios países.",
      "Para el periodo 2027-2030, el MEF proyecta que la región crecería en promedio 2,5%, asociada a menores tasas de interés internacionales y la normalización de las cadenas de suministro.",
      "Persisten desafíos estructurales como la baja productividad, la informalidad laboral y las brechas de infraestructura. Para lograr un crecimiento sostenido, el MEF considera necesario avanzar en inversión, formalización laboral y acceso al financiamiento.",
    ],
  },
  {
    slug: "peru-exportaciones-comunidad-andina",
    section: "economia",
    title: "Perú lideró las exportaciones de la Comunidad Andina y superó los US$90.000 millones en 2025",
    summary:
      "El país alcanzó US$90.472 millones en ventas al exterior y concentró cerca del 48% de las exportaciones de Bolivia, Colombia, Ecuador y Perú.",
    image: "/news/exportaciones.png",
    imageAlt: "Puerto de contenedores con grúas cargando mercancía para exportación",
    author: "Juan Timoteo",
    date: "31 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: [
      "Perú",
      "Exportaciones",
      "Comunidad Andina",
      "Economía",
      "Comercio exterior",
      "Minería",
      "China",
    ],
    body: [
      "Perú se consolidó como el principal exportador de la Comunidad Andina durante 2025, con ventas al exterior por US$90.472 millones, cifra que representa cerca del 48% de las exportaciones conjuntas de Bolivia, Colombia, Ecuador y Perú.",
      "Las exportaciones de los cuatro países alcanzaron US$187.461 millones, un crecimiento de 11,5% frente al periodo anterior. Colombia ocupó el segundo lugar con US$50.205 millones, seguida de Ecuador con US$37.152 millones y Bolivia con US$9.633 millones.",
      "El desempeño peruano estuvo impulsado por sus sectores tradicionales. Las ventas mineras llegaron a US$59.450 millones, mientras que los envíos agropecuarios sumaron US$15.066 millones y los pesqueros alcanzaron US$4.654 millones.",
      "China se consolidó como el principal destino de las exportaciones del bloque, con el 22,1% de las ventas externas, seguido de Estados Unidos (17,3%) y la Unión Europea (13,2%).",
      "El comercio entre los propios países andinos también avanz������: las ventas intracomunitarias llegaron a US$9.842 millones, un aumento de 8%. Perú registró el mayor crecimiento de sus exportaciones hacia Bolivia, Colombia y Ecuador, con 14,4%.",
      "Finalmente, las importaciones del bloque sumaron US$177.420 millones, dejando un superávit comercial de US$10.041 millones, el segundo año consecutivo con saldo favorable para la Comunidad Andina.",
    ],
  },
  {
    slug: "emergencia-abastecimiento-glp-sur",
    section: "economia",
    title: "Gobierno declara en emergencia el abastecimiento de GLP en cinco regiones del sur",
    summary:
      "La medida tendrá una vigencia de hasta 30 días y comprende a Arequipa, Cusco, Puno, Moquegua y Tacna. Las lluvias y el cierre de carreteras dificultan el traslado del combustible.",
    image: "/news/glp.png",
    imageAlt: "Camión cisterna de combustible detenido en una carretera afectada por lluvias",
    author: "Juan Timoteo",
    date: "22 de agosto de 2026",
    readTime: "4 min de lectura",
    keywords: ["GLP", "Emergencia", "Sur del Perú", "Minem", "Combustible", "Lluvias"],
    body: [
      "El Gobierno declaró en emergencia, por hasta 30 días, el abastecimiento de Gas Licuado de Petróleo (GLP) en cinco regiones del sur del país debido a las dificultades para transportar el combustible por las carreteras afectadas por las intensas lluvias.",
      "El Ministerio de Energía y Minas (Minem) declaró en emergencia el abastecimiento de GLP en Arequipa, Cusco, Puno, Moquegua y Tacna, mediante la Resolución Ministerial N.° 360-2026-MINEM/DM, con una vigencia de hasta 30 días calendario.",
      "La decisión responde a los problemas generados por las lluvias, que ocasionaron daños y cierres en vías utilizadas para transportar GLP desde Pisco y Callao hacia el sur. Estas restricciones han reducido el ingreso de cisternas y la disponibilidad del combustible.",
      "El impacto alcanza a distintos sectores: familias, restaurantes, comerciantes y transportistas podrían enfrentar dificultades si la interrupción del suministro continúa. Otro factor de riesgo es la limitada capacidad de almacenamiento de las regiones afectadas.",
      "Ante este escenario, el Osinergmin deberá evaluar medidas transitorias para garantizar la continuidad del suministro y reforzar la fiscalización para evitar el acaparamiento, la especulación y aumentos injustificados en el precio.",
      "La emergencia evidencia una vulnerabilidad de la economía del sur: su dependencia del transporte terrestre para recibir combustible. La situación plantea la necesidad de fortalecer la capacidad de almacenamiento y contar con reservas ante futuras interrupciones.",
    ],
  },
  // ───────────────────────── POLÍTICA ─────────────────────────
  {
    slug: "mocion-interpelacion-ministro-educacion-44-preguntas",
    section: "politica",
    title: "Bancadas de oposición presentan moción de interpelación contra el ministro de Educación con un pliego de 44 preguntas",
    summary: "Veinticuatro diputados de las bancadas Ahora Nación, Juntos por el Perú y el Partido Cívico Obras presentaron una moción para interpelar al ministro de Educación, José Antonio Chang, mediante un pliego de 44 preguntas sobre designaciones, la Sunedu y la crisis en la Universidad Nacional de Ucayali.",
    image: "/news/mocion-interpelacion-minedu.jpg",
    imageAlt: "Fachada del Congreso de la República durante la presentación de la moción",
    author: "Alejandro Valdez",
    date: "21 de septiembre de 2026",
    readTime: "5 min de lectura",
    keywords: ["Sector Educación", "Congreso del Perú", "José Chang", "Moción de interpelación", "Keiko Fujimori"],
    body: [
      "Veinticuatro diputados de las bancadas Ahora Nación, Juntos por el Perú y el Partido Cívico Obras presentaron este lunes una moción para interpelar al ministro de Educación, José Antonio Chang, mediante un pliego de 44 preguntas. El documento —Moción de Orden del Día N.º 00424-2026-2031-CD— ingresó la tarde de este 21 de septiembre a la Cámara de Diputados y exige explicaciones sobre designaciones en el sector, la gestión de la Sunedu y la crisis en la Universidad Nacional de Ucayali.",
      "Las 44 preguntas se agrupan en ocho bloques temáticos. Uno de ellos aborda la crisis institucional de la Universidad Nacional de Ucayali y la afectación a la continuidad de las actividades académicas. Otro cuestiona el archivamiento de una denuncia por presunto hostigamiento sexual contra el superintendente de la Sunedu, Vicente Espinoza, así como la anulación de multas impuestas a la Universidad de San Martín de Porres.",
      "El pliego también observa los criterios de idoneidad aplicados en varias designaciones del sector: la secretaria general del Minedu, Doris Gavilano; el director ejecutivo del Pronied, Pedro Morales; y el nombramiento de exparlamentarias como Tania Ramírez, en la Derrama Magisterial, y Diana Gonzáles, en el Pronabec. También se pregunta por la designación de Esdras Medina como asesor de confianza en el Cosusineace.",
      "Otros puntos del cuestionario abordan lo que los firmantes llaman un cambio unilateral del régimen laboral docente, la demora en reglamentar la Ley N.º 32581 sobre pensiones del magisterio cesante y, en una sola pregunta, los cambios anunciados en la currícula escolar para retirar ‘todo tipo de ideología’, anuncio que Chang hizo la semana pasada.",
      "De acuerdo con el Reglamento del Congreso, el Pleno de la Cámara de Diputados deberá dar cuenta de la moción en su próxima sesión y someterla a votación en la sesión siguiente. Se trata de la cuarta moción de interpelación presentada por la oposición contra un ministro del gobierno de Keiko Fujimori, y la primera dirigida al titular de Educación. Hasta ahora, solo prosperó la interpelación al ministro del Interior, César Astudillo, quien respondió su pliego la semana pasada; la del ministro de Defensa no fue admitida y la de Energía y Minas quedó sin efecto tras el retiro de una firma.",
    ],
  },

  // ───────────────────────── NACIONAL ─────────────────────────
  {
    slug: "moquegua-inia-protege-olivo",
    section: "nacional",
    title: "Moquegua: INIA protege cultivos de olivo ante El Niño",
    summary: "El INIA inició la transferencia de tecnologías agrícolas a productores de olivo de Moquegua para reducir el impacto de las altas temperaturas asociadas al fenómeno El Niño, buscando conservar la calidad del suelo e incrementar la cosecha.",
    image: "/news/moquegua-inia-protege-olivo.png",
    imageAlt: "Productores de olivo de Moquegua recibiendo capacitación técnica en el campo",
    author: "Jade Villodas",
    date: "21 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["INIA", "Moquegua", "olivo", "agricultura", "Fenómeno El Niño", "altas temperaturas", "productores", "tecnología agraria", "cultivos", "prevención", "cambio climático"],
    body: [
      "El Instituto Nacional de Innovación Agraria (INIA) inició la transferencia de tecnologías agrícolas a productores de olivo de Moquegua con el objetivo de reducir los posibles efectos de las altas temperaturas asociadas al fenómeno El Niño.",
      "Las herramientas fueron desarrolladas en la Estación Experimental Agraria Moquegua y están orientadas principalmente al cuidado de los cultivos y del suelo. Entre las técnicas brindadas se encuentran el uso de microorganismos beneficiosos, la selección de materia orgánica, la producción de plantones de olivo, el monitoreo de plagas y el análisis de la fertilidad del suelo.",
      "Según la información difundida por el INIA, la aplicación de estas tecnologías podría reducir aproximadamente en 50 % el impacto de las altas temperaturas sobre las plantas y contribuir a conservar la calidad nutritiva del suelo. Asimismo, se busca incrementar en más de 40 % los niveles de cosecha.",
      "La transferencia se realizó durante una jornada de capacitación dirigida a productores olivícolas. En la actividad también participaron especialistas del Servicio Nacional de Sanidad Agraria (SENASA), Agrorural y la Autoridad Local del Agua de Moquegua.",
      "Durante la jornada se trataron temas relacionados con el manejo de plagas y enfermedades, el uso de abonos orgánicos y la identificación de posibles puntos críticos frente a los efectos del fenómeno El Niño. El INIA también viene desarrollando capacitaciones sobre el análisis de la calidad del suelo y el uso adecuado de productos agrícolas.",
      "Las acciones forman parte de las medidas que el Ministerio de Desarrollo Agrario y Riego (Midagri) viene impulsando frente al escenario climático. Estas incluyen también obras de almacenamiento de agua, reservorios y zanjas de infiltración, además de otras medidas destinadas a reducir los efectos sobre las actividades agrícolas y ganaderas.",
    ],
  },
  {
    slug: "marina-guerra-rechazo-liceo-naval",
    section: "nacional",
    title: "Marina de Guerra expresa ‘absoluto rechazo’ a actos de violencia en el Liceo Naval tras grave denuncia de agresión sexual",
    summary: "La institución castrense emitió un pronunciamiento público reconociendo fallas en sus protocolos, mientras el Ministerio de Educación reveló decenas de denuncias previas en el colegio.",
    image: "/news/liceo-naval-denuncia-agresion.jpg",
    imageAlt: "Fachada del Colegio Liceo Naval Almirante Guise en San Borja",
    author: "Redacción de Nacional",
    date: "21 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Liceo Naval Almirante Guise", "Marina de Guerra del Perú", "agresión sexual", "acoso escolar", "San Borja", "Ministerio de Educación", "Maranguita", "violencia escolar", "investigación judicial"],
    body: [
      "La Marina de Guerra del Perú manifestó públicamente su ‘absoluto rechazo y condena’ frente a cualquier acto de violencia, maltrato o acoso en perjuicio de la comunidad estudiantil del Liceo Naval Almirante Guise, ubicado en San Borja. La postura oficial de la institución se dio a conocer luego de que saliera a la luz una grave denuncia de agresión sexual en contra de un estudiante, ocurrida presuntamente en un bus de transporte escolar de dicha sede educativa.",
      "En un comunicado de prensa, la entidad naval expresó su solidaridad con la víctima y su familia, admitiendo de forma explícita que sus estándares de protección fueron traspasados, y se comprometió a revisar de forma integral sus reglamentos para restablecer entornos seguros en sus colegios.",
      "El caso ha generado profunda conmoción social y ha puesto en evidencia una problemática sistemática dentro del colegio. De acuerdo con información del Sector Educación, se habrían registrado alrededor de 80 denuncias de violencia en dicho plantel durante los últimos dos años. A raíz de estos hallazgos, padres de familia han realizado movilizaciones y plantones para exigir celeridad en las investigaciones.",
      "Ante la gravedad de los hechos, las instancias correspondientes han procedido con el internamiento preventivo de varios estudiantes involucrados en el caso, en tanto continúan las investigaciones para determinar el nivel de responsabilidad tanto de los agresores como del personal escolar a cargo de la custodia y seguridad de los menores.",
    ],
  },

  // ───────────────────────── ECONOMÍA ─────────────────────────
  {
    slug: "mototaxistas-selva-beneficio-mef",
    section: "economia",
    title: "Gobierno habilita registro para que mototaxistas de la selva accedan a beneficio de hasta S/300",
    summary: "Conductores de Loreto, Ucayali y Madre de Dios podrán registrar sus compras de combustible desde una plataforma del MEF. El apoyo contempla S/4 por galón, con un límite de S/100 mensuales durante tres meses.",
    image: "/news/mototaxistas-selva-beneficio-mef.jpg",
    imageAlt: "Mototaxi circulando en una vía de la selva peruana",
    author: "Redacción de Economía",
    date: "21 de septiembre de 2026",
    readTime: "5 min de lectura",
    keywords: ["Economía", "Mototaxis", "Combustibles", "MEF"],
    body: [
      "El Ministerio de Economía y Finanzas (MEF) habilitó una plataforma digital para que los conductores de mototaxis de Loreto, Ucayali y Madre de Dios registren sus compras de combustible y accedan a un beneficio de hasta S/300 durante tres meses.",
      "El programa establece un reconocimiento de S/4 por cada galón de gasolina o gasohol adquirido, con un máximo de S/100 por mes. Debido a que la medida tendrá una vigencia de tres meses, cada beneficiario podrá acumular hasta S/300 durante todo el periodo.",
      "La medida está dirigida a los conductores del servicio de transporte público de personas que utilizan vehículos automotores menores de categoría L5, conocidos como mototaxis. El Ministerio de Transportes y Comunicaciones (MTC) estima que alrededor de 53.300 conductores podrían acceder al beneficio si cumplen con las condiciones establecidas.",
      "Para participar, los conductores deberán contar con DNI vigente, licencia de conducir Clase B Categoría II-C, placa del vehículo y SOAT vigente. En los casos correspondientes, también será válido el Certificado contra Accidentes de Tránsito (CAT) emitido por una AFOCAT.",
      "El registro de las compras se realizará exclusivamente de manera virtual. Los beneficiarios deberán ingresar a la plataforma habilitada por el MEF y proporcionar sus datos personales, información de la licencia, del vehículo y del comprobante electrónico correspondiente a la adquisición del combustible.",
      "Las compras tendrán que efectuarse en Loreto, Ucayali o Madre de Dios, en establecimientos inscritos en el Registro de Hidrocarburos de Osinergmin. La información será validada contra la Sunat, y una vez aprobado el beneficio, será remitida al Banco de la Nación para el pago. La medida fue establecida mediante el Decreto de Urgencia N.° 011-2026.",
    ],
  },

  // ───────────────────────── INTERNACIONAL ─────────────────────────
  {
    slug: "escalada-belica-europa-oriental",
    section: "internacional",
    title: "Escalada bélica en Europa Oriental: Ucrania asesta su mayor ataque a Moscú en plena jornada electoral y Rusia responde golpeando infraestructuras clave",
    summary: "La tensión entre ambas naciones alcanzó un nuevo pico tras una ofensiva sin precedentes con más de 1.600 drones sobre territorio ruso, seguida por una masiva represalia aérea del Kremlin contra centros logísticos y energéticos ucranianos.",
    image: "/news/escalada-belica-ucrania-rusia.png",
    imageAlt: "Rescatistas ucranianos tras un ataque ruso contra un edificio en Zaporiyia",
    author: "Corresponsalía Internacional",
    date: "21 de septiembre de 2026",
    readTime: "5 min de lectura",
    featured: true,
    keywords: ["Guerra en Ucrania", "Rusia", "Moscú", "Drones", "Volodímir Zelenski", "Elecciones rusas"],
    body: [
      "El conflicto armado en Europa Oriental ha experimentado un dramático incremento en su intensidad durante las últimas horas. En coincidencia con el último día de las elecciones parlamentarias en Rusia, las fuerzas armadas ucranianas desplegaron uno de los mayores ataques con aeronaves no tripuladas registrados desde el inicio de la contienda, alcanzando instalaciones estratégicas en la región capitalina moscovita y otras provincias del país.",
      "Según informaron autoridades locales y medios internacionales, más de 1.600 drones fueron interceptados por los sistemas de defensa antiaérea rusos, de los cuales unos 450 se dirigieron específicamente hacia Moscú y sus alrededores. La ofensiva provocó incendios de consideración en una importante refinería de petróleo en la capital, dejó un saldo de al menos dos personas fallecidas y más de veinte heridos, además de la cancelación o retraso de casi 450 vuelos. El presidente ucraniano, Volodímir Zelenski, justificó los embates señalando que buscan impactar la maquinaria de financiamiento bélico de Moscú para forzar una salida negociada.",
      "En respuesta inmediata, el Ministerio de Defensa de Rusia lanzó una oleada de ataques con armas de alta precisión y drones contra diversos puntos neurálgicos de Ucrania. Los bombardeos nocturnos impactaron almacenes de suministro militar, nodos logísticos, instalaciones energéticas y puertos clave en regiones como Kiev, Odesa y Zaporiyia.",
      "El intercambio de fuego masivo refleja la consolidación de una fase de desgaste estratégico donde las infraestructuras de energía y logística se han convertido en los blancos prioritarios de ambos bandos. Mientras el Kremlin insiste en que sus defensas aéreas lograron frustrar el intento de desestabilizar la jornada electoral, las autoridades rusas advirtieron que intensificarán las incursiones aéreas sobre territorio ucraniano en los días venideros.",
    ],
  },

  // ───────────────────────── ESPECTÁCULOS ─────────────────────────
  {
    slug: "juan-diego-florez-sinfonia-15-aniversario",
    section: "espectaculos",
    title: "Juan Diego Flórez regresa a Lima y celebra los 15 años de Sinfonía por el Perú con concierto ante 5.000 personas",
    summary: "El tenor peruano volvió a los escenarios de su país tras más de dos años para celebrar el aniversario de Sinfonía por el Perú, junto a más de 140 jóvenes músicos de la organización.",
    image: "/news/juan-diego-florez-sinfonia-peru.jpg",
    imageAlt: "Juan Diego Flórez durante el concierto por los 15 años de Sinfonía por el Perú",
    author: "Angel Gloria",
    date: "19 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Juan Diego Flórez", "Sinfonía", "concierto"],
    body: [
      "Juan Diego Flórez volvió a presentarse en Perú el sábado 19 de septiembre en el Convexia Expo Center, en Santiago de Surco. La gala conmemoró los 15 años de Sinfonía por el Perú, organización fundada y presidida por el tenor, que desarrolla programas de formación musical y oportunidades de desarrollo para niñas, niños y jóvenes.",
      "El concierto reunió a más de 140 integrantes de la Orquesta y Coro Juvenil de Sinfonía por el Perú, quienes acompañaron al tenor bajo la dirección de la maestra colombiana Elizabeth Vergara. La presentación marcó el retorno de Flórez a los escenarios nacionales luego de más de dos años de ausencia.",
      "La presentación incluyó un repertorio que combinó piezas de la ópera clásica con canciones representativas de la música peruana. La velada comenzó con «La donna è mobile», de Rigoletto de Giuseppe Verdi, para dar paso después a composiciones vinculadas con distintas expresiones de la cultura nacional, entre ellas «La flor de la canela» y «Fina estampa», de Chabuca Granda; la décima «Zaña», de Nicomedes Santa Cruz; el huaino «Valicha»; y el himno procesional «Hanaq pasap kusikuynin».",
      "La presentación también puso en el centro el trabajo desarrollado por Sinfonía por el Perú durante sus 15 años de existencia, utilizando la formación musical como herramienta para brindar oportunidades de desarrollo a niñas, niños y adolescentes, especialmente de sectores vulnerables.",
    ],
  },

  // ───────────────────────── DEPORTES ─────────────────────────
  {
    slug: "atletico-madrid-derbi-real-madrid",
    section: "deportes",
    title: "Atlético de Madrid se queda con el derbi y golpea al Real Madrid",
    summary: "El conjunto rojiblanco se impuso 2-1 en un intenso derbi madrileño y dejó al Real Madrid sin reacción en los minutos finales.",
    image: "/news/atletico-madrid-derbi-real-madrid.jpg",
    imageAlt: "Jugadores del Atlético de Madrid celebrando durante el derbi ante el Real Madrid",
    author: "Redacción de Deportes",
    date: "20 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Atlético de Madrid", "Real Madrid", "derbi madrileño", "La Liga", "fútbol español"],
    body: [
      "El Atlético de Madrid se quedó con una nueva edición del derbi madrileño tras imponerse por 2-1 al Real Madrid este domingo 20 de septiembre. En un partido de mucha intensidad y con momentos de gran tensión, el conjunto rojiblanco logró hacerse fuerte y terminó celebrando una victoria importante ante uno de sus principales rivales.",
      "Desde el inicio, el encuentro mostró el ritmo y la intensidad propios de un derbi. Ambos equipos buscaron hacerse con el control del balón, aunque el Atlético consiguió competir con mucha intensidad en cada sector del terreno de juego.",
      "La reacción del conjunto rojiblanco terminó siendo determinante: consiguió marcar en los momentos importantes y puso al Real Madrid en una situación incómoda. Los blancos lograron descontar y aumentaron la tensión en los minutos finales, pero el Atlético resistió los ataques y aseguró una victoria por 2-1 que le permite quedarse con el orgullo de la capital española.",
      "Con este triunfo, el Atlético celebra una victoria con un significado especial por tratarse de su máximo rival de la ciudad, mientras el Real Madrid deberá analizar los errores cometidos de cara a sus próximos compromisos de la temporada.",
    ],
  },

  // ───────���───────────────── CINE ─────────────────────────
  {
    slug: "brad-pitt-cliff-booth-david-fincher",
    section: "cine",
    title: "Brad Pitt regresa como Cliff Booth en el tráiler de la nueva película de David Fincher",
    summary: "La película retoma al personaje de ‘Érase una vez en Hollywood’ y lo presenta en un nuevo escenario ambientado en 1977. Llegará a IMAX el 25 de noviembre y posteriormente a Netflix.",
    image: "/news/brad-pitt-cliff-booth-fincher.png",
    imageAlt: "Fotograma promocional de The Further Mis-Adventures of Cliff Booth",
    author: "Camila Pérez",
    date: "21 de septiembre de 2026",
    readTime: "4 min de lectura",
    keywords: ["Brad Pitt", "Cliff Booth", "David Fincher", "Quentin Tarantino", "Netflix", "cine", "IMAX", "estreno 2026"],
    body: [
      "Netflix presentó este 21 de septiembre de 2026 el tráiler oficial de The Further Mis-Adventures of Cliff Booth, la nueva película protagonizada por Brad Pitt y dirigida por David Fincher, con un guion escrito por Quentin Tarantino. La cinta retoma al personaje de Cliff Booth, conocido por la película Érase una vez en Hollywood.",
      "La historia se desarrolla en 1977, varios años después de los acontecimientos de la cinta original. En esta nueva aventura, Cliff Booth se encuentra en un Hollywood diferente, donde deberá enfrentarse a nuevas situaciones mientras continúa desenvolviéndose entre personajes relacionados con la industria del entretenimiento.",
      "El reparto está encabezado nuevamente por Brad Pitt, acompañado por Elizabeth Debicki, Scott Caan, Carla Gugino, Yahya Abdul-Mateen II y Peter Weller, entre otros. La dirección está a cargo de David Fincher, mientras que Tarantino participa como guionista.",
      "El lanzamiento del tráiler también confirmó las fechas de estreno: la película tendrá una exhibición exclusiva de dos semanas en salas IMAX desde el 25 de noviembre de 2026, antes de llegar al catálogo de Netflix el 23 de diciembre.",
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getFeatured(): Article {
  return articles.find((a) => a.featured) ?? articles[0]
}

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug)
}

export function getBySection(sectionSlug: string): Article[] {
  return articles.filter((a) => a.section === sectionSlug)
}

export function getEditorsForSection(sectionSlug: string): Editor[] {
  return editors.filter((e) => e.section === sectionSlug)
}

export function getEditorForSection(sectionSlug: string): Editor | undefined {
  return editors.find((e) => e.section === sectionSlug)
}

/** Convierte una palabra clave en un slug apto para URLs. */
export function keywordSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export type KeywordInfo = { label: string; slug: string; count: number }

/** Devuelve todas las palabras clave únicas con la cantidad de noticias asociadas. */
export function getAllKeywords(): KeywordInfo[] {
  const map = new Map<string, KeywordInfo>()
  for (const article of articles) {
    for (const kw of article.keywords) {
      const slug = keywordSlug(kw)
      const existing = map.get(slug)
      if (existing) {
        existing.count += 1
      } else {
        map.set(slug, { label: kw, slug, count: 1 })
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label, "es"))
}

export function getKeywordBySlug(slug: string): KeywordInfo | undefined {
  return getAllKeywords().find((k) => k.slug === slug)
}

/** Noticias que contienen una palabra clave (por slug). */
export function getByKeyword(slug: string): Article[] {
  return articles.filter((a) => a.keywords.some((kw) => keywordSlug(kw) === slug))
}

/** Noticias relacionadas: comparten al menos una palabra clave, ordenadas por coincidencias. */
export function getRelatedByKeywords(article: Article, limit = 4): Article[] {
  const own = new Set(article.keywords.map(keywordSlug))
  return articles
    .filter((a) => a.slug !== article.slug)
    .map((a) => ({
      article: a,
      shared: a.keywords.filter((kw) => own.has(keywordSlug(kw))).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((entry) => entry.article)
}
