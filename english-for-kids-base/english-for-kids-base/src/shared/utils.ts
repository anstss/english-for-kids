import store from "../store";
import ICategoryWord from "../types/ICategoryWord";

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

export const playCurrentAudio = (target: EventTarget, playMode: boolean, translatedCard: ICategoryWord | null, audioSrc: string) => {
  if (playMode || translatedCard) return;
  //FIXME: not really good kludge, think of something better / (btn bg ?)
  if (target.toString() === "[object HTMLButtonElement]"
    || target.toString() === "[object SVGPathElement]"
    || target.toString() === "[object SVGSVGElement]") return;
  playAudio(audioSrc);
}

export const playAudio = (audioSrc: string) => {
  const audio = new Audio(`./assets/${audioSrc}`);
  audio.play();
}

export const getRandomWord = (words: ICategoryWord[]) => {
  const randIndex = Math.floor(Math.random() * words.length);
  return words[randIndex];
}