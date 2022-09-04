import { NavLink } from 'react-router-dom';
import {ThemeContext} from '../Defaulayout'
import {useContext} from 'react'
import styles from '../LayoutHome/LayoutHome.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function LayoutHome() {
    const theme = useContext(ThemeContext)
   return (
      <div className={cx('layout-home')}>
         <NavLink style={{borderImageSource:theme.dataColor.background}} to='/music1house' className={cx( 'item')}>MUSIC 1 HOUSE</NavLink>
         <NavLink style={{borderImageSource:theme.dataColor.background}} to='/musicchill' className={cx( 'item')}>MUSIC CHILL</NavLink>
         <NavLink style={{borderImageSource:theme.dataColor.background}} to='/musiclol' className={cx( 'item')}>MUSIC GAME</NavLink>
         <NavLink style={{borderImageSource:theme.dataColor.background}} to='/musicus' className={cx( 'item')}>MUSIC US/UK</NavLink>
         <NavLink style={{borderImageSource:theme.dataColor.background}} to='/yeuthich' className={cx( 'item')}>YÊU THÍCH</NavLink>
      </div>
   );
}
export default LayoutHome;
