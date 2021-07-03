import "./game-result.scss";
import React from "react";
import IState from "../../types/IState";
import {connect} from "react-redux";
import {WRONG_ANSWER} from "../../shared/constants";

const GameResult = ({winStatus, answers}: {winStatus: boolean | null, answers: string[]}) => {

  const image = winStatus ? "smile.svg" : "sad.svg";
  const errors = answers.filter((answer) => answer === WRONG_ANSWER);

  return (
    <div className="game-result py-5 d-flex flex-column align-items-center">
      <img src={`./assets/icons/${image}`} className="game-result__image" alt="Your result"/>
      <div className="mt-5 game-result__text">
        {winStatus ? "You win!" : `${errors.length} errors`}
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    winStatus: state.winStatus,
    answers: state.answers
  }
}

export default connect(mapStateToProps)(GameResult);