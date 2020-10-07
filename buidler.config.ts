import { BuidlerConfig, usePlugin } from "@nomiclabs/buidler/config";
// import { CapTableTasks } from './scripts/tasks';

usePlugin("buidler-ethers-v5");
usePlugin("buidler-deploy");
usePlugin("@blockchangers/buidler-typechain");

const config: BuidlerConfig = {
  networks: {
    dev: {
      url: "HTTP://127.0.0.1:8545",
    },
  },
  paths: {
    artifacts: "./dist/artifacts",
    // "cache": "./.symf/.cache/buidler/cache",
    // "sources": "./.symf/",
    // "tests": "./.symf/tests",
    // deploy: "./deploy",
    deployments: "./dist/deployments",
    // react: "./frontend/src/buidler",
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 50,
    },
  },
  typechain: {
    outDir: "./src/typechain",
    target: "ethers-v5",
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  react: {
    providerPriority: ["web3modal", "dev", "HTTP://127.0.0.1:8545"],
  },
};
export default config;

const react = {
  providerPriority: ["web3modal", "dev", "HTTP://127.0.0.1:8545"],
};

// const storage = {
//   dev: {
//     SimpleStorage: [
//       {
//         pattern: "document", // can be document / data or any other patterns we create
//         name: "dealAgreement",
//         save: "saveDocument",
//         get: "getDocument",
//         list: "listDocument",
//         check: "checkDocument",
//       },
//     ],
//   },
// };

// const react = {
//   dev: {
//     provider: ["web3modal", "metamask", "@dev", "HTTP://127.0.0.1:8545"],
//   },
// };

// type Storage = {
//   [network: string]: {
//     [contractName: string]: {
//       pattern: "document" | "data";
//       name?: string;
//       save?: string;
//       get?: string;
//       list?: string;
//       check?: string;
//     }[];
//   };
// };
