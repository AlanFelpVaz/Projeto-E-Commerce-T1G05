import React from 'react'
import './index.css'

const Header_Menu = () => {
  return (
    <div className='header_menu'>
        <nav>
            <div className='menu_superior'>
            <img className='imagem_logo' src="../../src/assets/logoDNC.png" alt="Logo" />
            <input type="text" placeholder='O que você está procurando?'>
            </input>

            <img className='imagem_carrinho' src="../../src/assets/carrinho_compra.png" alt="Carrinho de cpmpras" />
            </div>

            <ul className='menu_inferior'>
                <li>Novidades</li>
                <li>Jogos</li>
                <li>Video Games</li>
                <li>Mesas Gamer</li>
                <li>Promoções</li>
                <li>Atendimento</li>
            </ul>
        </nav>
        
    </div>
  )
}

export default Header_Menu