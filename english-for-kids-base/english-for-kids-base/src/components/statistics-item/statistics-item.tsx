import "./statistics-item.scss";
import React from "react";
import IWordStatistics from "../../types/IWordStatistics";

const StatisticsItem = ({wordStat}: {wordStat: IWordStatistics}) => {

  const {category, word, translation, train, game, errors, percent} = wordStat;

  return (
    <tr>
      <td>{category}</td>
      <td>{word}</td>
      <td>{translation}</td>
      <td>{train}</td>
      <td>{game}</td>
      <td>{errors}</td>
      <td>{percent}</td>
    </tr>
  )
}

export default StatisticsItem;