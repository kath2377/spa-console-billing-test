import * as StoreHook from "../../../store/hooks/storeHook";
import * as Router from "react-router-dom";
import { cleanup, renderHook } from "@testing-library/react-hooks";
import { useBillingDashboard } from "./useBillingDashboard";
import { buildNotification } from "../../../shared/constants/snackBar";
import {
  NotificationTypeEnum,
  SnackbarEnum,
} from "../../../shared/enums/SnackbarEnum";
import React, { ChangeEvent } from "react";
import { act } from "@testing-library/react";
import { dataFakeBranch } from "../../../shared/utilsTests/dataFake";
import { get, isNil } from "lodash";
import { Filters } from "../../../shared/interfaces/filter.interfaces";
import { ConfigurationIdEnum } from "../../../shared/enums/ConfigurationIdEnum";
import { DECENTRALIZE_BUSINESS_RULES_TEXT } from "../../../shared/constants/labels/main_containter_labels";

jest.mock("../../../store/hooks/storeHook", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname:
      "/centralization/merchant/323232323232/centralization?configurations=cn001,cn016,cn017",
  }),
  useParams: jest.fn(),
  useSearchParams: jest.fn(),
}));
jest.mock("@kushki/connect-ui", () => ({
  useSnackbar: jest.fn().mockReturnValue({
    showSnackbar: jest.fn(),
  }),
}));

describe("useBillingDashboard tests - ", () => {
  let dispatchMock: jest.Mock;
  const renderCustomHook = () => renderHook(() => useBillingDashboard());

  const mockDispatch = () => {
    const dispatch = jest.fn();

    jest.spyOn(StoreHook, "useAppDispatch").mockReturnValue(dispatch);

    return dispatch;
  };

  const mockUseSelector = (values?: {
    nodeInfo?: object;
    notification?: object;
    selectRow?: number;
    searchMerchantNode?: object[] | null;
    searchMerchantNodeStatus?: string;
  }) => {
    const initialState = {
      app: {
        nodeInfo: values?.nodeInfo,
      },
      infoBranches: {
        notification: values?.notification,
        searchMerchantNode: values?.searchMerchantNode || [],
        searchMerchantNodeStatus: isNil(values!.searchMerchantNodeStatus)
          ? "NONE"
          : values!.searchMerchantNodeStatus,
        selectRows: values?.selectRow,
      },
    };

    jest.spyOn(StoreHook, "useAppSelector").mockImplementation((state) =>
      state(
        // @ts-ignore
        initialState
      )
    );
  };

  const mockUseSearchParams = (searchedParam: string, paramValue: string) => {
    jest.spyOn(Router, "useSearchParams").mockReturnValue([
      {
        // @ts-ignore
        get: (param) => param === searchedParam && paramValue,
      },
    ]);
  };

  const mockUseParams = (
    urlObject: Readonly<Record<string, string | undefined>>
  ) => {
    jest.spyOn(Router, "useParams").mockReturnValue(urlObject);
  };

  beforeEach(() => {
    dispatchMock = mockDispatch();
    mockUseSearchParams("configurations", "cn001,cn017");
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  it("should not call any useEfffect when store and params are empty", () => {
    renderCustomHook();
    expect(dispatchMock).not.toHaveBeenCalled();
  });
  it("should call getNodeInfo when merchantId is not empty", () => {
    mockUseParams({ merchantId: "123" });
    mockUseSelector({ nodeInfo: {}, searchMerchantNode: [] });
    renderCustomHook();
    expect(dispatchMock).toHaveBeenCalled();
  });
  it("should call searchMerchantNode when nodeInfo is not empty", () => {
    mockUseParams({});
    mockUseSelector({
      nodeInfo: { path: "76d725f027a7" },
      searchMerchantNode: [],
    });
    renderCustomHook();
    expect(dispatchMock).toHaveBeenCalled();
  });
  it("should call getNodeInfoBranch when searchMerchantNode, configsIds and merchant_id of branches are not empty", () => {
    mockUseParams({});
    mockUseSelector({
      nodeInfo: {},
      searchMerchantNode: [{ merchant_id: "2" }, { merchant_id: undefined }],
    });
    renderCustomHook();
    expect(dispatchMock).toHaveBeenCalledTimes(0);
  });

  it("should call getNodeInfoBranch when searchMerchantNode, configsIds and merchant_id of branches are not empty", () => {
    mockUseParams({});
    mockUseSelector({
      nodeInfo: {
        configCoreId: "101abc001",
        configs: [
          {
            centralizedNodesId: [
              "41583af1c185",
              "0d462f6f7365",
              "60fdbc4c14c0",
              "cbb743dcd897",
              "7811934d2440",
              "61c065e0a542",
              "99e0e5327e9a",
              "62d3ee214cc9",
              "32103f26e73c",
              "d34aa7fe86c6",
              "ef176c4d640f",
              "a35c9b727054",
              "6518e0f4778f",
              "d053356b5a7e",
            ],
            configuration: "cn002",
            status: "",
            updatedAt: 1663869033005,
            updatedBy: "backoffice",
            value: "20000000100459240000",
          },
        ],
        countryCode: "PER",
        entityName: "CUSTOMER",
        generalInfo: {
          clientType: "B2B",
          constitutionalCountry: "Peru",
          country: "Peru",
          name: "GRECIA PE TEST PRIVADO",
          publicMerchantId: "20000000100459240000",
          status: "active",
        },
        hasChilds: true,
        merchantId: "20000000100459240000",
        nodeId: "d18c35c82d07",
        path: "cbf698a11034:d18c35c82d07",
        rootId: "cbf698a11034",
      },

      searchMerchantNode: [{ merchant_id: "2" }, { merchant_id: undefined }],
    });
    renderCustomHook();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });

  it("implement set notification, buildbodyCentralization select Rows ", () => {
    const selectRow = jest.fn();
    const selectECNodeId = jest.fn();
    const setSelectRow: any = () => [
      ["334a95eb70ba679", "334a95eb70ba", "651a95eb70ba"],
      selectRow,
    ];
    const setSelectECNodeId: any = () => [
      ["334a95eb70ba679", "651a95eb70ba"],
      selectECNodeId,
    ];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);
    jest.spyOn(React, "useState").mockImplementation(setSelectECNodeId);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(NotificationTypeEnum.CENTRALIZE_SUCCES, {
        color: "success",
        message: "Se descentralizó los 6 Branches con éxito",
        variant: "simple",
        withIcon: false,
      }),

      searchMerchantNode: [
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: true,
          merchant_id: "20000000105247690000",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
        {
          config_core_id: "101abc001",
          constitutional_country: "Ecuador",
          country_code: "ECU",
          created: "2021-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1971-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000012221232",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70bc",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70bc",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ],
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    result.current.isCentralized = true;

    result.current.setSelectedRows(4);
    result.current.setSelectedRows(5);
    result.current.selectRow = ["651a95eb70ba"];
    result.current.buildbodyCentralization();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
  it("implement set notification, buildbodyCentralization select Rows with no CN017 ", () => {
    const selectRow = jest.fn();
    const selectECNodeId = jest.fn();
    const setSelectRow: any = () => [[], selectRow];
    const setSelectECNodeId: any = () => [[], selectECNodeId];

    jest.spyOn(React, "useState").mockImplementation(setSelectECNodeId);
    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(NotificationTypeEnum.CENTRALIZE_SUCCES, {
        color: "success",
        message: "Se descentralizó los 6 Branches con éxito",
        variant: "simple",
        withIcon: false,
      }),

      searchMerchantNode: [
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: true,
          merchant_id: "20000000105247690000",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
        {
          config_core_id: "101abc001",
          constitutional_country: "Ecuador",
          country_code: "ECU",
          created: "2021-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1971-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000012221232",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70bc",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70bc",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ],
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    result.current.isCentralized = true;

    result.current.setSelectedRows(4);
    result.current.setSelectedRows(5);
    result.current.selectRow = ["651a95eb70ba"];
    result.current.buildbodyCentralization();
    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });

  it("implement set notification,buildbodyCentralization when searchMerchantNode is empty  ", () => {
    const selectRow = jest.fn();
    const setSelectRow: any = () => [
      ["334a95eb70ba679", "334a95eb70ba", "651a95eb70ba"],
      selectRow,
    ];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);
    const openAlert = jest.fn();
    const openModalCentralization = jest.fn();
    const openModalDecentralization = jest.fn();
    const setOpenModalCentralization: any = () => [
      false,
      openModalCentralization,
    ];
    const setOpenModalDecentralization: any = () => [
      false,
      openModalDecentralization,
    ];

    jest
      .spyOn(React, "useState")
      .mockImplementation(setOpenModalCentralization);
    jest
      .spyOn(React, "useState")
      .mockImplementation(setOpenModalDecentralization);
    const setOpenAlert: any = () => [false, openAlert];

    jest.spyOn(React, "useState").mockImplementation(setOpenAlert);

    const filtersBar = jest.fn();
    const setFiltersBar: any = () => [
      {
        country: "Chile|Colombia|Panama",
        Grupo: ["Descentralizado", "Centralizado"],
        status: "active|pending",
      },
      filtersBar,
    ];

    jest.spyOn(React, "useState").mockImplementation(setFiltersBar);

    mockUseParams({});
    mockUseSelector({
      searchMerchantNode: null,
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    result.current.isCentralized = true;

    result.current.handleSelectedRows([
      {
        config_core_id: "101abc002",
        constitutional_country: "Ecuador",
        country_code: "EC",
        created: "2022-08-15T22:16:30Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        is_centralized: true,
        merchant_id: "20000000105247690000",
        name: "branch ecuador centralizado",
        node_id: "651a95eb70ba",
        node_type: "nt001",
        path: "76d725f027a7:bea8603327fd:651a95eb70ba",
        root_id: "76d725f027a7",
        status: "active",
        updated_at: "1970-01-01T00:00:00Z",
      },
    ]);
    result.current.selectRow = ["651a95eb70ba"];
    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });

  it("implement set notification, buildbodyCentralization,  ", () => {
    const selectRow = jest.fn();
    const setSelectRow: any = () => [
      ["334a95eb70ba679", "334a95eb70ba", "651a95eb70ba"],
      selectRow,
    ];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),

      searchMerchantNode: [
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ],
      searchMerchantNodeStatus: "FINALIZE",
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    result.current.isDescentralized = true;
    result.current.setSelectedRows(4);
    result.current.setSelectedRows(5);
    result.current.selectRow = ["651a95eb70ba"];
    result.current.decentralizationBranch();
    expect(dispatchMock).toHaveBeenCalledTimes(4);
  });

  it("should call buildbodyCentralization and centralizeProcessors when config is cn007", () => {
    mockUseSearchParams("configurations", ConfigurationIdEnum.CN007);
    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(NotificationTypeEnum.CENTRALIZE_SUCCES, {
        color: "success",
        message: "Se descentralizó los Branches con éxito",
        variant: "simple",
        withIcon: false,
      }),
    });
    const { result } = renderCustomHook();

    act(() => {
      result.current.handleSelectedRows([
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ]);
      result.current.isCentralized = true;
      result.current.buildbodyCentralization();
    });

    expect(dispatchMock).toHaveBeenCalledTimes(3);
  });

  it("should decentralize async and call asyncMassiveAction when config is cn008", () => {
    mockUseSearchParams("configurations", ConfigurationIdEnum.CN008);
    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(NotificationTypeEnum.CENTRALIZE_SUCCES, {
        color: "success",
        message: SnackbarEnum.IN_PROGRESS,
        variant: "simple",
        withIcon: false,
      }),
    });
    const { result } = renderCustomHook();
    const setTimeOutSpy: jest.SpyInstance = jest.spyOn(global, "setTimeout");

    act(() => {
      result.current.handleSelectedRows([
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000",
          name: "branch ec centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ]);
      result.current.isDescentralized = true;
      result.current.decentralizationBranch();
    });

    expect(result.current.decentralizationModalText).toEqual(
      DECENTRALIZE_BUSINESS_RULES_TEXT
    );
    expect(dispatchMock).toHaveBeenCalledTimes(3);
    expect(setTimeOutSpy).toHaveBeenCalledTimes(1);
  });

  it("implement pagination table,  ", () => {
    const selectRow = jest.fn();
    const setSelectRow: any = () => [
      ["85fc65a6a3ax", "e0764619c5d8", "48dce27991cf"],
      selectRow,
    ];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),
      searchMerchantNode: get(dataFakeBranch, "data", []),
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    act(() => {
      result.current.handleSelectedRows([
        {
          config_core_id: "101abc002",
          constitutional_country: "Ecuador",
          country_code: "EC",
          created: "2022-08-15T22:16:30Z",
          created_by: "backoffice",
          deleted_at: "1970-01-01T00:00:00Z",
          description: "branch",
          entity_name: "BRANCH",
          is_centralized: false,
          merchant_id: "20000000105247690000",
          name: "branch ecuador centralizado",
          node_id: "651a95eb70ba",
          node_type: "nt001",
          path: "76d725f027a7:bea8603327fd:651a95eb70ba",
          root_id: "76d725f027a7",
          status: "active",
          updated_at: "1970-01-01T00:00:00Z",
        },
      ]);
    });

    result.current.decentralizationBranch();
    expect(dispatchMock).toHaveBeenCalledTimes(3);
  });
  it("Filter with an empty array", () => {
    const selectRow = jest.fn();
    const setSelectRow: any = () => [
      ["334a95eb70ba679", "334a95eb70ba", "651a95eb70ba"],
      selectRow,
    ];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),

      searchMerchantNode: [],
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    act(() => {
      result.current.searchMerchantNodeFilter([]);
    });

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
  it("Filter with no empty array", () => {
    const filterselected: Filters[] = [
      {
        isMinimize: true,
        items: [
          {
            label: "Pendiente",
            selected: true,
            value: "pending",
          },
        ],
        placeHolder: "Estado",
        selectType: "multiple",
        type: "byChips",
      },
    ];
    const selectRow = jest.fn();
    const setSelectRow: any = () => [["334a95eb70ba679"], selectRow];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),
      searchMerchantNode: [],
      selectRow: 6,
    });
    const { result } = renderCustomHook();

    act(() => {
      result.current.searchMerchantNodeFilter(filterselected);
      result.current.paginationProps.handleChangePage({}, 2);
      result.current.decentralizationBranch();
    });

    expect(dispatchMock).toHaveBeenCalledTimes(2);
  });
  it("Filter with centralized option", () => {
    const filterselected = [
      {
        isMinimize: true,
        items: [
          {
            label: "Centralizado",
            selected: true,
            value: "pending",
          },
          {
            label: "Descentralizado",
            selected: true,
            value: "pending",
          },
        ],
        placeHolder: "Grupo",
        selectType: "multiple",
        type: "byChips",
      },
    ];
    const selectRow = jest.fn();
    const setSelectRow: any = () => [["334a95eb70ba679"], selectRow];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),
      searchMerchantNode: get(dataFakeBranch, "data", []),
      selectRow: 6,
    });
    const { result } = renderCustomHook();
    const event = {
      target: {
        value: "20",
      },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.searchMerchantNodeFilter(filterselected);
      result.current.paginationProps.handleChangePage({}, 2);
      result.current.decentralizationBranch();
      result.current.handleSelectedRows([
        get(dataFakeBranch, "data[0]", []),
        get(dataFakeBranch, "data[1]", []),
      ]);
      result.current.paginationProps.handleChangeRowsPerPage(event);
      result.current.filterByNameBranchId();
    });

    expect(dispatchMock).toHaveBeenCalledTimes(3);
  });

  it("Filter with centralized option useEffect", () => {
    const filterselected = [
      {
        isMinimize: true,
        items: [
          {
            label: "Centralizado",
            selected: true,
            value: "pending",
          },
          {
            label: "Descentralizado",
            selected: true,
            value: "pending",
          },
        ],
        placeHolder: "Grupo",
        selectType: "multiple",
        type: "byChips",
      },
    ];
    const selectRow = jest.fn();
    const setSelectRow: any = () => [["334a95eb70ba679"], selectRow];

    jest.spyOn(React, "useState").mockImplementation(setSelectRow);

    const filtersBar = jest.fn();
    const setFiltersBar: any = () => [
      {
        country: "Chile|Colombia|Panama",
        Grupo: ["Descentralizado", "Centralizado"],
        status: "active|pending",
      },
      filtersBar,
    ];

    jest.spyOn(React, "useState").mockImplementation(setFiltersBar);

    mockUseParams({});
    mockUseSelector({
      notification: buildNotification(
        NotificationTypeEnum.DESCENTRALIZE_SUCCESS,
        {
          color: "success",
          message: "Se descentralizó los 6 Branches con éxito",
          variant: "simple",
          withIcon: false,
        }
      ),
      searchMerchantNode: get(dataFakeBranch, "data", []),
      selectRow: 6,
    });
    const { result } = renderCustomHook();
    const event = {
      target: {
        value: "20",
      },
    } as ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.searchMerchantNodeFilter(filterselected);
      result.current.paginationProps.handleChangePage({}, 2);
      result.current.decentralizationBranch();
      result.current.handleSelectedRows([
        get(dataFakeBranch, "data[0]", []),
        get(dataFakeBranch, "data[1]", []),
      ]);
      result.current.paginationProps.handleChangeRowsPerPage(event);
      result.current.filterByNameBranchId();
    });

    expect(dispatchMock).toHaveBeenCalledTimes(3);
  });
});
