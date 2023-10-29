import { memo } from 'react'
import "./style.scss";

const LoadMoreButton = ({ link }) => {
    return (
        <a className='button-loadmore' href={link}>Xem thêm</a>
    );
}

export default memo(LoadMoreButton);