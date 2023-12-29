import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [color, setColor] = useState("#000");
  const [font, setFont] = useState("'Roboto', sans-serif");
  console.log(font);
  return (
    <>
      <div className="border-2 border-cyan-500 flex flex-col-reverse sm:flex-row gap-5 rounded mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 lg:my-20 p-5">
        <textarea
          style={{
            fontSize: `${fontSize}px`,
            color: `${color}`,
            fontFamily: `${font}`,
          }}
          className="border border-gray-700 rounded flex-1 min-h-48 md:min-h-96 p-5"
          name="message"
          id="message"
          placeholder="New Text ..."
        ></textarea>
        <div className="w-full sm:w-48 border border-gray-700 p-4 rounded space-y-4">
          <div>
            <label htmlFor="font">Font</label>
            <select
              onChange={(e) => setFont(e.target.value)}
              className="border border-gray-700"
              name="font"
              id="font"
            >
              <option value="">Choose a font</option>
              <option value="'Roboto', sans-serif">Roboto</option>
              <option value="'Lato', sans-serif">Lato</option>
              <option value="'Manrope', sans-serif">Manrope</option>
              <option value="'Oswald', sans-serif">Oswald</option>
              <option value="'PT Serif', serif">PT Serif</option>
              <option value="'Raleway', sans-serif"></option>
            </select>
          </div>
          <div className="flex gap-5">
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
