import { PropsWithChildren } from "react";
import styles from "./ContainerRoot.module.scss";

type ContainerRootProps = PropsWithChildren
const ContainerRoot = ({ children }: ContainerRootProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default ContainerRoot;