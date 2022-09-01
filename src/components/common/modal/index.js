import { default as ReactModal } from 'react-modal'

const Modal = ({children, ...props}) => {
  return (
    <>
      <ReactModal {...props}>
        {children}
      </ReactModal>
    </>
  )
}

export default Modal;