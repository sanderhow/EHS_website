import React, {useState} from 'react';
import * as P from "./partsCennik";
import ParallaxBackground from '../../Components/ParallaxBackground/ParallaxBackground';
import { getCategory, PriceCategory } from './utils';

function Cennik() {
const [category, setCategory] = useState(PriceCategory.Wstepne);

  return (
<>
    
    <ParallaxBackground src={'assets/cennik.jpg'} label={'Cennik'}/>

    <P.PriceButtonsWrapper>
        <P.PriceButton isActive={category === PriceCategory.Wstepne}  onClick={() => setCategory(PriceCategory.Wstepne)}>
            Szkolenia wstępne BHP
        </P.PriceButton>
        <P.PriceButton isActive={category === PriceCategory.Okresowe} onClick={() => setCategory(PriceCategory.Okresowe)}>
            Szkolenia okresowe BHP
        </P.PriceButton>
        <P.PriceButton isActive={category === PriceCategory.AnalizaA3} onClick={() => setCategory(PriceCategory.AnalizaA3)}>
            Szkolenia z analizy wypadkowej/A3
        </P.PriceButton>
        <P.PriceButton isActive={category === PriceCategory.OcenaRyzyka} onClick={() => setCategory(PriceCategory.OcenaRyzyka)}>
            Ocena ryzyka zawodowego
        </P.PriceButton>
        <P.PriceButton isActive={category === PriceCategory.Nadzor} onClick={() => setCategory(PriceCategory.Nadzor)}>
            Stały nadzór BHP
        </P.PriceButton>
    </P.PriceButtonsWrapper>
    
   {getCategory(category)}

    <P.PriceWrapperLaw>
        <P.PriceParagraphLaw>
            * zgodnie z obowiązującymi przepisami prawa podatkowego, Kształcenie zawodowe - Szkolenia BHP pracowników (zgodnie z art.43 ust.1ptk.29a), są zwolnione z podatku VAT.
        </P.PriceParagraphLaw>
    </P.PriceWrapperLaw>
</>
)}

export default Cennik;

