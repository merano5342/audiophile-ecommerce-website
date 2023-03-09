import earphones from 'src/assets/shared/desktop/image-category-thumbnail-earphones.png';
import Headphones from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png';

const Products = () => {
  return (
    <div className="flex flex-col gap-3 bg-white md:flex-row  ">
      <div className="product">
        <img src={Headphones} alt="" className="image-category" />
        <div className="product-gray">
          <h6>Headphones</h6>
          <button className="btn-3">Shop</button>
        </div>
      </div>
      <div className="product">
        <img src={speakers} alt="" className="image-category" />
        <div className="product-gray">
          <h6>speakers</h6>
          <button className="btn-3">Shop</button>
        </div>
      </div>

      <div className="product">
        <img src={earphones} alt="" className="image-category" />
        <div className="product-gray">
          <h6>earphones</h6>
          <button className="btn-3">Shop</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
