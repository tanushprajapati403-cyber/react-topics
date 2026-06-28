import React, { useState } from "react";
import Card from "./Card";

function App() {
  let [data, setData] = useState({
    Profilepicture: "",
    Name: "",
    Occupation: "",
    Info: "",
  });

  const [newdata, setNewdata] = useState([]);

  return (
    <div className="div1">
      <div className="div2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(data);
            setNewdata([...newdata, data]);
            setData({
              Profilepicture: "",
              Name: "",
              Occupation: "",
              Info: "",
            });
          }}
          action=""
        >
          <div className="inp">
            <input
            value={data.Profilepicture} 
              onChange={(e) => {
                setData({ ...data, Profilepicture: e.target.value });
              }}
              type="text"
              placeholder="Profile picture link"
            />

            <input
             value={data.Name}
              onChange={(e) => {
                setData({ ...data, Name: e.target.value });
              }}
              type="text"
              placeholder="Name"
            />

            <input
             value={data.Occupation}
              onChange={(e) => {
                setData({ ...data, Occupation: e.target.value });
              }}
              type="text"
              placeholder="Occupation"
            />

            <input
             value={data.Info}
              onChange={(e) => {
                setData({ ...data, Info: e.target.value });
              }}
              type="text"
              placeholder="Info"
            />
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>

      <div className="div3">
        {newdata.map((e) => {
        return  <Card card={e} />;
        })}
      </div>
    </div>
  );
}

export default App;
