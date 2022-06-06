import ModalExternal, { ModalProps } from "styled-react-modal";
import { Colors } from "../GlobalStyle";
import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

interface Props extends ModalProps {
  onClose: () => void;
  title?: string;
}

export const Modal: React.FC<Props> = (props) => {
  return (
    <ModalStyled {...props} onBackgroundClick={props.onClose} onEscapeKeydown={props.onClose}>
      <ContainerStyled title={props.title} size="small" width={"700px"}>
        {props.children}
      </ContainerStyled>
    </ModalStyled>
  );
};

const ModalStyled = ModalExternal.styled`
  position: absolute;
  top: 20%;
  border-radius: 0.6rem;
  padding: 1.2rem;
  background-color: ${Colors.darkGrey};
`;

const ContainerStyled = styled(Container)`
  margin-bottom: 0;
  max-width: 85vw;
`;