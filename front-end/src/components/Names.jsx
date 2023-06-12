import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Names() {
  const [names, setNames] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  async function fetchNames() {
    const API_URL = import.meta.env.VITE_REACTAPP_BACKEND_URL;
    try {
      const { data } = await axios.get(`${API_URL}/all`);
      const names = data.map(({ name }) => name);
      setNames(names);
    } catch (error) {
      console.log(error);
      setAlertMessage("Erro! Não foi possível buscar os nomes!");
    }
  }

  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-zinc-800">
      {alertMessage && (
        <span className="bg-red-200 text-red-800 p-2 rounded">
          {alertMessage}
        </span>
      )}

      <div className="flex flex-col items-center p-10 h-full">
        <Link
          to="/"
          className="text-xl font-semibold leading-6 text-blue-400 p-8"
        >
          &lt; Go back
        </Link>
        {names.length > 0 ? (
          <ul role="list" className="divide-y divide-gray-100 ">
            {names.map((name, index) => (
              <li key={index} className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-4xl font-semibold leading-6 text-gray-200">
                      {name}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span className="bg-red-200 text-red-800 p-2 rounded">
            Não há nomes registrados!
          </span>
        )}
      </div>
    </div>
  );
}
