import React, {useState, useEffect} from "react";
// import { ReactComponent as Bottle } from '../img/waterbottle.svg';
import {useScrollPosition} from "@n8tb1t/use-scroll-position";
import Navbar from "./Navbar";

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
      <div id="header">
        <Navbar />
      </div>
      <div id="wrapper">
        {yPosition >= 76 && yPosition < 250 ? (
          <div id="greenTopBanner" style={{backgroundColor: "green"}}>
            February
          </div>
        ) : yPosition >= 250 && yPosition < 427 ? (
          <div id="greenTopBanner" style={{backgroundColor: "red"}}>
            March
          </div>
        ) : yPosition >= 427 && yPosition < 600 ? (
          <div id="greenTopBanner" style={{backgroundColor: "orange"}}>
            April
          </div>
        ) : yPosition >= 600 && yPosition < 778 ? (
          <div id="greenTopBanner" style={{backgroundColor: "yellow"}}>
            May
          </div>
        ) : yPosition >= 778 && yPosition < 954 ? (
          <div id="greenTopBanner" style={{backgroundColor: "orange"}}>
            June
          </div>
        ) : yPosition >= 954 && yPosition < 1131 ? (
          <div id="greenTopBanner" style={{backgroundColor: "purple"}}>
            July
          </div>
        ) : yPosition >= 1131 && yPosition < 1306 ? (
          <div id="greenTopBanner" style={{backgroundColor: "brown"}}>
            August
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
          <div id="topBanner">January</div>
        )}

        <div id="whiteTransparentBlock"></div>
        <div id="months">
          <div>Number of plastic bottles saved by MyMizu users</div>
          <div id="January" className="bottleMonth">
            <p>
              In January of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="February" className="bottleMonth">
            <p>
              In February of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="March" className="bottleMonth">
            <p>
              In March of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="April" className="bottleMonth">
            <p>
              In April of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="May" className="bottleMonth">
            <p>
              In May of 2020, we prevented <em>1,892 plastic bottles</em> from being used
            </p>
          </div>
          <div id="June" className="bottleMonth">
            <p>
              In June of 2020, we prevented <em>1,892 plastic bottles</em> from being used
            </p>
          </div>
          <div id="July" className="bottleMonth">
            <p>
              In July of 2020, we prevented <em>1,892 plastic bottles</em> from being used
            </p>
          </div>
          <div id="August" className="bottleMonth">
            <p>
              In August of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="September" className="bottleMonth">
            <p>
              In September of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="October" className="bottleMonth">
            <p>
              In October of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
          <div id="November" className="bottleMonth">
            <p>
              In November of 2020, we prevented <em>1,892 plastic bottles</em> from being
              used
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
