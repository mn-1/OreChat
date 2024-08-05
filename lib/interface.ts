// APIのレスポンスの型を定義
export interface ApiResponse<T> {
  isSuccess: boolean;
  body?: T;
}

// エラーの型を定義
export interface CustomError {
  errorCode?: Number;
  message: string;
}

type UndefinedOrOptional<T> = T extends undefined ? {} : { body: T };

export type ActionResult<T> =
  | ({ isSuccess: true } & UndefinedOrOptional<T>)
  | { isSuccess: false; message: string };
