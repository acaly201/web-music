import styles from '../Music1House/Music1House.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Music1House({children}) {
   return (
      <div className={cx('backgroudimg')}>
         {children}
      </div>
   );
}
Music1House.propTypes = {
   children: PropTypes.node.isRequired,
};
export default Music1House;
