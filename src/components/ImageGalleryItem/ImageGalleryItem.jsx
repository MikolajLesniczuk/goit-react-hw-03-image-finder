import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

class ImageGalleryItem extends Component {
  // componentDidMount() {
  //   const lightbox = new SimpleLightbox('.gallery a');
  // }

  render() {
    const { image } = this.props;

    return (
      <li className={s.ImageGalleryItem}>
        {/* <a href={image.largeImageURL}> */}
        <img src={image.webformatURL} alt={image.id} className={s.image} />
        {/* </a> */}
      </li>
    );
  }
}

export default ImageGalleryItem;
