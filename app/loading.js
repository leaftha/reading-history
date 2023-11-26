import claases from "./loading.module.css";

export default function Loading() {
  return (
    <div className={claases.container}>
      <span className={claases.loader}></span>
    </div>
  );
}
