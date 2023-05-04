import React from "react";
import * as P from "./partsParallaxBackground";

function ParallaxBackground(props) {
  return (
    <>
      <P.ParallaxWrapperPrice>
        <P.ParallaxLayer1Price src={props.src} />
        <P.ParallaxLayer2Price>
          <P.ControlHeaderPrice>{props.label}</P.ControlHeaderPrice>
        </P.ParallaxLayer2Price>
      </P.ParallaxWrapperPrice>
    </>
  );
}

export default ParallaxBackground;
