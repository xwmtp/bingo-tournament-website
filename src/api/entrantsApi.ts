import { mapToUser, User } from "../domain/User";
import { getApi } from "./api";
import { mockAllUsers } from "../domain/MockData";
import { useQuery } from "react-query";

const getAllEntrants = async (): Promise<User[]> => {
  try {
    const entrantDtos = await getApi().getEntrants();
    return entrantDtos.map(mapToUser);
  } catch (error) {
    console.log(error);
    return mockAllUsers;
    //throw error;
  }
};

export const useAllEntrants = () => {
  return useQuery<User[], Error>("allEntrants", getAllEntrants);
};
