import { User } from "../domain/User";
import { getApi } from "./api";
import { mapToUser } from "./userApi";
import { mockAllUsers } from "../domain/MockData";

export const getAllEntrants = async (): Promise<User[]> => {
  try {
    const entrantDtos = await getApi().getEntrants();
    return entrantDtos.map(mapToUser);
  } catch (error) {
    console.log(error);
    return mockAllUsers;
    //throw error;
  }
};
