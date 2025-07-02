import { useState } from 'react';

function App() {
  const [color, setColor] = useState('#0f172a');

  return (
    <div
      className="w-full h-screen duration-150"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white/10 backdrop-blur shadow-lg rounded-lg p-3">
          <button
            className="outline-none px-4 py-1 rounded-full bg-red-600 text-white shadow-lg"
            onClick={() => setColor('#dc2626')}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-green-600 text-white shadow-lg"
            onClick={() => setColor('#16a34a')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full bg-blue-600 text-white shadow-lg"
            onClick={() => setColor('#2563eb')}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
