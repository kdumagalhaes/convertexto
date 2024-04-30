import styles from "./ContainerRight.module.scss";
const ContainerRight = () => {
  return (
    <div className={styles.container}>
      <span className={styles["preview-message"]}>
        Seu texto, já convertido para Português europeu, aparecerá aqui!
      </span>
    </div>
  );
};

export default ContainerRight;