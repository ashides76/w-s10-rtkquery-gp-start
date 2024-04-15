import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Todos'], //where is this capital Todos coming from? 
    endpoints: build => ({
        getTodos: build.query({
            query: () => 'todos',
            providesTags: ['Todos']
        }), // how do I pass querystring value and authorizaion for api? 
        toggleTodo: build.mutation({
            query: ({id, todo}) => ({
                url: `todos/${id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        createTodo: build.mutation({
            query: todo => ({
                url: 'todos',
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: ['Todos']
        }),
    })
})

export const {
    useGetTodosQuery, useToggleTodoMutation, useCreateTodoMutation  // use and Query, Mutation are standard or name can be anything? 
} = todosApi

