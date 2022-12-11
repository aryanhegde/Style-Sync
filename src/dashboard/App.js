import React, { useState } from "react";

import GenderForm from "./forms/GenderForm";
import AgeGroupForm from "./forms/AgeGroupForm";
import SkinColor from "./forms/SkinColor";
import Ocassion from "./forms/OccasionForm";
import BodyType from "./forms/BodyType";
import Form from "./forms/Form";

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
      <h1 className="text-3xl font-bold pt-8 text-center">
        Your Personal Virtual Stylist
      </h1>
      {/* <div className="flex  flex-col">
        <div className="pt-8 flex justify-start items-center">
          <p className="text-slate-700 px-4">Select Your Gender:</p>
        </div>
        <GenderForm />
        <div className="pt-8 flex justify-start items-center">
          <p className="text-slate-700 px-4">Select Your Age Group:</p>
        </div>
        <AgeGroupForm />
        <div className="pt-8 flex justify-start items-center">
          <p className="text-slate-700 px-4">Select Your Skin Color:</p>
        </div>
        <SkinColor />
      </div>
      <div className="pt-8 flex justify-start items-center">
        <p className="text-slate-700 px-4">Select Your Ocassion:</p>
      </div>
      <Ocassion />
      <div className="pt-8 flex justify-start items-center">
        <p className="text-slate-700 px-4">Select Your Body Type:</p>
      </div>
      <BodyType /> */}

      <Form />

      {/* <div className="bg-gray-900 m-12">
        <h1 className="text-xl text-center text-white p-4">Results:</h1>
        <div className="absolute inset-y-0 right-0 flex justify-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            onClick={() => {
              openai
                .createCompletion({
                  model: "text-davinci-003",
                  prompt:
                    "# Generate a good clothing and accessories based on user details\nGender:male\nAge:17\nSkin Color:brown\nBody Type:slim\nOcassion:Trip to Hillside",
                  temperature: 0.41,
                  max_tokens: 120,
                  top_p: 1,
                  frequency_penalty: 0.5,
                  presence_penalty: 0,
                })
                .then((response) => {
                  // Use the response object here
                  setResults([...results, response.data.choices[0].text]);
                });
            }}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate
          </button>
        </div>
        <div
          className="flex flex-col text-lg text-white font-medium p-4 mt-8"
          id="results"
        >
          {results.map((result) => (
            <p>{result}</p>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default App;
