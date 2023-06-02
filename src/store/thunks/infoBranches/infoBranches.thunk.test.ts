import axios from "../../../shared/axios-util";
import { store } from "../../store";
import {
  asyncMassiveAction,
  centralizeBranch,
  decentralizeBranches,
  getNodeInfoBranch,
  searchMerchantNode,
} from "./infoBranches.thunk";
import { CentralizationTypeEnum } from "../../../shared/enums/CentralizationTypeEnum";

describe("infoBranches thunk tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const data = {
    data: [
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
    total: 4,
  };

  it("Succesfully call searchMerchantNode", async () => {
    (axios.post as jest.Mock).mockResolvedValue({ data });
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

  it("test searchMerchantNode", async () => {
    const res = await store.dispatch(
      searchMerchantNode({
        entityName: "BRANCH",
        isActive: true,
        limit: 100,
        offset: 0,
        path: "76d725f027a7",
        strictSearch: false,
      })
    );

    expect(res.payload).toBeTruthy();
    expect(res.meta.requestStatus).toEqual("fulfilled");
  });

  it("should return the value of getNodeInfoBranch", async () => {
    const searchResponse = {
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
      ],
      total: 3,
    };

    searchResponse.data.map(async (branch) => {
      await store.dispatch(
        getNodeInfoBranch({
          configIds: "cn001,cn016",
          publicMerchantId: branch.merchant_id,
        })
      );
    });

    (axios.post as jest.Mock).mockResolvedValue({ searchResponse });

    expect(axios.post).toBeCalled();
  });

  it("When getNodeInfo thunk is called successfully, then should call axios.post and set nodeInfo in the store", async () => {
    const dataInfo = {
      configCoreId: "101abc002",
      configs: [],
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

    (axios.post as jest.Mock).mockResolvedValue({ data: dataInfo });

    await store.dispatch(
      getNodeInfoBranch({
        configIds: "cn001,cn016",
        publicMerchantId: "20000000100315500001",
      })
    );

    expect(axios.post).toBeCalled();
  });

  it("test centralizeBranch fulfilled", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: {
        message: "nodsuccessfully",
        status: 200,
      },
    });
    const res = await store.dispatch(
      centralizeBranch({
        configs: [
          {
            centralizeschildsNodeIds: ["12", "123"],
            configuration: "CN001",
          },
        ],
        nodeId: "76d725f027a7",
      })
    );

    expect(res.meta.requestStatus).toEqual("fulfilled");
  });
  it("test decentralizeBranch fulfilled", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: {
        message: "nodsuccessfully",
        status: 200,
      },
    });
    const res = await store.dispatch(
      decentralizeBranches({
        branch: [
          {
            configs: [
              {
                centralizedNodeId: "7a2083464145",
                configuration: "cn017",
                newValue: "",
              },
            ],
            nodeId: "0dc8639906a7",
          },
        ],
        customer: {
          configs: [
            {
              childNodeId: "0dc8639906a7",
              configuration: "cn017",
            },
          ],
          nodeId: "7a2083464145",
        },
      })
    );

    expect(res.meta.requestStatus).toEqual("fulfilled");
  });

  it("should get status fulfilled when asyncMassiveAction is executed", async () => {
    (axios.post as jest.Mock).mockResolvedValue({
      data: {
        status: "ok",
      },
    });
    const response = await store.dispatch(
      asyncMassiveAction({
        childNodesId: ["12344", "454545"],
        configuration: "cn008",
        managementType: CentralizationTypeEnum.DECENTRALIZE,
        nodeId: "abc6723",
      })
    );

    expect(response.meta.requestStatus).toEqual("fulfilled");
  });
});
