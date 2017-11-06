import React from "react";
import ReactDOM from "react-dom";

import Clarifications from "../components/Clarifications";
import Documents from "../components/Documents";
import Header from "../components/Header";

const {
  __CLARIFICATIONS__: clarifications,
  __CLARIFICATION_TYPES__: clarificationTypes,
  __DOCUMENTS__: documents
} = window;

ReactDOM.render(
  <Clarifications
    clarifications={clarifications}
    types={clarificationTypes}
    limit={4}
  />,
  document.getElementById("explain")
);

ReactDOM.render(
  <Documents documents={documents} />,
  document.getElementById("documents")
);

ReactDOM.render(
  <Header />,
  document.getElementById("header")
);
