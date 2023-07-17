import React, { Component } from 'react';
import SearchBar from './searchBar/searchBar';
import ImageGallery from './imageGallery/imageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
// import { fetchApi } from './api/api';
const APIKEY = '36411349-fd3335cbc8c141eadb26de171';
// import s from './searchBar/searchBar.module.css';

class App extends Component {
  state = {
    images: [],
    page: 0,
    per_page: 12,
    inputQuery: '',
  };

  fetchApi = async input => {
    const { page, per_page, inputQuery } = this.state;

    const response = await fetch(
      `https://pixabay.com/api/?q=${inputQuery}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=${per_page}}`
    );
    const data = await response.json();
    // console.log(data.hits);

    this.setState(prevState => ({
      ...prevState,
      images: [...prevState.images, ...data.hits],
      page: 1,
    }));
  };

  async componentDidMount() {
    await this.fetchApi();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.inputQuery !== prevState.inputQuery) {
      this.setState({ images: [], page: 1 });
      this.fetchApi();
    }
    if (
      this.state.inputQuery === prevState.inputQuery &&
      this.state.page !== prevState.page
    ) {
      this.fetchApi();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.fetchApi(this.state.inputQuery);
    this.setState(prevState => ({ ...prevState, inputQuery: '' }));
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  moreload = () => {
    this.setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  render() {
    const showMore = this.state.images.length > 12;
    // console.log('czy ja tu', this.state.images);
    const { images } = this.state;

    return (
      <div>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputQuery={this.state.inputQuery}
        />
        {images.length && <ImageGallery images={images} />}
        {showMore && <Button onClick={this.moreload} />}
      </div>
    );
  }
}

export default App;
