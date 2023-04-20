import AnalizaWypadkowa from "./CennikKategorie/AnalizaWypadkowa";
import NadzorBHP from "./CennikKategorie/NadzorBHP";
import OcenaRyzykaZaw from "./CennikKategorie/OcenaRyzykaZaw";
import SzkoleniaOkresowe from "./CennikKategorie/SzkoleniaOkresowe";
import SzkoleniaWstepne from "./CennikKategorie/SzkoleniaWstepne";

export const PriceCategory = {
	Wstepne: "wstepne",
	Okresowe: "okresowe",
	AnalizaA3: "analizaA3",
	OcenaRyzyka: "ocenaRyzyka",
  Nadzor: "nadzor"
}

export function getCategory(categoryName) {
    switch (categoryName) {
      case PriceCategory.Wstepne:
        return <SzkoleniaWstepne/>;
      case PriceCategory.Okresowe:
          return <SzkoleniaOkresowe/>;
      case PriceCategory.AnalizaA3:
        return <AnalizaWypadkowa/>;
      case PriceCategory.OcenaRyzyka:
        return <OcenaRyzykaZaw/>;
      case PriceCategory.Nadzor:
        return <NadzorBHP/>;    
      default: return <SzkoleniaWstepne/>;
    }
    
}
