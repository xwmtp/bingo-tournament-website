import styled from "styled-components";
import React from "react";

const user = {
  name: "scaramangado",
  discriminator: 9143,
  avatar: "https://racetime.gg/media/feynman_small.jpeg",
};

export const RaceTimeUser: React.FC = () => {
  return (
    <UserDiv>
      <UserAvatar src={user.avatar} />
      <p>{user.name}</p>
    </UserDiv>
  );
};

const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserAvatar = styled.img`
  --size: 3rem;
  width: var(--size);
  height: var(--size);
  border-radius: 50px;
  margin-right: 10px;
`;
