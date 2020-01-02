export type ScoreState = {
  id: number,
  values: number[],
};

export type ScoreGroupState = {
  lastId: number,
  scores: ScoreState[],
};
