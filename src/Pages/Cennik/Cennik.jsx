import React, {useState} from 'react';
import * as P from "./partsCennik";
import SzkoleniaWstepne from "./CennikKategorie/SzkoleniaWstepne"
import SzkoleniaOkresowe from './CennikKategorie/SzkoleniaOkresowe';
import AnalizaWypadkowa from './CennikKategorie/AnalizaWypadkowa';
import OcenaRyzykaZaw from "././CennikKategorie/OcenaRyzykaZaw";
import NadzorBHP from './CennikKategorie/NadzorBHP';

function Cennik() {
const [category, setCategory] = useState("");

  return (
<>
    <P.ParallaxWrapperPrice>
        <P.ParallaxLayer1Price/>
        <P.ParallaxLayer2Price>
          <P.ControlHeaderPrice>
            Cennik 
         </P.ControlHeaderPrice>
        </P.ParallaxLayer2Price>
      </P.ParallaxWrapperPrice> 


    <P.PriceButtonsWrapper>
        <P.PriceButton onClick={() => setCategory('wstepneBHP')}>
            Szkolenia wstępne BHP
        </P.PriceButton>
        <P.PriceButton onClick={() => setCategory('okresoweBHP')}>
            Szkolenia okresowe BHP
        </P.PriceButton>
        <P.PriceButton onClick={() => setCategory('analizaA3')}>
            Szkolenia z analizy wypadkowej/A3
        </P.PriceButton>
        <P.PriceButton onClick={() => setCategory('ocenaRyzyka')}>
            Ocena ryzyka zawodowego
        </P.PriceButton>
        <P.PriceButton onClick={() => setCategory('nadzorBHP')}>
            Stały nadzór BHP
        </P.PriceButton>
    </P.PriceButtonsWrapper>
    
    {category === 'wstepneBHP' && <SzkoleniaWstepne/>}
    {category === 'okresoweBHP' && <SzkoleniaOkresowe/>}
    {category === 'analizaA3' && <AnalizaWypadkowa/>}
    {category === 'ocenaRyzyka' && <OcenaRyzykaZaw/>}
    {category === 'nadzorBHP' && <NadzorBHP/>}
    <P.PriceWrapperLaw>
        <P.PriceParagraphLaw>
            * zgodnie z obowiązującymi przepisami prawa podatkowego, Kształcenie zawodowe - Szkolenia BHP pracowników (zgodnie z art.43 ust.1ptk.29a), są zwolnione z podatku VAT.
        </P.PriceParagraphLaw>
    </P.PriceWrapperLaw>
</>
)}

export default Cennik;
