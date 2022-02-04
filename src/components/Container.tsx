import styled from "styled-components";

interface Props {
  width?: number;
}

export const Container: React.FC<Props> = ({ width, children }) => {
  const StyledContainer = styled.div`
    width: ${width || 1000}px;
    background-color: var(--medium-gray);
    padding: 20px;
  `;

  return <StyledContainer>{children}</StyledContainer>;
};
