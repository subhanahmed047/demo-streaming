import React, { useState } from 'react';

const Icon = ({ src, hoverSrc }) => {
  const [img, setImg] = useState(src);
  return (
    <img
      src={img}
      onMouseOver={() => hoverSrc && setImg(hoverSrc)}
      onMouseOut={() => hoverSrc && setImg(src)}
    />
  );
};

export default Icon;
