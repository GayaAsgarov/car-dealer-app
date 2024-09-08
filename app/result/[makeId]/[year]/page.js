import { Suspense, lazy } from "react";

const VehicleModels = lazy(() => import("@/components/VehicleModels"));

async function generateStaticParams(makeId, year) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  const data = await res.json();
  return data.Results;
}

export default async function ResultPage({ params }) {
  const { makeId, year } = params;
  const models = await generateStaticParams(makeId, year);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Vehicle Models for makeID {makeId} and year {year}
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl">
        <Suspense
          fallback={
            <div className="text-center text-gray-600">
              Loading vehicle models...
            </div>
          }
        >
          {models.length > 0 ? (
            <VehicleModels models={models} />
          ) : (
            <p className="text-gray-600">
              No models found for this make and year.
            </p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
