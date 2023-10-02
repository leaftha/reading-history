import axios from "axios";

export default async function handler(req, res) {
  try {
    const q = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbvltpcks1846001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901"
    );

    //db 데이터
    const a = q.data;

    //json 악성 예외 처리
    const c = a.replaceAll(`\\'`, "");
    const d = c.replaceAll(`;`, "");

    //json 파싱
    const b = JSON.parse(d);
    res.status(200).json(b);
  } catch (err) {
    console.log(err);
  }
}
