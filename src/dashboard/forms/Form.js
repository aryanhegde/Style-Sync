import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

import React from "react";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const genders = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
const ocassions = [
  { name: "Casual" },
  { name: "Business" },
  { name: "Date" },
  { name: "Family Visit" },
  { name: "Dinner" },
  { name: "Beach" },
  { name: "Mountains" },
];
const bodyTypes = [
  { name: "Slim" },
  { name: "Average" },
  { name: "Athletic" },
  { name: "Curvy" },
  { name: "Plus Size" },
];

const ageGroups = [
  { name: "18-24" },
  { name: "25-34" },
  { name: "35-44" },
  { name: "45-54" },
  { name: "55-64" },
  { name: "65+" },
];

const skinColors = [{ name: "Fair" }, { name: "Medium" }, { name: "Dark" }];

function Form() {
  const [gender, setGender] = useState(genders[0]);
  const [ageGroup, setAgeGroup] = useState(ageGroups[0]);
  const [skinColor, setSkinColor] = useState(skinColors[0]);
  const [ocassion, setOcassion] = useState(ocassions[0]);
  const [bodyType, setBodyType] = useState(bodyTypes[0]);
  const [results, setResults] = useState([]);

  return (
    <>
      {/* Gender */}
      <form className="my-8 flex flex-col">
        <div className="flex justify-center mb-2">
          <label className="block text-sm font-medium  text-gray-700">
            Gender
          </label>
          <Listbox value={gender} onChange={setGender}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{gender.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {genders.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ gender }) => (
                        <>
                          <span
                            className={`block truncate ${
                              gender ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {gender ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* Ocassion */}
        <div className="flex justify-center mb-2">
          <label className="block text-sm font-medium  text-gray-700">
            Ocassion
          </label>
          <Listbox value={ocassion} onChange={setOcassion}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{ocassion.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {ocassions.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ ocassion }) => (
                        <>
                          <span
                            className={`block truncate ${
                              ocassion ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {ocassion ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        {/* Body Type */}

        <div className="flex justify-center mb-2">
          <label className="block text-sm font-medium  text-gray-700">
            bodyType
          </label>
          <Listbox value={bodyType} onChange={setBodyType}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{bodyType.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {bodyTypes.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ bodyType }) => (
                        <>
                          <span
                            className={`block truncate ${
                              bodyType ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {bodyType ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* Age Group */}
        <div className="flex justify-center mb-2">
          <label className="block text-sm font-medium leading-5 text-gray-700">
            Age group
          </label>
          <Listbox value={ageGroup} onChange={setAgeGroup}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{ageGroup.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {ageGroups.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ ageGroup }) => (
                        <>
                          <span
                            className={`block truncate ${
                              ageGroup ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {ageGroup ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        {/* SKIN COLOR */}
        <div className="flex justify-center mb-2">
          <label className="block text-sm font-medium leading-5 text-gray-700">
            Skin color
          </label>
          <Listbox value={skinColor} onChange={setSkinColor}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{skinColor.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {skinColors.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ skinColor }) => (
                        <>
                          <span
                            className={`block truncate ${
                              skinColor ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {skinColor ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </form>
      {/* RESULT */}
      <div className="bg-gray-900 m-12">
        <h1 className="text-xl text-center text-white p-4">Results:</h1>
        <div className="absolute inset-y-0 right-0 flex justify-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            onClick={() => {
              openai
                .createCompletion({
                  model: "text-davinci-003",
                  prompt: `# Generate a good clothing and accessories based on user details\nGender:${gender.name}\nAge:${ageGroup.name}\nSkin Color:${skinColor.name}\nBody Type:${bodyType.name}\nOcassion:${ocassion.name}`,
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
            <p className="p-2 box-border border-6">{result}</p>
          ))}
        </div>
      </div>
    </>
  );
}
export default Form;
