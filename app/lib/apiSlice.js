import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from '../data/cards'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getPostById: builder.query({
      query: postId => `/posts/${postId}`,
    }),
  }),
})

export const {useGetPostByIdQuery} = api
