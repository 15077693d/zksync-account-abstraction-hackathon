"use client";

import { BaseError } from "viem";
import { useContractWrite, useWaitForTransaction } from "wagmi";

import { greeterContractConfig } from "./contracts";
import { stringify } from "../utils/stringify";

export function WriteContract() {
  const { write, data, error, isLoading, isError } = useContractWrite({
    ...greeterContractConfig,
    functionName: "setGreeting",
  });
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      <h3>Mint a wagmi</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const sentence = formData.get("greet-sentence") as string;
          write({
            args: [sentence],
          });
        }}
      >
        <input name="greet-sentence" placeholder="etc. hi" />
        <button disabled={isLoading} type="submit">
          Change
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>Transaction Hash: {data?.hash}</div>
          <div>
            Transaction Receipt: <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  );
}
