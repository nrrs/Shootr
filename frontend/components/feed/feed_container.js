import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { selectAllImages } from '../../reducers/selectors';

const mapStateToProps = ({ errors, images, session }) => {
  const allImages = selectAllImages(images);
  return ({
    images: allImages,
    currentUser: session.currentUser,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImages: () => dispatch(requestAllImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
