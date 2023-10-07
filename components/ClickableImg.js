import React from 'react';

class ImageRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null,
    };
  }

  handleImageClick = (image) => {
    this.setState({ selectedImage: image });
  };

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    return (
      <div>
        <h2>Click an Image:</h2>
        <div className="image-row">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => this.handleImageClick(image)}
              className={selectedImage === image ? 'selected' : ''}
            />
          ))}
        </div>
        {selectedImage && (
          <div>
            <h3>You selected: {selectedImage.alt}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default ImageRow;
