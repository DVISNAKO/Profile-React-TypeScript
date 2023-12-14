import React, {FC, useState} from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';
import Photo from './models/Photo';

const App: FC = () => {
  const [photosList, setPhotosList] = useState<Photo[]>([]);

  const addPhoto = (newPhoto: Photo) => {
    setPhotosList([...photosList, newPhoto]);
  };

  const updatePhoto = (newPhoto: Photo) => {
    setPhotosList(photosList.map((photo) => 
    (photo.id === newPhoto.id ? newPhoto : photo)))
  }

  const deletePhoto = (id: number) => {
    const newPhotosList = photosList.filter(photo => photo.id !== id);
    setPhotosList(newPhotosList);
  }
  
  return (
    <div className="App">
      <MainPage
      updatePhoto={updatePhoto}
      addPhoto={addPhoto}
      deletePhoto={deletePhoto}
      photosList={photosList} />
    </div>
  );
}

export default App;
