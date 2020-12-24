/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */
/// 真是醉了，莫名其妙这个，感觉是串了什么东西，同样代码再来一次就对了
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ans = [];
  const vis = new Array(nums.length).fill(false);
  const backtrack = (idx, perm) => {
      if (idx === nums.length) {
          ans.push(perm);
          return;
      }
      for (let i = 0; i < nums.length; ++i) {
          if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
              continue;
          }
          perm.push(nums[i]);
          vis[i] = true;
          backtrack(idx + 1, [...perm]);
          vis[i] = false;
          perm.pop();
      }
  }
  nums.sort((x, y) => x - y);
  backtrack(0, []);
  return ans;
};
// @lc code=end

