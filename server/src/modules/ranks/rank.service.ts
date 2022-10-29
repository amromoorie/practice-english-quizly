import wordList from '../../../TestData.json';
import { RankingScores } from './rank.schema';
console.log('data: ', wordList);

// simulate async operation
let getRankingScores = async (): Promise<RankingScores> => {
  const scoresList = await wordList.scoresList;
  console.log('scoresList: ', scoresList);
  return { rankList: scoresList };
};

// sort rankings in asc order to be ranked
let sortedRankingScores = async (): Promise<number[] | undefined> => {
  try {
    // get ranking scores list data
    const userRankingScores = await (await getRankingScores()).rankList;

    return userRankingScores.sort((n1: number, n2: number) => n1 - n2);
  } catch (error) {
    console.error(
      `an error occured during fetching user ranking scores data::: ${error}`
    );
  }
};

export async function rankUserScore(currentUserScore: number): Promise<any> {
  // get user ranked by finding an index on a Sorted scores array
  let getCurrentUserScoreIndex: any = (await sortedRankingScores())?.findIndex(
    (val: number) => val === currentUserScore
  );
  console.log('getCurrentUserScoreRanked: ', getCurrentUserScoreIndex);

  let rankingScoresCount: any  = (await sortedRankingScores())?.length
  let getCurrentUserScoreRanked: any = getCurrentUserScoreIndex  / rankingScoresCount
  console.log('getCurrentUserScoreRanked: ', getCurrentUserScoreRanked);
  return getCurrentUserScoreRanked;
}
