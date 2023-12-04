"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./App"));
var Loader_1 = __importDefault(require("components/Loader"));
var HomePage_1 = __importDefault(require("route/HomePage"));
var rootElement = document.getElementById('root');
if (rootElement) {
    var root = client_1.default.createRoot(rootElement);
    root.render(react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement(Loader_1.default, null) },
            react_1.default.createElement(App_1.default, null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/", component: HomePage_1.default, exact: true }))))));
}
else {
    console.error("Root element with id 'root' not found.");
}
