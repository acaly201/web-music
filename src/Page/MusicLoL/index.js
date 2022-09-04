import styles from '../MusicLoL/MusicLoL.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MusicLoL({ children }) {
   return <div className={cx('backgroudimg')}>
    {children}</div>;
}
MusicLoL.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default MusicLoL;
