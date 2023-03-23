import React from 'react'
import './index.css'
import Header_Menu from '../../components/HeaderMenu/Header_Menu'
import ProductsCard from '../../components/ProductsCard/ProductsCard';
import ImagemCentro from '../../components/ImagemCentro/ImagemCentro';


const Home = ({data}) => {
  console.log(data);
  return (
    <div className='home'>
      

      <Header_Menu/>
      <ImagemCentro/>
      <div className="home__homeproducts">
      
          <ProductsCard/>
      </div>
      </div>
        
  )
}

export default Home