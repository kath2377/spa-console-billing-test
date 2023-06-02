import {
  getBillingFile,
  getFirebaseId,
} from "../../../store/thunks/general/general.thunk";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHook";
import { ITableRowProps } from "@kushki/connect-ui/dist/Components/Organism/Table/TableSimple/interfaces";
import { useEffect } from "react";
import { isEmpty } from "lodash";
import { RootState } from "../../../store/interfaces/store.interfaces";

export interface IUseBilingDashboard {
  downloadFile: (format: string, selectedTransactions: any[]) => void;
  tableRows: ITableRowProps[];
}

export const useBillingDashboard = (): IUseBilingDashboard => {
  const dispatch = useAppDispatch();
  const { firebaseId } = useAppSelector((state: RootState) => state.app);
  const tableRows: ITableRowProps[] = [
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

  return { downloadFile, tableRows };
};
