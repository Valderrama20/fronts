export const productos1 = [
  "POLLO ENTERO",
  "PECHUGAS DE POLLO (EN FILETES)",
  "PECHUGAS DE PAVO (EN FILETES)",
  "FILETES DE CERDO",
  "FILETES DE TERNERA",
  "CARNE TERNERA PICADA",
  "CARNE CERDO PICADA",
  "CARNE TERNERA PARA GUISAR",
  "CARNE AGUJA DE TERNERA",
  "PESCADO DE TEMPORADA",
];

const productos2 = [
  "PATATA (BOLSA)",
  "ARROZ",
  "MAÍZ",
  "ESPAGUETI",
  "MACARRONES",
  "ZANAHORIA (BOLSA)",
  "PUERRO (BANDEJA/BOLSA)",
  "CEBOLLAS BLANCAS (BOLSA)",
  "CEBOLLAS MORADAS (BOLSA)",
  "AJOS (BOLSA)",
  "CHAMPIÑONES (BANDEJA)",
  "JUDÍAS (BOLSA)",
  "ALUBIAS NEGRAS (PAQUETE)",
  "ALUBIAS ROJAS (PAQUETE)",
  "FRIJOLES (PAQUETE)",
  "ALUBIAS BLANCAS (PAQUETE)",
  "GARBANZOS (PAQUETE)",
  "LENTEJAS (PAQUETE)",
  "PIMIENTO ROJO",
  "PIMIENTO VERDE",
  "LECHUGA",
  "TOMATE",
  "AGUACATE",
  "PEPINO",
  "CALABACÍN",
  "BERENJENA",
  "COLIFLOR",
  "CALABAZA",
  "ESPINACAS 1",
];

const productos3 = [
  "LIMÓN (BOLSA)",
  "NARANJA (BOLSA)",
  "MANZANAS GOLDEN (BOLSA)",
  "BANANA (BOLSA)",
  "PLÁTANO PARA FREIR",
  "PIÑA",
  "SANDÍA",
  "MELÓN",
  "MANGO",
];

const productos4 = [
  "GUISANTES",
  "ESPINACAS 2",
  "ENSALADILLA",
  "GAMBAS PELADAS",
  "ANILLAS DE CALAMAR",
  "LOMO DE MERLUZA",
];

const productos5 = [
  "TORTILLAS DE TRIGO",
  "HARINA P.A.N",
  "HARINA TRIGO",
  "PAN DE MOLDE",
  "PAN DE MOLDE INTEGRAL",
  "PAN DE HAMBURGUESA",
  "GALLETAS TIPO “MARÍA”",
  "GALLETAS TIPO “MARÍA” DE CHOCOLATE",
  "CEREALES INTEGRALES CON CHOCOLATE “ALTEZA”",
  "MUESLI “ALTEZA”/CORNFLAKES",
  "HOJUELAS AVENA",
];

const productos6 = [
  "QUESO EN LONCHAS (BANDEJA)",
  "JAMÓN COCIDO (BANDEJA)",
  "PAVO (BANDEJA)",
  "BEICON",
  "QUESO RALLADO",
  "QUESO CREMA",
  "YOGURES SABORES",
  "YOGURES NATURALES",
  "MANTEQUILLA",
];

const productos7 = [
  "CÚRCUMA",
  "CURRY",
  "GUINDILLA",
  "PIMIENTA NEGRA",
  "PIMIENTA BLANCA",
  "PEREJIL",
  "ORÉGANO",
  "MENTA",
  "CILANTRO FRESCO",
  "COMINO",
  "SAL",
];

const productos8 = [
  "CACAO SOLUBLE",
  "CAFÉ INSTANTÁNEO (SOLUBLE)",
  "CAFÉ MOLIDO",
  "CAFÉ DESCAFEINADO",
  "TÉ",
  "MERMELADA",
  "AZÚCAR MORENO",
  "AZÚCAR",
  "LECHE ENTERA",
  "LECHE DESNATADA",
  "LECHE SIN LACTOSA",
  "ATÚN (PACK TRES LATAS NATURAL)",
  "TOMATE FRITO (BRICK)",
  "HUEVOS (DOCENA)",
  "ACEITE DE OLIVA",
  "ACEITE DE GIRASOL",
];

const productosLimpieza = [
  "BAYETAS",
  "Esponjas",
  "Lavavajillas",
  "Piedra blanca (limpieza vitrocerámica)",
  "Friegasuelos madera",
  "Multiusos desinfectante",
  "Producto baño",
  "Spray muebles (limpiapolvo)",
  "Papel higiénico",
  "Detergente Ropa",
  "Suavizante",
];

const gramos = ["200 Gramos", "400 Gramos", "600 Gramos"];

const unidades = ["1 unidad", "2 unidades", "3 unidades", "4 unidades", "5 unidades", "6 unidades"];

const kg = ["1 kg", "2 kg", "3 kg"];

export const tables = [
  {
    title: "CARNE Y PESCADO",
    products: productos1,
    nameOfOptions: "INDICAR nº UNIDADES o GRAMOS",
    selectOptions: [...gramos, ...unidades, ...kg],
  },
  {
    title: "PASTAS, LEGUMBRES, HORTALIZAS, VERDURAS…",
    products: productos2,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: [...unidades, ...gramos],
  },
  {
    title: "FRUTAS",
    products: productos3,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: unidades,
  },
  {
    title: "PRODUCTOS CONGELADOS",
    products: productos4,
    nameOfOptions: "INDICAR UNIDAD (BOLSA)",
    selectOptions: unidades,
  },
  {
    title: "PANADERÍA",
    products: productos5,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: unidades,
  },
  {
    title: "PRODUCTOS FRESCOS",
    products: productos6,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: unidades,
  },
  {
    title: "ESPECIAS",
    products: productos7,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: unidades,
  },
  {
    title: "OTROS ALIMENTOS",
    products: productos8,
    nameOfOptions: "INDICAR UNIDAD",
    selectOptions: unidades,
  },
  {
    title: "PRODUCTOS DE LIMPIEZA",
    products: productosLimpieza,
    nameOfOptions: "UNIDADES",
    selectOptions: unidades,
  },
];

export const initialValue = tables.reduce<Record<string, Record<string, string>>>((acc, table) => {
  acc[table.title] = Object.fromEntries(
    table.products.map((name) => [name, ""])
  );
  return acc;
}, {});
