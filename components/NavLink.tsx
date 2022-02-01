import React from "react";
import Link from "next/link"
import styled from "styled-components";

interface Props {
    href: string,
    name: string,
}

export const NavLink: React.FC<Props> = ({href, name}) => {
    return (
        <Link href={href} passHref>
            <StyledLink>
                {name}
            </StyledLink>
        </Link>
    );
}

const StyledLink = styled.a`
  padding: 0px 10px;
  font-size: 1.4rem;
`