import React from "react";
import styles from "./ArrayElement.module.css";

export interface ArrayElementProps {
  background: string;
  width: string;
  height: string;
  display?: string;
}

const ArrayElement: React.FC<ArrayElementProps> = ({
  background,
  width,
  height,
}) => {
  const style: ArrayElementProps = {
    background: background,
    width: height,
    height: width,
    display: "inline-block",
  };
  return (
    <div className={styles.container}>
      <div data-testid="array-element" style={style}></div>
    </div>
  );
};

export default ArrayElement;
