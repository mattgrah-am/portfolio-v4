"use client";

import React, { useState } from "react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsError(false);
    setIsModalOpen(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      handleCloseModal();
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleOpenModal}
        className="w-fit rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl"
      >
        Reach Out
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="w-full bg-white p-4 shadow-md sm:w-96 sm:rounded-md">
            <h2 className="mb-8 mt-2 text-2xl font-bold">Leave a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-400 px-2 py-1.5 shadow-sm focus:border-neutral-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-400 px-2 py-1.5 shadow-sm focus:border-neutral-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-neutral-400 px-2 py-1.5 shadow-sm focus:border-neutral-500"
                  required
                  rows={4}
                />
              </div>
              {isError && (
                <p className="mb-4 text-sm text-rose-700">
                  Something went wrong, please try again later.
                </p>
              )}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-1/2 rounded-md bg-neutral-300 px-4 py-1.5 text-xl font-bold text-neutral-950 transition duration-200 hover:blur-[1px] md:text-2xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-md bg-neutral-950 px-4 py-1.5 text-xl font-bold text-neutral-50 transition duration-200 hover:blur-[1px] md:text-2xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
