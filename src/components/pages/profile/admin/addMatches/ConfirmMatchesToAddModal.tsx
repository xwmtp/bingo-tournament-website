import React from "react";
import { Modal } from "../../../../Modal";
import { MatchesToAddList } from "./MatchesToAddList";
import { Button } from "../../../../forms/Button";
import styled from "styled-components";
import { MatchToAdd } from "../../../../../domain/Match";
import { addMatches } from "../../../../../api/matchesApi";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  matchesToAdd: MatchToAdd[];
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const ConfirmMatchesToAddModal: React.FC<Props> = ({
  matchesToAdd,
  isOpen,
  onClose,
  onSuccess,
}) => {
  const queryClient = useQueryClient();
  const addMatchesMutation = useMutation(addMatches, {
    onSuccess: (data) => {
      // successful mutation
      if (data.length === matchesToAdd.length) {
        queryClient.invalidateQueries("allMatches");
        onSuccess();
        onClose();
      }
    },
  });

  const buttonDisabled = addMatchesMutation.isLoading;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <p>{`Are you sure you want to add these ${matchesToAdd.length} match${
          matchesToAdd.length > 1 ? "es" : ""
        }?`}</p>
        <MatchesToAdd matchesToAdd={matchesToAdd} />
        <ConfirmButton
          disabled={buttonDisabled}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => {
            if (!buttonDisabled) {
              addMatchesMutation.mutate(matchesToAdd);
            }
          }}
        >
          {buttonText(addMatchesMutation.status)}
        </ConfirmButton>
      </ModalContent>
    </Modal>
  );
};

const buttonText = (status: "idle" | "loading" | "error" | "success") => {
  switch (status) {
    case "idle":
    case "success":
      return "Confirm";
    case "loading":
      return "Adding...";
    case "error":
      return "Retry";
  }
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MatchesToAdd = styled(MatchesToAddList)`
  margin-top: 1rem;
`;

const ConfirmButton = styled(Button)`
  flex-grow: 0;
  margin-top: 1.2rem;
`;
