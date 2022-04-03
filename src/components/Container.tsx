import styled from "styled-components";
import React from "react";
import { Colors, Margins } from "../GlobalStyle";

interface Props {
  title?: string;
  size?: "normal" | "small";
  className?: string;
  width?: string;
}

export const Container: React.FC<Props> = ({
  title,
  size = "normal",
  width,
  className,
  children,
}) => {
  return (
    <ContainerStyled className={className} width={width}>
      {title && (
        <ContainerHeader>
          {size === "normal" ? <h2>{title}</h2> : <h3>{title}</h3>}
        </ContainerHeader>
      )}

      <Content title={title}>{children}</Content>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div<Props>`
  width: ${({ width }) => width ?? "100%"};
  margin-bottom: ${Margins.container}rem;
`;

const ContainerHeader = styled.div`
  background-color: ${Colors.mediumGrey};
  padding: 0.6rem 1.2rem;
  margin-bottom: 0.3rem;
  border-radius: 0.6rem 0.6rem 0 0;
  box-shadow: 0.3rem 0.3rem 0.3rem ${Colors.boxShadowGrey};
`;

const Content = styled.div<Props>`
  background-color: ${Colors.mediumGrey};
  padding: 1.2rem;
  border-radius: ${({ title }) => (title ? "0 0" : "0.6rem 0.6rem")} 0.6rem
    0.6rem;
  box-shadow: 0.3rem 0.3rem 0.3rem ${Colors.boxShadowGrey};
`;
