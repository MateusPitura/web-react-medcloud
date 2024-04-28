import React, { ReactNode } from "react";
import './CustomModal.css'
import Modal from 'react-modal';
import Header from "../Header/Header.tsx";
import { customModalType } from '../../types/customModalType.ts'

// O código abaixo é necessário para remover os warnings do console ao se usar a modal
const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement!);

const CustomModal = ({ isVisible, setIsVisible, onSubmit, title, buttonText, children }: customModalType) => {

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
  }

  return (
    <Modal
      isOpen={isVisible}
      className="Modal"
    >
      <form onSubmit={event => handleOnSubmit(event)}>
        <Header
          title={title}
          buttonText={buttonText}
          action={() => setTimeout(() => setIsVisible(false), 10)}
        />
        <div className='Modal__content'>
          {children}
        </div>
      </form>
    </Modal>
  )
}

export default CustomModal;