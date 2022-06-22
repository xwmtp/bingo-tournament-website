import React from "react";
import { Button } from "../../../../forms/Button";
import styled from "styled-components";

interface Props {
  role: string;
  userHasRole: boolean;
  isEditable: boolean;
  onClick: () => void;
  className?: string;
}

export const RoleButton: React.FC<Props> = ({
  role,
  userHasRole,
  isEditable,
  onClick,
  className,
}) => {
  const color = userHasRole ? "brightMossGreen" : "lightGrey";
  return (
    <RoleButtonStyled color={color} disabled={!isEditable} className={className}>
      <p>
        <strong>{getRoleSign(userHasRole, isEditable)}</strong> {role}
      </p>
    </RoleButtonStyled>
  );
};

const getRoleSign = (userHasRole: boolean, isEditable: boolean): string => {
  if (!isEditable) {
    return "";
  }
  if (userHasRole) {
    return "- ";
  }
  return "+ ";
};

const RoleButtonStyled = styled(Button)`
  flex-grow: 0;
`;
