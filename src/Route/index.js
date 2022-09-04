import Home from '../Page/Home'
import Music1House from '../Page/Music1House'
import MusicChill from '../Page/MusicChill'
import MusicLoL from '../Page/MusicLoL'
import MusicUS from '../Page/MusicUS'
import YeuThich from '../Page/YeuThich'
import AudioMusic1House from '../Audio/Music1house/audio/audio' 
import AudioMusicChill from '../Audio/MusicChill/audio/audio' 
import AudioMusicLoL from '../Audio/MusicLoL/audio/audio' 
import AudioMusicUS from '../Audio/MusicUS/audio/audio'
import AudioYeuThich from '../Audio/YeuThich/audio/audio'
import LayoutPage from '../Defaulayout/LayoutPage'
import LayoutHome from '../Defaulayout/LayoutHome'


const dataRoute = [
    {path:'/',component:Home,audio:AudioMusic1House,layoutPage:LayoutHome},
    {path:'/music1house',component:Music1House ,audio:AudioMusic1House,layoutPage:LayoutPage, title:'List nhạc 1 HOURS buồn cực buồn',audioCustom:AudioYeuThich},
    {path:'/musicchill',component:MusicChill,audio:AudioMusicChill,layoutPage:LayoutPage,  title:'List nhạc vừa nghe vừa học đảm bảo vào !!',audioCustom:AudioYeuThich},
    {path:'/musiclol',component:MusicLoL,audio:AudioMusicLoL,layoutPage:LayoutPage,  title: 'List nhạc cho dân nghiện GAME',audioCustom:AudioYeuThich},
    {path:'/musicus',component:MusicUS,audio:AudioMusicUS,layoutPage:LayoutPage,  title: 'List nhạc cho dân chuyên Anh ,không chuyên cũng vào nghe',audioCustom:AudioYeuThich},
    {path:'/yeuthich',component:YeuThich,audio:AudioYeuThich,layoutPage:LayoutPage,  title: 'List nhạc yêu thích',audioCustom:AudioYeuThich}
]
export  {dataRoute}