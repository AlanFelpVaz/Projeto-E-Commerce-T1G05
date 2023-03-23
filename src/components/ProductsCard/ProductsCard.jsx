import React from 'react'
import './index.css'

const ProductsCard = () => {
    
  return (
    <main>
    <div className='grid'>
        <div className='card'>
            <img src="./preto.png" alt="" />
            <h4>Microsoft Xbox Series X | Preto</h4>
            <button>Ver mais</button>
        </div>
        <div className='card'>
            <img src="./branco.png" alt="" />
            <h4>Microsoft Xbox Series S | Branco</h4>
            <button>Ver mais</button>
        </div>
        <div className='card'>
            <img src="./nitendoSwitch.png" alt="" />
            <h4>Nintendo Switch com Jogo</h4>
            <button>Ver mais</button>
        </div>
        <div className='card'>
            <img src="./gameGOW.png" alt="" />
            <h4>Jogo God of War Playstation</h4>
            <button>Ver mais</button>
        </div>
        <div className='card'>
            <img src="./GameUnchar.png" alt="" />
            <h4>Jogo Uncharted: The Nathan Drake Collection</h4>
            <button>Ver mais</button>
        </div>
        <div className='card'>
            <img src="./GameGT.png" alt="" />
            <h4>Jogo Gran Turismo</h4>
            <button>Ver mais</button>
        </div>
        
    </div>
    </main>
  )
}

export default ProductsCard