//@flow
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App(): React$Element<"div"> {
  const [image, setImage] = useState("");
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const getImage = async () => {
    await axios(
      `https://jsonplaceholder.typicode.com/photos/${randomNumber(1, 4998)}`
    ).then((response) => setImage(response.data.thumbnailUrl));
  };
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="logo" />
        <button onClick={() => getImage()}>Get Image</button>
      </header>
    </div>
  );
}

export default App;
