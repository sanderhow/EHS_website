import React from "react";
import * as P from "./partsSzkolenia";
import ParallaxBackground from "../../Components/ParallaxBackground/ParallaxBackground";

function Szkolenia() {
  return (
    <>
      <ParallaxBackground src={"assets/szkolenia.jpg"} label={"Szkolenia"} />
      <P.WrapperTrainings>
        <P.TrainingBox>
          <P.TrainingOffer>
            <P.TrainingParagraph>
              Szkolenia wstępne BHP dla pracowników robotniczych,
              administracyjno-biurowych oraz kadry zarządzającej
              <P.HorizontalLine />
              <P.TrainingText>
                Szkolenia BHP Jesteśmy firmą, która od lat działa w branży BHP,
                dlatego mamy nie tylko doświadczenie, ale też narzędzia i
                infrastrukturę niezbędną do prowadzenia szkoleń. Na bieżąco
                aktualizujemy wiedzę i śledzimy zmiany w przepisach oraz
                procedurach, które obowiązują przedsiębiorców. Szkolenia BHP
                prowadzą doświadczeni instruktorzy, którzy mają za sobą wiele
                lat praktyki. Dzięki temu dzielą się z kursantami nie tylko
                profesjonalną wiedzą, ale też własnymi doświadczeniami.
              </P.TrainingText>
              <P.TrainingHyperlink
                to="/cennik"
                activeStyle>
                Aktualne szkolenia wstępne
                </P.TrainingHyperlink>
                
            </P.TrainingParagraph>
          </P.TrainingOffer>

          <P.TrainingOffer>
            <P.TrainingParagraph>
              Szkolenia okresowe BHP dla pracowników robotniczych,
              administracyjno-biurowych oraz kadry zarządzającej
              <P.HorizontalLine />
              <P.TrainingText>
                Szkolenia BHP Jesteśmy firmą, która od lat działa w branży BHP,
                dlatego mamy nie tylko doświadczenie, ale też narzędzia i
                infrastrukturę niezbędną do prowadzenia szkoleń. Na bieżąco
                aktualizujemy wiedzę i śledzimy zmiany w przepisach oraz
                procedurach, które obowiązują przedsiębiorców. Szkolenia BHP
                prowadzą doświadczeni instruktorzy, którzy mają za sobą wiele
                lat praktyki. Dzięki temu dzielą się z kursantami nie tylko
                profesjonalną wiedzą, ale też własnymi doświadczeniami.
              </P.TrainingText>
              <P.TrainingHyperlink
                to="/cennik"
                activeStyle>
                Aktualne szkolenia okresowe
                </P.TrainingHyperlink>
            </P.TrainingParagraph>
          </P.TrainingOffer>
        </P.TrainingBox>

        <P.TrainingBox>
          <P.TrainingOffer>
            <P.TrainingParagraph>
              Szkolenia P.POZ i pierwsza pomoc
              <P.HorizontalLine />
              <P.TrainingText>
                Szkolenia BHP Jesteśmy firmą, która od lat działa w branży BHP,
                dlatego mamy nie tylko doświadczenie, ale też narzędzia i
                infrastrukturę niezbędną do prowadzenia szkoleń. Na bieżąco
                aktualizujemy wiedzę i śledzimy zmiany w przepisach oraz
                procedurach, które obowiązują przedsiębiorców. Szkolenia BHP
                prowadzą doświadczeni instruktorzy, którzy mają za sobą wiele
                lat praktyki. Dzięki temu dzielą się z kursantami nie tylko
                profesjonalną wiedzą, ale też własnymi doświadczeniami.
              </P.TrainingText>
              <P.TrainingHyperlink
                to="/cennik"
                activeStyle>
                Aktualne szkolenia P.POZ i pierwszej pomocy
              </P.TrainingHyperlink>
            </P.TrainingParagraph>
          </P.TrainingOffer>

          <P.TrainingOffer>
            <P.TrainingParagraph>
              Szkolenia z nowoczesnej analizy wypadkowej, zdarzeń potencjalnie
              wypadkowych (Near Miss)
              <P.HorizontalLine />
              <P.TrainingText>
                Szkolenia BHP Jesteśmy firmą, która od lat działa w branży BHP,
                dlatego mamy nie tylko doświadczenie, ale też narzędzia i
                infrastrukturę niezbędną do prowadzenia szkoleń. Na bieżąco
                aktualizujemy wiedzę i śledzimy zmiany w przepisach oraz
                procedurach, które obowiązują przedsiębiorców. Szkolenia BHP
                prowadzą doświadczeni instruktorzy, którzy mają za sobą wiele
                lat praktyki. Dzięki temu dzielą się z kursantami nie tylko
                profesjonalną wiedzą, ale też własnymi doświadczeniami.
              </P.TrainingText>
              <P.TrainingHyperlink
                to="/cennik"
                activeStyle>
                Zapoznaj się z ofertą szkolenia
              </P.TrainingHyperlink>
            </P.TrainingParagraph>
          </P.TrainingOffer>
        </P.TrainingBox>
      </P.WrapperTrainings>
    </>
  );
}

export default Szkolenia;
