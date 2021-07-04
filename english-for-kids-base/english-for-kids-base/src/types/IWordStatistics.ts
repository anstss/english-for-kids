export default interface IWordStatistics {
  category: string,
  word: string,
  translation: string,
  train: number,
  game: number,
  errors: number,
  percent: number
}