import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import IState from "../../types/IState";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";

const Header = ({playMode, switchMode}: {playMode: boolean, switchMode: () => void}) => {
  return (
    <header className="header d-flex justify-content-between align-items-center px-5 navbar-dark bg-primary">
      <div className="burger-menu">
        <span className="burger-menu-icon"></span>
      </div>
      <h1>
        <Link to="/" className="title text-decoration-none">
          English For Kids
        </Link>
      </h1>
      <div className="form-check form-switch switch-container">
        <input className="form-check-input switcher" type="checkbox" id="flexSwitchCheckDefault"
               onChange={() => switchMode()}/>
        <label className={`form-check-label switch-label ${playMode ? 'switch-label-play' : ''}`} htmlFor="flexSwitchCheckDefault">
          {playMode ? 'Play' : 'Train'}
        </label>
      </div>
    </header>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    playMode: state.playMode
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);