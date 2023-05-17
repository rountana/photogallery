import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240] m-auto p-4 h-screen w-screen">
      <h1 className="text-2xl font-bold text-center p-4">Lets work together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3 my-2"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3 my-2"
            type="text"
            placeholder="Subject"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full"
          type="text"
          placeholder="email"
        />
        <textarea
          className="border shadow-lg p-3 w-full my-2"
          cols="30"
          rows="10"
          type="text"
          placeholder="Message"
        />
        <button className="border shadow-lg p-3"> Submit </button>
      </form>
    </div>
  );
};

export default Contact;
