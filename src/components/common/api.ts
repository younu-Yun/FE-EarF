import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, QuestionPost, PostInput } from 'types/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api주소경로.com' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    // 유저 정보 get Api 수정 필수 -> 토큰 값으로 유저 정보를 얻는 과정이 필요함.
    getUserInfo: builder.query<User, void>({
      query: () => 'user',
      providesTags: ['User'],
    }),
    // 커뮤니티 게시판 게시글 get Api
    getCommunityPosts: builder.query<QuestionPost[], string>({
      query: (sort) => `/community${sort ? `?sort=${sort}` : ''}`,
    }),
    // 커뮤니티 게시글 등록 post Api
    createNewPost: builder.mutation<PostInput, Partial<PostInput>>({
      query: (post) => ({
        url: 'post',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: post,
      }),
    }),
    // 커뮤니티 게시글 수정 put Api
    updateExistingPost: builder.mutation<PostInput, Partial<PostInput> & { id: string }>({
      query: ({ id, ...post }) => ({
        url: `post/${id}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: post,
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetCommunityPostsQuery,
  useCreateNewPostMutation,
  useUpdateExistingPostMutation,
} = api;
