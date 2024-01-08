import { useEffect, useState } from "react";

const App = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchdatas();
  }, []);

  const fetchdatas = async () => {
    const respone = await fetch("https://api.pokemontcg.io/v2/cards", {
      headers: {
        "X-Api-Key": "517542de-22c9-426b-9b1d-4e9b3765f9ed",
      },
    });
    const responseJson = await respone.json();
    console.log("hello", responseJson);
    setDatas(responseJson.data);
  };

  return (
    <div className="text-primary">
      <div>
        {datas.map((data: any) => {
          return (
            <div key={data.id}>
              <img src={data.images.large} alt={data.code} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
