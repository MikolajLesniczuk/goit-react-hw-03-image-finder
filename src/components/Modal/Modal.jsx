import { Component } from 'react';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  render() {
    const { handleBackdropClick } = this;
    const { largeImage } = this.props;
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>
    );
  }
}
