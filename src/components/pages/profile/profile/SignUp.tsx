import React from "react";
import { Container } from "../../../Container";
import styled from "styled-components";
import { FlexDiv } from "../../../divs/FlexDiv";
import { signUp } from "../../../../api/userApi";
import { useMutation, useQueryClient } from "react-query";
import { MutationButton } from "../../../forms/buttons/MutationButton";
import { ErrorText } from "../../../forms/ErrorText";

export const SignUp: React.FC = () => {
  const queryClient = useQueryClient();
  const signUpMutation = useMutation(signUp, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  return (
    <Container>
      <SignUpDiv>
        <h4>Sign up now for the 2022 OoT Bingo Tournament is now open! </h4>
        {signUpMutation.isError && <ErrorText text="Could not sign up, please try again later." />}
        <MutationButtonStyled
          mutationStatus={signUpMutation.status}
          onIdleText="Sign up"
          color={"brightMossGreen"}
          size={"big"}
          onClick={signUpMutation.mutate}
        />
      </SignUpDiv>
    </Container>
  );
};

const SignUpDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const MutationButtonStyled = styled(MutationButton)`
  margin-top: 1rem;
`;
