// TEST:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// SOLUTION:
// Firstly I split the strings into arrays, this is so I could perform operations on them.
// Secondly I sorted the arrays. No argument needed with the sort method because I wanted simple alphabetical order.
// The reason this sort is the keystone piece of this method, is because an anagram's sorted array would be the same as another one.
// Lastly we turn it back to string, so we can compare and apply booling logic.
// Tada! This only took me 5 minutes :)




var isAnagram = function(s, t) {
  newS = s.split('').sort().toString()
  newT = t.split('').sort().toString()
  if (newS == newT) {return true} else {return false}
};


// Attempting O(n) runtime
// Incomplete
const isHashAnagram = (s,t) => {
  let sHashMap = {}
  let tHashMap = {}
  let newS = s.split('')
  let newT = t.split('')
  newS.map((letter)=>{
    if (sHashMap[letter]) {sHashMap[letter]++} else {sHashMap[letter] = 1}
  })
  newT.map((letter)=>{
    if (tHashMap[letter]) {tHashMap[letter]++} else {tHashMap[letter] = 1}
  })
  Object.keys(sHashMap).map((letterKey)=>{
    if (sHashMap[letterKey] != tHashMap[letterKey]) {return false}
  })
  return true
}