import wordCollection from '../../../TestData.json';

import { WordList, WordPosition } from './word.schema';

// simulate async operation
// get words collection form test data JSON
let getWordsCollection = async (): Promise<WordList> => {
  // simulate async operation, data could be fetched from a remote source
  try {
    const { wordList } = (await wordCollection) as WordList;
    console.log('wordList: ', wordList);
    return { wordList };
  } catch (error) {
    throw new Error(
      `an error occured during fetching word collection data::: ${error}`
    );
  }
};

//   organize words into distinct collection accourding to their Part of Speech
let positionWordGroup = () => {
  let filterWordList = (pos: WordPosition) =>
    getWordsCollection().then((data: WordList) =>
      data.wordList.filter((words) => words.pos === pos)
    );
  let nouns = filterWordList('noun');
  let verbs = filterWordList('adverb');
  let adjectives = filterWordList('adjective');
  let adverbs = filterWordList('adverb');
  // let nouns = test.filter((words: any) => words.pos === 'noun')

  console.log('nouns: ', nouns);

  return { nouns, verbs, adjectives, adverbs };
};

let selectXRandomWords = async (pick = 10) => {
  let collection = [];
  let positionGroup = Object.values(positionWordGroup());
  let positionGroupIdx = Object.keys(positionWordGroup()).length;
  console.log('positionGroupIdx: ', positionGroupIdx);

  console.log('positionGroup: ', positionGroup);

  let pickSlice = Math.floor(10 / 4);
  console.log('pickSlice: ', pickSlice);

  for (let i = 0; i < positionGroupIdx; i++) {
    let partOfSpeech = await positionGroup[i];
    console.log('partOfSpeech: ', partOfSpeech);
    for (let j = 0; j < pickSlice; j++) {
      collection.push(partOfSpeech[i]);
      // TODO:: randomize
      // TODO:: delete pushed
    }
  }
  console.log('collection: ', collection);

  // TODO:: if pushed less than 10, put randomized items
};

//   export  function getRandomWords() {

//   }
