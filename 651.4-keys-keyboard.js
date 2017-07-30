import test from 'ava';

//http://www.geeksforgeeks.org/how-to-print-maximum-number-of-a-using-given-four-keys/
var maxA = function (N) {
    if (N <= 6) return N;
    var max = 0;
    for (var b = N - 3; b >= 1; b--) {
        var cur = (N - b - 1) * maxA(b)
        max = Math.max(cur, max);
    }
    return max;
};

test('maxA(7) = 9', t => {
    t.is(maxA(7), 9);
});

test('maxA(3) = 3', t => {
    t.is(maxA(3), 3);
});

test('maxA(9) = 16', t => {
    t.is(maxA(9), 16);
});