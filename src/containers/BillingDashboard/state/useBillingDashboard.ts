import { Configs } from "../../../shared/interfaces/centralizeNodeRequest.interface";
import { Filters } from "../../../shared/interfaces/filter.interfaces";
import { MerchantNodeData } from "../../../store/reducers/infoBranches/infoBranches.slice";
import {
  IPaginationProps,
  ITableRowProps,
} from "../../../components/Table/TableSimple/interfaces";
import { UseFormReturn } from "react-hook-form";
import { gql, useLazyQuery } from "@apollo/client";
import { defaultTo } from "lodash";
import { useEffect, useState } from "react";

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
  tableRows: ITableRowProps[];
  allowSelection: boolean;
  handleGetGqlData: () => void;
}
export interface Branch {
  nodeId: string;
  merchantId: string;
  configs: Configs[];
}

const TEMPLATE_QUERY = gql`
  query getBills {
    getBills {
      created
      social_reason
      amount
      iva_kushki_commission
      invoice_amount_total
      kind
      transaction_type
      status
    }
  }
`;

export const useBillingDashboard =
  (): Partial<IUseBasicMerchantCentralization> => {
    const [getResult, { called, loading, error, data }] =
      useLazyQuery(TEMPLATE_QUERY);
    const [tableRows, setTableRows] = useState<ITableRowProps[]>([]);
    const [allowSelection, setAllowSelection] = useState<boolean>(false);
    const getGLQData = (): void => {
      getResult();
      if (!called || loading || error) return;
      const tableRows: ITableRowProps[] = [];

      defaultTo(data.getBills, []).forEach((d: object, index: number) => {
        const tableRowsAux = [
          {
            cells: [
              {
                props: {
                  cellProps: {
                    align: "left",
                    spacing: 1,
                  },
                  line1: defaultTo(d["created"], "").split("T")[0],
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
                  line1: d["social_reason"],
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
                  line1: defaultTo(Number(d["amount"]), 0).toFixed(2),
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
                  line1: defaultTo(
                    Number(d["iva_kushki_commission"]),
                    0
                  ).toFixed(2),
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
                  line1: defaultTo(
                    Number(d["invoice_amount_total"]),
                    0
                  ).toFixed(2),
                  type: "oneLine",
                },
                type: "TEXT",
              },
              {
                props: {
                  cellProps: {
                    spacing: 1,
                  },
                  text: d["kind"],
                },
                type: "TAG",
              },
              {
                props: {
                  cellProps: {
                    align: "left",
                    spacing: 1,
                  },
                  line1: d["transaction_type"],
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
                  text: d["status"],
                },
                type: "TAG",
              },
            ],
            id: index,
            rowProps: {
              color: "default",
              onChecked: () => {},
              onClick: function noRefCheck() {},
            },
          },
        ];

        tableRows.push(tableRowsAux[0]);
      });

      setTableRows(tableRows);
      setAllowSelection(!loading || !error);
    };

    useEffect(() => {
      getGLQData();
    }, [called, data]);

    return {
      allowSelection,
      handleGetGqlData: getGLQData,
      tableRows,
    };
  };
