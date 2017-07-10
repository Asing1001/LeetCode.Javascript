import test from 'ava';

var twoSum = function (nums, target) {
	const length = nums.length
	for (var i = 0; i < length; i++) {
		for (var j = i + 1; j < length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j]
			}
		}
	}
};

test('two-sum', t => {
	t.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
});