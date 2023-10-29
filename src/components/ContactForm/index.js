import { memo } from 'react'
import "./style.scss";

const ContactForm = () => {
    return (
        <div className='contact'>
            <div className='contact-title'>LIÊN HỆ TƯ VẤN MUA HÀNG</div>
            <form>
                <input className='name' type='text' placeholder='Họ tên của bạn...' />
                <input className='tel' type='tel' placeholder='Số điện thoại...' />
                <textarea className='content' cols={4} rows={10} placeholder='Nội dung cần tư vấn...'></textarea>
                <input className='button' type='submit' value='Gửi liên hệ' />
            </form>
        </div>
    )
}

export default memo(ContactForm);