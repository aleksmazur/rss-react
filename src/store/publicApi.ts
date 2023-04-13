import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacter, Response } from '../types/types';

export const publicApi = createApi({
  reducerPath: 'public/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: (build) => ({
    searchChars: build.query<ICharacter[], string>({
      query: (search: string) => ({
        url: 'character',
        params: {
          name: search,
        },
      }),
      transformResponse: (response: Response) => response.results,
    }),
    getCharById: build.query<ICharacter, number>({
      query: (id: number) => ({
        url: `character/${id}`,
      }),
    }),
  }),
});

export const { useSearchCharsQuery, useLazyGetCharByIdQuery } = publicApi;
