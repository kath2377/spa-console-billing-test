import axios from "../../../shared/axios-util";
import { store } from "../../store";
import {
  centralizeBranch,
  decentralizeBranches,
  getNodeInfoBranch,
  searchMerchantNode,
} from "../../thunks/infoBranches/infoBranches.thunk";
import infoBranchesSlice, { infoBranchInterface } from "./infoBranches.slice";
import { set } from "lodash";
import {
  setNotification,
  setSearchMerchantNodeStatus,
  setSelectedRows,
} from "../../actions/infoBranches.action";

describe("infoBranchesReducer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const initialState: infoBranchInterface = {
    isLoadingModal: false,
    notification: undefined,
    searchMerchantNode: [
      {
        config_core_id: "101abc002",
        configs: [
          {
            centralizedNodesId: "sdds",
          },
          {
            centralizedNodesId: "sdds",
          },
        ],
        country_code: "MXN",
        created: "2022-08-12T23:27:20Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        is_centralized: true,
        merchant_id: "20000000100315500001",
        name: "branch jhon test",
        node_id: "74fa294eb885",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:74fa294eb885",
        root_id: "76d725f027a7",
        status: "active",
        updated_at: "1970-01-01T00:00:00Z",
      },
      {
        config_core_id: "101abc002",
        constitutional_country: "Mexico",
        country_code: "MXN",
        created: "2022-08-12T20:42:16Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        merchant_id: "20000000100315500000",
        name: "branch de prueba",
        node_id: "30685f10c6c8",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:30685f10c6c8",
        root_id: "76d725f027a7",
        status: "active",
        updated_at: "1970-01-01T00:00:00Z",
      },
      {
        config_core_id: "101abc002",
        country_code: "MEX",
        created: "2022-08-12T20:42:16Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        merchant_id: "20000000100315500000",
        name: "branch de prueba",
        node_id: "30685f10c6c8",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:30685f10c6c8",
        root_id: "76d725f027a7",
        status: "active",

        updated_at: "2022-08-12T20:43:47Z",
      },
    ],
    searchMerchantNodeStatus: "NONE",
    selectRows: 0,
  };

  const data = {
    data: [
      {
        config_core_id: "101abc002",
        country_code: "MXN",
        created: "2022-08-12T23:27:20Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        merchant_id: "20000000100315500001",
        name: "branch jhon test",
        node_id: "74fa294eb885",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:74fa294eb885",
        root_id: "76d725f027a7",
        status: "active",
        updated_at: "1970-01-01T00:00:00Z",
      },
      {
        config_core_id: "101abc002",
        constitutional_country: "Mexico",
        country_code: "MXN",
        created: "2022-08-12T20:42:16Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        merchant_id: "20000000100315500000",
        name: "branch de prueba",
        node_id: "30685f10c6c8",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:30685f10c6c8",
        root_id: "76d725f027a7",
        status: "active",
        updated_at: "1970-01-01T00:00:00Z",
      },
      {
        config_core_id: "101abc002",
        country_code: "MEX",
        created: "2022-08-12T20:42:16Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
        merchant_id: "20000000100315500000",
        name: "branch de prueba",
        node_id: "30685f10c6c8",
        node_type: "nt001",
        path: "76d725f027a7:7a2083464145:30685f10c6c8",
        root_id: "76d725f027a7",
        status: "active",

        updated_at: "2022-08-12T20:43:47Z",
      },
      {
        config_core_id: "101abc002",
        country_code: "EC",
        created: "2022-08-15T22:16:30Z",
        created_by: "backoffice",
        deleted_at: "1970-01-01T00:00:00Z",
        description: "branch",
        entity_name: "BRANCH",
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
    total: 4,
  };

  const dataInfo = {
    configCoreId: "101abc002",
    configs: [{ centralizedNodesId: "sdds" }, { centralizedNodesId: "sdds" }],
    countryCode: "MEX",
    entityName: "BRANCH",
    generalInfo: {
      clientType: "B2C",
      constitutionalCountry: "Mexico",
      country: "Mexico",
      name: "BRANCH JHON TEST",
      publicMerchantId: "20000000100315500001",
    },
    hasChilds: false,
    merchantId: "20000000100315500001",
    nodeId: "74fa294eb885",
    path: "76d725f027a7:7a2083464145:74fa294eb885",
    rootId: "76d725f027a7",
  };

  it("should return the searchMerchantNodeState", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data,
    });

    await store.dispatch(
      searchMerchantNode({
        entityName: "BRANCH",
        isActive: true,
        limit: 100,
        offset: 0,
        path: "76d725f027a7",
        strictSearch: false,
      })
    );

    expect(axios.post).toBeCalled();
  });

  it("When getNodeInfo thunk is called successfully, is_centralized true", async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: dataInfo });
    await store.dispatch(
      getNodeInfoBranch({
        configIds: "cn001,cn016",
        publicMerchantId: "20000000100315500001",
      })
    );

    expect(
      infoBranchesSlice(initialState, {
        payload: dataInfo,
        type: getNodeInfoBranch.fulfilled,
      })
    ).toEqual(initialState);
  });
  it("When getNodeInfo thunk is called successfully, is_centralized false", async () => {
    set(dataInfo, "configs", [
      { centralizedNodesId: "sdds" },
      { centralizedNodesId: "sdds" },
    ]);
    set(initialState.searchMerchantNode[0], "is_centralized", true);
    set(initialState.searchMerchantNode[0], "configs", [
      { centralizedNodesId: "sdds" },
      { centralizedNodesId: "sdds" },
    ]);

    (axios.post as jest.Mock).mockResolvedValue({ data: dataInfo });
    await store.dispatch(
      getNodeInfoBranch({
        configIds: "cn001,cn016",
        publicMerchantId: "20000000100315500001",
      })
    );
    expect(
      infoBranchesSlice(initialState, {
        payload: dataInfo,
        type: getNodeInfoBranch.fulfilled,
      })
    ).toEqual(initialState);
  });

  it("When getNodeInfo thunk is called successfully, but index <-1 ", async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data: dataInfo });
    await store.dispatch(
      getNodeInfoBranch({
        configIds: "cn001,cn016",
        publicMerchantId: "20000000100315500001",
      })
    );
    expect(
      infoBranchesSlice(
        {
          isLoadingModal: false,
          notification: undefined,
          searchMerchantNode: [],
          searchMerchantNodeStatus: "NONE",
          selectRows: 0,
        },
        {
          payload: dataInfo,
          type: getNodeInfoBranch.fulfilled,
        }
      )
    ).toEqual({
      isLoadingModal: false,
      notification: undefined,
      searchMerchantNode: [],
      searchMerchantNodeStatus: "NONE",
      selectRows: 0,
    });
  });

  it("test extra reducer setSelectedRows", () => {
    expect(infoBranchesSlice(initialState, setSelectedRows(8))).toEqual({
      ...initialState,
      selectRows: 8,
    });
  });
  it("test extra reducer setNotification", () => {
    expect(infoBranchesSlice(initialState, setNotification(undefined))).toEqual(
      {
        ...initialState,
        notification: undefined,
      }
    );
  });

  it("should simulate centralizeBranch rejected", () => {
    expect(
      infoBranchesSlice(initialState, {
        type: centralizeBranch.rejected,
      })
    ).toEqual({
      ...initialState,
      isLoadingModal: false,
      notification: {
        color: "danger",
        message: "Ha ocurrido un error. Inténtalo nuevamente",
        variant: "simple",
        withIcon: false,
      },
    });
  });

  it("should simulate decentralizeBranch rejected", () => {
    expect(
      infoBranchesSlice(initialState, {
        type: decentralizeBranches.rejected,
      })
    ).toEqual({
      ...initialState,
      isLoadingModal: false,
      notification: {
        color: "danger",
        message: "Ha ocurrido un error. Inténtalo nuevamente",
        variant: "simple",
        withIcon: false,
      },
    });
  });
  it("should simulate decentralizeBranch fulfilled", () => {
    expect(
      infoBranchesSlice(initialState, {
        type: decentralizeBranches.fulfilled,
      })
    ).toEqual({
      ...initialState,
      isLoadingModal: false,
      notification: {
        color: "success",
        message: "Se descentralizó los 0 Branches con éxito",
        variant: "simple",
        withIcon: true,
      },
    });
  });

  it("test extra reducer setSelectedRows", () => {
    expect(
      infoBranchesSlice(initialState, setSearchMerchantNodeStatus("FINALIZE"))
    ).toEqual({
      ...initialState,
      searchMerchantNodeStatus: "FINALIZE",
    });
  });
});
