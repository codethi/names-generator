import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [alertMessage, setAlertMessage] = useState("");

  async function addNewName() {
    const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
    try {
      await axios.get(`${API_URL}/add`);
      setAlertMessage("Nome adicionado com sucesso!");
    } catch (error) {
      console.log(error);
      setAlertMessage("Erro! O registro não foi adicionado!");
    }
  }

  return (
    <div className="bg-zinc-800 h-screen ">
      <div className="flex flex-col items-center justify-center h-full">
        {alertMessage && (
          <span className="bg-blue-600 text-zinc-100 font-bold p-3 rounded">
            {alertMessage}
          </span>
        )}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            To access the project repository, just access{" "}
            <a
              href="https://github.com/codethi/names-generator"
              className="font-semibold text-blue-400"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              this link <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-300 sm:text-6xl">
            Names Generator Pro
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            This is a simple web application, it is mainly used to learn docker,
            but in a practical way it creates names randomly using the faker
            library.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-xl"
              onClick={addNewName}
            >
              Create a new name
            </a>

            <Link
              to="/names"
              className="text-xl font-semibold leading-6 text-gray-200"
            >
              See all names <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
