import ICategoryWord from "./types/ICategoryWord";
import IWordStatistics from "./types/IWordStatistics";

export const setCategories = (categories: any) => {
  return {
    type: "SET_CATEGORIES",
    payload: categories
  }
}

export const setCurrentWords = (categoryWords: ICategoryWord[] | string[]) => {
  return {
    type: "SET_CURRENT_WORDS",
    payload: categoryWords
  }
}

export const switchMode = () => {
  return {
    type: "SWITCH_MODE"
  }
}

export const toggleMenuState = () => {
  return {
    type: "TOGGLE_MENU_STATE"
  }
}

export const setCurrentCategory = (category: string) => {
  return {
    type: "SET_CURRENT_CATEGORY",
    payload: category
  }
}

export const showTranslation = (word: ICategoryWord) => {
  return {
    type: "SHOW_TRANSLATION",
    payload: word
  }
}

export const hideTranslation = () => {
  return {
    type: "HIDE_TRANSLATION"
  }
}

export const gameStarted = (currentWords: ICategoryWord[]) => {
  return {
    type: "GAME_STARTED",
    payload: currentWords
  }
}

export const setCurrentWord = (word: ICategoryWord) => {
  return {
    type: "SET_CURRENT_WORD",
    payload: word
  }
}

export const deleteWordFromGameWords = (word: ICategoryWord) => {
  return {
    type: "DELETE_WORD_FROM_GAME_WORDS",
    payload: word
  }
}

export const addWrongAnswer = () => {
  return {
    type: "ADD_WRONG_ANSWER"
  }
}

export const addCorrectAnswer = () => {
  return {
    type: "ADD_CORRECT_ANSWER"
  }
}

export const setWin = (status: boolean | null) => {
  return {
    type: "SET_WIN",
    payload: status
  }
}

export const setStatisticsToState = (statistics: (IWordStatistics)[]) => {
  return {
    type: "SET_STATISTICS_TO_STATE",
    payload: statistics
  }
}