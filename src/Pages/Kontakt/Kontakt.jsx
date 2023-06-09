import React from "react";
import KontaktForm from "./KontaktForm";
import ParallaxBackground from "../../Components/ParallaxBackground/ParallaxBackground";
import * as P from "./partsKontakt";

function Kontakt() {
  return (
    <>
      <ParallaxBackground src={"assets/kontakt.jpg"} label={"Kontakt"} />
      <P.WrapperContact>
        <P.WrapperContactInfo>
          <P.ContactHeader>Skontaktuj się z nami.</P.ContactHeader>
          <P.ContactInfo>
            <P.ContactInfoHolder>
              <P.ContactIcon>
                <i class="fa-solid fa-location-dot"></i>
              </P.ContactIcon>
              <P.ContactInfoElement>
                57-320 Wrocław, Jagiellonów 6
              </P.ContactInfoElement>
            </P.ContactInfoHolder>

            <P.ContactInfoHolder>
              <P.ContactIcon>
                <i class="fa-solid fa-phone"></i>
              </P.ContactIcon>
              <P.ContactInfoElement>+48 508762858</P.ContactInfoElement>
            </P.ContactInfoHolder>
            <P.ContactInfoHolder>
              <P.ContactIcon>
                <i class="fa-solid fa-envelope"></i>
              </P.ContactIcon>
              <P.ContactInfoElement>
                kontakt@smsafetygroup.pl
              </P.ContactInfoElement>
            </P.ContactInfoHolder>
            <P.ContactInfoHolder>
              <P.ContactIcon>
                <i class="fa-solid fa-clock"></i>
              </P.ContactIcon>
              <P.ContactInfoElement>
                Poniedziałek - Piątek 8.00 - 16.00
              </P.ContactInfoElement>
            </P.ContactInfoHolder>
          </P.ContactInfo>
        </P.WrapperContactInfo>

        <P.WrapperContactForm>
          <KontaktForm />
        </P.WrapperContactForm>
      </P.WrapperContact>
    </>
  );
}

export default Kontakt;
