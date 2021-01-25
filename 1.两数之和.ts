/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  //解法1
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //        if(nums[i]+nums[j] == target){
  //            return [i,j]
  //        }
  //     }
  //   }

  //解法2
  // let maps = {}
  // nums.forEach((item,i)=>{
  //     maps[item] = i
  // })

  // for (let index = 0; index < nums.length; index++) {
  //     let rest = target - nums[index]

  //     if(maps[rest] && maps[rest] != index){
  //         return [maps[rest],index]
  //     }
  // }

  //解法3
  const maps: { number: number } | any  = {};
  for (let index = 0; index < nums.length; index++) {
      let rest = target - nums[index]
    if (rest in maps) {
      return [maps[rest], index];
    }
    maps[nums[index]]=index;
  }
}
// @lc code=end




console.log(twoSum([2,7,11,15],9))
