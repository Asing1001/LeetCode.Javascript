import test from 'ava';

var generate = function (numRows) {
    if (numRows === 0) return []
    var levels = [[1]];
    for (var j = 1; j < numRows; j++) {
        levels.push(getLevel(j));
    }

    function getLevel(level) {
        var result = [];
        var left = 0;
        var right = 0;
        for (var i = 0; i <= level; i++) {
            left = levels[level - 1][i - 1] || 0
            right = levels[level - 1][i] || 0
            result.push(left + right)
        }
        return result;
    }

    return levels;
};


test('numRows 1 should return [1]', t => {
    var expect = [[1]];
    t.deepEqual(generate(1), expect);
});

test('numRows 5 should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', t => {
    var expect = [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
    ]

    t.deepEqual(generate(5), expect);
});