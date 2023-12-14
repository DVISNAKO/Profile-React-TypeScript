import React, { ChangeEvent, FormEvent, useState, FC } from "react";
import "./Main.Page.css";
import { IoAddCircleOutline } from "react-icons/io5";
import Photo from "../models/Photo";
import DisplayPhoto from "../DisplayPhoto/DisplayPhoto";
import EditPhoto from "../EditPhoto/EditPhoto";

interface AddPhotoProps {
  addPhoto: (newPhoto: Photo) => void;
  photosList: Photo[];
  updatePhoto: (newPhoto: Photo) => void;
  deletePhoto: (id: number) => void;
}

const initialState = {
  photoName: "",
  description: "",
  img: "",
};

const MainPage: FC<AddPhotoProps> = ({
  addPhoto,
  photosList,
  updatePhoto,
  deletePhoto,
}) => {
  const [newPhoto, setNewPhoto] = useState<{
    photoName: string;
    description: string;
    img: string;
  }>(initialState);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPhoto({
      ...newPhoto,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { photoName, description, img } = newPhoto;
    if (photoName && description && img) {
      addPhoto({
        photoName,
        img,
        description,
        id: Date.now(),
      });
      console.log(newPhoto);
      setNewPhoto(initialState);
    }
  };

  const handleToogle = (index: number | null) => {
    setEditIndex(index);
  };

  return (
    <div className="mainBox">
      <div className="form__wrap">
        {!editIndex ? (
          <form onSubmit={handleSubmit}>
            <div className="form__box">
              <h2>Add new photo</h2>
              <input
                name="photoName"
                type="text"
                onChange={handleChange}
                value={newPhoto.photoName}
                placeholder="photo name"
              />
              <input
                name="description"
                type="text"
                onChange={handleChange}
                placeholder="photo description"
                value={newPhoto.description}
              />
              <input
                name="img"
                type="text"
                onChange={handleChange}
                placeholder="image"
                value={newPhoto.img}
              />
              <button type="submit">
                Add Photo <IoAddCircleOutline />
              </button>
            </div>
          </form>
        ) : null}

        {editIndex ? (
          <EditPhoto
            data={photosList[editIndex]}
            updatePhoto={updatePhoto}
            handleToogle={() => setEditIndex(null)}
          />
        ) : null}
      </div>

      <h2>Galery</h2>
      <div className="photo__block">
        <DisplayPhoto
          deletePhoto={deletePhoto}
          photosList={photosList}
          handleToogle={handleToogle}
        />
      </div>
    </div>
  );
};

export default MainPage;
