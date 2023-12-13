import React, {FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './MainPage/MainPage';
import Photo from './models/Photo';

const App: FC = () => {
  const [photosList, setPhotosList] = useState<Photo[]>([]);

  const addPhoto = (newPhoto: Photo) => {
    setPhotosList([...photosList, newPhoto]);
  };

  return (
    <div className="App">
      <MainPage 
      addPhoto={addPhoto}
      photosList={photosList} />
    </div>
  );
}

export default App;
