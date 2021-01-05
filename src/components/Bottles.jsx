import React, {useState, useEffect} from "react";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import Navbar from "./Navbar";
import logo from "../img/d0d2bfee495ec3e77dbc41f188eb9acf.svg";
import burg from "../img/burj-khalifa.svg";
import shanghai from "../img/oriental-pearl-tower.svg";
import godzilla from "../img/godzilla.svg";
import paris from "../img/paris.svg";
import fuji from "../img/mount-fuji.svg";
import gundam from "../img/gundam.svg";
import pyramid from "../img/pyramids.svg";
import liberty from "../img/statue-of-liberty.svg";
import space from "../img/space-station.svg";
import everest from "../img/mission.svg";


export default function Bottles({scroll, setScroll, data, setCurrentView}) {
  const [yPosition, setYPosition] = useState(0);

  useScrollPosition(({prevPos, currPos}) => {
    setYPosition(-currPos.y);
  });

  useEffect(() => {
    setCurrentView("Bottles");
  }, []);

  return (
    <>
      <div className="navFillerDiv"></div>
      {yPosition >= 122 && yPosition < 446 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#7BB668"}}>
          <img src={shanghai} className="App-logo" alt="Shanghai Tower" />
        </div>
      ) : yPosition >= 446 && yPosition < 770 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#E39EC1"}}>
          <img src={burg} className="App-logo" alt="Burj Khalifa" />
        </div>
      ) : yPosition >= 770 && yPosition < 1102 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#EF452E"}}>
          <img src={godzilla} className="App-logo" alt="Godzilla" />
        </div>
      ) : yPosition >= 1102 && yPosition < 1438 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#F2F79E"}}>
          <img src={paris} className="App-logo" alt="Eiffel Tower" />
        </div>
      ) : yPosition >= 1438 && yPosition < 1757 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#6B9AC4"}}>
          <img src={liberty} className="App-logo" alt="Statue of Liberty" />
        </div>
      ) : yPosition >= 1757 && yPosition < 2085 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#7D80DA"}}>
          <img src={gundam} className="App-logo" alt="Gundam" />
        </div>
      ) : yPosition >= 2085 && yPosition < 2413 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#A19568"}}>
          <img src={pyramid} className="App-logo" alt="Pyramids" />
        </div>
      ) : yPosition >= 2413 && yPosition < 2741 ? (
        <div id="greenTopBanner" style={{backgroundColor: "aqua"}}>
          <img src={fuji} className="App-logo" alt="Mount Fuji" />
        </div>
      ) : yPosition >= 2741 && yPosition < 3073 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#212531"}}>
          <img src={space} className="App-logo" alt="Space station" />
        </div>
      ) : yPosition >= 3073 ? (
        <div id="greenTopBanner" style={{backgroundColor: "yellow"}}>
          <img src={everest} className="App-logo" alt="Mount Everest" />
        </div>
      ) : (
        <div id="greenTopBanner" style={{backgroundColor: "#D6D6D6"}}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
      <div id="wrapper">
        <div id="whiteTransparentBlock"></div>
        <div id="months">
          <div id="January" className="bottleMonth">
            <p>
              In January of 2020, we prevented <b>1,892 plastic bottles</b> from being
              used
            </p>
            <p>When stacked, they are as tall as the Empire State Building!</p>
          </div>
          <div id="February" className="bottleMonth">
            <p>
              In February of 2020, we prevented an additional{" "}
              <em>2,988 plastic bottles</em> from being used
            </p>
            <p>Now the bottles are as tall as the Shanghai Tower!</p>
          </div>
          <div id="March" className="bottleMonth">
            <p>
              In March of 2020, we prevented another <em>3,115 plastic bottles</em> from
              being used
            </p>
            <p>
              Now they're as tall as 2 Burj Khalifas, the tallest building in the world!
            </p>
          </div>
          <div id="April" className="bottleMonth">
            <p>
              In April of 2020, we prevented <em>2,468 plastic bottles</em> from being
              used
            </p>
            <p>All together that's the height of 7 Godzillas!</p>
          </div>
          <div id="May" className="bottleMonth">
            <p>
              In May of 2020, we prevented <em>2,678 plastic bottles</em> from being used
            </p>
            <p>The bottles are as tall as 8 Eiffel Towers!</p>
          </div>
          <div id="June" className="bottleMonth">
            <p>
              In June of 2020, we prevented <em>4,147 plastic bottles</em> from being used
            </p>
            <p>Bottle tower is higher than 37 Statue of Liberties!</p>
          </div>
          <div id="July" className="bottleMonth">
            <p>
              In July of 2020, we prevented <em>5,336 plastic bottles</em> from being used
            </p>
            <p>The bottles are taller than 220 gundams put together!</p>
          </div>
          <div id="August" className="bottleMonth">
            <p>
              In August of 2020, we prevented <em>5,747 plastic bottles</em> from being
              used
            </p>
            <p>
              Now the bottles are as tall as 39 Egyptian pyramids stacked on top of each
              other!
            </p>
          </div>
          <div id="September" className="bottleMonth">
            <p>
              In September of 2020, we prevented <em>7,219 plastic bottles</em> from being
              used
            </p>
            <p>Bottle mountain is as tall as 2 Mount Fujis on top of each other!</p>
          </div>
          <div id="October" className="bottleMonth">
            <p>
              In October of 2020, we prevented <em>38,238 plastic bottles</em> from being
              used, thanks to a partnership with LIXIL
            </p>
            <p>Now the bottles are taller than 137 International Space Stations!</p>
          </div>
          <div id="November" className="bottleMonth">
            <p>
              In November of 2020, we prevented <em>4,120 plastic bottles</em> from being
              used so far
            </p>
            <p>
              All together that's over <em>78,000 bottles!</em>
            </p>
            <p>Bottle mountain is as tall as 2 Mount Everests and growing!</p>
          </div>
        </div>
      </div>
    </>
  );
}
