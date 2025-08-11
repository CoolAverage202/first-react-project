import { useState } from 'react';
import reactlogo from '../../assets/react.svg';
import '../../App.css'
function Header() {
return (
<header>
    <img src= {reactlogo} alt="styled atom" />
    <h1>React Esstentials</h1>
    <p>
        Fundamental React concepts you need to know to build modern web applications.
    </p>
</header>)
}

export default Header
