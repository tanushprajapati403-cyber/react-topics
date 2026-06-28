import React, { useRef } from "react";

const App = () => {
  let Formref = useRef({});

  let handelSubmit = (e) => {
    e.preventDefault();
    let { name, email, password } = Formref.current;
    let data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handelSubmit} action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            ref={(e) => (Formref.current.name = e)}
            id="name"
            type="name"
            placeholder="name"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            ref={(e) => (Formref.current.email = e)}
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            ref={(e) => (Formref.current.password = e)}
            id="password"
            type="password"
            placeholder="password"
          />
        </div>
        <button>Sbubmit</button>
      </form>
    </div>
  );
};

export default App;
