import { memo } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from 'assets/users/banner_list1.jpg';
import banner2 from 'assets/users/banner-list2.png';
import cate1 from 'assets/users/banner1.png';
import cate2 from 'assets/users/banner2.png';
import cate3 from 'assets/users/banner3.png';
import pro1 from 'assets/users/Screenshot_1.png';
import pro2 from 'assets/users/Screenshot_2.png';
import pro3 from 'assets/users/Screenshot_3.png';
import pro4 from 'assets/users/Screenshot_4.png';
import bannercontent1 from 'assets/users/banner-main1.png';
import bannercontent2 from 'assets/users/banner-main2.png';
import blog1 from 'assets/users/blog-img1.jpg';
import blog2 from 'assets/users/blog-img2.jpg';
import blog3 from 'assets/users/blog-img3.jpg';
import CategoryCard from 'components/CategoryCard';
import "./style.scss";
import TitleProduct from 'components/TitleProduct';
import ProductCart from 'components/ProductCart';
import LoadMoreButton from 'components/LoadMoreButton';
import News from 'components/News';
import ContactForm from 'components/ContactForm';


const HomePage = () => {
    return (
        <div className='home-container'>
            <Carousel className='carosel-home' autoPlay
                infiniteLoop
                showThumbs={false}
                interval={3000}>
                <div>
                    <img src={banner1} alt='banner' />
                </div>
                <div>
                    <img src={banner2} alt='banner' />
                </div>
            </Carousel>
            <div className='content-homepage'>
                <CategoryCard image={cate1} />
                <CategoryCard image={cate2} />
                <CategoryCard image={cate3} />
            </div>
            <div className='product'>
                <TitleProduct name="TRÁI CÂY NHẬP KHẨU" mota="Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực phía nam" />
                <div className='product-body'>
                    <ProductCart
                        discount="-10%"
                        image={pro1}
                        name="Cà chua Đà Lạt"
                        price={<s>200.000đ</s>}
                        pricediscount="180.000đ"
                        rong='262px'
                        cao='385px' />
                    <ProductCart
                        discount="-20%"
                        image={pro2}
                        name="Táo nhập khẩu"
                        price={<s>100.000đ</s>}
                        pricediscount="80.000đ"
                        rong='262px'
                        cao='385px' />
                    <ProductCart
                        discount="-15%"
                        image={pro3}
                        name="Vải nhập khẩu"
                        price={<s>400.000đ</s>}
                        pricediscount="380.000đ"
                        rong='262px'
                        cao='385px' />
                    <ProductCart
                        discount="-25%"
                        image={pro4}
                        name="Táo Mỹ"
                        price={<s>300.000đ</s>}
                        pricediscount="280.000đ"
                        rong='262px'
                        cao='385px' />
                </div>
                <div className='more'>
                    <LoadMoreButton />
                </div>
                <div className='image-content'>
                    <img className='img-main1' src={bannercontent1} alt='banner' />
                    <img className='img-main2' src={bannercontent2} alt='banner' />
                </div>
                <TitleProduct name="TRÁI CÂY NỘI ĐỊA" mota="Có hàng ngàn mẫu hoa quả tươi đủ loại cho bạn chọn!" />
                <div className='product-body'>
                    <ProductCart
                        discount="-10%"
                        image={pro1}
                        name="Cà chua Đà Lạt"
                        price={<s>200.000đ</s>}
                        pricediscount="180.000đ" />
                    <ProductCart
                        discount="-20%"
                        image={pro2}
                        name="Táo nhập khẩu"
                        price={<s>100.000đ</s>}
                        pricediscount="80.000đ" />
                    <ProductCart
                        discount="-15%"
                        image={pro3}
                        name="Vải nhập khẩu"
                        price={<s>400.000đ</s>}
                        pricediscount="380.000đ" />
                    <ProductCart
                        discount="-25%"
                        image={pro4}
                        name="Táo Mỹ"
                        price={<s>300.000đ</s>}
                        pricediscount="280.000đ" />
                </div>
                <div className='more'>
                    <LoadMoreButton />
                </div>

                <section className='section'>
                    <TitleProduct name="CÁC LOẠI NƯỚC ÉP" mota="Mang lại sự sản khoái khi thưởng thức nước ép tại Halona Fruits" />
                    <div className='product-body'>
                        <ProductCart
                            discount="-10%"
                            image={pro1}
                            name="Cà chua Đà Lạt"
                            price={<s>200.000đ</s>}
                            pricediscount="180.000đ" />
                        <ProductCart
                            discount="-20%"
                            image={pro2}
                            name="Táo nhập khẩu"
                            price={<s>100.000đ</s>}
                            pricediscount="80.000đ" />
                        <ProductCart
                            discount="-15%"
                            image={pro3}
                            name="Vải nhập khẩu"
                            price={<s>400.000đ</s>}
                            pricediscount="380.000đ" />
                        <ProductCart
                            discount="-25%"
                            image={pro4}
                            name="Táo Mỹ"
                            price={<s>300.000đ</s>}
                            pricediscount="280.000đ" />
                    </div>
                </section>
                <div className='container news-body'>
                    <div className='row'>
                        <div className='col-lg-8 news-frame'>
                            <TitleProduct name='"CÓ THỂ BẠN CẦN"' />
                            <News image={blog1}
                                name='Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản'
                                date='16/01/2019'
                                content='Tự trồng rau trong thùng xốp tại nhà là sự lựa chọn của rất nhiều gia đình trong thành phố bởi phương pháp trồng rau đơn giản, dễ trồng, dễ quản lý, an toàn và tiện lợi. Nhưng người trồng cũng cần phải đảm bảo đúng kỹ thuật trồng rau để đảm bảo vệ sinh an toàn thực phẩm và giá trị dinh dưỡng của rau.' />

                            <News image={blog2}
                                name='Eat Clean – bí kíp để có thân hình xinh như mơ của cô nàng 9x'
                                date='16/01/2019'
                                content='Đối với nhiều người, “Eat Clean” vẫn còn mơ hồ như một đích đến xa xăm thì đối với cô gái 9x này hai từ ấy đã trở thành một phần của cuộc sống hàng ngày' />

                            <News image={blog3}
                                name='Lấy lại vòng eo con kiến nhờ công thức đơn giản từ củ đậu và rau cải'
                                date='16/01/2019'
                                content='Bụng mỡ nhiều đến mấy cũng trở nên phẳng lỳ với công thức từ củ đậu và rau cải mỗi ngày, hãy tham khảo cách làm dưới đây nhé!
                                Chẳng cần tập luyện hay kiêng khem khổ cực, bạn có thể lấy lại vóc dáng eo thon,...' />
                        </div>
                        <div className='col-lg-4'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(HomePage);