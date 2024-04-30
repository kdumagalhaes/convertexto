import {PropsWithChildren} from "react";
import styles from "./ButtonRoot.module.scss";

type ButtonRootProps = PropsWithChildren
const ButtonRoot = ({children}: ButtonRootProps) => {
  return (
    <div className={styles.container}>{children}</div>
  );
};

export default ButtonRoot;