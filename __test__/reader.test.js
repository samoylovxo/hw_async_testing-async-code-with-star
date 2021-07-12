/* eslint-disable linebreak-style */

import readMock from '../__mocks__/read';
import read from '../src/js/reader';

jest.mock('../src/js/reader');

test('mock with error for read() func', async () => {
  read.mockReturnValue(readMock());

  await read().catch((err) => {
    expect(err.message).toBe('Данные не читаются');
  });
});
