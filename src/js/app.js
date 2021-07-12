/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    return await new GameSavingLoader().load();
  } catch (e) {
    throw new Error(`Произошла ошибка: ${e}`);
  }
})();
