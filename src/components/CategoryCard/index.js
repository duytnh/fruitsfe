import { memo } from 'react'
import "./style.scss";

const CategoryCard = ({ image }) => {
    return (
        <div className='categorycard'>
            <img src={image} alt="Anh" />
        </div>
    )
}

export default memo(CategoryCard);