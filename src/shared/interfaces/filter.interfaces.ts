export interface FilterElement {
  label: string;
  selected: boolean;
  value: string;
}

export interface Filters {
  isMinimize: boolean;
  items: FilterElement[];
  placeHolder: string;

  [k: string]: any;
}
