import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type { Paginate, ResponseUsers } from '../types/types';

// Define a service using a base URL and expected endpoints
export const socialNetworkApi = createApi({
  reducerPath: 'socialNetworkApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
    }),
    { maxRetries: 3 },
  ),
  endpoints: (builder) => ({
    getUsers: builder.query<ResponseUsers, Paginate>({
      query: ({ page = 1, userInPage = 10 }) =>
        `users?page=${page}&count=${userInPage}`,
    }),
  }),
});

export const { useGetUsersQuery } = socialNetworkApi;
