import React from 'react'
import WireframeCategoryImg from '../../images/mace/main/Categories.png'
import WireframeSearchImg from '../../images/mace/main/Search.png'
import WireframeWishlistImg from '../../images/mace/main/Wishlist.png'
import WireframeHomeImg from '../../images/mace/main/Home.png'
import WireframeProductImg from '../../images/mace/main/Product.png'
import WireframeCartImg from '../../images/mace/main/Cart.png'

const Wireframe = () => {
  return (
    <div className="mace-wireframe">
      <h4>Wireframe</h4>
      <p>I created wireframes to test the user flows and check possibilities of implementing design UI created in the sketches.</p>
      <div className="image-container">
        <img src={WireframeCategoryImg} alt="wireframe-img" />
        <img src={WireframeHomeImg} alt="wireframe-img" />
        <img src={WireframeProductImg} alt="wireframe-img" />
        <img src={WireframeSearchImg} alt="wireframe-img" />
        <img src={WireframeWishlistImg} alt="wireframe-img" />
        <img src={WireframeCartImg} alt="wireframe-img" />
      </div>
    </div>
  )
}

export default Wireframe