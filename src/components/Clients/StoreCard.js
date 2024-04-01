import { rgbToHex } from "@mui/material";
import React from "react";

function StoreCard(props) {
  const {
    storeName,
    mng,
    address,
    active,
    onClickEdit,
    onClickDelete,
    onClickView,
  } = props;
  return (
    <div className="card border-success" style={{ backgroundColor: '#29B363' }}> 
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mt-5">
          <div className="lesson_name">
            <span
              className="project_name fw-bold text-white"
              style={{ fontSize: 30 }}
            >
              A joke day keeps the doctor away
            </span>
          </div>

        </div>
        <div className="center mt-4 ">
            <small className="centered-div text-white ">
              if you joke wrong way, your teeth have to pay. (serious)
            </small>
          </div>
      </div>
    </div>
  );
}

export default StoreCard;
