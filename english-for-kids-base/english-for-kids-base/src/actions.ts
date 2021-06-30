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
