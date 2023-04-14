import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { browser } from './api/browser';

beforeAll(() => browser.listen({ onUnhandledRequest: 'error' }));

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

afterEach(() => browser.resetHandlers());

afterAll(() => browser.close());
