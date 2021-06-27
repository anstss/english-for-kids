const initialState = {
  categories: []
}

const  reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CATEGORIES_LOADED':
      return {
        ...state,
        categories: action.payload
      }

    default:
      return state;
  }
}

export default reducer;