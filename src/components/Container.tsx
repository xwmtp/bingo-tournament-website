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
  padding: 10px 20px;
  margin-bottom: 4px;
  border-radius: 10px 10px 0 0;
  box-shadow: 5px 5px 5px ${Colors.boxShadowGrey};
`;

const Content = styled.div<Props>`
  background-color: ${Colors.mediumGrey};
  //padding: 20px;
  padding: 1.2rem;
  border-radius: ${({ title }) => (title ? "0 0" : "10px 10px")} 10px 10px;
  box-shadow: 5px 5px 4px ${Colors.boxShadowGrey};
`;
