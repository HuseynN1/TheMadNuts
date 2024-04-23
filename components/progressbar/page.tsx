import React, { useContext } from "react";
import styles from "./page.module.css"
import Image from 'next/image'
// import littleShort from '../../../public/formsphotos/progressbarshorticon.svg'
const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress}></div>
      <div className={`${styles.circle} ${styles.active}`}>1</div>
      <div className={styles.circle}>2</div>
      <div className={styles.circle}>3</div>
      <div className={styles.circle}>
        <Image width={100} height={100} src="/formsphotos/progressbarshorticon.svg" alt='progressbar short icon'/>
      </div>
      
    </div>

  )
}

export default ProgressBar