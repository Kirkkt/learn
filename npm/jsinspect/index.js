/*
jsinpsect is a tool to analyze duplicated js code.
To install it, run:
  npm i jsinspect --save
To run it, run (in this project):
  npm run inspect
or more generally:
  node_modules/jsinspect/bin/jsinspect *.js
 */

const f = function(q) {
  const result = q.slice();
  const n = q.length;
  for (let i = 0; i < n; i++) {
    result[i][2] = result[i][1];
  }
  for (let i = 0; i < n; i++) {
    // find the candidate from i on
    let nextSmallestIndex;
    for (let j = i; j < n; j++) {
      if (result[j][2] !== 0) {
        continue;
      }
      if (nextSmallestIndex === undefined || result[j][0] < result[nextSmallestIndex][0]) {
        nextSmallestIndex = j;
      }
    }
    // swap
    const temp = result[nextSmallestIndex];
    result[nextSmallestIndex] = result[i];
    result[i] = temp;
    for (let j = i + 1; j < n; j++) {
      if (result[j][0] <= result[i][0]) {
        result[j][2]--;
      }
    }
    result[i].pop();
  }
  return result;
};

{
  const result = q.slice();
  const n = q.length;
  for (let i = 0; i < n; i++) {
    result[i].push(result[i][1]);
  }
  for (let i = 0; i < n; i++) {
    let nextIndex;
    for (let j = i; j < n; j++) {
      if (result[j][2] !== 0) {
        continue;
      }
      if (nextIndex === undefined || result[nextIndex][0] > result[j][0]) {
        nextIndex = j;
      }
    }
    const temp = result[nextIndex];
    result[nextIndex] = result[i];
    result[i] = temp;
    result[i].pop();
    for (let j = i + 1; j < n; j++) {
      if (result[i][0] < result[j][0]) {
        continue;
      }
      result[j][2]--;
    }
  }
  return result;
  const singleRun = function(q) {
    console.log(q, f(q));
  };
}

{
  const result = q.slice();
  const n = q.length;
  for (let i = 0; i < n; i++) {
    result[i].push(result[i][1]);
  }
  for (let i = 0; i < n; i++) {
    let nextIndex;
    for (let j = i; j < n; j++) {
      if (result[j][2] !== 0) {
        continue;
      }
      if (nextIndex === undefined || result[nextIndex][0] > result[j][0]) {
        nextIndex = j;
      }
    }
    const temp = result[nextIndex];
    result[nextIndex] = result[i];
    result[i] = temp;
    result[i].pop();
    for (let j = i + 1; j < n; j++) {
      if (result[i][0] < result[j][0]) {
        continue;
      }
      result[j][2]--;
    }
  }
  return result;
  const singleRun = function(q) {
    console.log(q, f(q));
  };
}

singleRun([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);
