import "./page.scss";
import React from "react";
import Card from "../card/card";

const Page = () => {
  return (
    <div className='page px-5 py-4 d-flex flex-wrap justify-content-center'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Page;