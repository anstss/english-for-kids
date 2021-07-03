import "./menu.scss";
import React, {useContext} from "react";
import IState from "../../types/IState";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";
import {transformCategoryToRoute} from "../../shared/utils";
import {Link} from "react-router-dom";
import {EnglishServiceContext} from "../english-service-context/english-service-context";

const Menu = ({
                menuIsOpen,
                toggleMenuState,
                categories,
                setCurrentCategory,
                currentCategory,
                playMode
              }: {
                menuIsOpen: boolean,
                toggleMenuState: () => void,
                categories: string[],
                setCurrentCategory: (category: string) => void,
                currentCategory: string,
                playMode: boolean
              }) => {

  document.body.className=`${menuIsOpen ? "blocked" : ""}`;

  const englishService = useContext(EnglishServiceContext);
  const colorSchemeClass = playMode ? "play-mode" : "";
  return (
    <React.Fragment>
      <div className={`${menuIsOpen ? "lock" : ""}`}
           onClick={() => toggleMenuState()}></div>
      <div className={`menu ${menuIsOpen ? "active" : ""}`}>
        <ul className="menu-list list-group px-5">
          <li className="menu-item list-group-item">
            <Link to="/"
              //TODO: "main-page" to const
                  className={`text-decoration-none menu__link ${currentCategory === "main-page" ? "active" : ""} ${colorSchemeClass}`}
                  onClick={() => {
                    toggleMenuState();
                  }}>
              Main Page
            </Link>
          </li>
          {
            categories.map((category) => {
              const route = transformCategoryToRoute(category);
              const isActiveRouteClass = currentCategory === category ? "active" : "";

              return (
                <li key={category} className="menu-item list-group-item">
                  <Link to={route}
                        className={`text-decoration-none menu__link ${isActiveRouteClass} ${colorSchemeClass}`}
                        onClick={() => {
                          englishService.getCategoryWords(category);
                          toggleMenuState();
                          setCurrentCategory(category);
                        }}>
                    {category}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    menuIsOpen: state.menuIsOpen,
    categories: state.categories,
    currentCategory: state.currentCategory,
    playMode: state.playMode
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);