import { IoMdClose } from 'react-icons/io'
import { bool, func, array } from 'prop-types'

const Modal = ({ isOpened, onClose, children }) => {
    return (
        <>
            {isOpened && (
                <div className="modal">
                    <div onClick={onClose} className="modal-wrapper">
                        <div className="modal-content">
                            <IoMdClose
                                onClick={onClose}
                                className="modal-close"
                            />
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

Modal.propTypes = {
    isOpened: bool,
    onClose: func,
    children: array,
}

export default Modal
