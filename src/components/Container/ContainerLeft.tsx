import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";
import styles from "./ContainerLeft.module.scss";
import { Button } from "../Button";

const ContainerLeft = () => {
  const editor = useCreateBlockNote();

  return (
    <div className={styles.container}>
    <span className={styles.title}><strong>Cole</strong> ou 
      <strong> digite</strong> seu texto abaixo</span>
      <div className={styles.editor}>
        <BlockNoteView editor={editor} />
        <Button.Root>
          <Button.Clear />
          <Button.Convert />
        </Button.Root>
      </div>
    </div>
  );
};

export default ContainerLeft;
