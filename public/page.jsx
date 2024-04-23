import React from "react";
import styles from "./page.module.css";
import ProgressBar from "@/components/progressbar/page";
import SizeForm from "./form/sizeInfo/page";
import Image from "next/image";
import sizeFPhoto from "../../../public/formsphotos/sizeFPhoto.svg";
const stepFirst = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <ProgressBar />
      </div>
      <div className={styles.formSection}>
        <SizeForm />
      </div>
      <div className={styles.footer}>
        <div className={styles.btns}>
          <button className={styles.prvBtn}>Prev</button>
          <button className={styles.nextBtn}>Next</button>
        </div>
        </div>
       
    </div>
  );
};

export default stepFirst;
