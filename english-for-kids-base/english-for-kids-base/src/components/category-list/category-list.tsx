import "./category-list.scss";
import React, {useContext, useEffect} from "react";
import Category from "../category/category";
import {transformCategoryToRoute} from "../../shared/utils";
import {Link} from "react-router-dom";
import IState from "../../types/IState";
import {connect} from "react-redux";
import {EnglishServiceContext} from "../english-service-context/english-service-context";
import {bindActionCreators, Dispatch} from "redux";
import * as actions from "../../actions";

const CategoryList = ({categories, setCurrentCategory} : {categories: string[], setCurrentCategory: (category: string) => void}) => {

  const englishService = useContext(EnglishServiceContext);

  useEffect(() => {
    //TODO: to const
    setCurrentCategory("main-page")
  }, []);

  return (
    <ul className="category-list px-5 py-4 mb-0 d-flex flex-wrap justify-content-center">
      {
        categories.map((category) => {
          const route = transformCategoryToRoute(category);
          return (
            <li key={category} className="my-3 mx-3 category-list__item">
              <Link to={route} className="text-decoration-none"
                    onClick={() => {
                      englishService.getCategoryWords(category);
                      setCurrentCategory(category);
                    }}>
                <Category category={category}/>
              </Link>
            </li>
          );
        })
      }
    </ul>
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

export default connect(mapStateToPros, mapDispatchToProps)(CategoryList);