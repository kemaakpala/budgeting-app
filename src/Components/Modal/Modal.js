import React from 'react';
import Box from '../Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button'
import './Modal.css';

const Modal = (props) => {
  const { children, header } = props;
  return (
    <>
      <div className='modal-back-drop'>
        <Box
          className='modal'
          header={header} 
          close={() => (
            <Button
              variant="roundedCorners"
              className="alignLeft"
              title="close button"
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          )}
        >
            {children}
        </Box>
      </div>
    </>
  )
}

export default Modal;