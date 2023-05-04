import React, { useState } from "react";
import { useEffect } from "react";
import * as P from "./partsCarousel";

export function CarouselItem(props) {
  return (
    <P.CarouselItem width={props.width}>{props.children}</P.CarouselItem>
  );
}

export function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(props.children) - 1;
    } else if (newIndex >= React.Children.count(props.children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  
  return (
    <>
      <P.Carousel
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <P.Inner style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </P.Inner>
        <P.Indicators>
          <P.Button
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            {"<"}
          </P.Button>
          {React.Children.map(props.children, (child, index) => {
            return (
              <P.Button
                onClick={() => {
                  updateIndex(index);
                }}
              >
                {index + 1}
              </P.Button>
            );
          })}
          <P.Button
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            {">"}
          </P.Button>
        </P.Indicators>
      </P.Carousel>
    </>
  );
}
