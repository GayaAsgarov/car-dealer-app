"use client";

import FormInput from "@/components/FormInput";
import Link from "next/link";
import { useEffect, useState } from "react";

const vehiclesUrl =
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetMakesForVehicleType/car?format=json`;

const HomePage = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  useEffect(() => {
    const fetchVehicleMakes = async () => {
      try {
        const response = await fetch(vehiclesUrl);
        const data = await response.json();
        setMakes(data.Results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchVehicleMakes();
  }, []);

  const years = Array.from(
    { length: new Date().getFullYear() - 2014 },
    (_, i) => ({
      year: 2015 + i
    })
  );

  useEffect(() => {
    setIsNextEnabled(selectedMake !== "" && selectedYear !== "");
  }, [selectedMake, selectedYear]);

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <form className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Car Dealer App</h1>

      <div className="bg-white shadow-md rounded-lg p-8 w-96">
      <FormInput
        label="Select Vehicle Make:"
        options={makes}
        optionIdKey="MakeId"
        labelKey="MakeName"
        onChange={handleMakeChange}
      />

      <FormInput
        label="Select Model Year:"
        options={years}
        optionIdKey="year"
        labelKey="year"
        onChange={handleYearChange}
      />
      </div>

      <Link href={`/result/${selectedMake}/${selectedYear}`} className="mt-5">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            !isNextEnabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isNextEnabled}
        >
          Next
        </button>
      </Link>
    </form>
  );
};

export default HomePage;
