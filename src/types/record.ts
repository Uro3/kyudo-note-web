export type ScoreSetState = {
  id: number;
  scores: number[];
};

export type RecordState = {
  scoreSets: ScoreSetState[];
};
