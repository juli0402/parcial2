import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import { getHomes } from "../../services/utils";
import { FormattedMessage } from "react-intl";

export const HomesList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    getHomes().then((data) => setHomes(data));
  }, []);

  return (
    <div className="container home">
      <h1>
      <FormattedMessage id="spaces" />
      </h1>
      {homes && homes.map((home)=> <p>{home.name}</p>)}
    </div>
  );
};
