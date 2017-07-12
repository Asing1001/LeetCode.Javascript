import test from 'ava';

var isValid = function (s) {
    const arr = s.split('');
    const book = [];
    if (arr.length % 2 != 0) {
        return false;
    }

    for (var stringIndex = 0; stringIndex < arr.length; stringIndex++) {
        let cur = arr[stringIndex];
        switch (cur) {
            case '(':
                book.push(')');
                break;
            case '[':
                book.push(']');
                break;
            case '{':
                book.push('}');
                break;
            default:
                if (book.length === 0 || book.pop() !== cur)
                    return false;
        }
    }

    return book.length === 0;
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

test('()[]{} is valid', t => {
    t.deepEqual(isValid("()[]{}"), true);
});

