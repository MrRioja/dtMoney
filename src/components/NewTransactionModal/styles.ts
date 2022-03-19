import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: var(--text-title);
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: #e7e9ee;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    border: 0;
    color: #fff;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    background: var(--green);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  gap: 0.5rem;
  display: grid;
  margin: 1rem 0;
  grid-template-columns: repeat(2, 1fr);
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#E52E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  justify-content: center;
  border: 1px solid #d7d7d7;
  transition: border-color 0.2s;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    margin-left: 1rem;
    display: inline-block;
    color: var(--text-title);
  }
`;
