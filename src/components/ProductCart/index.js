import { memo } from 'react'
import "./style.scss";

const ProductCard = ({ discount, image, name, price, pricediscount, rong, cao }) => {
    return (
        <div className='card' style={{ width: rong, height: cao }}>
            <div className='discount'><p>{discount}</p></div>
            <img src={image} alt="product" />
            <a href="/" className='namepro'>{name}</a>
            <p className='priceprodis'>{price} <span>{pricediscount}</span></p>
            <button>Thêm giỏ hàng</button>
        </div>
    );
}

export default memo(ProductCard);
