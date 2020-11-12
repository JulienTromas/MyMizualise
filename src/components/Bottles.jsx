import React, {useState, useEffect} from "react";
// import { ReactComponent as Bottle } from '../img/waterbottle.svg';
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
// import styled, {keyframes} from "styled-components";
// import {bounce} from "react-animations";

export default function Bottles({scroll, setScroll, data, setCurrentView}) {
  const [yPosition, setYPosition] = useState(0);

  useScrollPosition(({prevPos, currPos}) => {
    setYPosition(-currPos.y);
    console.log(yPosition);
  });

  useEffect(() => {
    setCurrentView("Bottles");
  }, []);

  return (
    <>
      {yPosition >= 76 && yPosition < 250 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#7BB668"}}>
          <img src={shanghai} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 250 && yPosition < 427 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#E39EC1"}}>
          <img src={burg} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 427 && yPosition < 600 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#EF452E"}}>
          <img src={godzilla} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 600 && yPosition < 778 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#F2F79E"}}>
          <img src={paris} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 778 && yPosition < 954 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#6B9AC4"}}>
          <img src={fuji} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 954 && yPosition < 1131 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#7D80DA"}}>
          <img src={gundam} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 1131 && yPosition < 1306 ? (
        <div id="greenTopBanner" style={{backgroundColor: "#A19568"}}>
          <img src={pyramid} className="App-logo" alt="logo" />
        </div>
      ) : yPosition >= 1306 && yPosition < 1482 ? (
        <div id="greenTopBanner" style={{backgroundColor: "aqua"}}>
          September
        </div>
      ) : yPosition >= 1482 && yPosition < 1658 ? (
        <div id="greenTopBanner" style={{backgroundColor: "chartreuse"}}>
          October
        </div>
      ) : yPosition >= 1658 ? (
        <div id="greenTopBanner" style={{backgroundColor: "yellow"}}>
          November
        </div>
      ) : (
        <div id="topBanner">
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
              In February of 2020, we prevented an additional<em>2988 plastic bottles</em>{" "}
              from being used
            </p>
            <p>Now the bottles are as tall as the Shanghai Tower!</p>
          </div>
          <div id="March" className="bottleMonth">
            <p>
              In March of 2020, we prevented another<em>3115 plastic bottles</em> from
              being used
            </p>
            <p>
              Now they're as tall as 2 Burj Khalifas, the tallest building in the world!
            </p>
          </div>
          <div id="April" className="bottleMonth">
            <p>
              In April of 2020, we prevented <em>2468 plastic bottles</em> from being used
            </p>
            <p>All together that's the height of 7 Godzillas!</p>
          </div>
          <div id="May" className="bottleMonth">
            <p>
              In May of 2020, we prevented <em>2678 plastic bottles</em> from being used
            </p>
            <p>The bottles are as tall as 8 Eiffel Towers!</p>
          </div>
          <div id="June" className="bottleMonth">
            <p>
              In June of 2020, we prevented <em>4147 plastic bottles</em> from being used
            </p>
            <p>Bottle mountain is as tall as Mount Fuji!</p>
          </div>
          <div id="July" className="bottleMonth">
            <p>
              In July of 2020, we prevented <em>5336 plastic bottles</em> from being used
            </p>
            <p>The bottles are taller than 220 gundams put together!</p>
          </div>
          <div id="August" className="bottleMonth">
            <p>
              In August of 2020, we prevented <em>5747 plastic bottles</em> from being
              used
            </p>
            <p>Now the bottles are as tall as 39 Egyptian pyramids!</p>
          </div>
          <div id="September" className="bottleMonth">
            <p>
              In September of 2020, we prevented <em>7219 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="October" className="bottleMonth">
            <p>
              In October of 2020, we prevented <em>38238 plastic bottles</em> from being
              used, thanks to a partnership with Lixit
            </p>
          </div>
          <div id="November" className="bottleMonth">
            <p>
              In November of 2020, we prevented <em>4120 plastic bottles</em> from being
              used so far
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/*
JANUARY: 1892     946L     382m    208120Y    39kg
FEBRUARY: 4880    603.5m   102.5kg   536800 Y
MARCH: 7995   1615m   879450Y  168kg
APRIL: 10463   2113.5m   1150930Y    219.7kg  
MAY: 13141 2654.5m  1445510Y  276kg
JUNE: 17288  3492m  1901680Y   363kg
JULY: 22624   4570m   2488640Y   475kg
AUGUST: 28371  5731m    3120810Y    596kg
SEPTEMBER: 35590  7189m   3914900Y    747.4kg
OCTOBER: 73828  14913m    8121080Y   1550.4kg 
NOVEMBER: 79000   15958m    8690000Y    1659kg

*/
