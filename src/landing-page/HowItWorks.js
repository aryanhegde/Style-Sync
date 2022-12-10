import React from "react";

const HowItWorks = () => {
  return (
    <div class="bg-slate-50" id="hiw">
      <div
        class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
        data-content="how-it-works"
      >
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p class="inline-block mb-2 text-base font-semibold tracking-wider text-blue-600 uppercase rounded-full secondary_text editable">
              How it works
            </p>
          </div>
          <h2
            class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto primary_text editable"
            data-content="website-headlines"
          >
            StyleSync: Your AI Stylist
          </h2>
          <p
            class="text-base text-gray-600 md:text-lg secondary_text editable"
            data-content="website-subheadlines"
          >
            Get a personalized style by asking StyleSync for recommendations.
          </p>
        </div>
        <div class="grid gap-8 row-gap-0 lg:grid-cols-3">
          <div class="relative text-center" data-subcontent="step_1">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
              <svg
                class="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6
              class="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
              data-subcontent="step-title"
            >
              Enter few details about yourself
            </h6>
            <p
              class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
              data-subcontent="step-content"
            >
              Answer questions about your gender, age group, skin tone color,
              body type and ocassion.
            </p>

            <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                class="w-8 text-blue-200 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  stroke-miterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                ></line>
                <polyline
                  fill="none"
                  stroke-miterlimit="10"
                  points="15,5 22,12 15,19 "
                ></polyline>
              </svg>
            </div>
          </div>
          <div class="relative text-center" data-subcontent="step_2">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
              <svg
                class="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6
              class="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
              data-subcontent="step-title"
            >
              Let AI process your data
            </h6>
            <p
              class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
              data-subcontent="step-content"
            >
              Based on your answers, AI will process the data and generate the
              best outfits for you
            </p>
            <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                class="w-8 text-blue-200 transform rotate-90 lg:rotate-0"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  stroke-miterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                ></line>
                <polyline
                  fill="none"
                  stroke-miterlimit="10"
                  points="15,5 22,12 15,19 "
                ></polyline>
              </svg>
            </div>
          </div>
          <div class="relative text-center" data-subcontent="step_3">
            <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 sm:w-20 sm:h-20">
              <svg
                class="w-12 h-12 text-blue-600 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
            <h6
              class="mb-2 text-2xl text-gray-900 font-extrabold primary_text editable"
              data-subcontent="step-title"
            >
              Receive recommendations
            </h6>
            <p
              class="max-w-md mb-3 text-sm text-gray-600 sm:mx-auto secondary_text editable"
              data-subcontent="step-content"
            >
              Based on your preferences, StyleSync will recommend clothing that
              looks best for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
