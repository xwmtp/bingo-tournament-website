import React from "react";
import { ImageBlock } from "./ImageBlock";
import styled from "styled-components";

export const PreviousYears: React.FC = () => {
  return (
    <>
      <ImageBlockBottomMargin
        text={"2021"}
        url={"https://xwmtp.github.io/bingo2021/"}
        image={"https://nextcloud.scaramangado.de/s/9SgC5w4szkEjsEg/preview"}
      />
      <ImageBlock
        text={"2020"}
        url={"https://xwmtp.github.io/bingo2020/"}
        image={"https://nextcloud.scaramangado.de/s/2QJMtmxoDJR55Pk/preview"}
      />
    </>
  );
};

const ImageBlockBottomMargin = styled(ImageBlock)`
  margin-bottom: 1.2rem;
`;