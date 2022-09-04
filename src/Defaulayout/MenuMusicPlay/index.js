import { useContext,memo } from 'react';
import {ThemeContext} from '../Defaulayout'
import styles from '../MenuMusicPlay/MusicPlay.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import dataColors from '../DataCoLor';
const cx = classNames.bind(styles);
function MenuMusicPlay() {
    const handleClickButton = useContext(ThemeContext).handleClickButton
    const dataColor = useContext(ThemeContext).dataColor
    const hidePlay = useContext(ThemeContext).hidePlay
    const handleHidePlay = useContext(ThemeContext).handleHidePlay
    return (
        <div className={cx('menu')} style={dataColor}>
            <div className={cx('color-web')}>
                <button><span>Người sáng lập WEB</span>
                    <h3>Đặng Đình Tuân-2K1</h3>
                </button>
                <button className={cx('button-set-color')}>Color Web</button>
                <div className={cx('menu-color')}>
                    {dataColors.map((value,index)=>(
                        <button key={index} className={cx(value.background===dataColor.background && 'activecolor')} style={value} onClick={()=>handleClickButton(value)}></button>
                    ))}
                    
                </div>
            </div>
            <ul className={cx('list-menu')}>
                <li><NavLink to='/' className={(nav)=>cx('item-menu',{active: nav.isActive})}>HOME</NavLink></li>
                <li><NavLink className={(nav)=>cx('item-menu',{active: nav.isActive})} to='/music1house' >MUSIC 1 HOUSE</NavLink></li>
                <li><NavLink className={(nav)=>cx('item-menu',{active: nav.isActive})} to='/musicchill' >MUSIC CHILL</NavLink></li>
                <li><NavLink className={(nav)=>cx('item-menu',{active: nav.isActive})} to='/musiclol' >MUSIC GAME</NavLink></li>
                <li><NavLink className={(nav)=>cx('item-menu',{active: nav.isActive})} to='/musicus'>MUSIC US/UK</NavLink></li>
                <li><NavLink className={(nav)=>cx('item-menu',{active: nav.isActive})} to='/yeuthich'>Yêu thích</NavLink></li>
                
            </ul>
            {!hidePlay ? <button className={cx('button-hide')} onClick={handleHidePlay}>Ẩn thanh Play/Pause</button>:<button className={cx('button-show')} onClick={handleHidePlay}>Hiện thanh Play/Pause</button>}
        </div>
    )
}
export default memo(MenuMusicPlay)