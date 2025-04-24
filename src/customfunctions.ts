/// <reference types="@types/office-js" />
/// <reference types="@types/office-runtime" />

import { CustomFunctions } from "@microsoft/office-js";
import { getOrientation } from "./config";
import { factorialRowWorker } from "./functions/factorialRow";

/**
 * @customfunction
 * @param {number} n A number between 1 and 500
 * @returns {Promise<string[][]>} Row or column of factorials
 * @namespace TESTVELIXO
 */
export async function FACTORIALROW(n: number): Promise<string[][]> {
  const values = await factorialRowWorker(n);
  return getOrientation() === "column"
    ? values.map(v => [v])
    : [values];
}

CustomFunctions.associate("TESTVELIXO.FACTORIALROW", FACTORIALROW);