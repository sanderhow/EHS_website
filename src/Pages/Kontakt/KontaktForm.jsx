import React from "react";
import * as P from "./partsKontaktForm";

function KontaktForm() {
  return (
    <P.ContactFormContainer>
      {/* <P.FormHeader>Skontaktuj się z nami</P.FormHeader> */}
      <P.Form>
        <P.WrappedGrid>
          <P.ContactLabel>Imię, Nazwisko</P.ContactLabel>
          <P.Input type="text" name="name" />
        </P.WrappedGrid>
        <P.WrappedGrid>
          <P.ContactLabel>Firma</P.ContactLabel>
          <P.Input type="text" name="company" />
        </P.WrappedGrid>
        <P.WrappedGrid>
          <P.ContactLabel>Adress e-mail</P.ContactLabel>
          <P.Input type="email" name="email" />
        </P.WrappedGrid>
        <P.WrappedGrid>
          <P.ContactLabel>Telefon</P.ContactLabel>
          <P.Input type="text" name="phone" />
        </P.WrappedGrid>
        <P.WrappedGrid full>
          <P.ContactLabel>Napisz do nas</P.ContactLabel>
          <P.TextArea name="message" rows="5"></P.TextArea>
        </P.WrappedGrid>
        <P.WrappedGrid full>
          <P.StyledButton>Zatwierdź</P.StyledButton>
        </P.WrappedGrid>
      </P.Form>
    </P.ContactFormContainer>
  );
}

export default KontaktForm;
