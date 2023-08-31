/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { api } from "../../api/apiSlice";

const blogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/all-blogs`,
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogsApi;
