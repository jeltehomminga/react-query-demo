import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const BanksRQ = ({ setSelectedBank }) => {
  const { isLoading, data, error } = useQuery(
    "banks",
    async () => await axios.get("http://localhost:5000/banks")
  );

  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      {error && JSON.stringify(error, null, 2)}
      {data?.data.length > 0 && (
        <ul>
          {data.data.map((bank) => (
            <li key={bank._id} onClick={() => setSelectedBank(bank.name)}>
              {bank.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BanksRQ;
