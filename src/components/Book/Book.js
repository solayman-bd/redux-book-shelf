import React from "react";
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  addToFinishedList,
  addToReadingList,
  removeFromReadingList,
} from "../../redux/bookManagement/bookAction";

import styles from "./book.module.css";
const SingleBook = (props) => {
  const shouldPlusSignShown = props.indicator;
  const dispatch = useDispatch();
  const { title, author, coverImageUrl, synopsis } = props.book;

  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {/* <HiMinusCircle title="Remove from list" className={styles.minus_icon} /> */}
        {shouldPlusSignShown === "1" ? (
          <HiPlusCircle
            title="Add to Reading"
            onClick={() => dispatch(addToReadingList(props.book))}
            className={styles.plus_icon}
          />
        ) : shouldPlusSignShown === "2" ? (
          <div>
            (
            <HiMinusCircle
              title="Remove from list"
              className={styles.minus_icon}
              onClick={() => dispatch(removeFromReadingList(props.book))}
            />
            <br />
            <HiCheckCircle
              title="Mark as Finish"
              className={styles.check_icon}
              onClick={() => {
                return (
                  dispatch(removeFromReadingList(props.book)),
                  dispatch(addToFinishedList(props.book))
                );
              }}
            />
            )
          </div>
        ) : null}

        {/* <HiCheckCircle title="Mark as Finish" className={styles.check_icon} /> */}
      </div>
    </div>
  );
};

export default SingleBook;
