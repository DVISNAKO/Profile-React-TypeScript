import React, { FC } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./SinglePhoto.css";
import Photo from "../models/Photo";

interface SinglePhotoPorps {
  photo: Photo;
  deletePhoto: (id: number) => void;
  handleToogle: (index: number | null) => void;
}

const SinglePhoto: FC<SinglePhotoPorps> = ({photo, deletePhoto, handleToogle}) => {
  const handleDelete = () => {
    deletePhoto(photo.id);
  };

  return (
    <div className="wrap">
       <div>
        <img src={`/images/${photo.img}`} alt={photo.photoName} />
      </div>
      <div className="btn">
        <FaUserEdit onClick={() => {}} />
        <MdDelete onClick={handleDelete} />
      </div>
      <div className="info">Name: {photo.photoName}</div>
      <div className="info">Description: {photo.description}</div> 
      
    </div>
  );
};

export default SinglePhoto;
