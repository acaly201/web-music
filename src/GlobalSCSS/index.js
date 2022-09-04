import PropTypes from 'prop-types';
import '../GlobalSCSS/GlobalScss.module.scss'
function GlobalStyle({children}){
    return children
}
GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default GlobalStyle