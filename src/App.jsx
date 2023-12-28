import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000");
  console.log(color);
  return (
    <>
      <div className="border-2 border-cyan-500 flex gap-5 rounded mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 lg:my-20 p-5">
        <textarea
          style={{ fontSize: `${fontSize}px`, color:`${color}` }}
          className="border border-gray-700 rounded w-5/6 min-h-48 md:min-h-96 p-5"
          name="message"
          id="message"
          placeholder="New Text ..."
        ></textarea>
        <div className="w-1/6 border border-gray-700 p-4 rounded">
          <div className="flex gap-8">
            <div>
              <label htmlFor="font_size">Font Size</label>
              <input
                className="w-12 border"
                id="font_size"
                type="number"
                onChange={(e) => setFontSize(e.target.value)}
                defaultValue={fontSize}
                min={1}
              />
            </div>
            <div>
              <label htmlFor="color">Color</label>
              <input
                type="color"
                id="color"
                onChange={(e) => setColor(e.target.value)}
                defaultValue={color}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
