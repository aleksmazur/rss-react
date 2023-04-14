import { rest } from 'msw';
import { characters, character } from './mockCharacters';
import { fetch, Headers, Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(characters));
  }),
  rest.get(`https://rickandmortyapi.com/api/character/361`, (req, res, ctx) => {
    return res(ctx.json(character));
  }),
  rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
    req.url.searchParams.set('name', '');
    return res(ctx.status(200), ctx.json(characters));
  }),
];
