import React, { ChangeEvent, FormEvent, FC, useState, useEffect } from 'react';
import { GrEdit } from 'react-icons/gr';
import Photo from '../models/Photo';

interface EditPhotoProps {
    handleToogle: () => void;
    updatePhoto: (newPhoto: Photo) => void;
    data: Photo;
}

const EditPhoto: FC<EditPhotoProps> = ({ handleToogle, updatePhoto, data}) => {
  const [editPhoto, setEditPhoto] = useState<Photo>(data);

  useEffect(() => {
    setEditPhoto(prevPhoto => ({ ...prevPhoto, ...data }));
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPhoto(prevPhoto => ({
      ...prevPhoto,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { photoName, description, img } = editPhoto;
    if (photoName && description && img) {
      updatePhoto({ ...editPhoto });
    }
  };


  return (
    <form key={editPhoto.id} onSubmit={handleSubmit}>
      <div className="form__box">
        <h2>Change photo</h2>
        <input
          name="photoName"
          type="text"
          onChange={handleChange}
          value={editPhoto.photoName}
          placeholder="photo name"
        />
        <input
          name="description"
          type="text"
          onChange={handleChange}
          placeholder="photo description"
          value={editPhoto.description}
        />
        <input
          name="img"
          type="text"
          onChange={handleChange}
          placeholder="image"
          value={editPhoto.img}
        />
        <button type="submit" style={{ background: 'grey' }}>
          Edit
        </button>
        <button onClick={handleToogle}>Save</button>
      </div>
    </form>
  );
};

export default EditPhoto;
