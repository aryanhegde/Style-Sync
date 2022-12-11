import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default function MuiForm() {
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [skinTone, setSkinTone] = React.useState("");
  const [bodyType, setBodyType] = React.useState("");
  const [ocassion, setOcassion] = React.useState("");
  const [results, setResults] = React.useState([]);

  return (
    <div className="bg-slate-50">
      <p className="text-md font-semibold pt-8 text-center text-slate-600">
        Please fill in the details below
      </p>
      <div className="flex flex-col lg:flex-row justify-center m-6 py-8 px-2">
        {/* Gender */}
        <div className="px-2 py-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(event) => {
                  setGender(event.target.value);
                  console.log(gender);
                }}
              >
                <MenuItem value={`male`}>Male</MenuItem>
                <MenuItem value={`female`}>Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* AGE */}
        <div className="px-2 py-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(event) => {
                  setAge(event.target.value);
                  console.log(age);
                }}
              >
                <MenuItem value={`11 - 17`}>11-17</MenuItem>
                <MenuItem value={`18 - 24`}>18-24</MenuItem>
                <MenuItem value={`25 - 34`}>25-34</MenuItem>
                <MenuItem value={`35 - 44`}>35-44</MenuItem>
                <MenuItem value={`45 - 54`}>45-54</MenuItem>
                <MenuItem value={`55 - 64`}>55-64</MenuItem>
                <MenuItem value={`65+`}>65+</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* Skin Tone */}
        <div className="px-2 py-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Skin Tone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={skinTone}
                label="Gender"
                onChange={(event) => {
                  setSkinTone(event.target.value);
                  console.log(skinTone);
                }}
              >
                <MenuItem value={`light`}>Light</MenuItem>
                <MenuItem value={`medium`}>Medium</MenuItem>
                <MenuItem value={`dark`}>Dark</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* BODY TYPE */}
        <div className="px-2 py-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Body Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bodyType}
                label="Body Type"
                onChange={(event) => {
                  console.log(bodyType);
                  setBodyType(event.target.value);
                }}
              >
                <MenuItem value={`skinny`}>Skinny</MenuItem>
                <MenuItem value={`Athletic`}>Athletic</MenuItem>
                <MenuItem value={`medium`}>Medium</MenuItem>
                <MenuItem value={`fat`}>Fat</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        {/* OCCASION */}
        <div className="px-2 py-2">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occasion</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={ocassion}
                label="Occasion"
                onChange={(event) => {
                  setOcassion(event.target.value);
                  console.log(ocassion);
                }}
              >
                <MenuItem value={`meeting`}>Meeting</MenuItem>
                <MenuItem value={`formal`}>Formal</MenuItem>
                <MenuItem value={`family`}>Family</MenuItem>
                <MenuItem value={`date`}>Date</MenuItem>
                <MenuItem value={`holiday`}>Holidays</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className="bg-gray-100 h-2/3">
        <h1 className="text-xl uppercase font-semibold items-center text-center text-slate-600 p-4">
          Results
        </h1>
        <div className="inset-y-0 right-0 flex justify-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            onClick={() => {
              openai
                .createCompletion({
                  model: "text-davinci-003",
                  prompt: `# Generate simple understandable (without texts like for this ocassion)  good clothing and accessories based on user details\nGender:${gender}\nAge:${age}\nSkin Color:${skinTone}\nBody Type:${bodyType}\nOcassion:${ocassion}`,
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
          className="flex flex-col text-md text-black font-medium p-4 mt-8"
          id="results"
        >
          {results.map((result) => (
            <div className="bg-slate-200 my-4 mx-6">
              <div className="p-2 m-4 flex  gap-2">
                {result}
                {/* <p
                  className="text-sm p-4 md:p-2 max-w-full md:max-w-40 shadow-md hover:shadow-xl text-blue-600 uppercase flex justify-center items-center cursor-pointer border-lined text-center border-2 border-indigo-400"
                  onClick={() => {
                    openai.createImage({
                      prompt: { result },
                      n: 2,
                      size: "512x512",
                    })
                    .then((response))
                  }}
                >
                  Generate Image
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
