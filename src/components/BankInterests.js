import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const BanksInterests = ({ selectedBank }) => {
  console.log("selectedBank", selectedBank);
  const { isLoading, data, error } = useQuery(
    ["banks", selectedBank],
    async () => await axios.get(`http://localhost:5000/banks/${selectedBank}`)
  );

  console.log(data?.data?.interests && Object.keys(data));
  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      {error && JSON.stringify(error.message, null, 2)}
      {data && JSON.stringify(data, null, 2)}

      {data?.data?.interests && (
        <ul>
          {Object.keys(data?.data?.interests).map((key, i) => (
            <li key={i}>{data?.data?.interests[key]}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BanksInterests;
