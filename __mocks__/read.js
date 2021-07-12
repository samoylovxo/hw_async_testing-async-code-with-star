/* eslint-disable linebreak-style */

export default function readMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Данные не читаются'));
    }, 1000);
  });
}
