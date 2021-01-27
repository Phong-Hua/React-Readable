import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px;
`

export default function Nav() {

    return (
        <StyledNav>
            <NavLink style={{ color: '#696969', marginRight: 20, fontSize: 20 }}
                activeStyle={{ fontWeight: 'bold' }}
                to='/' exact
                activeClassName='active'>
                Home
            </NavLink>
            <NavLink style={{ color: '#696969', marginLeft: 20, fontSize: 20 }}
                activeStyle={{ fontWeight: 'bold' }}
                to='/posts/' exact
                activeClassName='active'>
                Make new post
            </NavLink>
        </StyledNav>
    )
}