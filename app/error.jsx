"use client";

function error({ error }) {
  console.log(error);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong.
        </h1>
        <p className="text-gray-700 mb-6">
          We couldn`t process your request. Please try again later.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

export default error;
