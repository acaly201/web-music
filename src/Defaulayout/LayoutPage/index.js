import { ThemeContext } from '../Defaulayout';
import { useContext } from 'react';
import styles from '../LayoutPage/LayoutPage.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuMusicPlay from '../MenuMusicPlay';
import { faCirclePlay, faCirclePause, faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faCirclePlay, faCirclePause, faHeart);
const cx = classNames.bind(styles);

function LayoutPage() {
   const theme = useContext(ThemeContext);
   return (
      <div className={cx('layout-page')}>
         <div
            className={cx('audio-play', theme.audioPause ? 'animation-audio-play' : 'pause-animation')}
            style={theme.dataColor}
         >
            <div className={cx('animation-custom')}>
               <div className={cx('item-animation-custom1')}></div>
               <div className={cx('item-animation-custom2')}></div>
               <div className={cx('item-animation-custom3')}></div>
               <div className={cx('item-animation-custom4')}></div>
            </div>
            <div className={cx('img')}>
               <img src={theme.audioPlay.img} alt="true" />
            </div>
            <h3>{theme.audioPlay.name}</h3>
            <span>{theme.audioPlay.user}</span>
            <button onClick={theme.handleStartPlay}>Chill nào AE!!</button>
         </div>
         <div className={cx('list-audio')}>
            <h2 style={theme.dataColor}> {theme.title}</h2>
            <ul className={cx('title-list-audio')}>
               <li>bài hát</li>
               <li>ca sĩ</li>
               <li>play</li>
            </ul>
            {theme.dataAudio.map((audio, index) => (
               <div
                  key={index}
                  className={cx(
                     'box-audio',
                     index === theme.indexAudio && audio.name === theme.audioPlay.name ? 'active-music' : '',
                  )}
                  style={index === theme.indexAudio && audio.name === theme.audioPlay.name ? theme.dataColor : {}}
               >
                  <div className={cx('left-box-audio')}>
                     <img src={audio.img} alt="true" />
                     <h3>{audio.name}</h3>
                  </div>
                  <h3 className={cx('center-box-audio')}>{audio.user}</h3>
                  <Tippy
                     placement="right-start"
                     content={
                        theme.audioCustom.some((value) => value.img === audio.img) === false
                           ? 'Yêu Thích'
                           : 'Bỏ Yêu Thích'
                     }
                  >
                     <FontAwesomeIcon
                        className={cx(
                           'add-heart',
                           theme.audioCustom.some((value) => value.img === audio.img) === true && 'active-add-heart',
                        )}
                        icon="heart"
                        onClick={() => theme.handleAddHeart(audio)}
                     />
                 </Tippy>
                  <span className={cx('right-box-audio')} onClick={() => theme.handleDataAudio(audio, index)}>
                     {theme.audioPause && index === theme.indexAudio && audio.name === theme.audioPlay.name ? (
                        <FontAwesomeIcon
                           className={cx('active-icon-audio')}
                           onClick={theme.handleAudioPauseAndPlay}
                           icon="circle-pause"
                        />
                     ) : (
                        <FontAwesomeIcon onClick={theme.handleAudioPauseAndPlay} icon="circle-play" />
                     )}
                  </span>
                  
                  
             
               </div>
            ))}
         </div>
         <MenuMusicPlay />
      </div>
   );
}
export default LayoutPage;
