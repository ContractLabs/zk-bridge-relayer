export const TREE_HEIGHT = 20;

export const ZERO_VALUE =
    "21663839004416932945382355908790599225266501822907911457504978515578255421292";

export const EVENT_QUERY_BATCH_SIZE = 5000;

export const CONFIRMATION_BLOCKS = 15;

export const WASM_PATH = "zk-proof/withdraw.wasm";

export const ZKEY_PATH = "zk-proof/circuit_final.zkey";

export const BRIDGE = {
    43114: {
        97: "0xb3C1eEE123A4311Bfe93244f445585A361d48B1D",
    },

    97: {
        43114: "0xD7cD872524F023FB3Ada17fB7cB30eFb5bf8a397",
    },
} as { [key: number]: { [key: number]: string } };

export const COMMAND_GATE = {
    43114: "0x6014332df6999F863b7B35e0d67eC3A4852c5001",
    97: "0xC8fEF79e61E422F0c3903cC85612e495a72ddD32",
} as { [key: number]: string };

export const CONNECT_STRING = "mongodb://127.0.0.1/bridge";

export const ERC721_INTERFACE_ID = "0x80ac58cd";

export const ERC20_INTERFACE_ID = "0x36372b07";
