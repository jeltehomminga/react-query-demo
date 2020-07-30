import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const BanksEditInterests = ({ selectedBank }) => {
  const [state, setState] = useState(null);

  const handleChange = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));

  const { isLoading, data, error } = useQuery(
    ["banks", selectedBank],
    async () => {
      const response = await axios.get(
        `http://localhost:5000/banks/${selectedBank}`
      );
      setState(response?.data?.interests);
    }
  );

  console.log(data?.data?.interests && Object.keys(data?.data?.interests));
  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      {error && JSON.stringify(error.message, null, 2)}
      {state && (
        <ul>
          {Object.keys(state).map((key, i) => (
            <input
              name={key}
              key={i}
              onChange={handleChange}
              value={state[key]}
            >
              {data?.data?.interests[key]}
            </input>
          ))}
        </ul>
      )}
    </>
  );
};

export default BanksEditInterests;
