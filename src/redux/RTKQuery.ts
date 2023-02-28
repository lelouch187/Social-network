import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import type {
  AuthLogin,
  IAuth,
  IPaginate,
  IProfileUser,
  IResponseUsers,
} from '../types';

export const socialNetworkApi = createApi({
  reducerPath: 'socialNetworkApi',
  tagTypes: ['Users', 'AUTH', 'PROFILE'],
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
      providesTags: (result) => ['PROFILE'],
    }),
    isAuth: builder.query<IAuth, null>({
      query: () => ({
        url: 'auth/me',
      }),
      providesTags: (result) => ['AUTH'],
    }),
    checkFollow: builder.query<boolean, number>({
      query: (userId) => `/follow/${userId}`,
      providesTags: (result) => ['Users'],
    }),
    followUser: builder.mutation<any, number>({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
    unFollowUser: builder.mutation<any, number>({
      query: (userId) => ({
        url: `follow/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    getStatus: builder.query<string, number | string>({
      query: (userId) => ({
        url: `profile/status/${userId}`,
      }),
    }),
    changeMyStatus: builder.mutation<any, string>({
      query: (messageStatus) => ({
        url: 'profile/status',
        method: 'PUT',
        body: { status: messageStatus },
      }),
    }),
    onLogin: builder.mutation<any, AuthLogin>({
      query: (data) => ({
        url: 'auth/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['AUTH'],
    }),
    onLogout: builder.mutation<any, null>({
      query: () => ({
        url: 'auth/login',
        method: 'DELETE',
      }),
      invalidatesTags: ['AUTH'],
    }),
    changeAvatar: builder.mutation<any, any>({
      query: (image) => ({
        url: 'profile/photo',
        method: 'PUT',
        body: image,
      }),
      //invalidatesTags: ['PROFILE'], 
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetProfileQuery,
  useIsAuthQuery,
  useCheckFollowQuery,
  useFollowUserMutation,
  useUnFollowUserMutation,
  useGetStatusQuery,
  useChangeMyStatusMutation,
  useOnLoginMutation,
  useOnLogoutMutation,
  useChangeAvatarMutation,
} = socialNetworkApi;
