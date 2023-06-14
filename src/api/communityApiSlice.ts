import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuestionPost, Comment, CommentPath, LastComment } from 'types/types';

export const communityApiSlice = createApi({
  reducerPath: 'communityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://34.64.216.86/api/' }),
  tagTypes: ['User', 'Post'],
  endpoints: (builder) => ({
    // 커뮤니티 게시판 단일 게시글 전체 get Api
    getAllCommunityPosts: builder.query<QuestionPost[], void>({
      query: () => `community/questions-all`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 게시판 단일 게시글 조회 get Api
    getCommunityPost: builder.query<QuestionPost, string>({
      query: (postId) => `community/questions/${postId}`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 게시판 게시글 최신순 get Api
    getCommunityPosts: builder.query<QuestionPost[], number | void>({
      query: (page = 1) => `community/questions?page=${page}&sort=latest`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 게시판 게시글 댓글순 get Api
    getMostCommentsCommunityPosts: builder.query<QuestionPost[], number | void>({
      query: (page = 1) => `community/questions?page=${page}&sort=mostComments`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 게시판 게시글 추천순 get Api
    getMostLikesCommunityPosts: builder.query<QuestionPost[], number | void>({
      query: (page = 1) => `community/questions?page=${page}&sort=mostLikes`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 질문 BEST 추천 5개 조회 get Api
    getBestLikesCommunityPosts: builder.query<QuestionPost[], void>({
      query: () => `community/questions/most-liked`,
    }),
    // 커뮤니티 질문 최신 댓글 1개 조회 get Api
    getLatestComment: builder.query<LastComment, void>({
      query: () => `community/questions/latest-commented`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 질문 댓글 0 게시글 조회 get Api
    getNoComment: builder.query<QuestionPost[], void>({
      query: () => `community/questions/no-comments`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 댓글 전체 조회 get Api
    getAllComments: builder.query<Comment[], string>({
      query: (postId) => `community/questions/comments/${postId}`,
      providesTags: ['Post'],
    }),
    // 커뮤니티 댓글 단일 조회 get Api
    getComment: builder.query<Comment, CommentPath>({
      query: ({ postId, commentId }) => `community/questions/comments/${postId}/${commentId}`,
      providesTags: ['Post'],
    }),
  }),
});

export const {
  useGetAllCommunityPostsQuery,
  useGetCommunityPostQuery,
  useGetCommunityPostsQuery,
  useGetMostCommentsCommunityPostsQuery,
  useGetMostLikesCommunityPostsQuery,
  useGetBestLikesCommunityPostsQuery,
  useGetLatestCommentQuery,
  useGetNoCommentQuery,
  useGetAllCommentsQuery,
  useGetCommentQuery,
} = communityApiSlice;
