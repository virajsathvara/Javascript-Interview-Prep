/**
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * Input: s = "abcdeffg", k = 3
 * Output: Length of the longest substring with at most 3 distinct characters: 4, string 'deff'
 */

function longestSubstringKDistinct(s, k) {
  let left = 0;
  const charaFreq = {};
  let maxLengthStr = "";

  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    /** maintain object with chracter frequency */
    charaFreq[rightChar] = (charaFreq[rightChar] || 0) + 1;
    while (Object.keys(charaFreq).length > k) {
      const leftChar = s[left];
      charaFreq[leftChar]--;
      if (charaFreq[leftChar] === 0) {
        delete charaFreq[leftChar];
      }
      left++;
    }
    if (right - left + 1 > maxLengthStr.length) {
      maxLengthStr = s.substring(left, right + 1);
    }
  }

  return maxLengthStr;
}

const s = "aabacbebebe";
const k = 3;

const l = longestSubstringKDistinct(s, k);
console.log(`longest substring with at most ${k} distinct characters: ${l}`);
