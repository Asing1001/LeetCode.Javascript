import test from 'ava';

test('foo', t => {
	t.pass();
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});

function getFileName(s) {
	s += '.js';
	return s.toLowerCase().replace(/\s/, '').replace(/\s/g, '-')
}
