import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type { IFethUser } from '../types/types';

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
    getUsers: builder.query<IFethUser[], string>({
      query: () => 'users',
      transformResponse: (rawResult: {
        items: [users: IFethUser];
        totalCount: number;
        error?: string | null;
      }) => {
        return rawResult.items;
      },
    }),
  }),
});

export const { useGetUsersQuery } = socialNetworkApi;
