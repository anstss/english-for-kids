import ICategoryWord from "./ICategoryWord";

export default interface IState {
  categories: string[],
  currentWords: ICategoryWord[],
  playMode: boolean,
  menuIsOpen: boolean,
  currentCategory: string,
  translatedCard: ICategoryWord | null,
  gameIsStarted: boolean,
  gameWords: ICategoryWord[],
  currentWord: ICategoryWord | null,
  answers: string[],
  winStatus: boolean | null
}