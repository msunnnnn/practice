class Solution:
    def runningSum(self, nums):
        sums = [nums[0]]
        i = 1
        while i < len(nums):
            sums.append(nums[i] + sums[i-1])
            i += 1
        return sums