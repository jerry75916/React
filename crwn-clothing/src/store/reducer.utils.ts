import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  Payload: P;
};

export type Action<T> = {
  type: T;
};
export function createAction<T extends string, P>(
  type: T,
  Payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string>(
  type: T,
  Payload: void
): Action<T>;
export function createAction<T extends string, P>(type: T, Payload: P) {
  return { type, Payload };
}
