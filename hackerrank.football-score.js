import test from "ava";

const footballScore = (teamA, teamB) => {
  // O(n)
  const dic = teamA
    .sort((a, b) => a - b)
    .reduce((dic, scoreA, index) => {
      dic[scoreA] = index + 1;
      return dic;
    }, {});
  
  // O(n+m)
  const min = Math.min(...teamA, ...teamB);
  const max = Math.max(...teamA, ...teamB);
  let currentCount = 0;

  // O(max(n,m) - min(n,m))
  for (let index = min; index <= max; index++) {
    if (dic[index]) {
      currentCount = dic[index];
    } else {
      dic[index] = currentCount;
    }
  }

  // O(m)
  return teamB.map((scoreB) => dic[scoreB]);
};

test("footballScore([1, 2, 3], [2, 4])", (t) => {
  t.deepEqual(footballScore([1, 2, 3], [2, 4]), [2, 3]);
});

test("footballScore([2, 10, 5, 4, 8], [3, 1, 7, 8])", (t) => {
  t.deepEqual(footballScore([2, 10, 5, 4, 8], [3, 1, 7, 8]), [1, 0, 3, 4]);
});

test("footballScore([3, 1], [7])", (t) => {
  t.deepEqual(footballScore([3, 1], [7]), [2]);
});

test("footballScore([3, 1], [0])", (t) => {
  t.deepEqual(footballScore([3, 1], [0]), [0]);
});

test("footballScore([3, 1], [0, 1, 888888, 3])", (t) => {
  t.deepEqual(footballScore([3, 1], [0, 1, 888888, 3]), [0, 1, 2, 2]);
});

test("footballScore([2, 10, 5, 488, 8], [0, 1, 888888, 3])", (t) => {
  t.deepEqual(footballScore([2, 10, 5, 488, 8], [0, 1, 888888, 3]), [0, 0, 5, 1]);
});