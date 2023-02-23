import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type { IAuth, IPaginate, IProfileUser, IResponseUsers } from '../types';


export const socialNetworkApi = createApi({
  reducerPath: 'socialNetworkApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
      credentials: 'include',
      prepareHeaders: (headers) => {
        headers.set('API-KEY', 'aa522833-7390-49ca-b7a9-354a595576e0');
        return headers;
      },
    }),
    { maxRetries: 3 },
  ),
  endpoints: (builder) => ({
    getUsers: builder.query<IResponseUsers, IPaginate>({
      query: ({ page = 1, userInPage = 10 }) =>
        `users?page=${page}&count=${userInPage}`,
    }),
    getProfile: builder.query<IProfileUser, string | number>({
      query: (id) => `profile/${id}`,
    }),
    isAuth: builder.query<IAuth, null>({
      query: () => ({
        url: 'auth/me',
      }),
    }),
    followUser: builder.mutation({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: 'POST',
        invalidatesTags: (result:any, error:any, {userId}:any) => [{type: "FOLLOW", userId}],
      }),
    }),
    unFollowUser: builder.mutation({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: 'DELETE',
        invalidatesTags: (result:any, error:any, {userId}:any) => [{type: "FOLLOW", userId}],
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProfileQuery,
  useIsAuthQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
} = socialNetworkApi;
