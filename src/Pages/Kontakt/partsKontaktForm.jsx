import styled from "styled-components";
import { blackColor } from "../../utils/utils";
import { css } from "styled-components";

export const ContactFormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  max-width: 1170px;
  ${(props) =>
    props.wrapper &&
    css`
      box-shadow: 0 0 20px 0 ${blackColor};
      > * {
        padding: 1em;
      }

      @media (min-width: 1200px) {
        display: grid;
        margin: 20px 0 35px;
        grid-template-columns: 1fr 2fr;
        > * {
          padding: 2em;
        }
      }
    `}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const WrappedGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

export const ContactLabel = styled.label`
  display: block;
  font-family: "Alegreya Regular400", sans-serif;
  font-size: 1rem;
  padding: 20px 0 5px;
`;

export const Input = styled.input`
  border: 1px solid #47b5ff;
  padding: 1em;
  width: 100%;
  background-color: white;
`;

export const TextArea = styled.textarea`
  border: 1px solid #47b5ff;
  background-color: white;
  padding: 1em;
  width: 100%;
`;

export const StyledButton = styled.button`
  background: #47b5ff;
  border: 0;
  color: #fff;
  padding: 1rem;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background: #47b5ff;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;
