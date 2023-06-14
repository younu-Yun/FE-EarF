import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, QuestionPost, DeletePost, CreateQuestionPost, Comment, CommentPath, CommentPost } from 'types/types';
import { getToken, isTokenExpired, refreshAccessToken } from './token';

export const communityTokenApiSlice = createApi({
  reducerPath: 'communityTokenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://34.64.216.86/api/',
    prepareHeaders: async (headers) => {
      const token = getToken();
      const expirationTime = localStorage.getItem('accessTokenTime');

      if (expirationTime && isTokenExpired()) {
        try {
          await refreshAccessToken();
          headers.set('Authorization', `Bearer ${getToken()}`);
          headers.set('Content-Type', 'application/json');
        } catch (error) {
          console.error('토큰 갱신에 실패했습니다:', error);
        }
      } else {
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('Content-Type', 'application/json');
      }

      return headers;
    },
  }),
  tagTypes: ['User', 'Post'],
  endpoints: (builder) => ({
    getUserInfo: builder.query<User, void>({
      query: () => ({
        url: 'user',

        providesTags: ['User'],
      }),
    }),
    // 커뮤니티 게시글 등록 post Api
    createCommunityPost: builder.mutation<Comment, Partial<CreateQuestionPost>>({
      query: (post) => ({
        url: 'community/questions',
        method: 'POST',

        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    // 커뮤니티 게시글 수정 patch Api
    editCommunityPost: builder.mutation<CreateQuestionPost, Partial<QuestionPost> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `community/questions/${id}`,
        method: 'PATCH',

        body: patch,
      }),
      invalidatesTags: ['Post'],
    }),
    // 커뮤니티 게시글 삭제 delete Api
    deleteCommunityPost: builder.mutation<CreateQuestionPost, Partial<DeletePost> & { id: string }>({
      query: ({ id }) => ({
        url: `community/questions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    // 커뮤니티 댓글 생성 post Api
    createComment: builder.mutation<Comment, CommentPost & { id: string }>({
      query: ({ id, ...post }) => ({
        url: `community/questions/comments/${id}`,
        method: 'POST',

        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    // 커뮤니티 댓글 수정 patch Api
    editComment: builder.mutation<CommentPost, CommentPost & CommentPath>({
      query: ({ postId, commentId, ...patch }) => ({
        url: `community/questions/comments/${postId}/${commentId}`,
        method: 'PATCH',

        body: patch,
      }),
      invalidatesTags: ['Post'],
    }),
    // 커뮤니티 댓글 삭제 delete Api
    deleteComment: builder.mutation<CommentPost, CommentPath>({
      query: ({ postId, commentId }) => ({
        url: `community/questions/comments/${postId}/${commentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
    // 작성글 좋아요 patch Api
    toggleLikePost: builder.mutation<QuestionPost, { postId: string }>({
      query: ({ postId }) => ({
        url: `community/questions/comments/like/${postId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Post'],
    }),
    // 댓글 좋아요 patch Api
    toggleLikeComment: builder.mutation<Omit<Comment, 'numLikes'>, CommentPath>({
      query: ({ postId, commentId }) => ({
        url: `community/questions/comments/like/${postId}/${commentId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useCreateCommunityPostMutation,
  useEditCommunityPostMutation,
  useDeleteCommunityPostMutation,
  useCreateCommentMutation,
  useEditCommentMutation,
  useDeleteCommentMutation,
  useToggleLikeCommentMutation,
} = communityTokenApiSlice;
