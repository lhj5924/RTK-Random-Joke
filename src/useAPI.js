import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url = 'https://official-joke-api.appspot.com/jokes'

export const jokeApi = createApi({
    reducerPath: 'jokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: url}),
    endpoints: (builder) => ({
        getJokeByCategory: builder.query({
            query: (category) => `/${category}/random`,
        })
    })
})

export const {useGetJokeByCategoryQuery} = jokeApi;