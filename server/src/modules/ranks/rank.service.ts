import wordList from '../../../TestData.json';
import { RankingScores } from './rank.schema';

// simulate async operation
let getRankingScores = async (): Promise<RankingScores> => {
  const scoresList = await wordList.scoresList;
  return { rankList: scoresList };
};

// sort rankings in asc order to be ranked
let sortedRankingScores = async (): Promise<number[]> => {
  try {
    // get ranking scores list data
    const userRankingScores = await (await getRankingScores()).rankList;

    return userRankingScores.sort((n1: number, n2: number) => n1 - n2);
  } catch (error) {
    throw new Error(
      `an error occured during fetching user ranking scores data::: ${error}`
    );
  }
};

export async function rankUserScore(currentUserScore: number): Promise<number> {
  // get user ranked by finding an index on a Sorted scores array
  let getCurrentUserScoreIndex: number = (
    await sortedRankingScores()
  )?.findIndex((val: number) => val === currentUserScore);

  let rankingScoresCount: number = (await sortedRankingScores())?.length;

  let getCurrentUserScoreRanked: number =
    getCurrentUserScoreIndex / rankingScoresCount;

  // user ranked made into percentage to the nearest two digits
  return Number(getCurrentUserScoreRanked.toFixed(2)) * 100;
}
