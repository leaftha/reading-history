import classes from "./page.module.css";

export default function Register() {
  return (
    <div className={classes.main}>
      <form className={classes.form} method="POST" action="/api/auth/signup">
        <input
          className={classes.input}
          name="name"
          type="text"
          placeholder="이름"
        />
        <input
          className={classes.input}
          name="email"
          type="text"
          placeholder="이메일"
        />
        <input
          className={classes.input}
          name="password"
          type="password"
          placeholder="비번"
        />
        <button className={classes.btn} type="submit">
          id/pw 가입요청
        </button>
      </form>
    </div>
  );
}
