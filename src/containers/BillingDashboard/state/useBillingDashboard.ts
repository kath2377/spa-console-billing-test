import { Configs } from "../../../shared/interfaces/centralizeNodeRequest.interface";
import { Filters } from "../../../shared/interfaces/filter.interfaces";
import { MerchantNodeData } from "../../../store/reducers/infoBranches/infoBranches.slice";
import {
  IPaginationProps,
  ITableRowProps,
} from "../../../components/Table/TableSimple/interfaces";
import { UseFormReturn } from "react-hook-form";

export interface IMerchantCentralization {
  searchParameter: string;
}

export interface IUseBasicMerchantCentralization {
  handleSelectedRows: (rowsSelected: MerchantNodeData[]) => void;
  emptyRows: number;
  selectRow: string[];
  isCentralized: boolean;
  isDescentralized: boolean;
  disableDecentralization: boolean;
  isLoadingDecentralized: boolean;
  buildbodyCentralization: () => void;
  decentralizationBranch: () => void;
  decentralizationModalText: string;
  isLoadingModal: boolean;
  setSelectedRows: (row: number) => void;
  openModalCentralization: boolean;
  openModalDecentralization: boolean;
  paginationProps: IPaginationProps;
  rows: ITableRowProps[];
  searchMerchantNodeFilter: (filters: Filters[]) => void;
  setOpenModalCentralization: (alertState: boolean) => void;
  setOpenModalDecentralization: (alertState: boolean) => void;
  numberBranchesSelected: number;
  customerInfo: {
    constitutionalCountry: string;
    publicMerchantId: string;
    name: string;
  };
  filterByNameBranchId: () => void;
  form: UseFormReturn<IMerchantCentralization>;
  isCustomerComplete: boolean;
}
export interface Branch {
  nodeId: string;
  merchantId: string;
  configs: Configs[];
}

export const useBillingDashboard = (): IUseBasicMerchantCentralization => {
  const tableRows = [
    {
      cells: [
        {
          props: {
            cellProps: {
              align: "left",
              spacing: 1,
            },
            line1: "23/03/2023",
            type: "oneLine",
          },
          type: "TEXT",
        },
        {
          props: {
            cellProps: {
              align: "left",
              spacing: 1,
            },
            line1: "Ceviches de la Ruminahui",
            type: "oneLine",
          },
          type: "TEXT",
        },
        {
          props: {
            cellProps: {
              align: "left",
              spacing: 1,
            },
            line1: "$2500.34 USD",
            type: "oneLine",
          },
          type: "TEXT",
        },
        {
          props: {
            cellProps: {
              spacing: 1,
            },
            text: "Factura",
          },
          type: "TAG",
        },
        {
          props: {
            cellProps: {
              align: "left",
              spacing: 1,
            },
            line1: "Pay In",
            type: "oneLine",
          },
          type: "TEXT",
        },
        {
          props: {
            cellProps: {
              spacing: 1,
            },
            color: "success",
            text: "Aprobado",
          },
          type: "TAG",
        },
      ],
      id: "1",
      rowProps: {
        color: "default",
        onClick: function noRefCheck() {},
      },
    },
  ];
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);
  tableRows.push(tableRows[0]);

  return { tableRows };
};
