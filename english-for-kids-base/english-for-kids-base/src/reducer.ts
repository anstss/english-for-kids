import IState from "./types/IState";

const initialState: IState = {
  categories: [],
  currentWords: [],
  playMode: false
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

    default:
      return state;
  }
}

export default reducer;