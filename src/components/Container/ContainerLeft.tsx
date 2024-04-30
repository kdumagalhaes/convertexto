import { PropsWithChildren } from "react";
import styles from "./ContainerLeft.module.scss";

type ContainerLeftProps = PropsWithChildren

const ContainerLeft = ({ children }: ContainerLeftProps) => {
  return (
    <>
    <span className={styles.title}>Cole ou digite seu texto aqui</span>
    <div>{children}</div>
    </>
  );
};

export default ContainerLeft;