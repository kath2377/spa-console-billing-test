import { IModalSimpleProps } from "@kushki/connect-ui/dist/Components/Molecules/Modal/ModalSimple/ModalSimple.interfaces";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BillingDashboard from "./BillingDashboard";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router";
import userEvent from "@testing-library/user-event";
import * as UseBasicMerchantCentralization from "./state/useBillingDashboard";
import { IFilterProps } from "../../components/Filter/Filter.interfaces";
import { rowsNodeTest } from "./MerchantCentralization2.test";
import { CountryEnum } from "../../shared/enums/countryEnum";
import { IMerchantCentralization } from "./state/useBillingDashboard";
import { Control, FormState } from "react-hook-form";

jest.mock("@kushki/connect-ui", () => ({
  Alert: () => (
    <div>
      Alerta
      <button data-testid={"b2AlertButton"}>Alert</button>
    </div>
  ),
  ChoiceButton: () => <div />,
  IconChevronLeft: () => {
    return <div data-testid={"IconChevronLeft"}>IconChevronLeft</div>;
  },
  IconEdit: () => {
    return <div data-testid={"IconEdit"}>IconEdit</div>;
  },
  IconLock: () => {
    return <div data-testid={"IconLock"}>IconLock</div>;
  },
  IconSearch: () => {
    return <div data-testid={"IconSearch"}>IconSearch</div>;
  },
  IconUnLock: () => {
    return <div data-testid={"IconUnLock"}>IconUnLock</div>;
  },
  ModalLoader: () => <div data-testid={"ModalLoader"} />,
  ModalSimple: ({
    onClickPrimary,
    onClickSecondary,
    isOpen,
    onClose,
  }: IModalSimpleProps) => {
    return (
      isOpen && (
        <div data-testid={"ModalSimple"}>
          <button onClick={onClickPrimary}>onClickPrimary</button>
          <button onClick={onClickSecondary}>onClickSecondary</button>
          <button onClick={onClose}>onClose</button>
        </div>
      )
    );
  },
  useSnackbar: jest.fn().mockReturnValue({
    showSnackbar: jest.fn(),
  }),
}));

jest.mock("../../components/SubHeader/Subheader", () => ({
  __esModule: true,
  default: () => {
    return <div data-testid="SubheaderID" />;
  },
}));

jest.mock("../../components/Filter/Filter", () => ({
  __esModule: true,
  default: ({ handleOnClick }: IFilterProps) => (
    <div data-testid={"Filter"}>
      <button onClick={handleOnClick}>handleOnClick</button>
    </div>
  ),
}));

jest.mock("react-hook-form", () => ({
  Controller: (props: {
    render: (prop: { field: { onChange: () => void } }) => JSX.Element;
  }) => {
    return (
      <div data-testid={"Controller"}>
        {props.render({ field: { onChange: jest.fn() } })}
      </div>
    );
  },
}));

const initialState = {
  buildbodyCentralization: jest.fn(),
  customerInfo: {
    constitutionalCountry: CountryEnum.mexico,
    name: "WALMART TESTING",
    publicMerchantId: "1223456578900021",
  },
  decentralizationBranch: jest.fn(),
  emptyRows: 0,
  filterByNameBranchId: jest.fn(),
  // @ts-ignore
  form: {
    control: {} as Control<IMerchantCentralization>,
    formState: {
      errors: {},
    } as FormState<IMerchantCentralization>,
    getValues: jest.fn().mockReturnValue("ABEJA"),
    watch: jest.fn(),
  },
  handleSelectedRows: jest.fn(),
  isCentralized: false,
  isCustomerComplete: true,
  isLoadingModal: false,
  markRow: jest.fn(),
  numberBranchesSelected: 0,
  openAlert: true,
  openModalCentralization: true,
  openModalDecentralization: false,
  paginationProps: {
    handleChangePage: jest.fn(),
    handleChangeRowsPerPage: jest.fn(),
    page: 0,
    rowsPerPage: 10,
    totalData: 12,
  },
  rows: rowsNodeTest,
  searchMerchantNodeFilter: jest.fn(),
  searchMerchantNodeStatus: "NONE",
  selectRow: ["1qsgs11", "12slkdf"],
  setOpenAlert: jest.fn(),
  setOpenModalCentralization: jest.fn(),
  setOpenModalDecentralization: jest.fn(),
  setSelectedRows: jest.fn(),
};

describe("BillingDashboard tests", () => {
  beforeEach(() => {
    jest
      .spyOn(UseBasicMerchantCentralization, "useBillingDashboard")
      // @ts-ignore
      .mockReturnValue(initialState);
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Router history={history}>
          <BillingDashboard />
        </Router>
      </MemoryRouter>
    );
  });

  it("When the component is render, and click filter", () => {
    const basicFilter = screen.getAllByText("handleOnClick");

    expect(screen.getByText("Descentralizar")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("b1Search"));
    userEvent.click(basicFilter[0]);

    expect(screen.getAllByTestId("Filter")[0]).toBeInTheDocument();
  });

  it("textbox simulate letters", () => {
    const textBox = screen.getByRole("textbox");

    userEvent.type(textBox, "ABEJA");

    expect(textBox).toHaveValue("ABEJA");
    fireEvent.click(screen.getByTestId("b1Search"));
  });

  it("open the modal centralization ", () => {
    fireEvent.click(screen.getByTestId("d2OpenModalCentralization"));
    fireEvent.click(screen.getByText("onClickPrimary"));
    fireEvent.click(screen.getByTestId("d2OpenModalCentralization"));
    fireEvent.click(screen.getByText("onClose"));
    fireEvent.click(screen.getByTestId("d2OpenModalCentralization"));
    fireEvent.click(screen.getByRole("button", { name: /onclicksecondary/i }));
    fireEvent.click(screen.getByRole("button", { name: /handleonclick/i }));
  });

  it("open the modal decentralization ", () => {
    fireEvent.click(screen.getByTestId("d1OpenModalDecentralization"));
    fireEvent.click(screen.getByRole("button", { name: /onclickprimary/i }));
    fireEvent.click(screen.getByTestId("d1OpenModalDecentralization"));
    fireEvent.click(screen.getByText("onClickSecondary"));
    fireEvent.click(screen.getByTestId("d1OpenModalDecentralization"));
    fireEvent.click(screen.getByText("onClose"));
  });

  it("check list item", () => {
    const listItem = screen.getAllByTestId("CheckBoxOutlineBlankIcon")[0];

    userEvent.click(listItem);

    expect(listItem).toBeDefined();

    const itemRowCheckedBranch = screen.getByRole("checkbox", {
      name: /table\-row\-0/i,
    });

    userEvent.click(itemRowCheckedBranch);

    const itemCheckedBoxSelectAll = screen.getByRole("checkbox", {
      name: /select all/i,
    });

    userEvent.click(itemCheckedBoxSelectAll);
  });

  it("click itemRow that it is centralized", () => {
    const listItem = screen.getAllByTestId("CheckBoxOutlineBlankIcon")[0];

    userEvent.click(listItem);

    expect(listItem).toBeDefined();

    const listItemChecked = screen.getByRole("checkbox", {
      name: /table\-row\-0/i,
    });

    userEvent.click(listItemChecked);

    fireEvent.click(screen.getByTestId("d2OpenModalCentralization"));
    fireEvent.click(screen.getByText("onClickPrimary"));
  });

  it("mouse over content button render tooltip when selected one centralized and one decentralized node", () => {
    jest
      .spyOn(UseBasicMerchantCentralization, "useBillingDashboard")
      // @ts-ignore
      .mockReturnValue({
        ...initialState,
        isCentralized: true,
        isCustomerComplete: true,
        isDescentralized: true,
      });
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Router history={history}>
          <BillingDashboard />
        </Router>
      </MemoryRouter>
    );
    const divsToolTipContent = screen.getAllByRole("tooltipContentButton")[1];

    userEvent.hover(divsToolTipContent);

    expect(divsToolTipContent).toBeDefined();
  });

  it("smiulate typing in textbox", () => {
    jest
      .spyOn(UseBasicMerchantCentralization, "useBillingDashboard")
      // @ts-ignore
      .mockReturnValue({
        ...initialState,
        isCentralized: true,
        isDescentralized: true,
      });
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Router history={history}>
          <BillingDashboard />
        </Router>
      </MemoryRouter>
    );

    const textBox = screen.getAllByRole("textbox")[1];

    userEvent.type(textBox, "ABEJA");

    expect(textBox).toHaveValue("ABEJA");

    fireEvent.keyPress(textBox, { charCode: 13, key: "Enter" });
  });

  it("should simulate press any other key in textbox", () => {
    jest
      .spyOn(UseBasicMerchantCentralization, "useBillingDashboard")
      // @ts-ignore
      .mockReturnValue({
        ...initialState,
        isCentralized: true,
        isDescentralized: true,
      });
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Router history={history}>
          <BillingDashboard />
        </Router>
      </MemoryRouter>
    );

    const textBox = screen.getAllByRole("textbox")[1];

    userEvent.type(textBox, "Test");

    expect(textBox).toHaveValue("Test");

    fireEvent.keyPress(textBox, { charCode: 13, key: "Fn" });
  });

  it("should show loading when decentralizing", () => {
    jest
      .spyOn(UseBasicMerchantCentralization, "useBillingDashboard")
      // @ts-ignore
      .mockReturnValue({
        ...initialState,
        isCentralized: true,
        isDescentralized: false,
        isLoadingDecentralized: true,
        isLoadingModal: true,
      });
    const history = createMemoryHistory();

    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Router history={history}>
          <BillingDashboard />
        </Router>
      </MemoryRouter>
    );

    const modalLoader = screen.queryAllByTestId("ModalLoader")[0];

    expect(modalLoader).toBeDefined();
  });
});
