import React, { Component } from 'react';
import s from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';

class Modal extends Component {
  handleImageClick = () => {
    const instance = basicLightbox.create(`
    <div className={s.modal s.is-hidden}>
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
        <button>X</button>
    </div>
`);
    instance.show();
  };

  render() {
    return;
  }
}

export default Modal;
