import "./word-list.scss";
import {findCategoryByRoute} from "../../shared/utils";
import React, {useContext, useEffect} from "react";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import ICategoryWord from "../../types/ICategoryWord";
import {connect} from "react-redux";
import IState from "../../types/IState";
import Card from "../card/card";
import {useLocation} from "react-router-dom";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import GameResult from "../game-result/game-result";

const WordList = ({
                    currentWords,
                    setCurrentCategory,
                    playMode,
                    gameIsStarted,
                    winStatus
                  }: {
                    currentWords: ICategoryWord[],
                    setCurrentCategory: (category: string) => void,
                    playMode: boolean,
                    gameIsStarted: boolean,
                    winStatus: boolean | null
                  }) => {

  let location = useLocation();
  const englishService = useContext(EnglishServiceContext);

  useEffect(() => {
    englishService.setCategoriesToState();
    const category = findCategoryByRoute(location.pathname);
    englishService.getCategoryWords(category);
    setCurrentCategory(category);
  }, []);

  return (
    <div className="word-list-container">
      {winStatus === null ? null : <GameResult/>}
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
      {playMode ? gameIsStarted ?
        <button className="btn btn-secondary btn-lg start-button mb-4"
                onClick={() => englishService.repeatCurrentWord()}>Repeat</button>
        :
        <button className="btn btn-secondary btn-lg start-button mb-4"
                onClick={() => englishService.startGame(currentWords)}>Start game</button>
        : null}
    </div>
  )
}

const mapStateToPros = (state: IState) => {
  return {
    currentWords: state.currentWords,
    playMode: state.playMode,
    gameIsStarted: state.gameIsStarted,
    winStatus: state.winStatus
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToPros, mapDispatchToProps)(WordList);