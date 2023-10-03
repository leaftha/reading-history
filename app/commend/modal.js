import Comment from "./comment";

export default function Modal({ item, setModal }) {
  const closeModel = () => {
    setModal(false);
  };

  // console.log(item);

  return (
    <div>
      <button onClick={closeModel}>X</button>
      <p>{item.title}</p>
      <p>{item.author}</p>
      <p>{item.categoryName}</p>
      <p>{item.description}</p>
      <Comment id={item.itemId} />
    </div>
  );
}
