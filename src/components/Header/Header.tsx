import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Convertexto</h1>
      <p className={styles.description}>Cansado de trocar entre <strong>português brasileiro</strong>
       e <strong>português europeu</strong> manualmente? Apresentamos a solução perfeita: um editor 
       de texto online que <strong>converte seus textos instantaneamente!</strong></p>
    </header>
  );
};

export default Header;