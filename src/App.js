import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [album, setalbum] = useState([]);
  const getalbum = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        console.log(response.data);
        setalbum(response.data);
      });
  };
  useEffect(() => {
    getalbum();
  }, [setalbum]);

  return (
    <>
      {album.map((s) => (
        <Home key={s.id} id={s.id} title={s.title} />
      ))}
    </>
  );
}

export default App;
