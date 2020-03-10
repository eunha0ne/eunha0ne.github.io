import React from 'react';
import cloneDeep from 'lodash.clonedeep';

const Container = () => {
  const people = [{ name: 'Bob' }, { name: 'Alice' }];
  const morePeople = cloneDeep(people).concat([{ name: 'John' }]);
  console.log(people[0] === morePeople[0]); // returns false

  return <div></div>;
};

export default Container;
