import React from "react";

const Features = () => {
  return (
    <div class="bg-white" id="features">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col lg:flex-row">
          <div class="max-w-xl pr-16 w-5/12 mb-10">
            <h5
              class="mb-6 text-3xl font-extrabold leading-none text-gray-900 primary_text editable"
              data-content="website-headlines"
            >
              Style Is A Matter Of Taste
            </h5>
            <p
              class="mb-6 text-gray-600 secondary_text editable"
              data-content="product-descriptions"
            >
              StyleSync is an AI-powered personal stylist that recommends
              clothes and accessories that are a perfect match for your personal
              style. You only need to take a few photos of yourself, upload them
              and fill out two questions. And then StyleSync will recommend the
              perfect pieces for you. It can also be used as a virtual assistant
              who helps you find clothes to suit your event or occasion.
            </p>
            <div class="flex items-center">
              <a
              href='/dashboard'
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium text-white transition duration-200 rounded shadow-md bg-blue-600 primary_button_background primary_button_text focus:shadow-outline focus:outline-none btn-editable editable"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 accent_text link-editable editable"
              >
                Learn more
              </a>
            </div>
          </div>
          <div class="grid gap-5 w-7/12 row-gap-5 sm:grid-cols-2">
            <div class="max-w-md" data-content="features">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 bg-editable secondary_accent_bg">
                <svg
                  class="w-12 h-12 text-blue-600 accent_text"
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
                class="mb-2 font-semibold leading-5 text-gray-900 primary_text editable"
                data-subcontent="feature-title"
              >
                Get the perfect look
              </h6>
              <p
                class="text-sm text-gray-600 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                With StyleSync, you can try on new looks without even leaving
                your home. Simply enter your style preferences and our AI
                stylist will recommend clothing and accessories that are perfect
                for you.
              </p>
            </div>
            <div class="max-w-md" data-content="features">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 bg-editable secondary_accent_bg">
                <svg
                  class="w-12 h-12 text-blue-600 accent_text"
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
                class="mb-2 font-semibold leading-5 text-gray-900 primary_text editable"
                data-subcontent="feature-title"
              >
                Your own personal shopper
              </h6>
              <p
                class="text-sm text-gray-600 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                With StyleSync, you'll never have to go shopping for clothes
                again. Just tell us what you like and we'll take care of the
                rest.
              </p>
            </div>
            <div class="max-w-md" data-content="features">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 bg-editable secondary_accent_bg">
                <svg
                  class="w-12 h-12 text-blue-600 accent_text"
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
                class="mb-2 font-semibold leading-5 text-gray-900 primary_text editable"
                data-subcontent="feature-title"
              >
                Get the perfect outfit every time
              </h6>
              <p
                class="text-sm text-gray-600 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                With StyleSync, you can rest assured that you'll always have the
                perfect outfit for any occasion. Simply enter your style
                preferences and let our virtual stylist do the rest!
              </p>
            </div>
            <div class="max-w-md" data-content="features">
              <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-50 bg-editable secondary_accent_bg">
                <svg
                  class="w-12 h-12 text-blue-600 accent_text"
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
                class="mb-2 font-semibold leading-5 text-gray-900 primary_text editable"
                data-subcontent="feature-title"
              >
                Find your personal style
              </h6>
              <p
                class="text-sm text-gray-600 secondary_text editable"
                data-subcontent="feature-content"
              >
                {" "}
                With StyleSync, you can discover your personal style and find
                clothing and accessories to match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
