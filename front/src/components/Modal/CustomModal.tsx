import React, { ReactNode } from "react";
import './CustomModal.css'
import Modal from 'react-modal';
import Input from "../Input/Input.tsx";
import Header from "../Header/Header.tsx";

type ModalType = {
  isVisible: boolean
  setIsVisible: (a: boolean) => void
  children: ReactNode
  title: string
  buttonText: string
}

const CustomModal = ({isVisible, setIsVisible, children, title, buttonText}: ModalType) => {
    return(
        <Modal
          isOpen={isVisible}
          className="Modal"
        >
          <Header
            title={title}
            buttonText={buttonText}
            action={() => setIsVisible(false)}
          />
          <div className='Modal__content'>
            {children}
          </div>
        </Modal>
    )
}

export default CustomModal;