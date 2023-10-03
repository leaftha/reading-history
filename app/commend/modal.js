export default function Modal({ item }) {
  console.log(item);

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.author}</p>
      <p>{item.categoryName}</p>
      <p>{item.description}</p>
    </div>
  );
}
