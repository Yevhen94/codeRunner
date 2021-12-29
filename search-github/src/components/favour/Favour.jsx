import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFavourList } from "../../reducer/reposReduser";
import styles from "./favour.module.scss";

const Favour = ({ modalShow, showFavModal }) => {
  const dispatch = useDispatch();
  const favourList = useSelector((state) => state.repos.favourList);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.keyCode === 27) {
        e.preventDefault();
        showFavModal(false);
      }
    };
    window.addEventListener("keydown", (e) => closeModal(e));
  });

  const deleteItem = (index) => {
    let firstPart = favourList.slice(0, index);
    let secondPart = favourList.slice(index + 1);
    let result = firstPart.concat(secondPart);
    dispatch(changeFavourList(result));
  };

  return (
    <>
      <div
        className={
          modalShow ? `${styles.favour} ${styles.open}` : styles.favour
        }
        onMouseDown={() => showFavModal(false)}
      >
        <div
          className={styles["favour__wrapper"]}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className={styles.close} onClick={() => showFavModal(false)}>
            <svg className="icon icon-close">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
          <div className={styles["favour__title"]}>
            <h3 className={styles.title}>Favourites repo</h3>
            <span
              className={styles.clear}
              onClick={() => dispatch(changeFavourList([]))}
            >
              Clear favourites list
            </span>
          </div>
          <div className={styles["favour__content"]}>
            {favourList.length > 0 ? (
              favourList.map((item, index) => (
                <div className={styles.favItem} key={Date.now() + index}>
                  <div
                    className={styles.deleteItem}
                    onClick={() => deleteItem(index)}
                  >
                    <svg className="icon icon-close icon-close--item">
                      <use xlinkHref="#icon-close"></use>
                    </svg>
                  </div>
                  <div className={styles["favItem__photo"]}>
                    <img src={item.photo} alt="avatar" className="img" />
                  </div>
                  <div className={styles["favItem__title"]}>
                    <span className={styles["favItem__text"]}>Repo Name:</span>
                    <span className={styles["favItem__text"]}>
                      {item.title}
                    </span>
                  </div>
                  <div className={styles["favItem__score"]}>
                    <span className={styles["favItem__text"]}>Repo score:</span>
                    <span className={styles["favItem__text"]}>
                      {item.score}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.empty}>
                <span>Fauvorites list is clear now</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favour;
