import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from "react-dom/client"
import App from "./App";
const myApp = document.getElementById("root");
const root = createRoot(myApp);
root.render(<App/>);
