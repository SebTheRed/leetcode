# TEST:
# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
# 

# SOLUTION:
# I don't really know I just copied neetcode. I need to practice more Python.
# 
from collections import defaultdict
class Solution(object):
    def groupAnagrams(self, strs):
        leHash = defaultdict(list)
        for string in strs:
            count = [0] * 26
            for char in string:
                count[ord(char) - ord("a")] += 1
            leHash[tuple(count)].append(string)
        return leHash.values()
        