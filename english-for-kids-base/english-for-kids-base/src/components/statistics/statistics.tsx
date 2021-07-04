import "./statistics.scss";
import React, {useContext, useEffect} from "react";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import {connect} from "react-redux";
import StatisticsItem from "../statistics-item/statistics-item";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import IWordStatistics from "../../types/IWordStatistics";

//TODO: don't forget about event.stopPropagation(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const Statistics = ({setCurrentCategory}: {setCurrentCategory: (category: string) => void}) => {

  useEffect(() => {
    //TODO: statistics to const
    setCurrentCategory("statistics");
  }, []);

  const englishService = useContext(EnglishServiceContext);

  const wordStatisctics = englishService.getWordStatistics();

  return (
    <div className="statistics px-5 py-4">
      <div className="statistics__buttons text-end mb-3">
        <button type="button" className="btn-reset btn btn-danger me-2">Reset all statistics</button>
        <button type="button" className="btn btn-success">Repeat difficult words</button>
      </div>
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
          wordStatisctics.map((word: IWordStatistics) => {
            return <StatisticsItem wordStat={word} key={wordStatisctics.indexOf(word)}/>;
          })
        }
        </tbody>
      </table>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Statistics);