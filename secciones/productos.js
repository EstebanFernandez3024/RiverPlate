const products =[
{
    id: "1",
    category: "zapatillas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fe9f76e442bc449c8075ae6f016e8dd7_9366/Zapatillas_Grand_Court_River_Plate_Blanco_FZ7330_01_standard.jpg",
    descripcion: "Lo 70 están de vuelta. Estas zapatillas combinan los colores de River Plate con la estética de los más míticos diseños deportivos vintage. Cuenta con una parte superior perfecta para tu día a día. Las 3 tiras rojas en los laterales y el logo del club le aportan el toque que estabas buscando. La mediasuela proporciona mayor comodidad y amortiguación a tu pisada.",
    nombre: "ZAPATILLAS GRAND COURT RIVER PLATE",
    precio: "20000"
},
{
    id: "2",
    category: "camisetas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ac81dd080e94de284e4ad19008f1270_9366/Camiseta_de_Entrenamiento_Tiro_River_Plate_Rojo_GS2004_01_laydown.jpg",
    descripcion: "Entrenar requiere esfuerzo y trabajo duro en la cancha. Por eso los jugadores del River Plate usan camisetas de entrenamiento de fútbol como esta antes de salir a perfeccionar sus habilidades. Es muy cómoda gracias a sus paneles de ventilación en malla y tecnolgía de absorción AEROREADY. ¿El trabajo duro? Eso lo ponés vos.",
    nombre: "CAMISETA DE ENTRENAMIENTO",
    precio: "5000"
    
},
{
    id: "3",
    category: "camperas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/026f15be23404876ae92abc60123c7ca_9366/Parka_Stadium_River_Plate_Gris_FQ7680_01_laydown.jpg",
    descripcion: "Sabemos que hay pocas posibilidades de que te pierdas un entrenamiento de fútbol. Pero con esta Parka Stadium River Plate, llegar a la cancha es mucho más fácil. Su diseño acolchado conserva el calor en el interior, mientras que la solapa para tormentas y la capucha te protegen del viento y de la lluvia. Además, el dobladillo trasero más largo proporciona mayor cobertura.",
    nombre: "PARKA STADIUM",
    precio: "30000"
},
{
    id: "4",
    category: "botines",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4611cc182d23422bb063ad26007acbc2_9366/Botines_Predator_Freak.3_Multiterreno_Rojo_FY6304_01_standard.jpg",
    descripcion: "Lo 70 están de vuelta. Estas zapatillas combinan los colores de River Plate con la estética de los más míticos diseños deportivos vintage. Cuenta con una parte superior perfecta para tu día a día. Las 3 tiras rojas en los laterales y el logo del club le aportan el toque que estabas buscando. La mediasuela proporciona mayor comodidad y amortiguación a tu pisada.",
    nombre: " PREDATOR FREAK.3",
    precio: "8000"
},
{
    id: "5",
    category: "botines",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b2cd4b3830c4756876ead4a00a23ddc_9366/Botines_Copa_Sense.3_Terreno_Firme_Blanco_FY6154_01_standard.jpg",
    descripcion: "Algunos jugadores quieren ser vistos. Pero las verdaderas estrellas buscan operar lejos del radar de sus oponentes, creando oportunidades en los lugares y momentos menos esperados. Concentrate en desarrollar tu instinto futbolístico con los botines adidas Copa Sense. Estos botines sin cordones para jóvenes incorporan un cuello elástico que te permite ponértelos con facilidad. El exterior sintético suave te brinda seguridad en cada toque y la suela de TPU te distingue del resto en el terreno firme.",
    nombre: "COPA SENSE.3",
    precio: "8000"
},
{
    id: "6",
    category: "shorts",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09989b94a7d5414bb340ac400028a17f_9366/Shorts_Visitante_River_Plate_20-21_Blanco_FQ7663_01_laydown.jpg",
    descripcion: "Apoyá a los jugadores del River Plate con estos shorts de visitante de adidas. Hechos para los hinchas del famoso club, lucen el escudo que te llena de orgullo sobre el dobladillo y una versión moderna de los colores del equipo. Su tejido liviano y absorbente ayuda a mantenerte fresco y seco.",
    nombre: "SHORTS VISITANTE ",
    precio: "3000"
},
{
    id: "7",
    category: "shorts",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9481b797d54442b3948ead1d0131dbb8_9366/Shorts_de_Entrenamiento_Tiro_River_Plate_Gris_GU9640_01_laydown.jpg",
    descripcion: "Entrenar requiere esfuerzo y trabajo duro en la cancha. Como preparación para esas sesiones intensas, los jugadores del River Plate se visten con estos shorts de fútbol adidas. Mantienen tu cuerpo cómodo y seco gracias a su tejido suave y absorbente y el escudo del club estampado en la pierna rinde homenaje al club que te inspira.",
    nombre: "SHORTS DE ENTRENAMIENTO",
    precio: "3000"
},
{
    id: "8",
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ac81dd080e94de284e4ad19008f1270_9366/Camiseta_de_Entrenamiento_Tiro_River_Plate_Rojo_GS2004_01_laydown.jpg",
    descripcion: "Entrenar requiere esfuerzo y trabajo duro en la cancha. Por eso los jugadores del River Plate usan camisetas de entrenamiento de fútbol como esta antes de salir a perfeccionar sus habilidades. Es muy cómoda gracias a sus paneles de ventilación en malla y tecnolgía de absorción AEROREADY. ¿El trabajo duro? Eso lo ponés vos.",
    nombre: "CAMISETA DE ENTRENAMIENTO",
    precio: "4500"
},
{
    id: "9",
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c34783aaa6c54b65a5e5ad740189af7b_9366/Remera_Basquet_River_Plate_Negro_H15942_01_laydown.jpg",
    descripcion: "Mostrá tu amor al básquet con esta nueva colección. Completa el look para alentar a River de principio a fin en cada partido.",
    nombre: "REMERA BÁSQUET ",
    precio: "2500"
},
{
    id: "10",
    category: "zapatillas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2a7c4914823434b9ff7adc5017672c5_9366/Zapatillas_Superstar_Blanco_GZ1603_01_standard.jpg",
    descripcion: "LoBrillá con estilo con estas zapatillas adidas Superstar. Cuando el día está oscuro o si estás bailando en el medio de la noche, los paneles reflectantes atraerán la atención y podrás presumir tu auténtico estilo adidas. Lucen muchos detalles clásicos que definitivamente querrás presumir: desde el exterior de cuero suave y la puntera de caucho con relieve hasta la suela de caucho. Ponételas y salí a la calle.",
    nombre: "ZAPATILLAS SUPERSTAR",
    precio: "9000"
},
{
    id: "11",
    category: "camisetas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c575c83727034ae0ab92ae930160813b_9366/Camiseta_Local_River_Plate_21-22_Blanco_GB1300_01_laydown.jpg",
    descripcion: "River Plate es una institución del deporte. La banda roja que cruza el pecho de su talentosos jugadores es un distintivo universalmente reconocido en el mundo del fútbol. Esta camiseta adidas se inspira en uno de los uniformes más recordados del River y le agrega un toque moderno. Su tejido suave con tecnología transpirable AEROREADY te ofrece una gran comodidad mientras animás a tu equipo.",
    nombre: "CAMISETA LOCAL",
    precio: "15000"
},
{
    id: "12",
    category: "camisetas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/273a7f98d3be4073947eae93015ee3da_9366/Camiseta_Visitante_River_Plate_21-22_Negro_GB1297_01_laydown.jpg",
    descripcion: "Unidos por la pasión del fútbol. Una y otra vez los hinchas de River Plate animan a los talentosos jugadores a alcanzar la gloria en cada partido. Esta camiseta de visitante adidas irradia esa energía de las tribunas con su diseño dinámico con tonos rojos distintivos. Luce el escudo del club tejido el en pecho para destacar tu pasión por el club en todo momento e incorpora tecnología de absorción AEROREADY para mantener cómodos a los jugadores y los hinchas.",
    nombre: "CAMISETA VISITANTE",
    precio: "14000"
},
{
    id: "13",
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e84aceebfb97465cb7c0ad55009e89e0_9366/Remera_River_Plate_Manga_Larga_Edicion_Especial_de_Temporada_Negro_GU9665_01_laydown.jpg",
    descripcion: "El estilo de fútbol de River Plate recibe el tratamiento de las 3 Tiras. adidas creó esta remera manga corta para los hinchas leales que nunca dejan de pensar en el club. Luce un escudo clásico del club bordado en el pecho para destacar lo que sentís por él a donde vayás. El tejido jersey suave te envuelve con total comodidad mientras destacas lo que sentís por tu club.",
    nombre: "REMERA MANGA LARGA",
    precio: "3000"
},
{
    id: "14",
    category: "remeras",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/67e95c1c404f4001b93aad73010da6bd_9366/Remera_River_Plate_3_Tiras_Negro_GU9663_01_laydown.jpg",
    descripcion: "Lo 70 están de vuelta. Estas zapatillas combinan los colores de River Plate con la estética de los más míticos diseños deportivos vintage. Cuenta con una parte superior perfecta para tu día a día. Las 3 tiras rojas en los laterales y el logo del club le aportan el toque que estabas buscando. La mediasuela proporciona mayor comodidad y amortiguación a tu pisada.",
    nombre: "REMERA TIRAS",
    precio: "2500"
},
]