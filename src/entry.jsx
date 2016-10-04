require("./entry.scss");
import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./components/main/main.jsx";

ReactDOM.render(
  <div>
    <Main
      cover="https://imagecomics.com/uploads/releases/Shutter01_CoverA.jpg"
      title="Shutter"
      publisher="Image"
      source="http://comichron-data.github.io/api/titles/shutter-image/by-issue.json"
      />
    <Main
      cover="https://s-media-cache-ak0.pinimg.com/originals/18/48/db/1848dbe3fe400628fb25865f8e42ebd1.jpg"
      title="Saga"
      publisher="Image"
      source="http://comichron-data.github.io/api/titles/saga-image/by-issue.json"
      />
    <Main
      cover="http://www.geekedoutnation.com/wp-content/uploads/2014/07/Amazing-X-Men-9-Cover.jpg"
      title="Amazing X-Men"
      publisher="Marvel"
      source="http://comichron-data.github.io/api/titles/amazing-x-men-marvel/by-issue.json"
      />
    <Main
      cover="http://vignette4.wikia.nocookie.net/marvel_dc/images/a/a2/Batman_Secret_City_TPB.jpg/revision/latest?cb=20140507154956"
      title="Batman"
      publisher="DC"
      source="http://comichron-data.github.io/api/titles/batman-dc/by-issue.json"
      />
  </div>,
  document.getElementById('app')
);
