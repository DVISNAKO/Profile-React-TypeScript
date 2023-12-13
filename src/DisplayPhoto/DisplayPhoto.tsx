import React, {FC} from 'react';
import Photo from '../models/Photo';
import SinglePhoto from '../SinglePhoto/SinglePhoto';

interface DisplayPhotoProps {
    photosList: Photo[];
}

const DisplayPhoto: FC<DisplayPhotoProps> = ({photosList}) => {
    return (
        <div className='container'>
            {photosList.map((photo) => {
                return <SinglePhoto
                key={photo.id}
                />
            })}
        </div>
    );
};

export default DisplayPhoto;