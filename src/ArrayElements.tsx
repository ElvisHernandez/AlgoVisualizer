import React, { useState } from "react";

export interface ArrayElementsProps {}

const ArrayElements: React.FC<ArrayElementsProps> = () => {
  //   const [array, setArray] = useState<number[]>([]);

  function makeArray(): number[] {
    return [0, 1, 2];
  }

  return <h1>Array Elements</h1>;
};

export default ArrayElements;
