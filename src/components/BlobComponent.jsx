import { useState } from "react";

const BlobComponent = () => {
  const [blobStyle] = useState({ left: "50%", top: "50%" });

  return (
    <>
      <div id="blob" style={blobStyle}></div>
      <div id="blur"></div>
    </>
  );
};

export default BlobComponent;
