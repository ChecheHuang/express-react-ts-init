"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./app.scss");
const Page1_1 = __importDefault(require("./page/Page1"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<div className="App">index</div>}/>
        <react_router_dom_1.Route path="page1" element={<Page1_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
