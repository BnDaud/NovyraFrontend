import { useState } from "react";
import Sidenav from "./component/sidenav";

function App() {
  return (
    <>
      <div className="relative">
        <Sidenav />
        {/*  <div className="absolute top-0 left-0">
          {" "}
          Other components will be here
        </div>*/}
      </div>
    </>
  );
}

export default App;
