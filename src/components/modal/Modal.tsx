import { Dispatch, FC, MouseEvent, ReactNode, SetStateAction, useRef } from 'react'
import s from './modal.module.css'

interface ModalProps {
  children:ReactNode;
  setChangeAvatarModal:Dispatch<SetStateAction<boolean>>;
}

const Modal:FC<ModalProps> = ({children, setChangeAvatarModal}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  
  const hideModal = (e:MouseEvent<HTMLDivElement>) => {
    if (e.target===ref.current) setChangeAvatarModal(false)
  }
  return (
    <div onClick={hideModal}
    ref={ref}
    className={s.wrapper}>
      <div onClick={(e:MouseEvent<HTMLDivElement>)=>e.stopPropagation()}
       className={s.content}>
        {children}
      </div>
    </div>
  )
}
export default Modal