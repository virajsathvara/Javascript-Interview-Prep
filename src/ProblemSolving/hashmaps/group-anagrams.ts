/**
   * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  

  Example 1:

  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  Example 2:

  Input: strs = [""]
  Output: [[""]]
  Example 3:

  Input: strs = ["a"]
  Output: [["a"]]
 */

///// my solution //////////

function groupAnagrams(strArr: string[]) {
  if(strArr.length <= 1) return [strArr];
  const result: string[][] =  [];
  for(let s = 0; s < strArr.length; s++) {
      const str = strArr[s];
      let groupFound = false;
      for(let j = 0; j < result.length; j++) {
          const r = result[j];
          const anagram = isAnagram(r[0], str);
          if(!anagram) continue;
          result[j].push(str);
          groupFound = true;
      }
      if(!groupFound) result.push([str])
  }
  return result;
}

function isAnagram(str1: string, str2: string) {
  if(str1.length !== str2.length) return false;
  const charMap = new Map<string, number>();
  for(const c of str1) {
      const t = charMap.get(c);
      if(t) {
          charMap.set(c, t+1);
          continue;
      }
      charMap.set(c, 1);
  }

  for(const c of str2) {
      const t = charMap.get(c);
      if(!t) {
          return false;
      }
      charMap.set(c, t-1);
  }
  return true;
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

////// optimal solution /////////////

function groupAnagramsOptimal(strs: string[]): string[][] {
  let map = new Map<string, string[]>();

  strs.forEach(word => {
      let wordArray = word.split('');

      //Let's do character count and generate a unique string from it
      const alphabetIndexArray: number[] = new Array(26).fill(0);

      wordArray.forEach(char => {
          console.log(char.toLowerCase().charCodeAt(0), "a".charCodeAt(0))
          alphabetIndexArray[(char.toLowerCase().charCodeAt(0) - "a".charCodeAt(0))]++;
      })

      const myKey: string = alphabetIndexArray.join(',')
      // console.log(myKey)
      if (map.has(myKey)) {
          map.get(myKey)!.push(word); // Use ! to assert that map.get(sortedWord) is not null/undefined
      } else {
          map.set(myKey, [word]); // Initialize with an array containing the word
      }
  })
  const resultArray: string[][] = []
  for (let key of map.keys()) {
      resultArray.push(map.get(key) as string[])
  }

  return resultArray
};

console.log(groupAnagramsOptimal(["eat", "tea", "tan", "ate", "nat", "bat"]));

//////////////////////


