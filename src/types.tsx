export type ScoreState = {
  id: number;
  values: number[];
};

export type ScoreGroupState = {
  scores: ScoreState[];
};
