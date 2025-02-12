import { BuildTransferRequest } from "../api/messages/omni/v1beta6/trader/transaction_builder";
import type { SetNonNullable } from "../types";

export type TransactionRequest = SetNonNullable<
  BuildTransferRequest,
  "sourceAddress" | "destinationAddress" | "quote"
>;

export const TransactionRequest = BuildTransferRequest;
