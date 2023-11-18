import React from "react";

const formatDate = (fiveMinutes: any) => {
  const getminutes = fiveMinutes.getMinutes();
  const getseconds = fiveMinutes.getSeconds();
  const getmilliseconds = fiveMinutes.getMilliseconds();
  const paddedSeconds = getseconds.toString().padStart(2, "0");
  const padMilliseconds = getmilliseconds.toString().padStart(2, "0");
  return `${getminutes}:${paddedSeconds}:${padMilliseconds}`;
};

const App = () => {
  const fiveMinutes = new Date(0, 0, 0, 0, 5, 0, 0);

  return (
    <>
      <div className="container">
        <h1>{formatDate(fiveMinutes)}</h1>
        <div className="btn-container">
          <button>Start</button>
          <button>Pause</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
