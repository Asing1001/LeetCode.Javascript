import test from 'ava';

var maxProfit = function (prices) {
    if (prices.length === 1) {
        return 0;
    }

    var min = prices[0], maxPro = 0;
    for (var i = 1; i < prices.length; i++) {
        const cur = prices[i];
        if (cur < min) {
            min = cur;
        }

        const tempMax = cur - min;
        if (tempMax > maxPro) {
            maxPro = tempMax;
        }
    }

    return maxPro;
};

test('maxProfit', t => {
    t.deepEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

test('maxProfit', t => {
    t.deepEqual(maxProfit([7, 6, 5, 4, 3, 1]), 0);
});