import React, { useState } from "react";

const Colormixer = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const saveColor=()=>{
    localStorage.setItem("color",JSON.stringify({r,g,b}))
    console.log("Saved")
  }
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Color Mixer</h1>
        {/* state ko style ke andar ad krne ke ley dono side `rgb(${r}, ${g}, ${b})` */}
        <div
          style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            height: 200,
            width: 200,
          }}
        ></div>

        <input
          type="range"
          value={r}
          onChange={(e) => setR(e.target.value)}
          min={0}
          max={255}
        />
        <label htmlFor="">Red</label>
        <br />
        <input
          value={g}
          onChange={(e) => setG(e.target.value)}
          type="range"
          min={0}
          max={255}
        />
        <label htmlFor="">Green</label>
        <br />
        <input
          value={b}
          onChange={(e) => setB(e.target.value)}
          type="range"
          min={0}
          max={255}
        />
        <label htmlFor="">Blue</label>
        <br />
        <button onClick={saveColor}>Save Color</button>
      </div>
    </>
  );
};

export default Colormixer;
