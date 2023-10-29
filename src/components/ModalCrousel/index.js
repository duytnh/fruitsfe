import { memo, useState } from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import "./style.scss";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '600px',
        overflow: 'hidden',
        backgroundSize: 'cover',
    },
};

Modal.setAppElement('#root');

function ModalCarousel({ images }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openModal = (index) => {
        setIsOpen(true);
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <div className='picture-aboutus'>
                <div className='container'>
                    <div className='row'>
                        {images.map((image, index) => (
                            <div className='col-lg-3 hinh'>
                                <img
                                    key={index}
                                    src={image}
                                    alt={`anh ${index + 1}`}
                                    onClick={() => openModal(index)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="custom-overlay"
            >
                <button className='close' onClick={closeModal}><AiOutlineClose /></button>
                <img src={images[selectedImageIndex]}
                    alt={`anh ${selectedImageIndex}`}
                />
                <button className='previous' onClick={prevImage}><GrPrevious /></button>
                <button className='next' onClick={nextImage}><GrNext /></button>
            </Modal>
        </div>
    );
}

export default memo(ModalCarousel);
