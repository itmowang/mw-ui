import React from "react";
import ReactDOM from "react-dom/client";
import { Icon, Modal } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div className="main">
    <Modal isOpen={true} onClose={function (): void {}}>
      2234
    </Modal>
    <Icon icon="bedtime" onClick={() => {}} />
  </div>
);
