import axios from "axios";

export default async function handler(req, res) {
  try {
    let category = 8560;
    if (req.query.category === "과학") {
      category = 2105;
    }
    const q = await axios.get(
      `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.ALADIN_OPENAPI_KEY}&QueryType=Bestseller&MaxResults=20&start=1&SearchTarget=Book&CategoryId=${category}&output=js&Version=20131101`
    );

    //db 데이터
    const a = q.data;
    res.status(200).json(a);
  } catch (err) {
    console.log(err);
  }
}
