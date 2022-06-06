import React from "react";
import styled from "styled-components";

export const Spinner: React.FC = () => {
  return <SpinnerStyled />;
};

const SpinnerStyled = styled.div`
  &,
  &:after {
    border-radius: 100%;
    width: 2.3rem;
    height: 2.3rem;
  }
  & {
    margin: auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 0.7em solid rgba(154, 203, 185, 0.2);
    border-right: 0.7em solid rgba(154, 203, 185, 0.2);
    border-bottom: 0.7em solid rgba(154, 203, 185, 0.2);
    border-left: 0.7em solid #9acbb9;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
