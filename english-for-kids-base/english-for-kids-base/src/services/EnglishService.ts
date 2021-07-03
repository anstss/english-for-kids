import cards from "../cards";
import store from "../store";
import {
  addCorrectAnswer,
  addWrongAnswer,
  deleteWordFromGameWords,
  gameStarted,
  setCategories,
  setCurrentWord,
  setCurrentWords, setWin
} from "../actions";
import ICategoryWord from "../types/ICategoryWord";
import {getRandomWord, playAudio} from "../shared/utils";
import {CORRECT_ANSWER, CORRECT_SOUND_SRC, ERROR_SOUND_SRC, LOSE_SOUND, WIN_SOUND} from "../shared/constants";

export class EnglishService {

  getCategories = () => {
    return cards[0];
  }

  setCategoriesToState = () => {
    const categories = this.getCategories();
    store.dispatch(setCategories(categories));
  }

  getCategoryWords = (category: string) => {
    const categoryIndex = cards[0].findIndex((item) => item === category) + 1;
    const categoryWords  = cards[categoryIndex];
    store.dispatch(setCurrentWords(categoryWords));
    return categoryWords;
  }

  startGame = (currentWords: ICategoryWord[]) => {
    store.dispatch(gameStarted(currentWords));
    this.getNextWord();
  }

  getNextWord = () => {
    const answers = store.getState().answers;
    const currentWords = store.getState().currentWords;
    const correctAnswers = answers.filter((answer) => answer === CORRECT_ANSWER);
    if (correctAnswers.length === currentWords.length) {
      if (correctAnswers.length === answers.length) {
        store.dispatch(setWin(true));
        playAudio(WIN_SOUND);
      } else {
        store.dispatch(setWin(false));
        playAudio(LOSE_SOUND);
      }
      setTimeout(() => {
        store.dispatch(setWin(null));
        window.location.pathname = "/";
      }, 2000);
      return;
    }
    const words = store.getState().gameWords;
    const currentWord = getRandomWord(words);
    store.dispatch(setCurrentWord(currentWord));
    playAudio(currentWord.audioSrc);
  }

  checkWord = (gameIsStarted: boolean, word: ICategoryWord) => {
    if (!gameIsStarted) return;
    const correctWord = store.getState().currentWord;
    if (word.word !== correctWord?.word) {
      playAudio(ERROR_SOUND_SRC);
      store.dispatch(addWrongAnswer());
      return;
    }
    playAudio(CORRECT_SOUND_SRC);
    store.dispatch(addCorrectAnswer());
    store.dispatch(deleteWordFromGameWords(word));
    setTimeout(() => {
      this.getNextWord();
    }, 1000);
  }

  repeatCurrentWord = () => {
    const currentWord = store.getState().currentWord;
    if (!currentWord) return;
    playAudio(currentWord?.audioSrc);
  }
}
