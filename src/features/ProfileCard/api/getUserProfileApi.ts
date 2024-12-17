import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "entities/User";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000",
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], string>({
            query: (id) => ({
                url: `/users/${id}`,
            }),
        }),
    }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints

export const useUsers = userApi.useGetUsersQuery;
