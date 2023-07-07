"use client";

import { useState } from "react";
import { BaseError } from "viem";
import { type Address, useContractRead } from "wagmi";

import { greeterContractConfig } from "./contracts";

export function ReadContract() {
  return (
    <div>
      <div>
        <BalanceOf />
      </div>
    </div>
  );
}

function BalanceOf() {
  const { data, error, isSuccess } = useContractRead({
    ...greeterContractConfig,
    functionName: "greet",
  });

  return (
    <div>
      Greeter: {isSuccess && data?.toString()}
      {error && <div>{(error as BaseError).shortMessage}</div>}
    </div>
  );
}
