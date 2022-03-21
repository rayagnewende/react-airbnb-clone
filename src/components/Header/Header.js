import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar}   from '@material-ui/core';
const Header = () => {
    return (
        <div className="Header">
            <img  
                src="https://etapes.com/app/uploads/2014/07/airbnb-un-changement-de-logo-pas-si-nouveau-9.jpg" 
                alt="Logo de l'application" 
            />

            <div className="Header__center">
                <input placeholder="Que recherchez-vous" />
                <SearchIcon  />

            </div>

            <div className="Header__right">
                <p>Become a partner</p>     
                <LanguageIcon    />
                <ExpandMoreIcon   />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;