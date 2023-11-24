import './GlobalStyles.scss';
import PropTypes from 'prop-types';
function GloabalStyles({ children }) {
    return children;
}

GloabalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GloabalStyles;
