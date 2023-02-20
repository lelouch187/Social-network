import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type { IPaginate, IProfileUser, IResponseUsers } from '../types';

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
    getUsers: builder.query<IResponseUsers, IPaginate>({
      query: ({ page = 1, userInPage = 10 }) =>
        `users?page=${page}&count=${userInPage}`,
    }),
    getProfile: builder.query<IProfileUser, string>({
      query: (id) => `profile/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetProfileQuery } = socialNetworkApi;
