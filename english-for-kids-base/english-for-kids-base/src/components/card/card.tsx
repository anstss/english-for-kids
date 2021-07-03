import "./card.scss";
import React, {useContext} from "react";
import ICategoryWord from "../../types/ICategoryWord";
import IState from "../../types/IState";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import {playCurrentAudio} from "../../shared/utils";
import {EnglishServiceContext} from "../english-service-context/english-service-context";

const Card = ({
                word,
                playMode,
                showTranslation,
                translatedCard,
                hideTranslation,
                gameIsStarted,
                gameWords
              }: {
                word: ICategoryWord,
                playMode: boolean,
                showTranslation: (word: ICategoryWord) => void,
                translatedCard: ICategoryWord | null,
                hideTranslation: () => void,
                gameIsStarted: boolean,
                gameWords: ICategoryWord[]
              }) => {

  const {word: englishWord, translation, image, audioSrc} = word;

  const cardIsTranslated = translatedCard?.word === englishWord ? true : false;

  const englishService = useContext(EnglishServiceContext);

  const interactive = gameIsStarted ? gameWords.includes(word) : true;
  // const interactive = gameWords.includes(word);

  return (
    <div className={`card-container ${playMode ? "play-mode" : ""} ${interactive ? "" : "disabled"}`}
         onMouseLeave={() => hideTranslation()}
         onClick={(event) => {
           playCurrentAudio(event.target, playMode, translatedCard, audioSrc);
           englishService.checkWord(gameIsStarted, word);
         }
         }>
     <div className={`card border-primary bg-primary ${cardIsTranslated ? "flipped" : ""}`}>
       <div className="front" style={{backgroundImage: `url(/assets/${image})`}}></div>
       <div className="back" style={{backgroundImage: `url(/assets/${image})`}}></div>
       <div className="card-info">
         <span className="card-info__text">{cardIsTranslated ? translation : englishWord}</span>
         <button className="btn btn-primary flip-button"
                 onClick={() => showTranslation(word)}>
           <svg viewBox="0 0 261.25 261.25" className="flip-button__icon">
             <path fill="#fff" d="M231.385,39C250.293,62.087,261,91.278,261,121.75c0,71.958-58.542,130.5-130.5,130.5S0,193.708,0,121.75
              c0-35.358,13.911-68.463,39.17-93.215c5.917-5.798,15.414-5.701,21.212,0.216s5.701,15.413-0.216,21.212
              C40.713,69.025,30,94.52,30,121.75c0,55.416,45.084,100.5,100.5,100.5s100.333-45.084,100.333-100.5
              c0-21.763-6.916-42.675-19.916-59.781V74c0,8.284-6.716,15-15,15s-15-6.716-15-15V24.006c0-0.002,0-0.004,0-0.004
              C180.917,15.716,187.966,9,196.25,9h50c8.284,0,15,6.716,15,15s-6.716,15-15,15H231.385z"/>
           </svg>
         </button>
       </div>
     </div>
      <div className={`${interactive ? "" : "card-inactive"}`}></div>
   </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    playMode: state.playMode,
    translatedCard: state.translatedCard,
    gameIsStarted: state.gameIsStarted,
    gameWords: state.gameWords
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);