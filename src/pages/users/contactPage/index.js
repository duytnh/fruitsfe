import { memo } from 'react'
import "./style.scss";
import ContactForm from 'components/ContactForm';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineMailLock, MdCall } from 'react-icons/md';


const ContactPage = () => {
    return (
        <div className='contact-container'>
            <div className='map'>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62703.81067500108!2d106.6764693423296!3d10.812217030237898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175289f02a8eae9%3A0x34ec9d90e055cde3!2zQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1698609223729!5m2!1svi!2s"
                    height="350"
                    width="100%"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen
                ></iframe>
            </div>
            <div className='content-contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h3>Halona Fruits | Rau củ quả tươi</h3>
                            <p>Địa chỉ: 368/20a Chu Văn An, phường 12, Bình Thạnh, TpHCM</p>
                            <p>Mua hàng Online: Giao hàng miễn phí HCM trong 24H</p>
                            <p>Điện thoại: 0964896483 – 0783638475</p>
                            <p>Email đặt hàng: duytnh201@gmail.com</p>
                            <p>Website: hdfruit.vercel.app</p>
                            <p>Mã số doanh nghiệp: 0000000</p>
                            <div className='icon-social'>
                                <button className='b1'><FaFacebookF /></button>
                                <button className='b2'><FaInstagram /></button>
                                <button className='b3'><MdOutlineMailLock /></button>
                                <button className='b4'><MdCall /></button>
                                <button className='b5'><FaLinkedinIn /></button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ContactPage);