import React, { useState } from "react";

import MuiForm from "./forms/MuiForm";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
console.log(configuration.apiKey);
const openai = new OpenAIApi(configuration);

const App = () => {
  const [results, setResults] = useState([]);
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl font-bold py-8 text-center">
        Your Personal Virtual Stylist
      </h1>

      <MuiForm />
    </div>
  );
};

export default App;
