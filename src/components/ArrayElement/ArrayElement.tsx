import React from "react";

export interface ArrayElementProps {
  background: string;
  width: string;
  height: string;
  keyProp?: number;
}

const ArrayElement: React.FC<ArrayElementProps> = ({
  background,
  width,
  height,
}) => {
  const style: ArrayElementProps = {
    background: background,
    width: width,
    height: height,
  };
  return <div style={style}></div>;
};

export default ArrayElement;
