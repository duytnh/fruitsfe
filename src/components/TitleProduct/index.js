import { memo } from 'react'
import "./style.scss";

const TitleProduct = ({ name, mota, mau }) => {
    return (
        <div className='title-container'>
            <h3>
                <b></b>
                <span>{name}</span>
                <b></b>
            </h3>
            <p style={{ color: mau }}>{mota}</p>
        </div>
    );
}

export default memo(TitleProduct);
