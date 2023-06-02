import React, { FC } from "react";
import {
  FilterBar,
  IconDownload,
  SplitButton,
  TableSimple,
  Title,
} from "@kushki/connect-ui";
import { Box } from "@mui/material";
import {useBillingDashboard} from "./state/useBillingDashboard";

const BillingDashboard: FC = () => {
  const {tableRows} = useBillingDashboard();

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
          onButtonClick={() => {}}
          onButtonClickSecondary={function noRefCheck() {}}
          splitButton={
            <SplitButton
              icon={<IconDownload />}
              items={[
                { id: "1", text: "Descargar con .csv" },
                { id: "2", text: "Descargar con .xls" },
              ]}
              onItemSelected={function noRefCheck() {}}
              size="small"
              text="Descargar"
              type="default"
              variant="primary"
            />
          }
          title="Facturación"
          type="withSplitButton"
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
                    label: "Activo",
                    selected: false,
                    value: "Activo",
                  },
                  {
                    label: "Inactivo",
                    selected: false,
                    value: "Inactivo",
                  },
                  {
                    label: "Pendiente",
                    selected: false,
                    value: "Pendiente",
                  },
                ],
                onExpand: function noRefCheck() {},
                onItemsSelect: function noRefCheck() {},
                placeHolder: "Estado",
                selectType: "multiple",
                type: "byChips",
              },
              {
                isMinimize: true,
                items: [
                  {
                    label: "Enterprise",
                    selected: false,
                    value: "1",
                  },
                  {
                    label: "Pequeño",
                    selected: false,
                    value: "2",
                  },
                  {
                    label: "Mediano",
                    selected: false,
                    value: "3",
                  },
                ],
                onExpand: function noRefCheck() {},
                onItemsSelect: function noRefCheck() {},
                placeHolder: "Tipo de comercio",
                selectType: "multiple",
                type: "byChips",
              },
              {
                isMinimize: true,
                items: [
                  {
                    label: "México",
                    selected: false,
                    value: "MEXICO",
                  },
                  {
                    label: "Colombia",
                    selected: false,
                    value: "COLOMBIA",
                  },
                  {
                    label: "Ecuador",
                    selected: false,
                    value: "ECUADOR",
                  },
                  {
                    label: "Perú",
                    selected: false,
                    value: "PERU",
                  },
                ],
                onExpand: function noRefCheck() {},
                onItemsSelect: function noRefCheck() {},
                placeHolder: "País",
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
          header={{
            cells: [
              {
                align: "left",
                spacing: 0,
                text: "Fecha",
                type: "default",
              },
              {
                align: "left",
                spacing: 0,
                text: "Razón social",
                type: "default",
                width: 300,
              },
              {
                align: "left",
                spacing: 0,
                text: "Monto",
                type: "default",
                width: 400,
              },
              {
                align: "left",
                spacing: 0,
                text: "Tipo",
                type: "default",
                width: 1200,
              },
              {
                align: "left",
                spacing: 0,
                text: "Tipo de transacción",
                type: "default",
                width: 1200,
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
          rows={tableRows}
          showPagination
        />
      </Box>
    </>
  );
};

export default BillingDashboard;
