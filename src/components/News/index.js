import { memo } from 'react'
import "./style.scss";

const News = ({ image, name, date, content }) => {
    return (
        <div className='news-container'>
            <img src={image} alt='news' />
            <div className='news-content'>
                <h5>{name}</h5>
                <p className='date'>{date}</p>
                <b></b>
                <p className='content-text'>{content}</p>
            </div>
        </div>
    )
}

export default memo(News);