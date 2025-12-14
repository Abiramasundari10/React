import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id=parent>
 *  <div id=child>
 *  <h1>i'm the h1 tag</h1>
 *  <h2>i'm the h2 tag</h2>
 *  </div>
 * 
 * </div>
 * ReactElement(object)=>HTML(Browser Understand)
 */
//React core structure
const parent = React.createElement(
    "div",
    { id: "parent" }, [React.createElement(
        "div",
        { id: "child" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")

        ]),
    React.createElement(
        "div",
        { id: "child1" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]
    )]

);
console.log(parent);//object


// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

