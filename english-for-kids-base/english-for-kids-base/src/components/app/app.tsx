import React from "react";
import {Route} from "react-router-dom";
import Header from "../header/header";
import Menu from "../menu/menu";
import {connect} from "react-redux";
import IState from "../../types/IState";
import {transformCategoryToRoute} from "../../shared/utils";
import CategoryList from "../category-list/category-list";
import WordList from "../word-list/word-list";

const App = ({categories} : {categories: string[]}) => {

  return (
    <div>
      <Header/>
      <Menu/>
      <Route path={"/"} component={CategoryList} exact/>
      {
        categories.map((category) => {
          const route = transformCategoryToRoute(category);
          return (
            <Route path={route} key={route}>
              <WordList/>
            </Route>
          )
        })
      }
    </div>
  )
}

const mapStateToPros = (state: IState) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToPros)(App);