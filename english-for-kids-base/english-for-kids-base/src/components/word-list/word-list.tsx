import "./word-list.scss";
import {findCategoryByRoute} from "../../shared/utils";
import React, {useContext, useEffect} from "react";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import ICategoryWord from "../../types/ICategoryWord";
import {connect} from "react-redux";
import IState from "../../types/IState";
import Card from "../card/card";
import {useLocation} from "react-router-dom";

const WordList = ({currentWords}: {currentWords: ICategoryWord[]}) => {

  let location = useLocation();
  const englishService = useContext(EnglishServiceContext);

  useEffect(() => {
    englishService.setCategoriesToState();
    const category = findCategoryByRoute(location.pathname);
    englishService.getCategoryWords(category);
  }, []);

  return (
    <ul className="word-list px-5 py-4 mb-0 d-flex flex-wrap justify-content-center">
      {
        currentWords.map((word) => {
          return (
            <li key={word.word} className="my-3 mx-3 word-list__item">
              <Card word={word}/>
            </li>
          );
        })
      }
    </ul>
  )
}

const mapStateToPros = (state: IState) => {
  return {
    currentWords: state.currentWords
  }
}

export default connect(mapStateToPros)(WordList);