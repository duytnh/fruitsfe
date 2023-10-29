import { memo } from 'react'
import './style.scss'
import blog1 from 'assets/users/blog-img1.jpg';
import blog2 from 'assets/users/blog-img2.jpg';
import blog3 from 'assets/users/blog-img3.jpg';
import TitleProduct from 'components/TitleProduct';
import News from 'components/News';

const NewsPage = () => {
    return (
        <div className='news-new'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <TitleProduct name='"TIN MỚI NHẤT"' mota="Cập nhật các tin tức mới nhất của cửa hàng" />
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
                </div>
            </div>
        </div>

    )
}

export default memo(NewsPage);