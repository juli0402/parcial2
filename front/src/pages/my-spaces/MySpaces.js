import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl';
import {Card} from '../../components/card/Card'
import { getHomes } from '../../services/utils';

const MySpaces = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
      getHomes().then((data) => setHomes(data));
    }, []);
  
    return (
      <div className="container home">
        <h1>
          <FormattedMessage id="spaces" />
        </h1>
        {homes && homes.map((home)=> {
            return(
                <Card {...home}/>
            )
        })}
      </div>
    );
}

export default MySpaces
