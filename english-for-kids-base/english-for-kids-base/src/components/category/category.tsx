import "./category.scss";
import React, {useContext} from "react";
import IState from "../../types/IState";
import {connect} from "react-redux";
import {EnglishServiceContext} from "../english-service-context/english-service-context";

const Category = ({category, playMode}: {category: string, playMode: boolean}) => {

  const englishService = useContext(EnglishServiceContext);
  const categoryImg = englishService.getCategoryImage(category);

  return (
    <div className={`card border-primary mb-3 category ${playMode ? "play-mode" : ""}`}>
      <div className="card-body d-flex flex-column align-items-center">
        <div className="category-image" style={{backgroundImage: `url(/assets/${categoryImg})`}}>
        </div>
        <h4 className="card-title mt-2">{category}</h4>
      </div>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    playMode: state.playMode
  }
}

export default connect(mapStateToProps)(Category);