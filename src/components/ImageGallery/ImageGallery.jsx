import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ children }) => (
  <ul className={styles.ImageGallery}>{children}</ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};
