import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './imageGallery.module.css';
import { nanoid } from 'nanoid';

const APIKEY = '36411349-fd3335cbc8c141eadb26de171';

class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return images.length > 0 ? (
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={nanoid()} image={image} />
        ))}
      </ul>
    ) : (
      <div>Brak rezultatów</div>
    );
  }
}

export default ImageGallery;
