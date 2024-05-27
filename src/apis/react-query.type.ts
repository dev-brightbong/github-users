import { UseInfiniteQueryOptions } from "@tanstack/react-query";
import { RequestError } from "octokit";

/**
 * @description InfiniteQuery의 param을 정의한 타입입니다.
 */
export type InfiniteQueryHookParams<
  T extends CustomRequestFn,
  Error = RequestError,
  Data = RequestFnReturn<T>,
  Variables = Parameter<T>
> = {
  options?: Omit<
    UseInfiniteQueryOptions<Data, Error, Data, Data, any>,
    "queryKey" | "queryFn"
  >;
} & OptionalVariables<Variables>;

export type OptionalVariables<T> = undefined extends T
  ? { variables?: T }
  : { variables: T };

export type Parameter<T> = T extends (param: infer U) => any ? U : never;

export type CustomRequestFn = (variables?: any) => Promise<any>;

export type RequestFnReturn<T extends CustomRequestFn> = Awaited<ReturnType<T>>;
