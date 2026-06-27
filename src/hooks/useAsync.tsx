import { useReducer, useCallback, useEffect } from 'react';

const Status = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const;

type TStatus = (typeof Status)[keyof typeof Status];

type TState<T> = {
  status: TStatus;
  data: T;
  error: string | null;
};

type TAction<T> =
  | { type: 'fetch' }
  | { type: 'reject'; error: string }
  | { type: 'resolve'; data: T };

type TAsyncFn = (...args: any[]) => Promise<any>;

type TProps<TFn extends TAsyncFn> = {
  asyncFn: TFn;
  initialValue?: Awaited<ReturnType<TFn>>;
  execOnInit?: boolean;
};

type TResponse<TFn extends TAsyncFn> = TState<Awaited<ReturnType<TFn>>> & {
  fetchData: (...args: Parameters<TFn>) => Promise<TState<Awaited<ReturnType<TFn>>>>;
};

const reducer = <T,>(state: TState<T>, action: TAction<T>): TState<T> => {
  switch (action.type) {
    case 'fetch':
      return { ...state, status: Status.loading, error: null };
    case 'reject':
      return { ...state, status: Status.error, error: action.error };
    case 'resolve':
      return { status: Status.success, data: action.data, error: null };
    default:
      return state;
  }
};

export const useAsync = <TFn extends TAsyncFn>({
  asyncFn,
  initialValue = undefined as Awaited<ReturnType<TFn>>,
  execOnInit = false,
}: TProps<TFn>): TResponse<TFn> => {
  type T = Awaited<ReturnType<TFn>>;

  const [state, dispatch] = useReducer<TState<T>, [TAction<T>]>(reducer, {
    status: Status.idle,
    data: initialValue,
    error: null,
  });

  const fetchData = useCallback(
    async (...args: Parameters<TFn>) => {
      try {
        dispatch({ type: 'fetch' });
        const data = await asyncFn(...args);
        dispatch({ type: 'resolve', data });
        return { data, status: Status.success, error: null } satisfies TState<T>;
      } catch (error) {
        const errMessage = error instanceof Error ? error.message : String(error);
        dispatch({ type: 'reject', error: errMessage });
        return {
          data: undefined as T,
          status: Status.error,
          error: errMessage,
        } satisfies TState<T>;
      }
    },
    [asyncFn]
  );

  useEffect(() => {
    if (execOnInit) {
      (fetchData as () => Promise<unknown>)();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ...state, fetchData };
};
