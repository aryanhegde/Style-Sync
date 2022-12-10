import React from "react";
import GenderForm from "./forms/GenderForm";
import AgeGroupForm from "./forms/AgeGroupForm";
import SkinColor from "./forms/SkinColor";
import Ocassion from "./forms/OccasionForm";
import BodyType from "./forms/BodyType";

const App = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-3xl font-bold pt-8 text-center">
        Your Personal Stylist
      </h1>
      <div className="flex  flex-col">
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
      <BodyType />
    </div>
  );
};

export default App;
