import axios from "axios";

export default async function handler(req, res) {
  try {
    let category = 1;
    if (req.query.category === "소설/시/희곡") {
      category = 1;
    } else if (req.query.category === "과학") {
      category = 987;
    } else if (req.query.category === "경제") {
      category = 170;
    } else if (req.query.category === "고전") {
      category = 2105;
    } else if (req.query.category === "사회과학") {
      category = 798;
    } else if (req.query.category === "자기개발") {
      category = 336;
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
