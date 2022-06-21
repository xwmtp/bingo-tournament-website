import React, { useState } from "react";
import styled from "styled-components";
import { useAllEntrants } from "../../../../../api/entrantsApi";
import { EntrantInputField } from "../../../../forms/EntrantInputField";
import { UserDisplay } from "../../../../UserDisplay";
import { FlexDiv } from "../../../../divs/FlexDiv";
import { Role, User } from "../../../../../domain/User";
import { RoleButton } from "./RoleButton";

const allRoles: Role[] = ["admin", "entrant", "restreamer"];
const editableRoles: Role[] = ["entrant", "restreamer"];

export const EditRoles: React.FC = () => {
  const { data: allEntrants, isError, isSuccess } = useAllEntrants();

  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  if (isError) {
    return <p>Could not load entrants</p>;
  }
  if (!isSuccess) {
    return <p>loading...</p>;
  }

  return (
    <EditRolesDiv>
      <InputRow>
        <InputLabel>User</InputLabel>
        <EntrantInputField
          initialInput={""}
          allEntrants={allEntrants}
          onEntrantChange={setSelectedUser}
        />
        {selectedUser && <UserDisplay user={selectedUser} />}
      </InputRow>
      {selectedUser && (
        <RolesDiv>
          {allRoles.map((role) => (
            <RoleButtonStyled
              key={role}
              role={role}
              userHasRole={selectedUser?.roles.includes(role)}
              isEditable={editableRoles.includes(role)}
              onClick={() => {}}
            />
          ))}
        </RolesDiv>
      )}
    </EditRolesDiv>
  );
};

const EditRolesDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputRow = styled(FlexDiv)`
  justify-content: flex-start;
  margin-right: 2rem;
`;

const InputLabel = styled(FlexDiv)`
  width: 5rem;
  justify-content: flex-start;
`;

const RolesDiv = styled(FlexDiv)`
  justify-content: flex-start;
  margin-top: 1rem;
`;

const RoleButtonStyled = styled(RoleButton)`
  margin-right: 1rem;
`;
