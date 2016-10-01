require("./entry.scss");
import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/main/main.jsx";

//dummy data
var marvel = {
  title: 'Ms. Marvel',
  publisher: 'Marvel',
  cover: 'https://images-na.ssl-images-amazon.com/images/I/51LGrM5dxoL._SX321_BO1,204,203,200_.jpg'
};
var shutter = {
  title: 'Shutter',
  publisher: 'Image',
  cover: 'https://imagecomics.com/uploads/releases/_main/Shutter_Vol1-1.png'
};

ReactDOM.render(
  <div>
    <Main data={marvel}/>
    <Main data={shutter}/>
  </div>,
  document.getElementById('app')
);
