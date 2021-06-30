import cards from "../cards";
import store from "../store";
import {setCategories, setCurrentWords} from "../actions";
import ICategoryWord from "../types/ICategoryWord";

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
}
