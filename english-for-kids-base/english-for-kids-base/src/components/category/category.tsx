import "./category.scss";
import React from "react";
import IState from "../../types/IState";
import {connect} from "react-redux";

const Category = ({category, playMode}: {category: string, playMode: boolean}) => {

  return (
    <div className={`card border-primary mb-3 category ${playMode ? "play-mode" : ""}`}>
      <div className="card-body d-flex flex-column align-items-center">
        <div className="category-image" style={{backgroundImage: "url(/assets/img/sheep.jpg)"}}>
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