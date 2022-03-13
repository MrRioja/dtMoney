import styled from "styled-components";

export const Container = styled.div`
  gap: 2rem;
  display: grid;
  margin-top: -10rem;
  grid-template-columns: repeat(3, 1fr);

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    background: var(--shape);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      color: #fff;
      background: var(--green);
    }
  }
`;
