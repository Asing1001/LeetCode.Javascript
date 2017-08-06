import test from 'ava';

var climbStairs = function (n) {
    var max2 = Math.floor(n / 2);
    var result = 1;
    for (var num2 = 1; num2 <= max2; num2++) {
        var num1 = n - num2 * 2;
        result = result + factorial(num1 + num2) / (factorial(num1) * factorial(num2))
    }
    return result;
};

function factorial(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

test('climbStairs(2) = 2', t => {
    t.is(climbStairs(2), 2);
});

test('climbStairs(3) = 3', t => {
    t.is(climbStairs(3), 3);
});

test('climbStairs(4) = 5', t => {
    t.is(climbStairs(4), 5);
});

test('climbStairs(5) = 8', t => {
    t.is(climbStairs(5), 8);
});

test('climbStairs(6) = 13', t => {
    t.is(climbStairs(6), 13);
});