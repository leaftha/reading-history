import Comment from "./comment";
import classes from "./modal.module.css";

export default function Modal({ item, setModal, session }) {
  const closeModel = () => {
    setModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className={classes.modal}>
      <div className={classes.main}>
        <button className={classes.close} onClick={closeModel}>
          X
        </button>
        <img className={classes.img} src={item.cover} alt="coverImg" />
        <div className={classes.content}>
          <h1 className={classes.title}>{item.title}</h1>
          <p className={classes.author}>{item.author}</p>
          <p className={classes.category}>{item.categoryName}</p>
          <p className={classes.description}>{item.description}</p>
          <Comment session={session} id={item.itemId} />
        </div>
      </div>
    </div>
  );
}
