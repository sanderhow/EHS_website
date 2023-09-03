import React, { useEffect } from "react";
import * as P from "./partsUslugi";
import ParallaxBackground from "../../Components/ParallaxBackground/ParallaxBackground";
import { useRef } from "react";
import { useState } from "react";

function Uslugi() {
  const [isObserved1, setIsObserved1] = useState(false);
  const [isObserved2, setIsObserved2] = useState(false);
  const [isObserved3, setIsObserved3] = useState(false);
  const [isObserved4, setIsObserved4] = useState(false);

  const element1 = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const leftArray = [element2, element4];
  const rightArray = [element1, element3];

  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case element2.current:
              setIsObserved2(true);
              break;
            case element4.current:
              setIsObserved4(true);
              break;
            default:
              console.log("No matching DOM element");
          }
        }
      },
      {
        threshold: 0.2,
      }
    );

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case element1.current:
              setIsObserved1(true);
              break;
            case element3.current:
              setIsObserved3(true);
              break;
            default:
              console.log("No matching DOM element");
          }
        }
      },
      {
        threshold: 0.2,
      }
    );
    leftArray.forEach((element) => leftObserver.observe(element.current));
    rightArray.forEach((element) => rightObserver.observe(element.current));

    return () => {
      leftObserver.disconnect();
      rightObserver.disconnect();
    };
  }, [leftArray, rightArray]);

  return (
    <>
      <ParallaxBackground src={"assets/uslugiglowna.jpg"} label={"Usługi"} />
      <P.ServiceCardWrapper>
        <P.TextWrapper>
          <P.Header>Szkolenia BHP Wstępne</P.Header>
          <P.Paragraph>Stacjonarne</P.Paragraph>
          <P.Paragraph>On-line</P.Paragraph>
          <P.Hyperlink to="/szkolenia" activeStyle>
            Dowiedz się więcej
          </P.Hyperlink>
        </P.TextWrapper>
        <P.AvatarWrapper1 ref={element1} isObserved={isObserved1}>
          <P.AvatarUslugi src="assets/szkolenia-wstepne.jpg" />
        </P.AvatarWrapper1>
      </P.ServiceCardWrapper>

      <P.ServiceCardWrapper>
        <P.AvatarWrapper2 ref={element2} isObserved={isObserved2}>
          <P.AvatarUslugi src="assets/szkolenia-okresowe.jpg" />
        </P.AvatarWrapper2>
        <P.TextWrapper1>
          <P.Header>Szkolenia BHP Okresowe</P.Header>
          <P.Hyperlink to="/szkolenia" activeStyle>
            Dowiedz się więcej
          </P.Hyperlink>
        </P.TextWrapper1>
      </P.ServiceCardWrapper>

      <P.ServiceCardWrapper>
        <P.TextWrapper>
          <P.Header>Obsługa BHP</P.Header>
          <P.Hyperlink to="/nadzor" activeStyle>
            Dowiedz się więcej
          </P.Hyperlink>
        </P.TextWrapper>
        <P.AvatarWrapper1 ref={element3} isObserved={isObserved3}>
          <P.AvatarUslugi src="assets/obsluga-bhp.jpg" />
        </P.AvatarWrapper1>
      </P.ServiceCardWrapper>

      <P.ServiceCardWrapper>
        <P.AvatarWrapper2 ref={element4} isObserved={isObserved4}>
          <P.AvatarUslugi src="assets/obsluga-ppoz.jpg" />
        </P.AvatarWrapper2>
        <P.TextWrapper1>
          <P.Header>Obsługa P.POŻ.</P.Header>
          <P.Hyperlink to="/cennik" activeStyle>
            Dowiedz się więcej
          </P.Hyperlink>
        </P.TextWrapper1>
      </P.ServiceCardWrapper>

      <P.ServiceOfferWrapper>
        <P.ServiceOffer>W ramach naszych usług zapewniamy Ci:</P.ServiceOffer>
        <P.ServiceList>
          Wykonywanie zadań służby BHP w zakładach pracy
        </P.ServiceList>
        <P.ServiceList>Profesjonalne szkolenia w zakresie BHP</P.ServiceList>
        <P.ServiceList>
          Doradztwo w zakresie bhp oraz prawnej i technicznej ochrony pracy
        </P.ServiceList>
        <P.ServiceList>
          Sporządzanie raportów, analiz dotyczących bezpieczeństwa pracy w
          zakładzie
        </P.ServiceList>
        <P.ServiceList>
          Opracowywanie instrukcji bhp, regulaminów pracy, procedur i innych
          zleconych
        </P.ServiceList>
        <P.ServiceList>Oceny ryzyka zawodowego</P.ServiceList>
        <P.ServiceList>
          Ustalanie przyczyn i okoliczności wypadków przy pracy, protokoły
          powypadkowe
        </P.ServiceList>
        <P.ServiceList>
          Pomoc pracodawcy w czasie kontroli PIP, PIS
        </P.ServiceList>
        <P.ServiceList>
          Usługi w tym zakresie świadczmy na zasadzie outsourcingu na drodze
          zawartej umowy o współpracy. Outsourcing jest jedną z
          najefektywniejszych strategii zarządzania przedsiębiorstwem, jego
          celem jest zwiększenie skuteczności prowadzonej działalności.
        </P.ServiceList>
      </P.ServiceOfferWrapper>
    </>
  );
}

export default Uslugi;
