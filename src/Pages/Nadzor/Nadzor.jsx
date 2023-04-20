import React from 'react';
import * as P from "./partsNadzor";
import ParallaxBackground from '../../Components/ParallaxBackground/ParallaxBackground';

function Nadzor() {
  return (
    <>
      <ParallaxBackground src={'assets/nadzor.jpg'} label={'Nadzór BHP'}/>
      
      <P.Outsourcing>
        <P.OutsourcingHeader>Outsourcing BHP</P.OutsourcingHeader>
        <P.OutsourcingText>Zapraszamy Państwa do korzystania z usług, jakie świadczy nasza firma. Zajmujemy się kompleksową obsługą firm, zakładów pracy i instytucji w zakresie bezpieczeństwa i higieny pracy. Podstawowym i głównym celem naszej firmy jest promowanie bezpiecznego miejsca pracy oraz wprowadzanie najbardziej korzystnych rozwiązań i zasad w zakresie Bezpieczeństwa i Higieny Pracy.</P.OutsourcingText>
      </P.Outsourcing>

      <P.WrapperOutsourcingOffer>
        <P.LeftContainerOutsourcingOffer>
          <P.LeftContainerHeader>Naszym Klientom zapewniamy:</P.LeftContainerHeader>
          <P.LeftContainerParagraph>Priorytet i bezpieczeństwo powierzonych nam obowiązków, miłą i bezproblemową współpracę oraz wywiązywanie się z obowiązków pracodawcy ustalonych przez Kodeks Pracy i Państwową Inspekcję Pracy, jak i bezpieczeństwo pracowników w Państwa Firmie.</P.LeftContainerParagraph>
        </P.LeftContainerOutsourcingOffer>
        <P.RightContainerOutsourcingOffer>

            <P.RightContainerUndorderedList>
              W ramach kompleksowej obsługi w zakresie BHP oferujemy:
              <P.RightContainerList>okresowe i wstępne szkolenia BHP,</P.RightContainerList>
              <P.RightContainerList>przeprowadzanie kontroli warunków pracy oraz przestrzeganie przepisów i zasad BHP,</P.RightContainerList>
              <P.RightContainerList>bieżące informowanie pracodawcy o stwierdzonych zagrożeniach zawodowych,</P.RightContainerList>
              <P.RightContainerList>regularne sporządzanie okresowych analiz stanu BHP,</P.RightContainerList>
              <P.RightContainerList>tworzenie oceny ryzyka zawodowego na stanowiskach pracy,</P.RightContainerList>
              <P.RightContainerList>tworzenie instrukcji BHP -stanowiskowych i ogólnych,</P.RightContainerList>
              <P.RightContainerList>doradztwo w zakresie aktualnych przepisów oraz zasad BHP,</P.RightContainerList>
              <P.RightContainerList>udział w ustalaniu okoliczności i przyczyn wypadku przy pracy,</P.RightContainerList>
              <P.RightContainerList>sporządzanie dokumentacji powypadkowej,</P.RightContainerList>
              <P.RightContainerList>doradztwa w zakresie przepisów oraz zasad bezpieczeństwa i higieny pracy,</P.RightContainerList>
              <P.RightContainerList>doradztwo w zakresie doboru środków ochronny zbiorowej i indywidualnej,</P.RightContainerList>
              <P.RightContainerList>reprezentowanie zleceniodawcy przed PIP i ZUS,</P.RightContainerList>
              <P.RightContainerList>opracowanie planów modernizacji zakładu pracy zapewniających poprawę stanu BHP.</P.RightContainerList>
            </P.RightContainerUndorderedList>
        </P.RightContainerOutsourcingOffer>
      </P.WrapperOutsourcingOffer>
    </>
      )       
}

export default Nadzor;
