import ModalExternal, { ModalProps } from "styled-react-modal";
import { Colors } from "../GlobalStyle";

export const Modal: React.FC<ModalProps> = (props) => {
  return <ModalStyled {...props} />;
};

const ModalStyled = ModalExternal.styled`
  position: absolute;
  top: 20%;
  border-radius: 0.6rem;
  padding: 1.2rem;
  background-color: ${Colors.darkGrey};
`;
