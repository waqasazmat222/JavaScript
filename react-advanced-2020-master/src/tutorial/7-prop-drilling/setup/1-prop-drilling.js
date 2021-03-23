import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople]=useState(data);

  return (
  <section>
    <List people={people} />
  </section>);
};
const List =({people})=>{
return (<>
    {people.map((person)=>{
      return <singlePerson key={person.id} />
    })}
</>);
}
const singlePerson=({id,name})=>{
return (<>
<div className="item">
  <h4>Single item</h4>
</div>
</>);
}

export default PropDrilling;
