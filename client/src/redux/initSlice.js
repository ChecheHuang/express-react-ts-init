"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateError = exports.updateSuccess = exports.updateStart = exports.initSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    info: {
        test: '',
    },
    pending: null,
    error: false,
};
exports.initSlice = (0, toolkit_1.createSlice)({
    name: 'init',
    initialState,
    reducers: {
        updateStart(state) {
            state.pending = true;
        },
        updateSuccess(state, action) {
            state.pending = false;
            state.info = Object.assign(Object.assign({}, state.info), action.payload);
        },
        updateError(state) {
            state.error = true;
            state.pending = false;
        },
    },
});
_a = exports.initSlice.actions, exports.updateStart = _a.updateStart, exports.updateSuccess = _a.updateSuccess, exports.updateError = _a.updateError;
exports.default = exports.initSlice.reducer;
