import React from "react";
import useBanksQuery from "./../hooks/useBanksQuery";

const BanksRQ = ({ setSelectedBank }) => {
  const { isLoading, data, error } = useBanksQuery();

  return (
    <>
      {isLoading && <strong>Loading...</strong>}
      {error && JSON.stringify(error.message, null, 2)}
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
