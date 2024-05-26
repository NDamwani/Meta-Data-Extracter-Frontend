import React, { useState } from 'react';
import './Header.css'; 
import SideModal from '../SideModal/SideModal';
import { Menu } from 'react-feather';

function Header() {

    const [isModalOpen, setModalOpen] = useState(false); 

    const toggleModal = () => setModalOpen(!isModalOpen); 

    return (
        <>
            <header className="header">
                <h3 className='heading'>Configure Flows</h3>
                <button onClick={toggleModal} className="modal-toggle">
                    <Menu /> {/* Using the Menu icon */}
                </button>
            </header>

            <SideModal isOpen={isModalOpen} toggleModal={toggleModal} />

        </>
    );
}

export default Header; 
