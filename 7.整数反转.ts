/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
  if (x == 0) {
    return 0;
  }
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  let reversedX = 0;
  while (x != 0) {
    let pop = x % 10;

    if (x > 0) {
      if (reversedX > MAX / 10 || (reversedX == MAX / 10 && pop > 7)) {
        return 0;
      }
      x = Math.floor(x / 10);
    } else {
      if (reversedX < MIN / 10 || (reversedX == MIN / 10 && pop < -8)) {
        return 0;
      }
      x = Math.ceil(x / 10);
    }

    reversedX = reversedX * 10 + pop;
  }
  return reversedX;
}
// @lc code=end

console.log(reverse(-123));
