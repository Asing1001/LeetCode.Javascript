import test from 'ava';

var isValid = function (s) {
    const parentheses = ['(', ')', '{', '}', '[', ']'];
    const left = [];
    const right = [];
    const arr = s.split('');
    const book = [];
    if (arr.length % 2 != 0) {
        return false;
    }

    for (var stringIndex = 0; stringIndex < arr.length; stringIndex++) {
        let cur = arr[stringIndex];
        let pIndex = parentheses.indexOf(cur);
        let isLeft = pIndex % 2 === 0;

        if (isLeft) {
            left.push(cur)
        } else {
            right.push(cur)
        }
        book[stringIndex] = pIndex;
    }

    if (left.length !== right.length)
        return false
    else {

    }
    return true
};

test('() is valid', t => {
    t.deepEqual(isValid('()'), true);
});

test('( is invalid', t => {
    t.deepEqual(isValid('('), false);
});

test(')( is invalid', t => {
    t.deepEqual(isValid(')('), false);
});

test('(] is invalid', t => {
    t.deepEqual(isValid('(]'), false);
});

test('(( is invalid', t => {
    t.deepEqual(isValid('(('), false);
});

test('([)] is invalid', t => {
    t.deepEqual(isValid('([)]'), false);
});

test('()[]{} is invalid', t => {
    t.deepEqual(isValid("()[]{}"), true);
});

