# word puzle cracker
## requirements
### must have requirements
* a list of words that will be used as a refernce
* words to derrive combinations
### optional tools
* Nodejs, which can be replaced with a browser or any platform to run javascript. **you need one of these**

## procedure
1. make a function that derrives all the combinations of a word and another that derives permutations of a word or one that does both
* the above function should be such that the words that comes out are not repeated. Thats why I opt to make different functions for combination and permutation
* another function therefore is needed to makesure that the words from permutations are unique,
* for each word from the permutation array make an array of combnations and place them in a universal array of combinations and permutations
* >> my assumption here is that the permutation function returns words of the same length
2. convert the dictionary to a javascript array
3. make a function that will take in as a parameter the dictionary and the word that should be matched and returns all words that are part of the valid words
4. print the results
