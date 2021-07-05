import IState from "./types/IState";
import {CORRECT_ANSWER, WRONG_ANSWER} from "./shared/constants";

const initialState: IState = {
  categories: [],
  currentWords: [],
  playMode: false,
  menuIsOpen: false,
  currentCategory: "",
  translatedCard: null,
  gameIsStarted: false,
  gameWords: [],
  currentWord: null,
  answers: [],
  winStatus: null,
  wordStatistics: []
}

//FIXME: fix any type
const  reducer = (state = initialState, action: any) => {
  switch (action.type) {

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload
      }

    case "SET_CURRENT_WORDS":
      return {
        ...state,
        currentWords: action.payload
      }

    case "SWITCH_MODE":
      return {
        ...state,
        playMode: !state.playMode,
        gameWords: [],
        answers: [],
        gameIsStarted: false
      }

    case "TOGGLE_MENU_STATE":
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen
      }

    case "SET_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.payload
      }

    case "SHOW_TRANSLATION":
      return {
        ...state,
        translatedCard: action.payload
      }

    case "HIDE_TRANSLATION":
      return {
        ...state,
        translatedCard: null
      }

    case "GAME_STARTED":
      return {
        ...state,
        gameIsStarted: true,
        gameWords: action.payload
      }

    case "SET_CURRENT_WORD":
      return {
        ...state,
        currentWord: action.payload
      }

    case "DELETE_WORD_FROM_GAME_WORDS":
      const deletedWord = action.payload;
      const {gameWords} = state;
      const deletedIndex = gameWords.findIndex((word) => deletedWord === word);
      return {
        ...state,
        gameWords: [
          ...state.gameWords.slice(0, deletedIndex),
          ...state.gameWords.slice(deletedIndex + 1)
        ]
      }

    case "ADD_WRONG_ANSWER":
      return {
        ...state,
        answers: [
          ...state.answers,
          WRONG_ANSWER
        ]
      }

    case "ADD_CORRECT_ANSWER":
      return {
        ...state,
        answers: [
          ...state.answers,
          CORRECT_ANSWER
        ]
      }

    case "SET_WIN":
      return {
        ...state,
        winStatus: action.payload,
        currentWords: [],
        playMode: false,
        gameIsStarted: false
      }

    case "SET_STATISTICS_TO_STATE":
      return {
        ...state,
        wordStatistics: action.payload
      }

    default:
      return state;
  }
}

export default reducer;