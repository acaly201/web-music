import styles from '../MusicChill/MusicChill.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MusicChill({children}){
    return (
        <div className={cx('backgroudimg')}>{children}</div>
    )
}
MusicChill.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default MusicChill