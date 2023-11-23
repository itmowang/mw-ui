import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="main">
    <Button type="warning">Button</Button>
  </div>
);
