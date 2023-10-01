import axios from "axios";

export default async function handler(req, res) {
  try {
    const q = await axios.get(
      "http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbvltpcks1846001&Query=aladdin&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901"
    );
    const a = q.data;
    const c = a.replaceAll(`\\'`, "");
    const d = c.replaceAll(`;`, "");
    const b = JSON.parse(d);
    res.status(200).json(b);
  } catch (err) {
    console.log(err);
  }
}
