import { gql, useLazyQuery } from "@apollo/client";
import { defaultTo, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import {
  getBillingFile,
  getFirebaseId,
} from "../../../store/thunks/general/general.thunk";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHook";
import { ITableRowProps } from "@kushki/connect-ui/dist/Components/Organism/Table/TableSimple/interfaces";
import { RootState } from "../../../store/interfaces/store.interfaces";

export interface IUseBilingDashboard {
  downloadFile: (format: string, selectedTransactions: any[]) => void;
  tableRows: ITableRowProps[];
  allowSelection: boolean;
  handleGetGqlData: () => void;
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
      total_transactions
      total_amount_trx
      cycle
    }
  }
`;

export const useBillingDashboard =
  (): Partial<IUseBilingDashboard> => {
    const [getResult, { called, loading, error, data }] =
      useLazyQuery(TEMPLATE_QUERY);
    const dispatch = useAppDispatch();
    const [tableRows, setTableRows] = useState<ITableRowProps[]>([]);
    const [allowSelection, setAllowSelection] = useState<boolean>(false);
    const { firebaseId } = useAppSelector((state: RootState) => state.app);
    const getGLQData = (): void => {
      getResult();
      if (!called || loading || error) return;
      const tableRows: ITableRowProps[] = [];


      defaultTo(data.getBills, []).forEach((d: object, index: number) => {
        const tableRowsAux: ITableRowProps[] = [
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
                    align: "center",
                    spacing: 1,
                  },
                  line1: d["total_transactions"],
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
                  line1: defaultTo(Number(d["total_amount_trx"]), 0).toFixed(2),
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
                    align: "left",
                    spacing: 1,
                  },
                  line1: d["cycle"],
                  type: "oneLine",
                },
                type: "TEXT",
              },
              {
                props: {
                  cellProps: {
                    spacing: 1,
                  },
                  color: d["status"] === "completed" ? "success" : "error",
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


    useEffect(() => {
      if (!isEmpty(firebaseId)) {
        dispatch(getBillingFile(firebaseId));
      }
    }, [firebaseId]);

    const downloadFile = (format: string, selectedTransactions: any[]): void => {
      const requestIds: string[] = [];

      if (selectedTransactions) {
        selectedTransactions?.forEach(
            (transaction: { transaction_id: string }) => {
              if (transaction.transaction_id !== undefined)
                requestIds.push(transaction.transaction_id);
            }
        );
      }

      dispatch(
          getFirebaseId({
            body: {
              country: "Ecuador",
              filter: {
                kind: "invoice|charge|dispersion",
              },
              format: format,
              from: "2023-05-03",
              limit: 500,
              offset: 0,
              requestIds: [
                "b870c344-8753-4ffc-b01c-882e061de4ab",
                "a25c64e7-2af1-4d45-90e5-35a8037c7d71",
              ],
              to: "2023-06-02",
            },
          })
      );
    };

    return {
      allowSelection,
      downloadFile,
      handleGetGqlData: getGLQData,
      tableRows,
    };
  };
};
