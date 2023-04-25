import React from "react";
import { Carousel, CarouselItem } from "./Carousel";
import * as P from "./partsStronaGlowna";

const StronaGlowna = () => {
  return (
    <P.Wrapper>
      <P.BackgroundImage />
      <P.Header>Poprawa bezpieczeństwa wymaga przywództwa</P.Header>

      <P.WrapperDeclaration>
        <P.HeaderDeclaration>
          To Czas, By Rozwinąć Twój Biznes
        </P.HeaderDeclaration>
        <P.ParagraphDeclaration>
          Od konsultacji, az po stały nadzór BHP, oferujemy kompleksową obsługę
          Twojej firmy.
        </P.ParagraphDeclaration>
      </P.WrapperDeclaration>

      <P.OfferWrapper>
        <P.Offer>
          <P.OfferItem>
            <P.Avatar>
              <i class="fa-solid fa-hand-holding-hand"></i>
            </P.Avatar>
            Kompeksowa obsługa
            <P.OfferParagraph>
              Zapewniamy kompleksową obsługę BHP, począwszy od doradztwa w
              sp.prawa pracy, nadzóru oraz planu poprawy kultury i stanu
              bezpieczeństwa w Twojej firmie.
            </P.OfferParagraph>
          </P.OfferItem>

          <P.OfferItem>
            <P.Avatar>
              <i class="fa-solid fa-star"></i>
            </P.Avatar>
            Gwarancja jakości
            <P.OfferParagraph>
              Posiadamy kilkunastoletnie doświadczenie w branzy, regularnie
              podnoszac swoje kwalifikacje, w oparciu o zmieniajace sie przepisy
              prawa i trendy na rynku.
            </P.OfferParagraph>
          </P.OfferItem>

          <P.OfferItem>
            <P.Avatar>
              <i class="fa-solid fa-envelope"></i>
            </P.Avatar>
            Gwarantowane zaufanie
            <P.OfferParagraph>
              Zapewniane usługi wykonywane sa na najwyzszym poziomie. Do kazdego
              klienta podchodzimy indywidualnie. Wspólnie ustalamy priorytety,
              strategie i plan dzialania, dobrany do Twoich indywidualnych
              potrzeb.
            </P.OfferParagraph>
          </P.OfferItem>
        </P.Offer>
      </P.OfferWrapper>
      <Carousel>
        <CarouselItem>
          <P.CarouselTextWrapper>
            <P.CarouselItemHeder>
              Gestamp
              <P.CarouselAvatar />
            </P.CarouselItemHeder>
            <P.CarouselItemParagraph>
              Firma "SM group" dała się poznać jako rzetelny partner
              dostosowujący się do potrzeb naszej firmy i wspierający w
              przypadku sytuacji niezaplanowanych.
            </P.CarouselItemParagraph>
            <P.CarouselItemSignature>
              Magdalena Kodybo, Kierownik Serwisu
            </P.CarouselItemSignature>
          </P.CarouselTextWrapper>
        </CarouselItem>
        <CarouselItem>
          <P.CarouselTextWrapper>
            <P.CarouselItemHeder>Jungerinch</P.CarouselItemHeder>
            <P.CarouselItemParagraph>
              Szkolenia prowadzone są z zaangażowaniem zarówno stacjonarne i
              on-line, a materiały odpowiadają najnowszym standardom rynkowym.
              Proces szkoleń jest doskonale przygotowany i prowadzony zgodnie z
              ustalonymi potrzebami.
            </P.CarouselItemParagraph>
            <P.CarouselItemSignature>
              Marzena Osowska Matasz, Talent Acquisition and Development Manager
            </P.CarouselItemSignature>
          </P.CarouselTextWrapper>
        </CarouselItem>
        <CarouselItem>
          <P.CarouselTextWrapper>
            <P.CarouselItemHeder>Firma ROM</P.CarouselItemHeder>
            <P.CarouselItemParagraph>
              Jestem bardzo zadowolony ze współpracy z firmą SM group. Nie ma
              problemu z kontaktem i umówieniem spotkania. Bardzo sprawnie i
              fachowo prowadzą szkolenia. Polecam
            </P.CarouselItemParagraph>
            <P.CarouselItemSignature>
              Stanisław Sasim, Kierownik Serwisu
            </P.CarouselItemSignature>
          </P.CarouselTextWrapper>
        </CarouselItem>
      </Carousel>
    </P.Wrapper>
  );
};

export default StronaGlowna;
