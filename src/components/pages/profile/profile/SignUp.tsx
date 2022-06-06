import React from "react";
import { Container } from "../../../Container";
import styled from "styled-components";
import { FlexDiv } from "../../../divs/FlexDiv";
import { Button } from "../../../forms/Button";
import { signUp } from "../../../../api/userApi";
import { useMutation, useQueryClient } from "react-query";
import { Colors } from "../../../../GlobalStyle";

export const SignUp: React.FC = () => {
  const queryClient = useQueryClient();
  const signUpMutation = useMutation(signUp, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  const buttonDisabled = signUpMutation.isLoading || signUpMutation.isSuccess;

  return (
    <Container>
      <SignUpDiv>
        <h4>Sign up now for the 2022 OoT Bingo Tournament is now open! </h4>
        {signUpMutation.isError && (
          <ErrorText>Could not sign up, please try again later.</ErrorText>
        )}
        <SignUpButton
          disabled={buttonDisabled}
          color={"brightMossGreen"}
          size={"big"}
          onClick={() => {
            !buttonDisabled && signUpMutation.mutate();
          }}
        >
          {buttonText(signUpMutation.status)}
        </SignUpButton>
      </SignUpDiv>
    </Container>
  );
};

const buttonText = (status: "idle" | "loading" | "error" | "success") => {
  switch (status) {
    case "idle":
      return "Sign up";
    case "loading":
      return "...";
    case "error":
      return "Retry";
    case "success":
      return "Signed up!";
  }
};

const SignUpDiv = styled(FlexDiv)`
  flex-direction: column;
`;

const SignUpButton = styled(Button)`
  margin: 1.2rem 0;
`;

const ErrorText = styled.p`
  color: ${Colors.coral};
`;
