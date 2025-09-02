type Subjects =
  | "math"
  | "english"
  | "athletics"
  | "french"
  | "spanish"
  | "english";

type Scores = {
  [k in Subjects]: number;
};

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
