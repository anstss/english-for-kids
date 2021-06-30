import store from "../store";

export const transformCategoryToRoute = (category: string) => {
  const regex = /\(|\)/g;
  const route = category
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll(regex, "");
  return `/${route}`;
}

export const findCategoryByRoute = (location: string) => {
  const categories = store.getState().categories;
  const categoryRoutes = categories.map((category) => transformCategoryToRoute(category));
  const currentCategoryIndex = categoryRoutes.findIndex((item) => item === location);
  return categories[currentCategoryIndex];
}