import React from "react";
import {Route} from "react-router-dom";
import Header from "../header/header";
import Menu from "../menu/menu";
import {connect} from "react-redux";
import IState from "../../types/IState";
import {transformCategoryToRoute} from "../../shared/utils";
import CategoryList from "../category-list/category-list";
import WordList from "../word-list/word-list";
import Score from "../score/score";
import Statistics from "../statistics/statistics";

const App = ({categories, gameIsStarted, playMode} : {categories: string[], gameIsStarted: boolean, playMode: boolean}) => {

  return (
    <div>
      <Header/>
      <Menu/>
      {playMode ? (gameIsStarted ? <Score/> : null) : null}
      <Route path={"/"} component={CategoryList} exact/>
      {
        categories.map((category) => {
          const route = transformCategoryToRoute(category);
          return <Route path={route} component={WordList} key={route}/>;
        })
      }
      <Route path={"/statistics"} component={Statistics}/>
      <Route path={"/difficult-words"} component={WordList}/>
    </div>
  )
}

const mapStateToPros = (state: IState) => {
  return {
    categories: state.categories,
    gameIsStarted: state.gameIsStarted,
    playMode: state.playMode
  }
}

export default connect(mapStateToPros)(App);