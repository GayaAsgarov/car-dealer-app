const VehicleModels = ({ models }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {models.map((model) => (
        <li key={model.Model_ID} className="bg-indigo-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">
            {model.Make_Name} {model.Model_Name}
          </h2>
        </li>
      ))}
    </ul>
  );
};

export default VehicleModels;
