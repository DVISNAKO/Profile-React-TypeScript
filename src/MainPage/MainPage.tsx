import React, { ChangeEvent, FormEvent, useState, FC } from "react";
import "./Main.Page.css";
import { GrEdit } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import SinglePhoto from "../SinglePhoto/SinglePhoto";
import Photo from "../models/Photo";
import DisplayPhoto from "../DisplayPhoto/DisplayPhoto";

interface AddPhotoProps {
    addPhoto: (newPhoto: Photo) => void;
    photosList: Photo[]
}

const initialState = {
  photoName: "",
  description: "",
  img: "",
};

const MainPage: FC<AddPhotoProps> = ({addPhoto, photosList}) => {
  const [newPhoto, setNewPhoto] = useState<{
    photoName: string;
    description: string;
    img: string;
  }>(initialState);

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
      });  console.log(newPhoto);
      setNewPhoto(initialState);
    }
  };


  return (
    <div className="mainBox">
      <div className="form__wrap">
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

        {/* {edit ? (
          <form onSubmit={() => {}}>
            <div className="form__box">
              <h2>Change photo</h2>
              <input
                name="photoName"
                type="text"
                onChange={() => {}}
                // value={}
                placeholder="photo name"
              />
              <input
                name="description"
                type="text"
                onChange={() => {}}
                placeholder="photo description"
                // value={}
              />
              <input
                name="img"
                type="text"
                onChange={() => {}}
                placeholder="image"
                // value={}
              />
              <button style={{ background: "grey" }}>
                Edit Photo <GrEdit />
              </button>
            </div>
          </form>
        ) : null} */}
      </div>

      <h2>Galery</h2>
      <div className="photo__block">
        <DisplayPhoto photosList={photosList}/>
      </div>
    </div>
  );
};

export default MainPage;
