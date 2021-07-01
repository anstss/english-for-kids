import ICategoryWord from "./types/ICategoryWord";

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