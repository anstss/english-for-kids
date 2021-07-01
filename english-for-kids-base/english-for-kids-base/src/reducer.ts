import IState from "./types/IState";

const initialState: IState = {
  categories: [],
  currentWords: [],
  playMode: false,
  menuIsOpen: false,
  currentCategory: ""
}

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
        playMode: !state.playMode
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


    default:
      return state;
  }
}

export default reducer;