export const CountriesName = [
  "chile",
  "colombia",
  "costarica",
  "ecuador",
  "eeuu",
  "elsalvador",
  "guatemala",
  "honduras",
  "mexico",
  "nicaragua",
  "panama",
  "peru",
  "brasil",
  "default",
];

export const CountriesDefault = {
  ["brasil"]: {
    label: "Brasil",
    selected: false,
    value: "Brazil",
  },
  ["chile"]: {
    label: "Chile",
    selected: false,
    value: "Chile",
  },
  ["colombia"]: {
    label: "Colombia",
    selected: false,
    value: "Colombia",
  },
  ["costarica"]: {
    label: "Costa Rica",
    selected: false,
    value: "CostaRica",
  },
  ["default"]: {
    label: "Otros Paises",
    selected: false,
    value: "",
  },
  ["ecuador"]: {
    label: "Ecuador",
    selected: false,
    value: "Ecuador",
  },
  ["eeuu"]: {
    label: "Estados Unidos",
    selected: false,
    value: "EEUU",
  },
  ["elsalvador"]: {
    label: "El Salvador",
    selected: false,
    value: "ElSalvador",
  },
  ["guatemala"]: {
    label: "Guatemala",
    selected: false,
    value: "Guatemala",
  },
  ["honduras"]: {
    label: "Honduras",
    selected: false,
    value: "Honduras",
  },
  ["mexico"]: {
    label: "México",
    selected: false,
    value: "Mexico",
  },
  ["nicaragua"]: {
    label: "Nicaragua",
    selected: false,
    value: "Nicaragua",
  },
  ["panama"]: {
    label: "Panamá",
    selected: false,
    value: "Panama",
  },
  ["peru"]: {
    label: "Perú",
    selected: false,
    value: "Peru",
  },
};

export const CountriesList = [
  {
    label: "Ecuador",
    selected: false,
    value: "Ecuador",
  },
  {
    label: "Chile",
    selected: false,
    value: "Chile",
  },
  {
    label: "Perú",
    selected: false,
    value: "Peru",
  },
  {
    label: "México",
    selected: false,
    value: "Mexico",
  },
  {
    label: "Colombia",
    selected: false,
    value: "Colombia",
  },
  {
    label: "EEUU",
    selected: false,
    value: "EEUU",
  },
  {
    label: "Costa Rica",
    selected: false,
    value: "CostaRica",
  },
  {
    label: "El Salvador",
    selected: false,
    value: "ElSalvador",
  },
  {
    label: "Guatemala",
    selected: false,
    value: "Guatemala",
  },
  {
    label: "Honduras",
    selected: false,
    value: "Honduras",
  },
  {
    label: "Nicaragua",
    selected: false,
    value: "Nicaragua",
  },
  {
    label: "Panamá",
    selected: false,
    value: "Panama",
  },
  {
    label: "Brasil",
    selected: false,
    value: "Brasil",
  },
];

export const isValidCountry = (country: string) => {
  const filteredCountry = country.split("Console.Country.")[1];

  return CountriesDefault[filteredCountry] ? filteredCountry : "";
};
