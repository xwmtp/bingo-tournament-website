import { User } from "../domain/User";
import { getApi } from "./api";
import { mapToUser } from "./userApi";

export const getAllEntrants = async (): Promise<User[]> => {
  try {
    const entrantDtos = await getApi().getEntrants();
    return entrantDtos.map(mapToUser);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
