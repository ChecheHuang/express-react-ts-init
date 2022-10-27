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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const initSlice_1 = require("../redux/initSlice");
const hooks_1 = require("../redux/hooks");
const APIRoutes_1 = require("../utils/APIRoutes");
function Page1() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const init = (0, hooks_1.useAppSelector)((state) => state.init);
    console.log('init', init);
    console.log('sampleApi', APIRoutes_1.sampleApi);
    (0, react_1.useEffect)(() => {
        dispatch((0, initSlice_1.updateStart)());
        dispatch((0, initSlice_1.updateSuccess)({ test2: 'test2' }));
        dispatch((0, initSlice_1.updateError)());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <div>Page1</div>;
}
exports.default = Page1;
