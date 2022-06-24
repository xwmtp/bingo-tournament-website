import { getApi } from "./api";
import { mapToUser, User } from "../domain/User";
import { useQuery } from "react-query";
import { mockLoggedInUser } from "../domain/MockData";

const getUser = async (): Promise<User | undefined> => {
  try {
    const userDto = await getApi().getUser();
    return mapToUser(userDto);
  } catch (error) {
    // todo remove
    return mockLoggedInUser;
    console.log("No logged in user found");
  }
};

export const useUser = () => {
  return useQuery<User | undefined, Error>("user", getUser);
};

export const signUp = async () => {
  // todo remove sleep
  await sleep(2000);
  await getApi().signUp();
};

export const withdraw = async () => {
  await getApi().withdraw();
};

export const addRole = async () => {};

export const removeRole = async () => {};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
