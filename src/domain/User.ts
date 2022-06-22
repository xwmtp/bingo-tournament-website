import { User as UserDto } from "@xwmtp/bingo-tournament/dist/models/User";
import { Role as RoleDto } from "@xwmtp/bingo-tournament";
import { websiteSettings } from "../Settings";

export interface User {
  id: string;
  name: string;
  roles: Role[];
  avatar: string;
  twitchChannel?: string;
}

export type Role = "admin" | "entrant" | "restreamer";

export const isEntrant = (user: User): boolean => {
  return user.roles.includes("entrant");
};

export const isAdmin = (user: User): boolean => {
  return user.roles.includes("admin");
};

export const mapToUser = (userDto: UserDto): User => {
  return {
    id: userDto.id,
    name: userDto.name,
    roles: userDto.roles?.map(mapToRole) ?? [],
    avatar: userDto.avatar || websiteSettings.DEFAULT_AVATAR,
    twitchChannel: userDto.twitchChannel,
  };
};

const mapToRole = (roleDto: RoleDto): Role => {
  switch (roleDto) {
    case RoleDto.Admin:
      return "admin";
    case RoleDto.Entrant:
      return "entrant";
  }
};
