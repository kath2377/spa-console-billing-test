import { renderHook } from "@testing-library/react-hooks";
import { useMobileState } from "./useMobileState";

jest.mock("@mui/material", () => ({
  useMediaQuery: jest.fn().mockReturnValue(true),
  useTheme: jest.fn().mockReturnValue({
    breakpoints: {
      down: jest.fn(),
    },
  }),
}));

const renderCustomHook = () => renderHook(() => useMobileState());

describe("useMobileState tests", () => {
  it("When the custom hook is called, then should return isMobile state", () => {
    const { result } = renderCustomHook();

    expect(result.current.isMobile).toBe(true);
  });
});
