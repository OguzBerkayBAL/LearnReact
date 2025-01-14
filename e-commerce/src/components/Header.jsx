import React, { useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { use } from 'react';
import { useNavigate } from 'react-router-dom';




const Header = () => {

  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  const changeTheme = () => {
    const root = document.getElementById('root');

    if (theme) {
      root.style.backgroundColor = 'black';
      root.style.color = '#fff';
    } else {
      root.style.backgroundColor = '#fff';
      root.style.color = 'black';
    }
    setTheme(!theme);
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #e0e0e0' }}>
      <div style={{ cursor: 'pointer' }} className='flex-row' onClick={() => navigate('/')}>
        <img className='logo' src="./src/images/logo.png" alt="" />
        <p className='logo-text'>BERKAY A.Ş</p>
      </div>
      <div className='flex-row'>
        <input className='search-input' placeholder='Bir şeyler ara' type="text" />
        <div>
          {
            theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />
          }

          <CiShoppingBasket className='icon' />
        </div>

      </div>
    </div>
  )
}

export default Header