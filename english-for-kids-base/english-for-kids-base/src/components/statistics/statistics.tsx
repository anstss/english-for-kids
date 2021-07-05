import "./statistics.scss";
import React, {useContext, useEffect} from "react";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import {connect} from "react-redux";
import StatisticsItem from "../statistics-item/statistics-item";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import IWordStatistics from "../../types/IWordStatistics";
import IState from "../../types/IState";
import { Link } from "react-router-dom";

//TODO: don't forget about event.stopPropagation(); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const Statistics = ({
                      setCurrentCategory,
                      playMode,
                      wordStatistics
                    }: { setCurrentCategory: (category: string) => void, playMode: boolean, wordStatistics: IWordStatistics[] }) => {

  const englishService = useContext(EnglishServiceContext);

  useEffect(() => {
    //TODO: statistics to const
    setCurrentCategory("statistics");
    englishService.getWordStatistics();
  }, []);

  return (
    <div className={`statistics px-5 py-4 ${playMode ? "play-mode" : ""}`}>
      <div className="statistics__buttons text-end mb-3">
        <button type="button" className="btn-reset btn btn-danger me-2"
                onClick={() => englishService.resetStatistics()}>
          Reset all statistics
        </button>
        <Link to="/difficult-words" type="button" className="btn btn-success">
          Repeat difficult words
        </Link>
      </div>
      <div className="table-responsive">
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
            wordStatistics.map((word: IWordStatistics) => {
              return <StatisticsItem wordStat={word} key={wordStatistics.indexOf(word)}/>;
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    playMode: state.playMode,
    wordStatistics: state.wordStatistics
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);