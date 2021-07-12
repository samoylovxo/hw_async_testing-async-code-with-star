/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor() {}

  async load() {
    const resolveBuffer = await read();
    module.exports = resolveBuffer;
    const saveObj = await json(resolveBuffer);
    return JSON.parse(saveObj);
  }
}
