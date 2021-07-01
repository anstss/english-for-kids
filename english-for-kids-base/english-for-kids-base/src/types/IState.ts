import ICategoryWord from "./ICategoryWord";

export default interface IState {
  categories: string[],
  currentWords: [] | ICategoryWord[],
  playMode: boolean
}