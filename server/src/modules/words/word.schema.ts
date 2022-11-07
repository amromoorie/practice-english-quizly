interface Word {
  id: number;
  word: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb';
}

export interface WordList {
  wordList: Word[];
}

export type WordPosition = Word['pos'];
