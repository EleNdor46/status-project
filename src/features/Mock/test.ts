// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { User } from "entities/User";

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//     reducerPath: "pokemonApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query<User, null>({
//             query: (name) => `pokemon`,
//         }),
//     }),
// });

// // Export hooks for usage in function components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi;
