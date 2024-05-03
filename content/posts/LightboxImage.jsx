import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const LightboxImage = ({ smallImage, largeImage, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <img src={smallImage} alt={alt} onClick={openModal} />
            <FsLightbox
                toggler={isOpen}
                sources={[largeImage]}
                onClose={closeModal}
            />
        </div>
    );
};

export default LightboxImage;
