//@flow
import React from "react";
type Props = {
  image: string,
  getImage: () => Promise<any>,
};
const ImageDisplay = (props: Props): React$Element<"div"> => {
  return (
    <div>
      <img src={props.image} alt="logo" />
      <button onClick={() => props.getImage()}>Get Image</button>
    </div>
  );
};

export default ImageDisplay;
