import axios from "axios";

export default async function Commend() {
  try {
    //응답 성공
    const response = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbvltpcks1846001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901"
    );
    JSON.parse(response.data);
    console.log(response.data);
  } catch (error) {
    //응답 실패
    console.error("error");
  }
  return (
    <div>
      <p>책 추천 사이트</p>
    </div>
  );
}
