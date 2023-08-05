import React from 'react';
import  ReactDOM  from 'react-dom/client';


const heading = React.createElement("h1", {id:"heading"}, "Hello World from react");

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Iam H1 tag"),React.createElement("h2",{},"Iam H2 tag")]));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)