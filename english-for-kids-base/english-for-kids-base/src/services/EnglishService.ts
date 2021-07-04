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
import IWordStatistics from "../types/IWordStatistics";

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

  checkWord = (gameIsStarted: boolean, word: ICategoryWord, playMode: boolean) => {
    if (!gameIsStarted) {
      this.updateWordStatistics(playMode, gameIsStarted, word);
      return;
    }
    const currentGameWords = store.getState().gameWords;
    if (!currentGameWords.includes(word)) return;
    const correctWord = store.getState().currentWord;
    if (word.word !== correctWord?.word) {
      playAudio(ERROR_SOUND_SRC);
      store.dispatch(addWrongAnswer());
      this.updateWordStatistics(playMode, gameIsStarted, word, false);
      return;
    }
    playAudio(CORRECT_SOUND_SRC);
    store.dispatch(addCorrectAnswer());
    this.updateWordStatistics(playMode, gameIsStarted, word, true);
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

  getCategoryImage = (category: string) => {
    const categories = store.getState().categories;
    const categoryIndex = categories.indexOf(category) + 1;
    const image = cards[categoryIndex][3];
    if (typeof image !== "string") {
      return image.image;
    }
  }

  getAllWords = () => {
    let allWords: {categoryIndex: number, wordInfo: ICategoryWord}[] = [];
    for (let i = 1; i < cards.length; i++) {
      cards[i].forEach((word) => {
        if (typeof word !== "string") {
          allWords.push({
            categoryIndex: i,
            wordInfo: word
          });
        }
      });
    }
    return allWords;
  }

  getWordStatistics = () => {
    const statisctics = localStorage.getItem("EFKWordStat");
    if (statisctics === null) {
      const allWords = this.getAllWords();
      const categories = store.getState().categories;
      const newWordStatisctics = allWords.map((item) => {
        const category = categories.find((category) => categories.indexOf(category) === item.categoryIndex - 1);
        const {word, translation} = item.wordInfo;
        return {
          category,
          word,
          translation,
          train: 0,
          game: 0,
          errors: 0,
          percent: 0
        }
      });
      localStorage.setItem("EFKWordStat", JSON.stringify(newWordStatisctics));
      return newWordStatisctics;
    }
    return JSON.parse(statisctics);
  }

  updateWordStatistics = (playMode: boolean, gameIsStarted: boolean, word: ICategoryWord, isCorrectAnswer?: boolean) => {
    const statistics = this.getWordStatistics();
    const wordIndex = statistics.findIndex((elem: IWordStatistics) => elem.word === word.word && elem.translation === word.translation);
    const currentWordStat = statistics[wordIndex];
    if (!playMode) {
      currentWordStat.train = currentWordStat.train + 1;
    }
    if (playMode && gameIsStarted) {
      if (isCorrectAnswer) {
        currentWordStat.game = currentWordStat.game + 1;
      } else {
        currentWordStat.errors = currentWordStat.errors + 1;
      }
      currentWordStat.percent = Math.round(currentWordStat.game / (currentWordStat.game + currentWordStat.errors) * 100);
    }
    localStorage.setItem("EFKWordStat", JSON.stringify(statistics));
  }

}
