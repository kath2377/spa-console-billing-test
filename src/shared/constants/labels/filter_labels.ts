import { CountriesList } from "../../infrastructure/catalog/countries-catalog";

export enum CatalogFilterEnum {
  BASIC_CATALOG = "basic_catalog",
  COMPLETE_CATALOG = "complete_catalog",
}

export const BasicCatalogFilters = {
  categoryItems: [
    {
      isMinimize: true,
      items: [
        {
          label: "Activo",
          selected: false,
          value: "active",
        },
        {
          label: "Pendiente",
          selected: false,
          value: "pending",
        },
        {
          label: "Inactivo",
          selected: false,
          value: "inactive",
        },
      ],
      onItemsSelect: () => {},
      placeHolder: "Estado",
      selectType: "multiple",
      type: "byChips",
    },
    {
      isMinimize: true,
      items: CountriesList,
      onItemsSelect: () => {},
      placeHolder: "País de constitución",
      selectType: "multiple",
      title: "Filtrar por",
      type: "byChips",
    },
  ],
};

export const CompleteCatalogFilters = {
  categoryItems: [
    {
      isMinimize: true,
      items: [
        {
          label: "Activo",
          selected: false,
          value: "active",
        },
        {
          label: "Pendiente",
          selected: false,
          value: "pending",
        },
        {
          label: "Inactivo",
          selected: false,
          value: "inactive",
        },
      ],
      onItemsSelect: () => {},
      placeHolder: "Estado",
      selectType: "multiple",
      type: "byChips",
    },
    {
      isMinimize: true,
      items: CountriesList,
      onItemsSelect: () => {},
      placeHolder: "País de constitución",
      selectType: "multiple",
      type: "byChips",
    },
    {
      isMinimize: true,
      items: [
        {
          label: "Descentralizado",
          selected: false,
          value: "Descentralizado",
        },
        {
          label: "Centralizado",
          selected: false,
          value: "Centralizado",
        },
      ],
      onItemsSelect: () => {},
      placeHolder: "Grupo",
      selectType: "multiple",
      title: "Grupo",
      type: "byChips",
    },
  ],
};

export const FilterCatalog = {
  [CatalogFilterEnum.BASIC_CATALOG]: BasicCatalogFilters,
  [CatalogFilterEnum.COMPLETE_CATALOG]: CompleteCatalogFilters,
};
