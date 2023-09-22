export default function Form() {
  return (
    <form method="POST" action="/api/post/taste">
      <select>
        <option key="novel" value="novel">
          순 문학
        </option>
        <option key="science" value="science">
          과학
        </option>
        <option key="romance" value="romance">
          로맨스
        </option>
        <option key="essay" value="essay">
          수필
        </option>
        <option key="self developmental" value="self developmental">
          자기개발
        </option>
        <option key="poetry" value="poetry">
          시
        </option>
      </select>
      <button type="submit">추가</button>
    </form>
  );
}
