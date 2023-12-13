import React, {FC} from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./SinglePhoto.css";

const SinglePhoto: FC = () => {
  return (
    <div className="wrap">
      <div>
        <img src='images/photo1.jpg' alt="photo"/>
      </div>
      <div className="btn">
        <FaUserEdit onClick={()=>{}} />
        <MdDelete />
      </div>
    </div>
  );
};

export default SinglePhoto;
