import React from "react";
import styled from "styled-components";
import { IconButton } from "../IconButton";
import { BiCalendar } from "react-icons/bi";

interface Props {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export const ScheduleButton: React.FC<Props> = ({ text, onClick, className }) => {
  return (
    <IconButton
      text={text ?? "Pick time"}
      Icon={CalendarIcon}
      onClick={onClick}
      color={"coral"}
      className={className}
    />
  );
};

const CalendarIcon = styled(BiCalendar)`
  transform: scale(1.2);
`;
