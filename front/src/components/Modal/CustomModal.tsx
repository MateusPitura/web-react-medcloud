import React from "react";
import './CustomModal.css'
import Modal from 'react-modal';
import Header from "../Header/Header.tsx";
import { customModalType } from '../../types/customModalType.ts'
import Button from "../Button/Button.tsx";

// O código abaixo é necessário para remover os warnings do console ao se usar a modal
const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement!);

const CustomModal = ({ isVisible, setIsVisible, onSubmit, title, buttonText, children }: customModalType) => {

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(event)
    // setIsVisible(false)
  }

  return (
    <Modal
      isOpen={isVisible}
      className="Modal"
    >
      <Header
        title={title}
        buttonText={"Cancel"}
        buttonType="secondary"
        action={() => setIsVisible(false)}
      />
      <form onSubmit={event => handleOnSubmit(event)} className='Modal__content'>
        {children}
        <br></br>
        <Button onClick={() => {}} type={'primary'}>{buttonText}</Button>
      </form>
    </Modal>
  )
}

export default CustomModal;