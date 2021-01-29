/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  //解法一：
  // if (x < 0) {
  //   return false;
  // }
  // let xStr = x.toString();
  // let length = xStr.length;
  // let max = Math.ceil(length / 2);
  // for (let i = 0; i < max; i++) {
  //   if (xStr[i] !== xStr[length - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;

  // FIXME：解法二: 反转正数
  // if (x < 0 || (x % 10 == 0 && x != 0)) {
  //   return false;
  // }

  // let newX = x;
  // let reverseX = 0;
  // while (newX > 0) {
  //   let rest = newX % 10;
  //   newX = Math.floor(newX / 10);
  //   reverseX = reverseX * 10 + rest;
  // }
  // return x == reverseX;

  // FIXME：解法三: 整数反转一半
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let reversedX = 0;
  while (reversedX < x) {
    reversedX = reversedX * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == reversedX || x == Math.floor(reversedX / 10);
}

// @lc code=end

console.log(isPalindrome(121));
