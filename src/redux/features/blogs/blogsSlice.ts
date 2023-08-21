import { api } from "../../api/apiSlice";

const blogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `/all-blogs`,
    }),
    // addBlog: builder.mutation({
    //   query: (data) => ({
    //     url: `/create-blog`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["addBlog"],
    // }),
    // updateBlog: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/update-blog/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["addBlog"],
    // }),
    // deleteBlog: builder.mutation({
    //   query: (id) => ({
    //     url: `/delete-blog/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["addBlog"],
    // }),
  }),
});

export const {
  useGetBlogsQuery,
  //   useAddBlogMutation,
  //   useUpdateBlogMutation,
  //   useDeleteBlogMutation,
} = blogsApi;
