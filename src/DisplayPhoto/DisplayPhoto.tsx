import React, { FC } from 'react';
import Photo from '../models/Photo';
import SinglePhoto from '../SinglePhoto/SinglePhoto';
import './Display.css';

interface DisplayPhotoProps {
    photosList: Photo[];
    handleToogle: (index: number | null) => void;
    deletePhoto: (id: number) => void;
}

const DisplayPhoto: FC<DisplayPhotoProps> = ({ photosList, handleToogle, deletePhoto }) => {
    return (
        <div className='container'>
        {photosList.map((photo) => {
                return <SinglePhoto
                handleToogle={handleToogle}
                deletePhoto={deletePhoto}
                photo={photo}
                key={photo.id}
            />
            })} 
        </div>
    );
};

export default DisplayPhoto;
