import { useState, useRef, createContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import dataColors from './DataCoLor';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Defaulayout/Defaulayout.module.scss';
import imgMacDinh from './imgmacdinh.jpg';
import {
   faShuffle,
   faBackwardFast,
   faCirclePlay,
   faCirclePause,
   faForwardFast,
   faRepeat,
   fa1,
   faHeart,
} from '@fortawesome/free-solid-svg-icons';

library.add(faShuffle, faBackwardFast, faCirclePlay, faCirclePause, faForwardFast, faRepeat, fa1, faHeart);
const cx = classNames.bind(styles);
export const ThemeContext = createContext();

function Defaulayout({ children, dataAudio, title, audioCustom }) {
   const audioRef = useRef();
   const divRef = useRef();
   const [indexAudio, setIndexAudio] = useState(0);
   const [audioPlay, setAudioPlay] = useState({
      id: 1,
      src: '',
      name: 'Tên bài hát',
      user: 'Tên ca sĩ',
      img: imgMacDinh,
   });
   const [audioRanDom, setAudioRanDom] = useState(false);
   const [audioPause, setAudioPause] = useState(false);
   const [audioRePeat, setAudioRePeat] = useState(false);
   const [audioLoop, setAudioLoop] = useState(false);
   const [dataColor, setDataColor] = useState(dataColors[0]);
   const [hidePlay, setHidePlay] = useState(true);
   const [fakeRender, setFakeRender] = useState(false);

   const handleStartPlay = () => {
      if (audioRanDom === true) {
         const randomMusic = Math.floor(Math.random() * dataAudio.length);
         setIndexAudio(randomMusic);
         audioRef.current.play();
         setAudioPause(true);
         setHidePlay(false);
         setAudioPlay(dataAudio[randomMusic]);
      } else {
         audioRef.current.play();
         setIndexAudio(0);
         setAudioPause(true);
         setAudioPlay(dataAudio[0]);
         setHidePlay(false);
      }
   };
   const onEndAudio = () => {
      if (audioRanDom === true) {
         if (dataAudio.length === 1) {
            setIndexAudio(0);
            setAudioPlay(dataAudio[0]);
            audioRef.current.play();
         } else {
            const randomMusic = Math.floor(Math.random() * dataAudio.length);
            setIndexAudio(randomMusic);
            setAudioPlay(dataAudio[randomMusic]);
         }
      }
      if (audioRePeat === true) {
         if (indexAudio === dataAudio.length - 1) {
            setIndexAudio(0);
            setAudioPlay(dataAudio[0]);
            audioRef.current.play();
         } else {
            setIndexAudio(indexAudio + 1);
            setAudioPlay(dataAudio[indexAudio + 1]);
         }
      }
   };
   const handleAudioRanDom = () => {
      setAudioRanDom(!audioRanDom);
      setAudioRePeat(false);
      setAudioLoop(false);
   };
   const handleAudioRepeat = () => {
      setAudioRanDom(false);
      setAudioRePeat(!audioRePeat);
      setAudioLoop(false);
   };
   const handleAudioLoop = () => {
      setAudioRanDom(false);
      setAudioRePeat(false);
      setAudioLoop(!audioLoop);
   };
   const handleBefore = () => {
      if (indexAudio === 0) {
         setIndexAudio(dataAudio.length - 1);
         setAudioPlay(dataAudio[dataAudio.length - 1]);
      } else {
         setIndexAudio(indexAudio - 1);
         setAudioPlay(dataAudio[indexAudio - 1]);
      }
   };
   const handleAfter = () => {
      if (indexAudio === dataAudio.length - 1) {
         setIndexAudio(0);
         setAudioPlay(dataAudio[0]);
      } else {
         setIndexAudio(indexAudio + 1);
         setAudioPlay(dataAudio[indexAudio + 1]);
      }
   };
   const handleAudioPauseAndPlay = () => {
      setAudioPause(!audioPause);
      if (audioPlay.name === 'Tên bài hát' && audioPause === false) {
         audioRef.current.play();
         setIndexAudio(0);
         setAudioPause(true);
         setAudioPlay(dataAudio[0]);
      }
      if (audioPause === false) {
         audioRef.current.play();
      } else {
         audioRef.current.pause();
      }
   };
   const handleDataAudio = (audio, index) => {
      setAudioPause(true);
      setIndexAudio(index);
      setAudioPlay(dataAudio[index]);
   };
   const handleClickButton = useCallback((value) => {
      setDataColor(value);
   }, []);
   const handleHidePlay = useCallback(() => {
      setHidePlay(!hidePlay);
   }, [hidePlay]);

   const handleAddHeart = (audio) => {
      setFakeRender(!fakeRender);
      if (audioCustom.some((value) => value.img === audio.img) === false) {
         if (audioCustom[0].user === 'Chưa có bài hát yêu thích') {
            audioCustom.shift();
         }
         audioCustom.push({
            id: audio.id,
            src: audio.src,
            name: audio.name,
            user: audio.user,
            img: audio.img,
         });
         const toast = document.createElement('button');
         divRef.current.appendChild(toast);
         setTimeout(() => {
            divRef.current.removeChild(toast);
         }, 3000);
         toast.innerHTML = 'Đã thêm vào yêu thích';
      } else {
         if (audioCustom.length === 1) {
            audioCustom.push({
               id: 1,
               src: '',
               name: 'Tên bài hát',
               user: 'Chưa có bài hát yêu thích',
               img: imgMacDinh,
            });
         }
         for (var i = 0; i < audioCustom.length - 1; i++) {
            if (audioCustom[i].img === audio.img) {
               audioCustom.splice(i, 1);
            }
         }

         const toast = document.createElement('button');
         divRef.current.appendChild(toast);
         setTimeout(() => {
            divRef.current.removeChild(toast);
         }, 3000);
         toast.innerHTML = 'Đã xóa khỏi yêu thích';
      }
   };

   return (
      <ThemeContext.Provider
         value={{
            audioPlay,
            handleStartPlay,
            dataAudio,
            handleDataAudio,
            title,
            indexAudio,
            audioPause,
            handleAudioPauseAndPlay,
            dataColor,
            handleClickButton,
            hidePlay,
            handleHidePlay,
            audioCustom,
            handleAddHeart,
         }}
      >
         <div className={cx('web-music')}>
            <div className={cx('options-audio', hidePlay === false ? 'active-options-audio' : '')} style={dataColor}>
               <div className={cx('left-options-audio')}>
                  <img src={audioPlay.img} alt="true" />
                  <h3>
                     {audioPlay.name}
                     <span>{audioPlay.user}</span>
                  </h3>
               </div>
               <div className={cx('right-options-audio')}>
                  <div className={cx('icon-audio-play')}>
                     <Tippy content={audioRanDom ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}>
                        <FontAwesomeIcon
                           className={cx('icon-icon-audio-play', audioRanDom && 'active-icon-audio')}
                           onClick={handleAudioRanDom}
                           icon="shuffle"
                        />
                     </Tippy>
                     <Tippy
                        content={
                           <div className={cx('layout-audio-hover')}>
                              <h4>Bài trước</h4>
                              <div>
                                 <img
                                    src={
                                       (indexAudio <= dataAudio.length-1 && indexAudio !==0
                                          ? dataAudio[indexAudio - 1].img
                                          : dataAudio[dataAudio.length - 1].img)
                                    }
                                    alt="true"
                                 />
                                 <div>
                                    <span>
                                       {
                                          (indexAudio <= dataAudio.length-1 && indexAudio !==0
                                             ? dataAudio[indexAudio - 1].name
                                             : dataAudio[dataAudio.length - 1].name)
                                       }
                                    </span>
                                    <h5>
                                       {
                                          (indexAudio <= dataAudio.length-1 && indexAudio !==0
                                             ? dataAudio[indexAudio - 1].user
                                             : dataAudio[dataAudio.length - 1].user)
                                       }
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        }
                     >
                        <FontAwesomeIcon
                           className={cx('icon-icon-audio-play')}
                           onClick={handleBefore}
                           icon="backward-fast"
                        />
                     </Tippy>
                     <Tippy content={audioPause ? 'Pause' : 'Play'}>
                        {audioPause ? (
                           <FontAwesomeIcon
                              className={cx('icon-icon-audio-play', 'active-icon-audio')}
                              onClick={handleAudioPauseAndPlay}
                              icon="circle-pause"
                           />
                        ) : (
                           <FontAwesomeIcon
                              className={cx('icon-icon-audio-play')}
                              onClick={handleAudioPauseAndPlay}
                              icon="circle-play"
                           />
                        )}
                     </Tippy>

                     <Tippy
                        content={
                           <div className={cx('layout-audio-hover')}>
                              <h4>Bài tiếp theo</h4>
                              <div>
                                 <img
                                    src={
                                       indexAudio >= dataAudio.length - 1
                                          ? dataAudio[0].img
                                          : dataAudio[indexAudio + 1].img
                                    }
                                    alt="true"
                                 />
                                 <div>
                                    <span>
                                       {indexAudio >= dataAudio.length - 1
                                          ? dataAudio[0].name
                                          : dataAudio[indexAudio + 1].name}
                                    </span>
                                    <h5>
                                       {indexAudio >= dataAudio.length - 1
                                          ? dataAudio[0].user
                                          : dataAudio[indexAudio + 1].user}
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        }
                     >
                        <FontAwesomeIcon
                           className={cx('icon-icon-audio-play')}
                           onClick={handleAfter}
                           icon="forward-fast"
                        />
                     </Tippy>
                     <Tippy content={audioRePeat ? 'Tắt lặp lại tất cả' : 'Bật lặp lại tất cả'}>
                        <FontAwesomeIcon
                           className={cx('icon-icon-audio-play', audioRePeat && 'active-icon-audio')}
                           onClick={handleAudioRepeat}
                           icon="repeat"
                        />
                     </Tippy>

                     {audioLoop ? (
                        <Tippy content="Tắt lặp lại 1 bài">
                           <FontAwesomeIcon
                              className={cx('icon-icon-audio-play', 'active-icon-audio')}
                              onClick={handleAudioLoop}
                              icon="1"
                           />
                        </Tippy>
                     ) : (
                        <Tippy content="Bật lặp lại 1 bài">
                           <FontAwesomeIcon className={cx('icon-icon-audio-play')} onClick={handleAudioLoop} icon="1" />
                        </Tippy>
                     )}
                  </div>

                  <audio
                     className={cx('audio')}
                     ref={audioRef}
                     controls
                     onPlay={() => setAudioPause(true)}
                     onPause={() => setAudioPause(false)}
                     onEnded={onEndAudio}
                     src={audioPlay.src}
                     autoPlay={true}
                     loop={audioLoop && true}
                     preload="true"
                  />
               </div>
               <Tippy placement="right-start" content={title}>
                  <button className={cx('category')}>Thể Loại</button>
               </Tippy>
            </div>
            <div>{children}</div>
            <div ref={divRef} className={cx('notification')}></div>
         </div>
      </ThemeContext.Provider>
   );
}
Defaulayout.propTypes = {
   children: PropTypes.node.isRequired,
   dataAudio: PropTypes.array.isRequired,
   title: PropTypes.string,
   audioCustom: PropTypes.array,
};
export default Defaulayout;
