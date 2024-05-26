import { UseInfiniteQueryOptions } from "@tanstack/react-query";

export type InfiniteQueryHookParams<
  T extends CustomRequestFn,
  Error = any,
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
