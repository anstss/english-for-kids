import "./statistics-item.scss";
import React from "react";
import ICategoryWord from "../../types/ICategoryWord";

const StatisticsItem = ({statWord, category}: {statWord: ICategoryWord, category: string}) => {

  const {word, translation} = statWord;

  return (
    <tr>
      <td>{category}</td>
      <td>{word}</td>
      <td>{translation}</td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
      <td>Column content</td>
    </tr>
  )
}

export default StatisticsItem;