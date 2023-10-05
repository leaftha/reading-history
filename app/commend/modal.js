import Comment from './comment';
import classes from './modal.module.css';

export default function Modal({ item, setModal, session }) {
    const closeModel = () => {
        setModal(false);
    };

    console.log(item);

    return (
        <div className={classes.modal}>
            <div className={classes.main}>
                <button onClick={closeModel}>X</button>
                <img src={item.cover} alt="coverImg" />
                <p>{item.title}</p>
                <p>{item.author}</p>
                <p>{item.categoryName}</p>
                <p>{item.description}</p>
                <Comment session={session} id={item.itemId} />
            </div>
        </div>
    );
}
