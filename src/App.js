//@flow
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImageDisplay from "./components/ImageDisplay";

function App(): React$Element<"div"> {
  const [image, setImage] = useState("");
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const getImage = async () =>
    await axios(
      `https://jsonplaceholder.typicode.com/photos/${randomNumber(1, 4998)}`
    ).then((response) => setImage(response.data.thumbnailUrl));
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="App">
      <ImageDisplay getImage={getImage} image={image} />
    </div>
  );
}

export default App;
