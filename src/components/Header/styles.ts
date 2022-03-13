import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  align-items: center;
  padding: 2rem 1rem 12rem;
  justify-content: space-between;

  button {
    border: 0;
    color: #fff;
    height: 3rem;
    padding: 0 2rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    background: var(--blue-light);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
