import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { dataRoute } from './Route';
import Defaulayout from './Defaulayout/Defaulayout';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdevYWVVWQfTYT5ccr6C_zEzJlQELu7is",
  authDomain: "musicdinhtuan.firebaseapp.com",
  projectId: "musicdinhtuan",
  storageBucket: "musicdinhtuan.appspot.com",
  messagingSenderId: "499708436542",
  appId: "1:499708436542:web:570162117bd482586fb16f",
  measurementId: "G-YCZ7EG9M3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Routes>
               {dataRoute.map((value, index) => {
                  const Page = value.component;
                  const LayoutPage = value.layoutPage;
                  return (
                     <Route
                        key={index}
                        path={value.path}
                        element={
                           <Defaulayout dataAudio={value.audio} title={value.title} audioCustom={value.audioCustom}>
                              <Page>
                                 <LayoutPage />
                              </Page>
                           </Defaulayout>
                        }
                     />
                  );
               })}
            </Routes>      
         </div>
      </BrowserRouter>
   );
}

export default App;
