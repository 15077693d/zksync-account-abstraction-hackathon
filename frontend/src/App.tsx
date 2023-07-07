import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

import { Account } from "./components/Account";
import { Balance } from "./components/Balance";
import { NetworkSwitcher } from "./components/NetworkSwitcher";
import { ReadContract } from "./components/ReadContract";
import { WriteContract } from "./components/WriteContract";

export function App() {
  const { isConnected } = useAccount();
  return (
    <>
      <h1>ZkSync Greeter Dapp</h1>
      <ConnectKitButton />
      {isConnected && (
        <>
          <hr />
          <h2>Network and Account</h2>
          <NetworkSwitcher />
          <Account />
          <hr />
          <h2>Balance</h2>
          <Balance />
          <h2>Read Contract</h2>
          <ReadContract />
          <h2>Write Contract</h2>
          <WriteContract />
          <hr />
        </>
      )}
    </>
  );
}
