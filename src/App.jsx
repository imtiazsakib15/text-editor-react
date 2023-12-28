import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(12);
  console.log(fontSize);
  return (
    <>
      <div className="border-2 border-cyan-500 flex gap-5 rounded mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-12 sm:my-16 lg:my-20 p-5">
        <textarea
          className={`border border-gray-700 w-5/6 text-[${fontSize}px]`}
          name="message"
          id="message"
          rows="10"
          placeholder="New Text ..."
        ></textarea>
        <div className="w-1/6 border border-gray-700 p-4">
          <div>
            <input
              type="number"
              onChange={(e) => setFontSize(e.target.value)}
              defaultValue={fontSize}
              min={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
