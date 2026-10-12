/* Lingua — tarjetas de vocabulario A1 (alemán e inglés), PWA-ready. */
(() => {
  "use strict";

const BUILTIN_VOCAB = {
  "de": [
    {
      "id": "de-1",
      "spanish": "hola",
      "translation": "Hallo",
      "answers": [
        "Hallo",
        "hi"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-2",
      "spanish": "buenos días",
      "translation": "Guten Morgen",
      "answers": [
        "Guten Morgen",
        "morgen"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-3",
      "spanish": "buenas tardes",
      "translation": "Guten Tag",
      "answers": [
        "Guten Tag",
        "tag"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-4",
      "spanish": "buenas noches",
      "translation": "Guten Abend",
      "answers": [
        "Guten Abend",
        "abend"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-5",
      "spanish": "adiós",
      "translation": "Auf Wiedersehen",
      "answers": [
        "Auf Wiedersehen",
        "tschüss",
        "tschus",
        "bye"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-6",
      "spanish": "hasta luego",
      "translation": "Bis später",
      "answers": [
        "Bis später",
        "bis bald",
        "tschüss"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-7",
      "spanish": "por favor",
      "translation": "Bitte",
      "answers": [
        "Bitte",
        "please"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-8",
      "spanish": "gracias",
      "translation": "Danke",
      "answers": [
        "Danke",
        "dankeschön",
        "danke schön"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-9",
      "spanish": "muchas gracias",
      "translation": "Vielen Dank",
      "answers": [
        "Vielen Dank"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-10",
      "spanish": "de nada",
      "translation": "Gern geschehen",
      "answers": [
        "Gern geschehen",
        "keine ursache",
        "bitte"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-11",
      "spanish": "perdón / disculpe",
      "translation": "Entschuldigung",
      "answers": [
        "Entschuldigung",
        "entschuldige",
        "sorry"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-12",
      "spanish": "sí",
      "translation": "Ja",
      "answers": [
        "Ja",
        "yes"
      ],
      "category": "Respuestas"
    },
    {
      "id": "de-13",
      "spanish": "no",
      "translation": "Nein",
      "answers": [
        "Nein",
        "no"
      ],
      "category": "Respuestas"
    },
    {
      "id": "de-14",
      "spanish": "quizás",
      "translation": "Vielleicht",
      "answers": [
        "Vielleicht"
      ],
      "category": "Respuestas"
    },
    {
      "id": "de-15",
      "spanish": "¿cómo estás?",
      "translation": "Wie geht es dir?",
      "answers": [
        "Wie geht es dir?"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-16",
      "spanish": "muy bien",
      "translation": "Sehr gut",
      "answers": [
        "Sehr gut"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-17",
      "spanish": "mal",
      "translation": "Schlecht",
      "answers": [
        "Schlecht"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-18",
      "spanish": "¿cómo te llamas?",
      "translation": "Wie heißt du?",
      "answers": [
        "Wie heißt du?"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-19",
      "spanish": "me llamo…",
      "translation": "Ich heiße …",
      "answers": [
        "Ich heiße …"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-20",
      "spanish": "encantado/a",
      "translation": "Freut mich",
      "answers": [
        "Freut mich"
      ],
      "category": "Saludos"
    },
    {
      "id": "de-21",
      "spanish": "yo",
      "translation": "ich",
      "answers": [
        "ich"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-22",
      "spanish": "tú",
      "translation": "du",
      "answers": [
        "du"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-23",
      "spanish": "él",
      "translation": "er",
      "answers": [
        "er"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-24",
      "spanish": "ella",
      "translation": "sie",
      "answers": [
        "sie"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-25",
      "spanish": "nosotros/as",
      "translation": "wir",
      "answers": [
        "wir"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-26",
      "spanish": "vosotros/as",
      "translation": "ihr",
      "answers": [
        "ihr"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-27",
      "spanish": "ellos/as",
      "translation": "sie",
      "answers": [
        "sie"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-28",
      "spanish": "usted",
      "translation": "Sie",
      "answers": [
        "Sie"
      ],
      "category": "Pronombres"
    },
    {
      "id": "de-29",
      "spanish": "mi / mis",
      "translation": "mein / meine",
      "answers": [
        "mein",
        "meine"
      ],
      "category": "Posesivos"
    },
    {
      "id": "de-30",
      "spanish": "tu / tus",
      "translation": "dein / deine",
      "answers": [
        "dein",
        "deine"
      ],
      "category": "Posesivos"
    },
    {
      "id": "de-31",
      "spanish": "su (de usted)",
      "translation": "Ihr / Ihre",
      "answers": [
        "Ihr",
        "Ihre"
      ],
      "category": "Posesivos"
    },
    {
      "id": "de-32",
      "spanish": "quién",
      "translation": "wer",
      "answers": [
        "wer"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-33",
      "spanish": "qué",
      "translation": "was",
      "answers": [
        "was"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-34",
      "spanish": "dónde",
      "translation": "wo",
      "answers": [
        "wo"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-35",
      "spanish": "cuándo",
      "translation": "wann",
      "answers": [
        "wann"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-36",
      "spanish": "por qué",
      "translation": "warum",
      "answers": [
        "warum"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-37",
      "spanish": "cómo",
      "translation": "wie",
      "answers": [
        "wie"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-38",
      "spanish": "cuánto",
      "translation": "wie viel",
      "answers": [
        "wie viel"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-39",
      "spanish": "cuántos",
      "translation": "wie viele",
      "answers": [
        "wie viele"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-40",
      "spanish": "cuál",
      "translation": "welcher / welche / welches",
      "answers": [
        "welcher",
        "welche",
        "welches"
      ],
      "category": "Preguntas"
    },
    {
      "id": "de-41",
      "spanish": "uno",
      "translation": "eins",
      "answers": [
        "eins"
      ],
      "category": "Números"
    },
    {
      "id": "de-42",
      "spanish": "dos",
      "translation": "zwei",
      "answers": [
        "zwei"
      ],
      "category": "Números"
    },
    {
      "id": "de-43",
      "spanish": "tres",
      "translation": "drei",
      "answers": [
        "drei"
      ],
      "category": "Números"
    },
    {
      "id": "de-44",
      "spanish": "cuatro",
      "translation": "vier",
      "answers": [
        "vier"
      ],
      "category": "Números"
    },
    {
      "id": "de-45",
      "spanish": "cinco",
      "translation": "fünf",
      "answers": [
        "fünf"
      ],
      "category": "Números"
    },
    {
      "id": "de-46",
      "spanish": "seis",
      "translation": "sechs",
      "answers": [
        "sechs"
      ],
      "category": "Números"
    },
    {
      "id": "de-47",
      "spanish": "siete",
      "translation": "sieben",
      "answers": [
        "sieben"
      ],
      "category": "Números"
    },
    {
      "id": "de-48",
      "spanish": "ocho",
      "translation": "acht",
      "answers": [
        "acht"
      ],
      "category": "Números"
    },
    {
      "id": "de-49",
      "spanish": "nueve",
      "translation": "neun",
      "answers": [
        "neun"
      ],
      "category": "Números"
    },
    {
      "id": "de-50",
      "spanish": "diez",
      "translation": "zehn",
      "answers": [
        "zehn"
      ],
      "category": "Números"
    },
    {
      "id": "de-51",
      "spanish": "once",
      "translation": "elf",
      "answers": [
        "elf"
      ],
      "category": "Números"
    },
    {
      "id": "de-52",
      "spanish": "doce",
      "translation": "zwölf",
      "answers": [
        "zwölf"
      ],
      "category": "Números"
    },
    {
      "id": "de-53",
      "spanish": "veinte",
      "translation": "zwanzig",
      "answers": [
        "zwanzig"
      ],
      "category": "Números"
    },
    {
      "id": "de-54",
      "spanish": "treinta",
      "translation": "dreißig",
      "answers": [
        "dreißig"
      ],
      "category": "Números"
    },
    {
      "id": "de-55",
      "spanish": "cien",
      "translation": "hundert",
      "answers": [
        "hundert"
      ],
      "category": "Números"
    },
    {
      "id": "de-56",
      "spanish": "hoy",
      "translation": "heute",
      "answers": [
        "heute"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-57",
      "spanish": "mañana",
      "translation": "morgen",
      "answers": [
        "morgen"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-58",
      "spanish": "ayer",
      "translation": "gestern",
      "answers": [
        "gestern"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-59",
      "spanish": "ahora",
      "translation": "jetzt",
      "answers": [
        "jetzt"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-60",
      "spanish": "más tarde",
      "translation": "später",
      "answers": [
        "später"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-61",
      "spanish": "siempre",
      "translation": "immer",
      "answers": [
        "immer"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-62",
      "spanish": "nunca",
      "translation": "nie",
      "answers": [
        "nie"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-63",
      "spanish": "el día",
      "translation": "der Tag",
      "answers": [
        "der Tag"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-64",
      "spanish": "la semana",
      "translation": "die Woche",
      "answers": [
        "die Woche"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-65",
      "spanish": "el mes",
      "translation": "der Monat",
      "answers": [
        "der Monat"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-66",
      "spanish": "el año",
      "translation": "das Jahr",
      "answers": [
        "das Jahr"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-67",
      "spanish": "la hora",
      "translation": "die Uhrzeit",
      "answers": [
        "die Uhrzeit"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-68",
      "spanish": "la mañana",
      "translation": "der Morgen",
      "answers": [
        "der Morgen"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-69",
      "spanish": "la tarde",
      "translation": "der Nachmittag",
      "answers": [
        "der Nachmittag"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-70",
      "spanish": "la noche",
      "translation": "die Nacht",
      "answers": [
        "die Nacht"
      ],
      "category": "Tiempo"
    },
    {
      "id": "de-71",
      "spanish": "la familia",
      "translation": "die Familie",
      "answers": [
        "die Familie"
      ],
      "category": "Familia"
    },
    {
      "id": "de-72",
      "spanish": "la madre",
      "translation": "die Mutter",
      "answers": [
        "die Mutter"
      ],
      "category": "Familia"
    },
    {
      "id": "de-73",
      "spanish": "el padre",
      "translation": "der Vater",
      "answers": [
        "der Vater"
      ],
      "category": "Familia"
    },
    {
      "id": "de-74",
      "spanish": "los padres",
      "translation": "die Eltern",
      "answers": [
        "die Eltern"
      ],
      "category": "Familia"
    },
    {
      "id": "de-75",
      "spanish": "el hermano",
      "translation": "der Bruder",
      "answers": [
        "der Bruder"
      ],
      "category": "Familia"
    },
    {
      "id": "de-76",
      "spanish": "la hermana",
      "translation": "die Schwester",
      "answers": [
        "die Schwester"
      ],
      "category": "Familia"
    },
    {
      "id": "de-77",
      "spanish": "el hijo",
      "translation": "der Sohn",
      "answers": [
        "der Sohn"
      ],
      "category": "Familia"
    },
    {
      "id": "de-78",
      "spanish": "la hija",
      "translation": "die Tochter",
      "answers": [
        "die Tochter"
      ],
      "category": "Familia"
    },
    {
      "id": "de-79",
      "spanish": "el niño",
      "translation": "der Junge",
      "answers": [
        "der Junge"
      ],
      "category": "Familia"
    },
    {
      "id": "de-80",
      "spanish": "la niña",
      "translation": "das Mädchen",
      "answers": [
        "das Mädchen"
      ],
      "category": "Familia"
    },
    {
      "id": "de-81",
      "spanish": "el amigo",
      "translation": "der Freund",
      "answers": [
        "der Freund"
      ],
      "category": "Familia"
    },
    {
      "id": "de-82",
      "spanish": "la amiga",
      "translation": "die Freundin",
      "answers": [
        "die Freundin"
      ],
      "category": "Familia"
    },
    {
      "id": "de-83",
      "spanish": "el hombre",
      "translation": "der Mann",
      "answers": [
        "der Mann"
      ],
      "category": "Personas"
    },
    {
      "id": "de-84",
      "spanish": "la mujer",
      "translation": "die Frau",
      "answers": [
        "die Frau"
      ],
      "category": "Personas"
    },
    {
      "id": "de-85",
      "spanish": "la persona",
      "translation": "die Person",
      "answers": [
        "die Person"
      ],
      "category": "Personas"
    },
    {
      "id": "de-86",
      "spanish": "el nombre",
      "translation": "der Name",
      "answers": [
        "der Name"
      ],
      "category": "Personas"
    },
    {
      "id": "de-87",
      "spanish": "la casa",
      "translation": "das Haus",
      "answers": [
        "das Haus"
      ],
      "category": "Casa"
    },
    {
      "id": "de-88",
      "spanish": "el piso / apartamento",
      "translation": "die Wohnung",
      "answers": [
        "die Wohnung"
      ],
      "category": "Casa"
    },
    {
      "id": "de-89",
      "spanish": "la habitación",
      "translation": "das Zimmer",
      "answers": [
        "das Zimmer"
      ],
      "category": "Casa"
    },
    {
      "id": "de-90",
      "spanish": "la cocina",
      "translation": "die Küche",
      "answers": [
        "die Küche"
      ],
      "category": "Casa"
    },
    {
      "id": "de-91",
      "spanish": "el baño",
      "translation": "das Badezimmer",
      "answers": [
        "das Badezimmer"
      ],
      "category": "Casa"
    },
    {
      "id": "de-92",
      "spanish": "la puerta",
      "translation": "die Tür",
      "answers": [
        "die Tür"
      ],
      "category": "Casa"
    },
    {
      "id": "de-93",
      "spanish": "la ventana",
      "translation": "das Fenster",
      "answers": [
        "das Fenster"
      ],
      "category": "Casa"
    },
    {
      "id": "de-94",
      "spanish": "la mesa",
      "translation": "der Tisch",
      "answers": [
        "der Tisch"
      ],
      "category": "Casa"
    },
    {
      "id": "de-95",
      "spanish": "la silla",
      "translation": "der Stuhl",
      "answers": [
        "der Stuhl"
      ],
      "category": "Casa"
    },
    {
      "id": "de-96",
      "spanish": "la cama",
      "translation": "das Bett",
      "answers": [
        "das Bett"
      ],
      "category": "Casa"
    },
    {
      "id": "de-97",
      "spanish": "el libro",
      "translation": "das Buch",
      "answers": [
        "das Buch"
      ],
      "category": "Objetos"
    },
    {
      "id": "de-98",
      "spanish": "el teléfono",
      "translation": "das Telefon",
      "answers": [
        "das Telefon"
      ],
      "category": "Objetos"
    },
    {
      "id": "de-99",
      "spanish": "el ordenador",
      "translation": "der Computer",
      "answers": [
        "der Computer"
      ],
      "category": "Objetos"
    },
    {
      "id": "de-100",
      "spanish": "la llave",
      "translation": "der Schlüssel",
      "answers": [
        "der Schlüssel"
      ],
      "category": "Objetos"
    },
    {
      "id": "de-101",
      "spanish": "el dinero",
      "translation": "das Geld",
      "answers": [
        "das Geld"
      ],
      "category": "Objetos"
    },
    {
      "id": "de-102",
      "spanish": "el coche",
      "translation": "das Auto",
      "answers": [
        "das Auto"
      ],
      "category": "Transporte"
    },
    {
      "id": "de-103",
      "spanish": "la bicicleta",
      "translation": "das Fahrrad",
      "answers": [
        "das Fahrrad"
      ],
      "category": "Transporte"
    },
    {
      "id": "de-104",
      "spanish": "el autobús",
      "translation": "der Bus",
      "answers": [
        "der Bus"
      ],
      "category": "Transporte"
    },
    {
      "id": "de-105",
      "spanish": "el tren",
      "translation": "der Zug",
      "answers": [
        "der Zug"
      ],
      "category": "Transporte"
    },
    {
      "id": "de-106",
      "spanish": "la estación",
      "translation": "der Bahnhof",
      "answers": [
        "der Bahnhof"
      ],
      "category": "Transporte"
    },
    {
      "id": "de-107",
      "spanish": "el agua",
      "translation": "das Wasser",
      "answers": [
        "das Wasser"
      ],
      "category": "Comida"
    },
    {
      "id": "de-108",
      "spanish": "el café",
      "translation": "der Kaffee",
      "answers": [
        "der Kaffee"
      ],
      "category": "Comida"
    },
    {
      "id": "de-109",
      "spanish": "el té",
      "translation": "der Tee",
      "answers": [
        "der Tee"
      ],
      "category": "Comida"
    },
    {
      "id": "de-110",
      "spanish": "la leche",
      "translation": "die Milch",
      "answers": [
        "die Milch"
      ],
      "category": "Comida"
    },
    {
      "id": "de-111",
      "spanish": "el pan",
      "translation": "das Brot",
      "answers": [
        "das Brot"
      ],
      "category": "Comida"
    },
    {
      "id": "de-112",
      "spanish": "la mantequilla",
      "translation": "die Butter",
      "answers": [
        "die Butter"
      ],
      "category": "Comida"
    },
    {
      "id": "de-113",
      "spanish": "el queso",
      "translation": "der Käse",
      "answers": [
        "der Käse"
      ],
      "category": "Comida"
    },
    {
      "id": "de-114",
      "spanish": "la manzana",
      "translation": "der Apfel",
      "answers": [
        "der Apfel"
      ],
      "category": "Comida"
    },
    {
      "id": "de-115",
      "spanish": "el plátano",
      "translation": "die Banane",
      "answers": [
        "die Banane"
      ],
      "category": "Comida"
    },
    {
      "id": "de-116",
      "spanish": "la naranja",
      "translation": "die Orange",
      "answers": [
        "die Orange"
      ],
      "category": "Comida"
    },
    {
      "id": "de-117",
      "spanish": "la comida",
      "translation": "das Essen",
      "answers": [
        "das Essen"
      ],
      "category": "Comida"
    },
    {
      "id": "de-118",
      "spanish": "el desayuno",
      "translation": "das Frühstück",
      "answers": [
        "das Frühstück"
      ],
      "category": "Comida"
    },
    {
      "id": "de-119",
      "spanish": "la cena",
      "translation": "das Abendessen",
      "answers": [
        "das Abendessen"
      ],
      "category": "Comida"
    },
    {
      "id": "de-120",
      "spanish": "el restaurante",
      "translation": "das Restaurant",
      "answers": [
        "das Restaurant"
      ],
      "category": "Comida"
    },
    {
      "id": "de-121",
      "spanish": "la cuenta",
      "translation": "die Rechnung",
      "answers": [
        "die Rechnung"
      ],
      "category": "Comida"
    },
    {
      "id": "de-122",
      "spanish": "vegetariano/a",
      "translation": "vegetarisch",
      "answers": [
        "vegetarisch"
      ],
      "category": "Comida"
    },
    {
      "id": "de-123",
      "spanish": "ser / estar",
      "translation": "sein",
      "answers": [
        "sein"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-124",
      "spanish": "tener",
      "translation": "haben",
      "answers": [
        "haben"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-125",
      "spanish": "hacer",
      "translation": "machen",
      "answers": [
        "machen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-126",
      "spanish": "ir",
      "translation": "gehen",
      "answers": [
        "gehen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-127",
      "spanish": "venir",
      "translation": "kommen",
      "answers": [
        "kommen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-128",
      "spanish": "vivir",
      "translation": "wohnen",
      "answers": [
        "wohnen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-129",
      "spanish": "trabajar",
      "translation": "arbeiten",
      "answers": [
        "arbeiten"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-130",
      "spanish": "estudiar",
      "translation": "lernen",
      "answers": [
        "lernen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-131",
      "spanish": "hablar",
      "translation": "sprechen",
      "answers": [
        "sprechen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-132",
      "spanish": "entender",
      "translation": "verstehen",
      "answers": [
        "verstehen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-133",
      "spanish": "aprender",
      "translation": "lernen",
      "answers": [
        "lernen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-134",
      "spanish": "leer",
      "translation": "lesen",
      "answers": [
        "lesen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-135",
      "spanish": "escribir",
      "translation": "schreiben",
      "answers": [
        "schreiben"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-136",
      "spanish": "comer",
      "translation": "essen",
      "answers": [
        "essen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-137",
      "spanish": "beber",
      "translation": "trinken",
      "answers": [
        "trinken"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-138",
      "spanish": "comprar",
      "translation": "kaufen",
      "answers": [
        "kaufen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-139",
      "spanish": "pagar",
      "translation": "bezahlen",
      "answers": [
        "bezahlen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-140",
      "spanish": "necesitar",
      "translation": "brauchen",
      "answers": [
        "brauchen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-141",
      "spanish": "querer",
      "translation": "wollen",
      "answers": [
        "wollen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-142",
      "spanish": "poder",
      "translation": "können",
      "answers": [
        "können"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-143",
      "spanish": "gustar",
      "translation": "mögen",
      "answers": [
        "mögen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-144",
      "spanish": "buscar",
      "translation": "suchen",
      "answers": [
        "suchen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-145",
      "spanish": "encontrar",
      "translation": "finden",
      "answers": [
        "finden"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-146",
      "spanish": "dormir",
      "translation": "schlafen",
      "answers": [
        "schlafen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-147",
      "spanish": "ayudar",
      "translation": "helfen",
      "answers": [
        "helfen"
      ],
      "category": "Verbos"
    },
    {
      "id": "de-148",
      "spanish": "bueno/a",
      "translation": "gut",
      "answers": [
        "gut"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-149",
      "spanish": "malo/a",
      "translation": "schlecht",
      "answers": [
        "schlecht"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-150",
      "spanish": "grande",
      "translation": "groß",
      "answers": [
        "groß"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-151",
      "spanish": "pequeño/a",
      "translation": "klein",
      "answers": [
        "klein"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-152",
      "spanish": "nuevo/a",
      "translation": "neu",
      "answers": [
        "neu"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-153",
      "spanish": "viejo/a",
      "translation": "alt",
      "answers": [
        "alt"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-154",
      "spanish": "bonito/a",
      "translation": "schön",
      "answers": [
        "schön"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-155",
      "spanish": "caro/a",
      "translation": "teuer",
      "answers": [
        "teuer"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-156",
      "spanish": "barato/a",
      "translation": "billig",
      "answers": [
        "billig"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-157",
      "spanish": "fácil",
      "translation": "einfach",
      "answers": [
        "einfach"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-158",
      "spanish": "difícil",
      "translation": "schwierig",
      "answers": [
        "schwierig"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-159",
      "spanish": "rápido/a",
      "translation": "schnell",
      "answers": [
        "schnell"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-160",
      "spanish": "lento/a",
      "translation": "langsam",
      "answers": [
        "langsam"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-161",
      "spanish": "caliente",
      "translation": "warm",
      "answers": [
        "warm"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-162",
      "spanish": "frío/a",
      "translation": "kalt",
      "answers": [
        "kalt"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-163",
      "spanish": "feliz",
      "translation": "glücklich",
      "answers": [
        "glücklich"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-164",
      "spanish": "cansado/a",
      "translation": "müde",
      "answers": [
        "müde"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-165",
      "spanish": "enfermo/a",
      "translation": "krank",
      "answers": [
        "krank"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-166",
      "spanish": "abierto/a",
      "translation": "offen",
      "answers": [
        "offen"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-167",
      "spanish": "cerrado/a",
      "translation": "geschlossen",
      "answers": [
        "geschlossen"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "de-168",
      "spanish": "aquí",
      "translation": "hier",
      "answers": [
        "hier"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-169",
      "spanish": "allí",
      "translation": "dort",
      "answers": [
        "dort"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-170",
      "spanish": "izquierda",
      "translation": "links",
      "answers": [
        "links"
      ],
      "category": "Direcciones"
    },
    {
      "id": "de-171",
      "spanish": "derecha",
      "translation": "rechts",
      "answers": [
        "rechts"
      ],
      "category": "Direcciones"
    },
    {
      "id": "de-172",
      "spanish": "recto / todo recto",
      "translation": "geradeaus",
      "answers": [
        "geradeaus"
      ],
      "category": "Direcciones"
    },
    {
      "id": "de-173",
      "spanish": "cerca",
      "translation": "nah",
      "answers": [
        "nah"
      ],
      "category": "Direcciones"
    },
    {
      "id": "de-174",
      "spanish": "lejos",
      "translation": "weit",
      "answers": [
        "weit"
      ],
      "category": "Direcciones"
    },
    {
      "id": "de-175",
      "spanish": "la calle",
      "translation": "die Straße",
      "answers": [
        "die Straße"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-176",
      "spanish": "la ciudad",
      "translation": "die Stadt",
      "answers": [
        "die Stadt"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-177",
      "spanish": "el pueblo",
      "translation": "das Dorf",
      "answers": [
        "das Dorf"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-178",
      "spanish": "el supermercado",
      "translation": "der Supermarkt",
      "answers": [
        "der Supermarkt"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-179",
      "spanish": "el trabajo",
      "translation": "die Arbeit",
      "answers": [
        "die Arbeit"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-180",
      "spanish": "la escuela",
      "translation": "die Schule",
      "answers": [
        "die Schule"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-181",
      "spanish": "el médico",
      "translation": "der Arzt",
      "answers": [
        "der Arzt"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-182",
      "spanish": "la farmacia",
      "translation": "die Apotheke",
      "answers": [
        "die Apotheke"
      ],
      "category": "Lugares"
    },
    {
      "id": "de-183",
      "spanish": "lunes",
      "translation": "Montag",
      "answers": [
        "Montag"
      ],
      "category": "Días"
    },
    {
      "id": "de-184",
      "spanish": "martes",
      "translation": "Dienstag",
      "answers": [
        "Dienstag"
      ],
      "category": "Días"
    },
    {
      "id": "de-185",
      "spanish": "miércoles",
      "translation": "Mittwoch",
      "answers": [
        "Mittwoch"
      ],
      "category": "Días"
    },
    {
      "id": "de-186",
      "spanish": "jueves",
      "translation": "Donnerstag",
      "answers": [
        "Donnerstag"
      ],
      "category": "Días"
    },
    {
      "id": "de-187",
      "spanish": "viernes",
      "translation": "Freitag",
      "answers": [
        "Freitag"
      ],
      "category": "Días"
    },
    {
      "id": "de-188",
      "spanish": "sábado",
      "translation": "Samstag",
      "answers": [
        "Samstag"
      ],
      "category": "Días"
    },
    {
      "id": "de-189",
      "spanish": "domingo",
      "translation": "Sonntag",
      "answers": [
        "Sonntag"
      ],
      "category": "Días"
    },
    {
      "id": "de-190",
      "spanish": "enero",
      "translation": "Januar",
      "answers": [
        "Januar"
      ],
      "category": "Meses"
    },
    {
      "id": "de-191",
      "spanish": "febrero",
      "translation": "Februar",
      "answers": [
        "Februar"
      ],
      "category": "Meses"
    },
    {
      "id": "de-192",
      "spanish": "marzo",
      "translation": "März",
      "answers": [
        "März"
      ],
      "category": "Meses"
    },
    {
      "id": "de-193",
      "spanish": "abril",
      "translation": "April",
      "answers": [
        "April"
      ],
      "category": "Meses"
    },
    {
      "id": "de-194",
      "spanish": "mayo",
      "translation": "Mai",
      "answers": [
        "Mai"
      ],
      "category": "Meses"
    },
    {
      "id": "de-195",
      "spanish": "junio",
      "translation": "Juni",
      "answers": [
        "Juni"
      ],
      "category": "Meses"
    },
    {
      "id": "de-196",
      "spanish": "julio",
      "translation": "Juli",
      "answers": [
        "Juli"
      ],
      "category": "Meses"
    },
    {
      "id": "de-197",
      "spanish": "agosto",
      "translation": "August",
      "answers": [
        "August"
      ],
      "category": "Meses"
    },
    {
      "id": "de-198",
      "spanish": "septiembre",
      "translation": "September",
      "answers": [
        "September"
      ],
      "category": "Meses"
    },
    {
      "id": "de-199",
      "spanish": "octubre",
      "translation": "Oktober",
      "answers": [
        "Oktober"
      ],
      "category": "Meses"
    },
    {
      "id": "de-200",
      "spanish": "noviembre",
      "translation": "November",
      "answers": [
        "November"
      ],
      "category": "Meses"
    },
    {
      "id": "de-201",
      "spanish": "diciembre",
      "translation": "Dezember",
      "answers": [
        "Dezember"
      ],
      "category": "Meses"
    },
    {
      "id": "de-202",
      "spanish": "¿cuánto cuesta?",
      "translation": "Wie viel kostet das?",
      "answers": [
        "Wie viel kostet das?"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-203",
      "spanish": "no entiendo",
      "translation": "Ich verstehe nicht",
      "answers": [
        "Ich verstehe nicht"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-204",
      "spanish": "¿habla español?",
      "translation": "Sprechen Sie Spanisch?",
      "answers": [
        "Sprechen Sie Spanisch?"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-205",
      "spanish": "hablo un poco de alemán",
      "translation": "Ich spreche ein bisschen Deutsch",
      "answers": [
        "Ich spreche ein bisschen Deutsch"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-206",
      "spanish": "¿puede ayudarme?",
      "translation": "Können Sie mir helfen?",
      "answers": [
        "Können Sie mir helfen?"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-207",
      "spanish": "¿dónde está el baño?",
      "translation": "Wo ist die Toilette?",
      "answers": [
        "Wo ist die Toilette?"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-208",
      "spanish": "quiero esto",
      "translation": "Ich möchte das",
      "answers": [
        "Ich möchte das"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-209",
      "spanish": "tengo hambre",
      "translation": "Ich habe Hunger",
      "answers": [
        "Ich habe Hunger"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-210",
      "spanish": "tengo sed",
      "translation": "Ich habe Durst",
      "answers": [
        "Ich habe Durst"
      ],
      "category": "Frases útiles"
    },
    {
      "id": "de-211",
      "spanish": "no pasa nada",
      "translation": "Kein Problem",
      "answers": [
        "Kein Problem"
      ],
      "category": "Frases útiles"
    }
  ],
  "en": [
    {
      "id": "en-1",
      "spanish": "hola",
      "translation": "hello",
      "answers": [
        "hello",
        "hi",
        "hey"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-2",
      "spanish": "buenos días",
      "translation": "good morning",
      "answers": [
        "good morning",
        "morning"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-3",
      "spanish": "buenas tardes",
      "translation": "good afternoon",
      "answers": [
        "good afternoon",
        "afternoon"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-4",
      "spanish": "buenas tardes/noches",
      "translation": "good evening",
      "answers": [
        "good evening",
        "evening"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-5",
      "spanish": "buenas noches",
      "translation": "good night",
      "answers": [
        "good night",
        "night"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-6",
      "spanish": "adiós",
      "translation": "goodbye",
      "answers": [
        "goodbye",
        "bye",
        "good bye",
        "good-bye"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-7",
      "spanish": "hasta luego",
      "translation": "see you later",
      "answers": [
        "see you later",
        "see you",
        "later"
      ],
      "category": "Saludos"
    },
    {
      "id": "en-8",
      "spanish": "por favor",
      "translation": "please",
      "answers": [
        "please",
        "pls"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-9",
      "spanish": "gracias",
      "translation": "thank you",
      "answers": [
        "thank you",
        "thanks",
        "thank you very much"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-10",
      "spanish": "muchas gracias",
      "translation": "thank you very much",
      "answers": [
        "thank you very much"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-11",
      "spanish": "de nada",
      "translation": "you’re welcome",
      "answers": [
        "you’re welcome"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-12",
      "spanish": "perdón / disculpe",
      "translation": "excuse me",
      "answers": [
        "excuse me",
        "sorry",
        "pardon"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-13",
      "spanish": "lo siento",
      "translation": "sorry",
      "answers": [
        "sorry"
      ],
      "category": "Cortesía"
    },
    {
      "id": "en-14",
      "spanish": "sí",
      "translation": "yes",
      "answers": [
        "yes",
        "yeah",
        "yep"
      ],
      "category": "Básico"
    },
    {
      "id": "en-15",
      "spanish": "no",
      "translation": "no",
      "answers": [
        "no",
        "nope"
      ],
      "category": "Básico"
    },
    {
      "id": "en-16",
      "spanish": "quizá",
      "translation": "maybe",
      "answers": [
        "maybe",
        "perhaps"
      ],
      "category": "Básico"
    },
    {
      "id": "en-17",
      "spanish": "por supuesto",
      "translation": "of course",
      "answers": [
        "of course"
      ],
      "category": "Básico"
    },
    {
      "id": "en-18",
      "spanish": "me llamo…",
      "translation": "my name is…",
      "answers": [
        "my name is…"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-19",
      "spanish": "¿cómo te llamas?",
      "translation": "what is your name?",
      "answers": [
        "what is your name?"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-20",
      "spanish": "soy… / estoy…",
      "translation": "I am…",
      "answers": [
        "I am…"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-21",
      "spanish": "encantado/a",
      "translation": "nice to meet you",
      "answers": [
        "nice to meet you"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-22",
      "spanish": "¿de dónde eres?",
      "translation": "where are you from?",
      "answers": [
        "where are you from?"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-23",
      "spanish": "soy de España",
      "translation": "I am from Spain",
      "answers": [
        "I am from Spain"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-24",
      "spanish": "hablo español",
      "translation": "I speak Spanish",
      "answers": [
        "I speak Spanish"
      ],
      "category": "Presentación"
    },
    {
      "id": "en-25",
      "spanish": "no entiendo",
      "translation": "I don’t understand",
      "answers": [
        "I don’t understand"
      ],
      "category": "Frases"
    },
    {
      "id": "en-26",
      "spanish": "¿hablas inglés?",
      "translation": "do you speak English?",
      "answers": [
        "do you speak English?"
      ],
      "category": "Frases"
    },
    {
      "id": "en-27",
      "spanish": "ayuda",
      "translation": "help",
      "answers": [
        "help"
      ],
      "category": "Frases"
    },
    {
      "id": "en-28",
      "spanish": "agua",
      "translation": "water",
      "answers": [
        "water"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-29",
      "spanish": "café",
      "translation": "coffee",
      "answers": [
        "coffee"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-30",
      "spanish": "té",
      "translation": "tea",
      "answers": [
        "tea"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-31",
      "spanish": "leche",
      "translation": "milk",
      "answers": [
        "milk"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-32",
      "spanish": "pan",
      "translation": "bread",
      "answers": [
        "bread"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-33",
      "spanish": "mantequilla",
      "translation": "butter",
      "answers": [
        "butter"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-34",
      "spanish": "queso",
      "translation": "cheese",
      "answers": [
        "cheese"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-35",
      "spanish": "huevo",
      "translation": "egg",
      "answers": [
        "egg"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-36",
      "spanish": "manzana",
      "translation": "apple",
      "answers": [
        "apple"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-37",
      "spanish": "plátano",
      "translation": "banana",
      "answers": [
        "banana"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-38",
      "spanish": "naranja",
      "translation": "orange",
      "answers": [
        "orange"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-39",
      "spanish": "verdura",
      "translation": "vegetable",
      "answers": [
        "vegetable"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-40",
      "spanish": "fruta",
      "translation": "fruit",
      "answers": [
        "fruit"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-41",
      "spanish": "carne",
      "translation": "meat",
      "answers": [
        "meat"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-42",
      "spanish": "pescado",
      "translation": "fish",
      "answers": [
        "fish"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-43",
      "spanish": "pollo",
      "translation": "chicken",
      "answers": [
        "chicken"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-44",
      "spanish": "arroz",
      "translation": "rice",
      "answers": [
        "rice"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-45",
      "spanish": "patata",
      "translation": "potato",
      "answers": [
        "potato"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-46",
      "spanish": "azúcar",
      "translation": "sugar",
      "answers": [
        "sugar"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-47",
      "spanish": "sal",
      "translation": "salt",
      "answers": [
        "salt"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-48",
      "spanish": "desayuno",
      "translation": "breakfast",
      "answers": [
        "breakfast"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-49",
      "spanish": "comida / almuerzo",
      "translation": "lunch",
      "answers": [
        "lunch"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-50",
      "spanish": "cena",
      "translation": "dinner",
      "answers": [
        "dinner"
      ],
      "category": "Comida y bebida"
    },
    {
      "id": "en-51",
      "spanish": "la cuenta, por favor",
      "translation": "the bill, please",
      "answers": [
        "the bill, please"
      ],
      "category": "Restaurante"
    },
    {
      "id": "en-52",
      "spanish": "casa",
      "translation": "house",
      "answers": [
        "house"
      ],
      "category": "Casa"
    },
    {
      "id": "en-53",
      "spanish": "piso / apartamento",
      "translation": "flat / apartment",
      "answers": [
        "flat",
        "apartment"
      ],
      "category": "Casa"
    },
    {
      "id": "en-54",
      "spanish": "habitación",
      "translation": "room",
      "answers": [
        "room"
      ],
      "category": "Casa"
    },
    {
      "id": "en-55",
      "spanish": "cocina",
      "translation": "kitchen",
      "answers": [
        "kitchen"
      ],
      "category": "Casa"
    },
    {
      "id": "en-56",
      "spanish": "baño",
      "translation": "bathroom",
      "answers": [
        "bathroom"
      ],
      "category": "Casa"
    },
    {
      "id": "en-57",
      "spanish": "dormitorio",
      "translation": "bedroom",
      "answers": [
        "bedroom"
      ],
      "category": "Casa"
    },
    {
      "id": "en-58",
      "spanish": "cama",
      "translation": "bed",
      "answers": [
        "bed"
      ],
      "category": "Casa"
    },
    {
      "id": "en-59",
      "spanish": "mesa",
      "translation": "table",
      "answers": [
        "table"
      ],
      "category": "Casa"
    },
    {
      "id": "en-60",
      "spanish": "silla",
      "translation": "chair",
      "answers": [
        "chair"
      ],
      "category": "Casa"
    },
    {
      "id": "en-61",
      "spanish": "puerta",
      "translation": "door",
      "answers": [
        "door"
      ],
      "category": "Casa"
    },
    {
      "id": "en-62",
      "spanish": "ventana",
      "translation": "window",
      "answers": [
        "window"
      ],
      "category": "Casa"
    },
    {
      "id": "en-63",
      "spanish": "llave",
      "translation": "key",
      "answers": [
        "key"
      ],
      "category": "Casa"
    },
    {
      "id": "en-64",
      "spanish": "libro",
      "translation": "book",
      "answers": [
        "book"
      ],
      "category": "Objetos"
    },
    {
      "id": "en-65",
      "spanish": "bolígrafo",
      "translation": "pen",
      "answers": [
        "pen"
      ],
      "category": "Objetos"
    },
    {
      "id": "en-66",
      "spanish": "teléfono",
      "translation": "phone",
      "answers": [
        "phone"
      ],
      "category": "Objetos"
    },
    {
      "id": "en-67",
      "spanish": "ordenador",
      "translation": "computer",
      "answers": [
        "computer"
      ],
      "category": "Objetos"
    },
    {
      "id": "en-68",
      "spanish": "bolsa / bolso",
      "translation": "bag",
      "answers": [
        "bag"
      ],
      "category": "Objetos"
    },
    {
      "id": "en-69",
      "spanish": "coche",
      "translation": "car",
      "answers": [
        "car"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-70",
      "spanish": "autobús",
      "translation": "bus",
      "answers": [
        "bus"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-71",
      "spanish": "tren",
      "translation": "train",
      "answers": [
        "train"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-72",
      "spanish": "bicicleta",
      "translation": "bicycle",
      "answers": [
        "bicycle"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-73",
      "spanish": "billete",
      "translation": "ticket",
      "answers": [
        "ticket"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-74",
      "spanish": "estación",
      "translation": "station",
      "answers": [
        "station"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-75",
      "spanish": "aeropuerto",
      "translation": "airport",
      "answers": [
        "airport"
      ],
      "category": "Transporte"
    },
    {
      "id": "en-76",
      "spanish": "izquierda",
      "translation": "left",
      "answers": [
        "left"
      ],
      "category": "Direcciones"
    },
    {
      "id": "en-77",
      "spanish": "derecha",
      "translation": "right",
      "answers": [
        "right"
      ],
      "category": "Direcciones"
    },
    {
      "id": "en-78",
      "spanish": "todo recto",
      "translation": "straight ahead",
      "answers": [
        "straight ahead"
      ],
      "category": "Direcciones"
    },
    {
      "id": "en-79",
      "spanish": "cerca",
      "translation": "near",
      "answers": [
        "near"
      ],
      "category": "Direcciones"
    },
    {
      "id": "en-80",
      "spanish": "lejos",
      "translation": "far",
      "answers": [
        "far"
      ],
      "category": "Direcciones"
    },
    {
      "id": "en-81",
      "spanish": "hoy",
      "translation": "today",
      "answers": [
        "today"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-82",
      "spanish": "mañana",
      "translation": "tomorrow",
      "answers": [
        "tomorrow"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-83",
      "spanish": "ayer",
      "translation": "yesterday",
      "answers": [
        "yesterday"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-84",
      "spanish": "ahora",
      "translation": "now",
      "answers": [
        "now"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-85",
      "spanish": "más tarde",
      "translation": "later",
      "answers": [
        "later"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-86",
      "spanish": "mañana",
      "translation": "morning",
      "answers": [
        "morning"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-87",
      "spanish": "tarde",
      "translation": "afternoon",
      "answers": [
        "afternoon"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-88",
      "spanish": "atardecer / noche",
      "translation": "evening",
      "answers": [
        "evening"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-89",
      "spanish": "noche",
      "translation": "night",
      "answers": [
        "night"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-90",
      "spanish": "día",
      "translation": "day",
      "answers": [
        "day"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-91",
      "spanish": "semana",
      "translation": "week",
      "answers": [
        "week"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-92",
      "spanish": "mes",
      "translation": "month",
      "answers": [
        "month"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-93",
      "spanish": "año",
      "translation": "year",
      "answers": [
        "year"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-94",
      "spanish": "lunes",
      "translation": "Monday",
      "answers": [
        "Monday"
      ],
      "category": "Días"
    },
    {
      "id": "en-95",
      "spanish": "martes",
      "translation": "Tuesday",
      "answers": [
        "Tuesday"
      ],
      "category": "Días"
    },
    {
      "id": "en-96",
      "spanish": "miércoles",
      "translation": "Wednesday",
      "answers": [
        "Wednesday"
      ],
      "category": "Días"
    },
    {
      "id": "en-97",
      "spanish": "jueves",
      "translation": "Thursday",
      "answers": [
        "Thursday"
      ],
      "category": "Días"
    },
    {
      "id": "en-98",
      "spanish": "viernes",
      "translation": "Friday",
      "answers": [
        "Friday"
      ],
      "category": "Días"
    },
    {
      "id": "en-99",
      "spanish": "sábado",
      "translation": "Saturday",
      "answers": [
        "Saturday"
      ],
      "category": "Días"
    },
    {
      "id": "en-100",
      "spanish": "domingo",
      "translation": "Sunday",
      "answers": [
        "Sunday"
      ],
      "category": "Días"
    },
    {
      "id": "en-101",
      "spanish": "uno",
      "translation": "one",
      "answers": [
        "one"
      ],
      "category": "Números"
    },
    {
      "id": "en-102",
      "spanish": "dos",
      "translation": "two",
      "answers": [
        "two"
      ],
      "category": "Números"
    },
    {
      "id": "en-103",
      "spanish": "tres",
      "translation": "three",
      "answers": [
        "three"
      ],
      "category": "Números"
    },
    {
      "id": "en-104",
      "spanish": "cuatro",
      "translation": "four",
      "answers": [
        "four"
      ],
      "category": "Números"
    },
    {
      "id": "en-105",
      "spanish": "cinco",
      "translation": "five",
      "answers": [
        "five"
      ],
      "category": "Números"
    },
    {
      "id": "en-106",
      "spanish": "seis",
      "translation": "six",
      "answers": [
        "six"
      ],
      "category": "Números"
    },
    {
      "id": "en-107",
      "spanish": "siete",
      "translation": "seven",
      "answers": [
        "seven"
      ],
      "category": "Números"
    },
    {
      "id": "en-108",
      "spanish": "ocho",
      "translation": "eight",
      "answers": [
        "eight"
      ],
      "category": "Números"
    },
    {
      "id": "en-109",
      "spanish": "nueve",
      "translation": "nine",
      "answers": [
        "nine"
      ],
      "category": "Números"
    },
    {
      "id": "en-110",
      "spanish": "diez",
      "translation": "ten",
      "answers": [
        "ten"
      ],
      "category": "Números"
    },
    {
      "id": "en-111",
      "spanish": "veinte",
      "translation": "twenty",
      "answers": [
        "twenty"
      ],
      "category": "Números"
    },
    {
      "id": "en-112",
      "spanish": "treinta",
      "translation": "thirty",
      "answers": [
        "thirty"
      ],
      "category": "Números"
    },
    {
      "id": "en-113",
      "spanish": "cien",
      "translation": "one hundred",
      "answers": [
        "one hundred"
      ],
      "category": "Números"
    },
    {
      "id": "en-114",
      "spanish": "persona",
      "translation": "person",
      "answers": [
        "person"
      ],
      "category": "Personas"
    },
    {
      "id": "en-115",
      "spanish": "hombre",
      "translation": "man",
      "answers": [
        "man"
      ],
      "category": "Personas"
    },
    {
      "id": "en-116",
      "spanish": "mujer",
      "translation": "woman",
      "answers": [
        "woman"
      ],
      "category": "Personas"
    },
    {
      "id": "en-117",
      "spanish": "niño/a",
      "translation": "child",
      "answers": [
        "child"
      ],
      "category": "Personas"
    },
    {
      "id": "en-118",
      "spanish": "familia",
      "translation": "family",
      "answers": [
        "family"
      ],
      "category": "Personas"
    },
    {
      "id": "en-119",
      "spanish": "madre",
      "translation": "mother",
      "answers": [
        "mother"
      ],
      "category": "Personas"
    },
    {
      "id": "en-120",
      "spanish": "padre",
      "translation": "father",
      "answers": [
        "father"
      ],
      "category": "Personas"
    },
    {
      "id": "en-121",
      "spanish": "hermano",
      "translation": "brother",
      "answers": [
        "brother"
      ],
      "category": "Personas"
    },
    {
      "id": "en-122",
      "spanish": "hermana",
      "translation": "sister",
      "answers": [
        "sister"
      ],
      "category": "Personas"
    },
    {
      "id": "en-123",
      "spanish": "amigo/a",
      "translation": "friend",
      "answers": [
        "friend"
      ],
      "category": "Personas"
    },
    {
      "id": "en-124",
      "spanish": "gente",
      "translation": "people",
      "answers": [
        "people"
      ],
      "category": "Personas"
    },
    {
      "id": "en-125",
      "spanish": "nombre",
      "translation": "name",
      "answers": [
        "name"
      ],
      "category": "Básico"
    },
    {
      "id": "en-126",
      "spanish": "dirección",
      "translation": "address",
      "answers": [
        "address"
      ],
      "category": "Básico"
    },
    {
      "id": "en-127",
      "spanish": "país",
      "translation": "country",
      "answers": [
        "country"
      ],
      "category": "Básico"
    },
    {
      "id": "en-128",
      "spanish": "ciudad",
      "translation": "city",
      "answers": [
        "city"
      ],
      "category": "Básico"
    },
    {
      "id": "en-129",
      "spanish": "calle",
      "translation": "street",
      "answers": [
        "street"
      ],
      "category": "Básico"
    },
    {
      "id": "en-130",
      "spanish": "trabajo",
      "translation": "work",
      "answers": [
        "work"
      ],
      "category": "Trabajo"
    },
    {
      "id": "en-131",
      "spanish": "escuela",
      "translation": "school",
      "answers": [
        "school"
      ],
      "category": "Trabajo"
    },
    {
      "id": "en-132",
      "spanish": "profesor/a",
      "translation": "teacher",
      "answers": [
        "teacher"
      ],
      "category": "Trabajo"
    },
    {
      "id": "en-133",
      "spanish": "estudiante",
      "translation": "student",
      "answers": [
        "student"
      ],
      "category": "Trabajo"
    },
    {
      "id": "en-134",
      "spanish": "médico/a",
      "translation": "doctor",
      "answers": [
        "doctor"
      ],
      "category": "Trabajo"
    },
    {
      "id": "en-135",
      "spanish": "tienda",
      "translation": "shop",
      "answers": [
        "shop"
      ],
      "category": "Compras"
    },
    {
      "id": "en-136",
      "spanish": "supermercado",
      "translation": "supermarket",
      "answers": [
        "supermarket"
      ],
      "category": "Compras"
    },
    {
      "id": "en-137",
      "spanish": "dinero",
      "translation": "money",
      "answers": [
        "money"
      ],
      "category": "Compras"
    },
    {
      "id": "en-138",
      "spanish": "precio",
      "translation": "price",
      "answers": [
        "price"
      ],
      "category": "Compras"
    },
    {
      "id": "en-139",
      "spanish": "barato/a",
      "translation": "cheap",
      "answers": [
        "cheap"
      ],
      "category": "Compras"
    },
    {
      "id": "en-140",
      "spanish": "caro/a",
      "translation": "expensive",
      "answers": [
        "expensive"
      ],
      "category": "Compras"
    },
    {
      "id": "en-141",
      "spanish": "abierto/a",
      "translation": "open",
      "answers": [
        "open"
      ],
      "category": "Compras"
    },
    {
      "id": "en-142",
      "spanish": "cerrado/a",
      "translation": "closed",
      "answers": [
        "closed"
      ],
      "category": "Compras"
    },
    {
      "id": "en-143",
      "spanish": "hora / tiempo",
      "translation": "time",
      "answers": [
        "time"
      ],
      "category": "Básico"
    },
    {
      "id": "en-144",
      "spanish": "hora",
      "translation": "hour",
      "answers": [
        "hour"
      ],
      "category": "Básico"
    },
    {
      "id": "en-145",
      "spanish": "minuto",
      "translation": "minute",
      "answers": [
        "minute"
      ],
      "category": "Básico"
    },
    {
      "id": "en-146",
      "spanish": "tiempo meteorológico",
      "translation": "weather",
      "answers": [
        "weather"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-147",
      "spanish": "sol",
      "translation": "sun",
      "answers": [
        "sun"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-148",
      "spanish": "lluvia",
      "translation": "rain",
      "answers": [
        "rain"
      ],
      "category": "Tiempo"
    },
    {
      "id": "en-149",
      "spanish": "frío/a",
      "translation": "cold",
      "answers": [
        "cold"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-150",
      "spanish": "caliente / calor",
      "translation": "hot",
      "answers": [
        "hot"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-151",
      "spanish": "templado/a",
      "translation": "warm",
      "answers": [
        "warm"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-152",
      "spanish": "bueno/a",
      "translation": "good",
      "answers": [
        "good"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-153",
      "spanish": "malo/a",
      "translation": "bad",
      "answers": [
        "bad"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-154",
      "spanish": "grande",
      "translation": "big",
      "answers": [
        "big"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-155",
      "spanish": "pequeño/a",
      "translation": "small",
      "answers": [
        "small"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-156",
      "spanish": "nuevo/a",
      "translation": "new",
      "answers": [
        "new"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-157",
      "spanish": "viejo/a",
      "translation": "old",
      "answers": [
        "old"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-158",
      "spanish": "bonito/a",
      "translation": "beautiful",
      "answers": [
        "beautiful"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-159",
      "spanish": "fácil",
      "translation": "easy",
      "answers": [
        "easy"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-160",
      "spanish": "difícil",
      "translation": "difficult",
      "answers": [
        "difficult"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-161",
      "spanish": "feliz",
      "translation": "happy",
      "answers": [
        "happy"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-162",
      "spanish": "cansado/a",
      "translation": "tired",
      "answers": [
        "tired"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-163",
      "spanish": "hambriento/a",
      "translation": "hungry",
      "answers": [
        "hungry"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-164",
      "spanish": "sediento/a",
      "translation": "thirsty",
      "answers": [
        "thirsty"
      ],
      "category": "Adjetivos"
    },
    {
      "id": "en-165",
      "spanish": "ser / estar",
      "translation": "to be",
      "answers": [
        "to be",
        "be"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-166",
      "spanish": "tener",
      "translation": "to have",
      "answers": [
        "to have",
        "have"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-167",
      "spanish": "ir",
      "translation": "to go",
      "answers": [
        "to go",
        "go"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-168",
      "spanish": "venir",
      "translation": "to come",
      "answers": [
        "to come",
        "come"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-169",
      "spanish": "hacer",
      "translation": "to do / make",
      "answers": [
        "to do",
        "do",
        "make"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-170",
      "spanish": "comer",
      "translation": "to eat",
      "answers": [
        "to eat",
        "eat"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-171",
      "spanish": "beber",
      "translation": "to drink",
      "answers": [
        "to drink",
        "drink"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-172",
      "spanish": "hablar",
      "translation": "to speak",
      "answers": [
        "to speak",
        "speak"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-173",
      "spanish": "entender",
      "translation": "to understand",
      "answers": [
        "to understand",
        "understand"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-174",
      "spanish": "aprender",
      "translation": "to learn",
      "answers": [
        "to learn",
        "learn"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-175",
      "spanish": "trabajar",
      "translation": "to work",
      "answers": [
        "to work",
        "work"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-176",
      "spanish": "vivir",
      "translation": "to live",
      "answers": [
        "to live",
        "live"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-177",
      "spanish": "gustar",
      "translation": "to like",
      "answers": [
        "to like",
        "like"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-178",
      "spanish": "querer",
      "translation": "to want",
      "answers": [
        "to want",
        "want"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-179",
      "spanish": "necesitar",
      "translation": "to need",
      "answers": [
        "to need",
        "need"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-180",
      "spanish": "comprar",
      "translation": "to buy",
      "answers": [
        "to buy",
        "buy"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-181",
      "spanish": "pagar",
      "translation": "to pay",
      "answers": [
        "to pay",
        "pay"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-182",
      "spanish": "buscar",
      "translation": "to look for",
      "answers": [
        "to look for",
        "look for"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-183",
      "spanish": "saber / conocer",
      "translation": "to know",
      "answers": [
        "to know",
        "know"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-184",
      "spanish": "ayudar",
      "translation": "to help",
      "answers": [
        "to help",
        "help"
      ],
      "category": "Verbos"
    },
    {
      "id": "en-185",
      "spanish": "yo",
      "translation": "I",
      "answers": [
        "I"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-186",
      "spanish": "tú",
      "translation": "you (informal)",
      "answers": [
        "you (informal)"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-187",
      "spanish": "él",
      "translation": "he",
      "answers": [
        "he"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-188",
      "spanish": "ella",
      "translation": "she",
      "answers": [
        "she"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-189",
      "spanish": "nosotros/as",
      "translation": "we",
      "answers": [
        "we"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-190",
      "spanish": "vosotros/as / ustedes",
      "translation": "you (plural)",
      "answers": [
        "you (plural)"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-191",
      "spanish": "ellos/as",
      "translation": "they",
      "answers": [
        "they"
      ],
      "category": "Pronombres"
    },
    {
      "id": "en-192",
      "spanish": "esto / este / esta",
      "translation": "this",
      "answers": [
        "this"
      ],
      "category": "Básico"
    },
    {
      "id": "en-193",
      "spanish": "eso / ese / esa",
      "translation": "that",
      "answers": [
        "that"
      ],
      "category": "Básico"
    },
    {
      "id": "en-194",
      "spanish": "¿quién?",
      "translation": "who?",
      "answers": [
        "who?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-195",
      "spanish": "¿qué?",
      "translation": "what?",
      "answers": [
        "what?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-196",
      "spanish": "¿dónde?",
      "translation": "where?",
      "answers": [
        "where?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-197",
      "spanish": "¿cuándo?",
      "translation": "when?",
      "answers": [
        "when?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-198",
      "spanish": "¿por qué?",
      "translation": "why?",
      "answers": [
        "why?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-199",
      "spanish": "¿cómo?",
      "translation": "how?",
      "answers": [
        "how?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-200",
      "spanish": "¿cuánto?",
      "translation": "how much?",
      "answers": [
        "how much?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-201",
      "spanish": "¿cuántos?",
      "translation": "how many?",
      "answers": [
        "how many?"
      ],
      "category": "Preguntas"
    },
    {
      "id": "en-202",
      "spanish": "porque",
      "translation": "because",
      "answers": [
        "because"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-203",
      "spanish": "y",
      "translation": "and",
      "answers": [
        "and"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-204",
      "spanish": "o",
      "translation": "or",
      "answers": [
        "or"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-205",
      "spanish": "pero",
      "translation": "but",
      "answers": [
        "but"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-206",
      "spanish": "con",
      "translation": "with",
      "answers": [
        "with"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-207",
      "spanish": "sin",
      "translation": "without",
      "answers": [
        "without"
      ],
      "category": "Conectores"
    },
    {
      "id": "en-208",
      "spanish": "en / dentro de",
      "translation": "in",
      "answers": [
        "in"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-209",
      "spanish": "sobre / encima de",
      "translation": "on",
      "answers": [
        "on"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-210",
      "spanish": "debajo de",
      "translation": "under",
      "answers": [
        "under"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-211",
      "spanish": "en / a",
      "translation": "at",
      "answers": [
        "at"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-212",
      "spanish": "de / desde",
      "translation": "from",
      "answers": [
        "from"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-213",
      "spanish": "a / hacia",
      "translation": "to",
      "answers": [
        "to"
      ],
      "category": "Preposiciones"
    },
    {
      "id": "en-214",
      "spanish": "aquí",
      "translation": "here",
      "answers": [
        "here"
      ],
      "category": "Básico"
    },
    {
      "id": "en-215",
      "spanish": "allí",
      "translation": "there",
      "answers": [
        "there"
      ],
      "category": "Básico"
    },
    {
      "id": "en-216",
      "spanish": "muy",
      "translation": "very",
      "answers": [
        "very"
      ],
      "category": "Básico"
    },
    {
      "id": "en-217",
      "spanish": "también",
      "translation": "also",
      "answers": [
        "also"
      ],
      "category": "Básico"
    },
    {
      "id": "en-218",
      "spanish": "solo",
      "translation": "only",
      "answers": [
        "only"
      ],
      "category": "Básico"
    },
    {
      "id": "en-219",
      "spanish": "todo",
      "translation": "all",
      "answers": [
        "all"
      ],
      "category": "Básico"
    },
    {
      "id": "en-220",
      "spanish": "nada",
      "translation": "nothing",
      "answers": [
        "nothing"
      ],
      "category": "Básico"
    },
    {
      "id": "en-221",
      "spanish": "algo",
      "translation": "something",
      "answers": [
        "something"
      ],
      "category": "Básico"
    },
    {
      "id": "en-222",
      "spanish": "otra vez",
      "translation": "again",
      "answers": [
        "again"
      ],
      "category": "Básico"
    },
    {
      "id": "en-223",
      "spanish": "siempre",
      "translation": "always",
      "answers": [
        "always"
      ],
      "category": "Básico"
    },
    {
      "id": "en-224",
      "spanish": "a veces",
      "translation": "sometimes",
      "answers": [
        "sometimes"
      ],
      "category": "Básico"
    },
    {
      "id": "en-225",
      "spanish": "nunca",
      "translation": "never",
      "answers": [
        "never"
      ],
      "category": "Básico"
    },
    {
      "id": "en-226",
      "spanish": "hoy estoy ocupado/a",
      "translation": "today I am busy",
      "answers": [
        "today I am busy"
      ],
      "category": "Frases"
    },
    {
      "id": "en-227",
      "spanish": "me gustaría…",
      "translation": "I would like…",
      "answers": [
        "I would like…"
      ],
      "category": "Frases"
    },
    {
      "id": "en-228",
      "spanish": "¿cuánto cuesta?",
      "translation": "how much does it cost?",
      "answers": [
        "how much does it cost?"
      ],
      "category": "Frases"
    },
    {
      "id": "en-229",
      "spanish": "¿dónde está el baño?",
      "translation": "where is the toilet?",
      "answers": [
        "where is the toilet?"
      ],
      "category": "Frases"
    },
    {
      "id": "en-230",
      "spanish": "necesito ayuda",
      "translation": "I need help",
      "answers": [
        "I need help"
      ],
      "category": "Frases"
    },
    {
      "id": "en-231",
      "spanish": "estoy perdido/a",
      "translation": "I am lost",
      "answers": [
        "I am lost"
      ],
      "category": "Frases"
    },
    {
      "id": "en-232",
      "spanish": "¿puedes ayudarme?",
      "translation": "can you help me?",
      "answers": [
        "can you help me?"
      ],
      "category": "Frases"
    },
    {
      "id": "en-233",
      "spanish": "quisiera un café",
      "translation": "I would like a coffee",
      "answers": [
        "I would like a coffee"
      ],
      "category": "Frases"
    },
    {
      "id": "en-234",
      "spanish": "no lo sé",
      "translation": "I don’t know",
      "answers": [
        "I don’t know"
      ],
      "category": "Frases"
    },
    {
      "id": "en-235",
      "spanish": "estoy aprendiendo inglés",
      "translation": "I am learning English",
      "answers": [
        "I am learning English"
      ],
      "category": "Frases"
    }
  ]
};


  const LANGUAGE = localStorage.getItem("lingua.language.v1") === "en" ? "en" : "de";
  const MISSED_KEY = LANGUAGE === "en" ? "lingua.missed.en.v1" : "lingua.missed.de.v1";
  const THEME_KEY = "lingua.theme.v1";
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];

  // Vocabulario embebido (sin Excel ni localStorage de tarjetas)
  const cards = (BUILTIN_VOCAB[LANGUAGE] || []).map(c => ({
    id: c.id,
    spanish: c.spanish,
    translation: c.translation,
    answers: Array.isArray(c.answers) && c.answers.length ? c.answers : [c.translation],
    category: c.category || ""
  }));

  let theme = localStorage.getItem(THEME_KEY) || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let deck = [];
  let index = 0;
  let checked = false;

  function loadMissedIds() {
    try { return new Set(JSON.parse(localStorage.getItem(MISSED_KEY) || "[]")); }
    catch { return new Set(); }
  }
  let session = { correct: 0, wrong: 0, missedIds: loadMissedIds() };
  function persistMissedIds() {
    try { localStorage.setItem(MISSED_KEY, JSON.stringify([...session.missedIds])); } catch {}
  }
  let toastTimer;

  const els = {
    themeToggle: $("#themeToggle"),
    totalStat: $("#totalStat"), accuracyStat: $("#accuracyStat"), errorsStat: $("#errorsStat"), cardCountBadge: $("#cardCountBadge"),
    tabs: $$(".tab"), views: { home: $("#homeView"), study: $("#studyView"), cards: $("#cardsView") },
    shuffleBtn: $("#shuffleBtn"), studyMode: $("#studyMode"), progressText: $("#progressText"), studyEmpty: $("#studyEmpty"),
    quizCard: $("#quizCard"), cardPosition: $("#cardPosition"), promptText: $("#promptText"), answerForm: $("#answerForm"),
    answerInput: $("#answerInput"), checkBtn: $("#checkBtn"), feedback: $("#feedback"), nextBtn: $("#nextBtn"),
    sessionScore: $("#sessionScore"), searchInput: $("#searchInput"), cardsEmpty: $("#cardsEmpty"), cardList: $("#cardList"),
    toast: $("#toast"), studyTitle: $("#studyTitle"), studyEyebrow: $("#studyEyebrow"),
    correctReveal: $("#correctReveal")
  };

  function normalize(text) {
    return String(text || "")
      .trim()
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[¿?¡!.,;:…'""`´\-—–()/\\]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isAnswerCorrect(userAnswer, card) {
    const n = normalize(userAnswer);
    if (!n) return false;
    const accepted = (card.answers || [card.translation]).map(normalize);
    return accepted.some(a => a === n);
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2500);
  }

  function setTheme(next) {
    theme = next;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.language = LANGUAGE;
    els.themeToggle.textContent = theme === "dark" ? "☀" : "☾";
    els.themeToggle.setAttribute("aria-label", theme === "dark" ? "Activar tema claro" : "Activar tema oscuro");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#11131d" : (LANGUAGE === "en" ? "#eff6ff" : "#f7f8fc");
    localStorage.setItem(THEME_KEY, theme);
  }

  function switchView(view) {
    if (view === "errors") { els.studyMode.value = "errors"; view = "study"; }
    else if (view === "study") els.studyMode.value = "all";
    Object.entries(els.views).forEach(([name, node]) => { if (node) node.hidden = name !== view; });
    els.tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.view === view));
    if (view === "cards") renderList();
    if (view === "study") {
      els.studyTitle.textContent = LANGUAGE === "en"
        ? (els.studyMode.value === "errors" ? "Review your mistakes" : "Translate the words")
        : (els.studyMode.value === "errors" ? "Repasa tus errores" : "Translate the words");
      els.studyEyebrow.textContent = LANGUAGE === "en"
        ? (els.studyMode.value === "errors" ? "REVIEW MODE" : "TEST MODE")
        : (els.studyMode.value === "errors" ? "MODO REPASO" : "MODO TEST");
      startDeck(true); // siempre aleatorio al entrar
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateStats() {
    els.totalStat.textContent = cards.length;
    if (els.cardCountBadge) els.cardCountBadge.textContent = cards.length;
    els.accuracyStat.textContent = session.correct + session.wrong
      ? `${Math.round(session.correct / (session.correct + session.wrong) * 100)}%`
      : "—";
    els.errorsStat.textContent = session.missedIds.size;
    els.sessionScore.textContent = LANGUAGE === "en"
      ? `${session.correct} correct · ${session.wrong} wrong`
      : `${session.correct} aciertos · ${session.wrong} fallos`;
  }

  function newSession() {
    session = { correct: 0, wrong: 0, missedIds: loadMissedIds() };
    updateStats();
  }

  function currentDeck() {
    const base = els.studyMode.value === "errors"
      ? cards.filter(c => session.missedIds.has(c.id))
      : cards;
    return base.slice();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function startDeck(shuffle = true) {
    deck = currentDeck();
    if (shuffle) shuffleArray(deck);
    index = 0;
    checked = false;
    renderStudy();
  }

  function hideCorrectReveal() {
    if (els.correctReveal) {
      els.correctReveal.hidden = true;
      els.correctReveal.textContent = "";
      els.correctReveal.className = "correct-reveal";
    }
  }

  function showCorrectReveal(text) {
    if (!els.correctReveal) return;
    els.correctReveal.textContent = text;
    els.correctReveal.hidden = false;
    els.correctReveal.className = "correct-reveal show";
  }

  function renderStudy() {
    deck = deck.filter(c => cards.some(saved => saved.id === c.id));
    const mode = els.studyMode.value;
    const fresh = currentDeck();
    if (!deck.length || !deck.some(c => fresh.some(f => f.id === c.id)) || index >= deck.length) {
      deck = shuffleArray(fresh);
      index = 0;
    } else {
      deck = deck.filter(c => fresh.some(f => f.id === c.id));
    }
    const hasCards = deck.length > 0 && cards.length > 0;
    els.studyEmpty.hidden = hasCards;
    els.quizCard.hidden = !hasCards;
    els.progressText.textContent = hasCards ? `${Math.min(index + 1, deck.length)} / ${deck.length}` : "0 / 0";
    hideCorrectReveal();
    if (!hasCards) {
      const h3 = els.studyEmpty.querySelector("h3");
      const p = els.studyEmpty.querySelector("p");
      if (h3) h3.textContent = cards.length
        ? (mode === "errors" ? (LANGUAGE === "en" ? "All clear!" : "¡Todo al día!") : (LANGUAGE === "en" ? "No cards to study" : "No hay tarjetas para estudiar"))
        : (LANGUAGE === "en" ? "No vocabulary loaded" : "No hay vocabulario");
      if (p) p.textContent = cards.length
        ? (mode === "errors" ? (LANGUAGE === "en" ? "You haven't missed any cards this session." : "No has fallado ninguna tarjeta en esta sesión.") : "")
        : "";
      const btn = els.studyEmpty.querySelector("button");
      if (btn) btn.hidden = true;
      updateStats();
      return;
    }
    if (index >= deck.length) index = 0;
    const card = deck[index];
    els.cardPosition.textContent = LANGUAGE === "en" ? `Card ${index + 1}` : `Tarjeta ${index + 1}`;
    els.promptText.textContent = card.spanish;
    els.answerInput.value = "";
    els.answerInput.disabled = false;
    els.checkBtn.disabled = false;
    els.checkBtn.hidden = false;
    els.checkBtn.innerHTML = LANGUAGE === "en" ? 'Check <span>↵</span>' : 'Comprobar <span>↵</span>';
    els.feedback.hidden = true;
    els.feedback.className = "feedback";
    els.nextBtn.hidden = true;
    checked = false;
    updateStats();
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }

  function validateAnswer(event) {
    event?.preventDefault();
    if (checked || !deck[index]) return;
    const answer = els.answerInput.value.trim();
    if (!answer) { els.answerInput.focus(); return; }
    checked = true;
    const card = deck[index];
    const correct = isAnswerCorrect(answer, card);
    if (correct) {
      session.correct++;
      if (els.studyMode.value === "errors") {
        session.missedIds.delete(card.id);
        persistMissedIds();
      }
      hideCorrectReveal();
    } else {
      session.wrong++;
      session.missedIds.add(card.id);
      persistMissedIds();
      // Mostrar la respuesta correcta en grande y rojo debajo de la palabra principal
      showCorrectReveal(card.translation);
    }
    els.feedback.hidden = false;
    els.feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
    els.feedback.innerHTML = correct
      ? `<strong>${LANGUAGE === "en" ? "Correct! ✨" : "¡Correcto! ✨"}</strong>`
      : `<strong>${LANGUAGE === "en" ? "Not quite." : "No del todo."}</strong> ${LANGUAGE === "en" ? "The correct answer is above." : "La respuesta correcta está arriba."}`;
    els.answerInput.disabled = true;
    els.checkBtn.hidden = true;
    els.nextBtn.hidden = false;
    els.nextBtn.textContent = index === deck.length - 1
      ? (LANGUAGE === "en" ? "Finish session ✓" : "Terminar sesión ✓")
      : (LANGUAGE === "en" ? "Next card →" : "Siguiente tarjeta →");
    updateStats();
  }

  function nextCard() {
    if (!checked) return;
    if (index >= deck.length - 1) {
      showToast(LANGUAGE === "en" ? "Session complete. Well done!" : "Sesión completada. ¡Buen trabajo!");
      startDeck(true); // nuevo test siempre aleatorio
      return;
    }
    index++;
    renderStudy();
    els.answerInput.focus({ preventScroll: true });
  }

  function renderList() {
    const query = normalize(els.searchInput.value);
    const filtered = cards.filter(c =>
      normalize(c.spanish).includes(query) ||
      normalize(c.translation).includes(query) ||
      (c.category && normalize(c.category).includes(query))
    );
    els.cardList.innerHTML = "";
    els.cardsEmpty.hidden = cards.length > 0 && filtered.length > 0;
    if (!cards.length) {
      const h3 = els.cardsEmpty.querySelector("h3");
      const p = els.cardsEmpty.querySelector("p");
      if (h3) h3.textContent = LANGUAGE === "en" ? "No words yet" : "Aún no hay tarjetas";
      if (p) p.textContent = "";
    } else if (!filtered.length) {
      els.cardsEmpty.hidden = false;
      const h3 = els.cardsEmpty.querySelector("h3");
      const p = els.cardsEmpty.querySelector("p");
      if (h3) h3.textContent = LANGUAGE === "en" ? "No matches" : "No hay coincidencias";
      if (p) p.textContent = LANGUAGE === "en" ? "Try another word." : "Prueba con otra palabra o traducción.";
    }
    filtered.forEach(card => {
      const row = document.createElement("article");
      row.className = "saved-card";
      const main = document.createElement("div");
      main.className = "saved-card-main";
      const source = document.createElement("strong");
      source.textContent = card.spanish;
      const target = document.createElement("span");
      target.textContent = card.translation;
      main.append(source, target);
      if (card.category) {
        const cat = document.createElement("em");
        cat.className = "card-category";
        cat.textContent = card.category;
        main.append(cat);
      }
      row.append(main);
      els.cardList.append(row);
    });
  }

  // Event listeners
  els.themeToggle.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
  els.tabs.forEach(tab => tab.addEventListener("click", () => switchView(tab.dataset.view)));
  $$("[data-go]").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.go)));
  els.shuffleBtn.addEventListener("click", () => { startDeck(true); showToast(LANGUAGE === "en" ? "Cards shuffled." : "Tarjetas barajadas."); });
  els.studyMode.addEventListener("change", () => startDeck(true));
  els.answerForm.addEventListener("submit", validateAnswer);
  els.nextBtn.addEventListener("click", nextCard);
  els.searchInput.addEventListener("input", renderList);

  els.answerInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && checked) { event.preventDefault(); nextCard(); }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Enter" && !els.quizCard.hidden && checked && document.activeElement !== els.answerInput && !els.nextBtn.hidden) nextCard();
  });

  setTheme(theme);
  updateStats();
  startDeck(true); // orden aleatorio desde el inicio

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () =>
      navigator.serviceWorker.register("./sw.js").catch(() => console.warn("Service Worker no disponible en este contexto."))
    );
  }
})();
