import React from "react";

export default function View() {
  return (
    <form action="" className="bg-gray-200 text-center justify-center">
      <input
        type="text"
        placeholder="Search Saved Recipes"
        className="border rounded-full p-2 mx-2"
      />
      <div>
        <h1 className="">Recently Viewed</h1>
      </div>
    </form>
  );
}
