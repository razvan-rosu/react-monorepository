import React from "react";
import MyCard from "../my-card";
import ChildComponent from "../child-component";

export const ParentComponent = () => {
  return (
    <MyCard>
      <h1 className="mb-md text-900 leading-9 text-buttercup">
        Hello, from ParentComponent!
      </h1>
      <div className="mb-md">
        <ChildComponent>Hello, from ChildComponent</ChildComponent>
      </div>
    </MyCard>
  );
};
