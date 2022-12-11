import { useState } from "react";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});

export default function Result() {
  const openai = new OpenAIApi(configuration);
  const [result, setResult] = useState("");
  console.log(result);
  openai
    .createCompletion({
      model: "text-davinci-003",
      prompt:
        "# Generate a good clothing and accessories based on user details\nGender:Female\nAge Group:18-24\nSkin Color:Fair\nBody Type:slim\nOcassion:Family Gathering",
      temperature: 0.4,
      max_tokens: 80,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })
    .then((response) => {
      setResult(response.data.choices[0].text);
    });
  return <div>{result}</div>;
}
