import React, { FC } from "react";
import {
  FilterBar,
  IconDownload,
  SplitButton,
  TableSimple,
  Title,
} from "@kushki/connect-ui";
import { Box } from "@mui/material";
import { useBillingDashboard } from "./state/useBillingDashboard";

const BillingDashboard: FC = () => {
  const { tableRows, allowSelection, handleGetGqlData, downloadFile } = useBillingDashboard();

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          padding: "20px",
          width: "100%",
        }}
      >
        <Title
          items={[
            {
              id: "1",
              text: "Facturación",
              url: "Facturación",
            },
          ]}
          onButtonClick={handleGetGqlData}
          textButton="Configuración Factura"
          onButtonClickSecondary={function noRefCheck() {}}
          splitButton={
            <SplitButton
              icon={<IconDownload />}
              items={[
                { id: "1", text: "Descargar en .csv" },
                { id: "2", text: "Descargar en .txt" },
              ]}
              onItemSelected={({ id }) =>
                id === "1"
                  ? downloadFile("csv", ["test"])
                  : downloadFile("txt", ["test"])
              }
              size="small"
              text="Descargar"
              type="default"
              variant="primary"
            />
          }
          title="Facturación"
          type="withButtonIconSplitButton"
        />
      </Box>
      <Box>
        <FilterBar
          filterDetailBar={{
            filters: [],
            onChangeFilters: () => {},
          }}
          filterSideBar={{
            categoryItems: [
              {
                isMinimize: true,
                items: [
                  {
                    label: "Diario",
                    selected: false,
                    value: "daily",
                  },
                  {
                    label: "Mensual",
                    selected: false,
                    value: "Monthly",
                  },
                ],
                onExpand: function noRefCheck() {},
                onItemsSelect: function noRefCheck() {},
                placeHolder: "Ciclo",
                selectType: "multiple",
                type: "byChips",
              },
              {
                isMinimize: true,
                items: [
                  {
                    label: "Emitido",
                    selected: false,
                    value: "completed",
                  },
                  {
                    label: "Fallido",
                    selected: false,
                    value: "rejected",
                  },
                ],
                onExpand: function noRefCheck() {},
                onItemsSelect: function noRefCheck() {},
                placeHolder: "Estado",
                selectType: "multiple",
                type: "byChips",
              },
            ],
            filtersCount: 0,
            isMinimized: false,
            isOpen: true,
            onClick: function noRefCheck() {},
            title: "Filtrar por",
          }}
          rangeDatePicker={{
            dateFormat: "dd/MMM/yyyy",
            disabledFutureDate: false,
            disabledOldDate: false,
            isFilled: false,
            isOpen: false,
            onDateSelect: function noRefCheck() {},
            placeholder: "Buscar por Fecha",
          }}
          textFieldSearchBy={{
            items: [
              {
                secondaryText: "Comercio Mex Norte S.A.",
                text: "123456789012",
              },
              {
                secondaryText: "Comercio Mex Sur S.A.",
                text: "123456789123",
              },
              {
                secondaryText: "Comercios Unidos S.A.",
                text: "123456789234",
              },
              {
                secondaryText: "Comercios colombia S.A.",
                text: "123456789345",
              },
              {
                secondaryText: "Comercio Mex Centro S.A.",
                text: "123456789456",
              },
              {
                secondaryText: "Comercio peru S.A.",
                text: "123456789567",
              },
              {
                secondaryText: "Comercio Ecuador Norte S.A.",
                text: "123456789678",
              },
              {
                secondaryText: "Comercio Ecuador Sur S.A.",
                text: "123456789789",
              },
            ],
            onItemSelected: function noRefCheck() {},
            placeholder:
              "Buscar por nro. de identificación, nombre de subcomercio o comercio",
          }}
        />
        <TableSimple
          allowSelection={allowSelection}
          header={{
            cells: [
              {
                align: "left",
                spacing: 0,
                text: "Fecha",
                type: "default",
                width: 650,
              },
              {
                align: "left",
                spacing: 0,
                text: "Razón social",
                type: "default",
                width: 1000,
              },
              {
                align: "left",
                spacing: 0,
                text: "Cantidad de Transacciones",
                type: "default",
                width: 300,
              },
              {
                align: "left",
                spacing: 0,
                text: "Monto Transaccional",
                type: "default",
                width: 300,
              },
              {
                align: "left",
                spacing: 0,
                text: "Comisión Kushki",
                type: "default",
                width: 300,
              },
              {
                align: "left",
                spacing: 0,
                text: "Ciclo",
                type: "default",
                width: 300,
              },
              {
                align: "left",
                spacing: 0,
                text: "Estado",
                type: "default",
              },
            ],
            headerProps: {
              isDisable: false,
            },
          }}
          onSelectedRows={() => {}}
          rows={tableRows!}
          showPagination
        />
      </Box>
    </>
  );
};

export default BillingDashboard;
