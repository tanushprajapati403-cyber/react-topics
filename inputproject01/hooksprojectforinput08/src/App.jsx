import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ProductCard from "./Components/ProductCard";

function App() {
  let [toggle, SetToggle] = useState(false);

  let [employee, setEmployee] = useState([]);

  let [isedited, setIsedited] = useState(null);

  let deletecard = (emp_email) => {
    let card = employee.filter((elem) => elem.emp_email !== emp_email);
    setEmployee(card);
  };

  return (
    <div className="min-h-screen p-4">
      <Navbar Settoggle={SetToggle} toggle={toggle} />
      <div className=" h-[90%] px-12 py-4 rounded-3xl">
        {toggle ? (
          <div className="h-full flex items-center justify-center mt-10">
            <Form
              setEmployee={setEmployee}
              employee={employee}
              Settoggle={SetToggle}
              isedited={isedited}
            />
          </div>
        ) : (
          <div className="h-full flex flex-wrap p-5 gap-25">
            {employee.map((data, index) => {
              return (
                <ProductCard
                  key={index}
                  data={data}
                  SetToggle={SetToggle}
                  setIsedited={setIsedited}
                  deletecard={deletecard}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
