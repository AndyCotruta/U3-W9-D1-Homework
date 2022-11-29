import { useState } from "react";

const InputFields = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageSize = { width, height };
    console.log(imageSize);
    fetch();
  };
  return (
    <div className="pick-size">
      <h2>Pick image size</h2>
      <form onSubmit={handleSubmit} className="form-area">
        <div className="pick">
          <label>Width</label>
          <input
            type="number"
            required
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
        <div className="pick">
          <label>Height</label>
          <input
            type="number"
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button className="size-btn">Change size!</button>
      </form>
    </div>
  );
};

export default InputFields;
