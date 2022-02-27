import { getApi } from "./api";
import { User as UserDto } from "@xwmtp/bingo-tournament";
import { User } from "../domain/User";

export const fetchUser = async () => {
  try {
    const userDto = await getApi().getUser();
    return mapToUser(userDto);
  } catch (error) {
    console.log(error);
  }
};

const mapToUser = (userDto: UserDto) => {
  return new User(
    userDto.id,
    userDto.name,
    userDto.avatar,
    userDto.twitchChannel
  );
};
