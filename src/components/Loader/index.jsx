import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';

export function Loader({ isShow }) {
  const LoadComponent = isShow && (
    <Overlay>
      <div className="loader" />
    </Overlay>
  );

  return ReactDOM.createPortal(
    LoadComponent,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {
  isShow: PropTypes.bool.isRequired,
};
