import { getApi } from "./api";
import { User as UserDto } from "@xwmtp/bingo-tournament";
import { User } from "../domain/User";
import { useQuery } from "react-query";

const getUser = async (): Promise<User | undefined> => {
  try {
    const userDto = await getApi().getUser();
    return mapToUser(userDto);
  } catch (error) {
    console.log("No logged in user found");
  }
};

export const useUser = () => {
  return useQuery<User | undefined, Error>("user", getUser);
};

export const mapToUser = (userDto: UserDto): User => {
  return {
    id: userDto.id,
    name: userDto.name,
    avatar: userDto.avatar,
    twitchChannel: userDto.twitchChannel,
  };
};
