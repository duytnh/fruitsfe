import { memo } from 'react'
import "./style.scss";
import React from 'react';
import slide from 'assets/users/banner-list2.png';
import aboutus from 'assets/users/image-about.png';
import intro1 from 'assets/users/intro1.png';
import intro2 from 'assets/users/intro2.png';
import intro3 from 'assets/users/intro3.png';
import list1 from 'assets/users/Screenshot_1.png';
import list2 from 'assets/users/Screenshot_2.png';
import list3 from 'assets/users/Screenshot_3.png';
import list4 from 'assets/users/Screenshot_4.png';

import ContactForm from 'components/ContactForm';
import TitleProduct from 'components/TitleProduct';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ModalCrousel from 'components/ModalCrousel';

const IntroPage = () => {
    const images = [list1, list2, list3, list4];
    return (
        <>
            <div className='intro-container'>
                <img src={slide} alt='banner' />
                <div className=' container form-contact'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-us'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 text-about'>
                            <h1>VỀ CHÚNG TÔI</h1>
                            <p>Công ty cổ phần thực phẩm dinh dưỡng  là Công ty chuyên cung cấp các loại trái cây hoa quả, rau sạch. Chúng tôi cam kết chất lượng sản phẩm sạch từ thiên nhiên không quahóa chất.</p>
                            <p>Rau củ quả cảu chúng tôi sẽ mang đến khách hàng một sản phẩm chất lượng, một thương hiệu đáng tin cậy. Công ty chúng tôi mong muốn có cơ hội được phục vụ quý khách và góp phần phát triền ngànhthực phẩm sạch tại Việt Nam</p>
                        </div>
                        <div className='col-lg-6 image-about'>
                            <img src={aboutus} alt='about-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='choosen-product-aboutus'>
                <div className='container'>
                    <div className='row'>
                        <TitleProduct mau="#000" name="VÌ SAO CHỌN SẢN PHẨM CỦA CHÚNG TÔI"
                            mota="Rau củ quả cảu chúng tôi sẽ mang đến khách hàng một sản phẩm chất lượng, một thương hiệu đáng tin cậy. Công ty chúng tôi mong muốn có cơ hội được phục vụ quý khách và góp phần phát triền ngànhthực phẩm sạch tại Việt Nam" />
                        <div className='col-lg-4 info'>
                            <img src={intro1} alt='intro-bg' />
                            <h4>MIỄN PHÍ VẬN CHUYỂN</h4>
                            <p>Bán kính 2km</p>
                        </div>
                        <div className='col-lg-4 info'>
                            <img src={intro2} alt='intro-bg' />
                            <h4>HỖ TRỢ 24/7</h4>
                            <p>Hotline: 0964896483</p>
                        </div>
                        <div className='col-lg-4 info'>
                            <img src={intro3} alt='intro-bg' />
                            <h4>GIỜ LÀM VIỆC</h4>
                            <p>Thứ 2 - Thứ 7: Giờ hàng chính</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='modal'>
                <ModalCrousel images={images} />
            </div>
        </>
    );
}

export default memo(IntroPage);