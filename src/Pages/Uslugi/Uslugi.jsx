import React from 'react';
import * as P from "./partsUslugi";

function Uslugi() {
  return (
  <P.ServicesWrapper>
    <P.Header>Kompleksowa obsługa BHP i PPOŻ. </P.Header>
    <P.AvatarUslugi img src='assets/uslugi.jpg'/>
    <P.ServiceOfferWrapper>
      <P.ServiceOffer>W ramach naszych usług zapewniamy Ci:</P.ServiceOffer>
        <P.ServiceList>
          Wykonywanie zadań służby BHP w zakładach pracy
        </P.ServiceList>
        <P.ServiceList>    
          Profesjonalne szkolenia w zakresie BHP
        </P.ServiceList>
        <P.ServiceList>
          Doradztwo w zakresie bhp oraz prawnej i technicznej ochrony pracy
        </P.ServiceList>
        <P.ServiceList>
          Sporządzanie raportów, analiz dotyczących bezpieczeństwa pracy w zakładzie
        </P.ServiceList>
        <P.ServiceList>
          Opracowywanie instrukcji bhp, regulaminów pracy, procedur i innych zleconych
        </P.ServiceList>
        <P.ServiceList>
          Oceny ryzyka zawodowego
        </P.ServiceList>
        <P.ServiceList>
          Ustalanie przyczyn i okoliczności wypadków przy pracy, protokoły powypadkowe
        </P.ServiceList>
        <P.ServiceList>
          Pomoc pracodawcy w czasie kontroli PIP, PIS
        </P.ServiceList>
        <P.ServiceList>
          Usługi w tym zakresie świadczmy na zasadzie outsourcingu na drodze zawartej umowy  o współpracy. Outsourcing jest jedną z najefektywniejszych strategii zarządzania przedsiębiorstwem, jego celem jest zwiększenie skuteczności prowadzonej działalności.
        </P.ServiceList>
      </P.ServiceOfferWrapper>
</P.ServicesWrapper>
)}

export default Uslugi;

