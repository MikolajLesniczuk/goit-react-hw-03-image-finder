import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { image } = this.props;

    return (
      <li className={s.ImageGalleryItem}>
        <img src={image.webformatURL} alt={image.id} className={s.image} />
      </li>
    );
  }
}

export default ImageGalleryItem;
