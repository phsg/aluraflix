import React from 'react';

import Logo from '../../assets/img/logo.png'
import './Menu.css';
import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="logo" src={Logo} alt="AluraFlix logo" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;