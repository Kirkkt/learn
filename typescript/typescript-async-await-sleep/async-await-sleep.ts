declare var Promise: PromiseConstructor;

const sleep = (seconds: number): Promise<{}> => {
  return new Promise((resolve: Function): void => {
    setTimeout(resolve, 1000 * seconds)
  });
};

const run = async ():Promise<{}> => {
  console.log('start');
  await sleep(1);
  console.log('later');
  return Promise.resolve({});
};

run();
