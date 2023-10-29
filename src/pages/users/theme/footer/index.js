import { memo } from 'react'
import "./style.scss";
import logo from 'assets/users/halonalogo.png';
import footer from 'assets/users/footer-img.png';
import { ImHome3, ImPhone, ImMail3, ImFacebook } from 'react-icons/im';

const Footer = () => {
    return (
        <>
            <div className='footer-body'>
                <img className='footerbg' src={footer} alt='footer' />
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <img src={logo} alt='logofooter' className='logoft' />
                            <p>Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại thực phẩm từ thiên nhiên.</p>
                        </div>
                        <div className='col-lg-3 class2'>
                            <h3>Liên hệ</h3>
                            <ul>
                                <li><ImHome3 /> 200 Đường 3 tháng 2, Quận 10, Tp.Hồ Chí Minh</li>
                                <li><ImPhone /> 0964896483</li>
                                <li><ImMail3 /> duytnh201@gmail.com</li>
                                <li><ImFacebook /> fb.com/story.sad.16503</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 class3'>
                            <h3>Tin tức</h3>
                            <ul>
                                <li>Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản</li>
                                <li>Eat Clean – bí kíp để có thân hình xinh như mơ của cô nàng 9x</li>
                                <li>Lấy lại vòng eo con kiến nhờ công thức đơn giản từ củ đậu và rau cải</li>
                            </ul>
                        </div>
                        <div className='col-lg-3 class4'>
                            <h3>Về chúng tôi</h3>
                            <ul>
                                <li>Giới thiệu</li>
                                <li>Lĩnh vực hoạt động</li>
                                <li>Chính sách chất lượng</li>
                                <li>Năng lực - cơ sở vật chất</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copy'>
                <p>Copy right Halona website free by Hoàng Duy - 2023</p>
            </div>
        </>
    )
}

export default memo(Footer);