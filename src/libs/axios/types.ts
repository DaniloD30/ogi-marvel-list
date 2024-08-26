import type { AxiosError } from 'axios';

type Error = {
  code: number;
  name: string;
  message: string;
  status: number;
  hint: string;
};

type Response<Data> = {
  data: Data;
};

export type ApiError = AxiosError<Error>;
export type ApiResponse<Data> = Response<Data>;
