import { getDefaultConfig } from "connectkit";
import { createConfig } from "wagmi";
import { zkSyncTestnet } from "wagmi/chains";

//const walletConnectProjectId = "6794e44e858c1ad28fb1f632022da42c";
console.log(import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID);
export const config = createConfig(
  getDefaultConfig({
    autoConnect: true,
    appName: "My wagmi + ConnectKit App",
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    chains: [zkSyncTestnet],
  })
);
