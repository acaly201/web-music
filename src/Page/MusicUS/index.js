import styles from '../MusicUS/MusicUS.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function MusicUS({children}){
    return (
        <div className={cx('backgroudimg')}>{children}</div>
    )
}
MusicUS.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default MusicUS