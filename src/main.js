import React from 'react';
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import { render } from "react-dom";

import { Test } from "./Test";

render(<Test />, document.getElementById("reactapp"));
