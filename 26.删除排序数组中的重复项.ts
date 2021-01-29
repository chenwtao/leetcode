/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  //解法一 map存value 无序数组去重也可以
  //   let maps = {};
  //   let i = 0;
  //   let length = nums.length;
  //   for (let index = 0; index < length; index++) {
  //     const element = nums[index];
  //     if (maps[element]) {
  //       continue;
  //     }
  //     maps[element] = true;
  //     nums[i] = element;
  //     i++;
  //   }
  //   return i;
  //解法二 双指针(只能做有序数组去重)
  let i = 0;
  let length = nums.length;
  for (let j = 1; j < length; j++) {
    if (nums[i] != nums[j]) {
      i++;
    }
    nums[i] = nums[j];
  }
  return i + 1;
}

// @lc code=end

let nums = [0, 0, 1, 3, 1, 2, 5, 3, 3, 4];
