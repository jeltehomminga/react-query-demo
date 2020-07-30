import { useQuery } from "react-query";
import axios from "axios";

const useBanksQuery = () => {
  const query = useQuery(
    "banks",
    async () => await axios.get("http://localhost:5000/banks")
  );

  return query;
};

export default useBanksQuery;
