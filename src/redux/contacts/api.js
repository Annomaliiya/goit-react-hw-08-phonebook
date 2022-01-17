import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://61e16dc463f8fc0017618bef.mockapi.io/api/contacts';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: builder => ({
        fetchContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['contacts'],
        }),

        addContact: builder.mutation({
            query: contact => ({
                url: `/contacts`,
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['contacts'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        }),
    }),
});

export const {
    useFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;