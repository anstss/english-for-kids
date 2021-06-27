export const categoriesLoaded = (categories: any) => {
  return {
    type: 'CATEGORIES_LOADED',
    payload: categories
  }
}