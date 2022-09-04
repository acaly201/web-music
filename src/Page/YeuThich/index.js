import styles from '../YeuThich/YeuThich.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function YeuThich({children}){
    return (
        <div className={cx('backgroudimg')}>{children}</div>
    )
}
YeuThich.propTypes = {
    children: PropTypes.node.isRequired,
 };
export default YeuThich