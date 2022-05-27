import React from "react";
import { Modal } from "../../../../Modal";
import { MatchesToAdd, MatchToAdd } from "./MatchesToAdd";
import { Button } from "../../../../forms/Button";
import styled from "styled-components";

interface Props {
  matchesToAdd: MatchToAdd[];
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmMatchesToAddModal: React.FC<Props> = ({ matchesToAdd, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <p>{`Are you sure you want to add these ${matchesToAdd.length} match${
          matchesToAdd.length > 1 ? "es" : ""
        }?`}</p>
        <MatchesToAdd matchesToAdd={matchesToAdd} />
        <ConfirmButton color={"brightMossGreen"} size={"big"}>
          Confirm
        </ConfirmButton>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConfirmButton = styled(Button)`
  flex-grow: 0;
  margin-top: 1.2rem;
`;
