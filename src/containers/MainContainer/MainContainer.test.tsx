import { IModalSimpleProps } from "@kushki/connect-ui/dist/Components/Molecules/Modal/ModalSimple/ModalSimple.interfaces";
import React from "react";
import { render, screen } from "@testing-library/react";
import MainContainer from "./MainContainer";
import { IFilterProps } from "../../components/Filter/Filter.interfaces";
import userEvent from "@testing-library/user-event";

jest.mock("@kushki/connect-ui", () => ({
  ChoiceButton: () => <div />,
  FlagBrasil: () => <div />,
  FlagChile: () => <div />,
  FlagColombia: () => <div />,
  FlagCostaRica: () => <div />,
  FlagEcuador: () => <div />,
  FlagElSalvador: () => <div />,
  FlagGuatemala: () => <div />,
  FlagHonduras: () => <div />,
  FlagMexico: () => <div />,
  FlagNicaragua: () => <div />,
  FlagPanama: () => <div />,
  FlagPeru: () => <div />,
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

jest.mock("../../components/Filter/Filter", () => ({
  __esModule: true,
  default: ({ handleOnClick }: IFilterProps) => (
    <div data-testid={"Filter"}>
      <button onClick={() => handleOnClick("clicked")}>handleOnClick</button>
    </div>
  ),
}));

describe("BillingDashboard tests", () => {
  beforeEach(() => {
    render(<MainContainer />);
  });

  it("When the component is render, should have a button", () => {
    const basicFilter = screen.getAllByText("handleOnClick");

    userEvent.click(basicFilter[0]);
    userEvent.click(basicFilter[1]);
    expect(screen.getAllByTestId("Filter")[0]).toBeInTheDocument();
  });
});
