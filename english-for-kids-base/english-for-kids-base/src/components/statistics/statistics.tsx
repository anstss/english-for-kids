import "./statistics.scss";
import React, {useContext, useEffect} from "react";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import {connect} from "react-redux";
import StatisticsItem from "../statistics-item/statistics-item";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import IState from "../../types/IState";

const Statistics = ({setCurrentCategory, categories}: {setCurrentCategory: (category: string) => void, categories: string[]}) => {

  useEffect(() => {
    //TODO: statistics to const
    setCurrentCategory("statistics");
  }, []);

  const englishService = useContext(EnglishServiceContext);

  const allWords = englishService.getAllWords();

  return (
    <div className="statistics px-5 py-4">
      <table className="table table-hover text-center">
        <thead className="statistics__header">
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Word</th>
              <th scope="col">Translation</th>
              <th scope="col">Train</th>
              <th scope="col">Game</th>
              <th scope="col">Errors</th>
              <th scope="col">%</th>
            </tr>
        </thead>
        <tbody>
        {
          allWords.map((item) => {
            const category = categories.find((category) => categories.indexOf(category) === item.categoryIndex - 1);
            //FIXME: fix ts-ignore
            // @ts-ignore
            return <StatisticsItem statWord={item.wordInfo} category={category} key={item.wordInfo.translation}/>;
          })
        }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToPros = (state: IState) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToPros, mapDispatchToProps)(Statistics);