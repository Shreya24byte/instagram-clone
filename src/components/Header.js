import React from 'react';

function Header({setOpen}) {
    const handleClick = () =>{
        setOpen(true);
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="header">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="insta-logo"/>
            <button onClick={() => handleClick()}>Add Posts</button>
            <i className="far fa-plus-square" id="plusButton"  onClick={() => handleClick()}></i>
        </div>
    )
}

export default Header
