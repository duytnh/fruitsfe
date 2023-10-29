import { memo, useState } from 'react'
import "./style.scss";
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import pro1 from 'assets/users/Screenshot_1.png';
import pro2 from 'assets/users/Screenshot_2.png';
import pro3 from 'assets/users/Screenshot_3.png';
import pro4 from 'assets/users/Screenshot_4.png';
import ProductCart from 'components/ProductCart';
import { Link } from 'react-router-dom';


const StorePage = () => {
    const options = ["Thứ tự mặc định", "Mức độ phổ biến", "Mới nhất", "Giá thấp đến cao", "Giá cao đến thấp"];
    const directoryData = [
        {
            name: 'Các loại hạt dinh dưỡng',
            children: ['Hạnh nhân', 'Macca', 'Óc chó'],
        },
        {
            name: 'Các loại rau củ quả Organic',
            children: ['Cà chua', 'Carot', 'Khoai tây', 'Nước ép'],
        },
        {
            name: 'Nước ép',
            children: [],
        },
        {
            name: 'Sản phẩm khác',
            children: [],
        },
        {
            name: 'Trái cây nhập khẩu',
            children: ['Chery', 'Nho Mỹ', 'Táo Emvy'],
        },
        {
            name: 'Trái cây nội địa',
            children: ['Cam Organic', 'Dưa hấu', 'Quyt Organic'],
        },
    ];

    const [selectedItem, setSelectedItem] = useState("");
    const [openFolders, setOpenFolders] = useState({});
    const [selected, setSelected] = useState();

    const toggleFolder = (folderName) => {
        setOpenFolders({
            ...openFolders,
            [folderName]: !openFolders[folderName],
        });
    };

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
    }

    return (
        <div className='store-container'>
            <div className='title-product'>
                <div className='classon'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h1>Cửa hàng</h1>
                                <nav>
                                    <a href='/'>Trang chủ</a> <span className='child1'>/</span>
                                    <span className='child2'> Cửa hàng</span>
                                </nav>
                            </div>
                            <div className='col-lg-6 select-sort'>
                                <select value={selectedItem} className='select' onChange={handleChange}>
                                    {options.map((item, index) => (
                                        <option className='opt' key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='body-product'>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-3'>
                            <h3 className='cate-title'>DANH MỤC SẢN PHẨM</h3>
                            <div className='category'>
                                {directoryData.map((folder, key) => (
                                    <div key={folder.name}>
                                        <div className='folder-root'>
                                            <Link to="/store" onClick={() => { setSelected(key); toggleFolder(folder.name); }} className={key === selected ? 'selected' : 'name-root'}>{folder.name}</Link><span className='numchild'> ({folder.children.length})</span>
                                            {folder.children.length > 0 && openFolders[folder.name]
                                                ? <BsChevronUp className='on' onClick={() => toggleFolder(folder.name)} />
                                                : folder.children.length > 0
                                                    ? <BsChevronDown className='off' onClick={() => toggleFolder(folder.name)} />
                                                    : ''}
                                        </div>
                                        {
                                            folder.children.length > 0 && openFolders[folder.name] && (
                                                <ul>
                                                    {folder.children.map((item, key) => (
                                                        <li key={key}><Link to="/store">{item}</Link></li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-9 product-store'>
                            <ProductCart
                                discount="-10%"
                                image={pro1}
                                name="Cà chua Đà Lạt"
                                price={<s>200.000đ</s>}
                                pricediscount="180.000đ"
                                rong='197px'
                                cao='307px' />
                            <ProductCart
                                discount="-20%"
                                image={pro2}
                                name="Táo nhập khẩu"
                                price={<s>100.000đ</s>}
                                pricediscount="80.000đ"
                                rong='197px'
                                cao='307px' />
                            <ProductCart
                                discount="-15%"
                                image={pro3}
                                name="Vải nhập khẩu"
                                price={<s>400.000đ</s>}
                                pricediscount="380.000đ"
                                rong='197px'
                                cao='307px' />
                            <ProductCart
                                discount="-25%"
                                image={pro4}
                                name="Táo Mỹ"
                                price={<s>300.000đ</s>}
                                pricediscount="280.000đ"
                                rong='197px'
                                cao='307px' />
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default memo(StorePage);