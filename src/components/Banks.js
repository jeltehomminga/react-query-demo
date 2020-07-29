import React, { useEffect, useState } from "react";
import axios from "axios";

const Banks = ({ setSelectedBank }) => {
  const [banks, setBanks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBanks = async () => {
      const response = await axios
        .get("http://localhost:5000/banks")
        .catch((err) => setError(err.message))
        .finally(() => setIsLoading(false));
      setBanks(response?.data ?? []);
    };

    getBanks();
  }, []);

  console.log(banks);
  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      {error && JSON.stringify(error, null, 2)}
      {banks.length > 0 && (
        <ul>
          {banks.map((bank) => (
            <li key={bank._id} onClick={() => setSelectedBank(bank.name)}>
              {bank.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Banks;
