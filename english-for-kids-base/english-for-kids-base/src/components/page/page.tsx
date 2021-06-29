import "./page.scss";
import React from "react";
import Card from "../card/card";
import Category from "../category/category";

const Page = () => {
  return (
    <div className='page px-5 py-4 d-flex flex-wrap justify-content-center'>
      <Category/>
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