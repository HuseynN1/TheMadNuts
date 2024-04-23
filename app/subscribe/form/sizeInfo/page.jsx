import React from "react";
import styles from "./page.module.css";

import Image from "next/image";
const SizeForm = () => {
  return (
    <div className={styles.container}>
      <h2>
        Choose your size <br /> for your free pair.
      </h2>

      <div className={styles.textbox}>
        <p className={styles.text}>
          <Image src="formsphotos/icons8-done.svg" width={20} height={20} alt="asdasd" className={styles.icondone} /> First pair will be completely free including shipping
        </p>
        <p className={styles.text}> <Image src="/formsphotos/icons8-done.svg" width={20} height={20} alt="sdasd" className={styles.icondone} /> Great quality with a new pair every month</p>
        <p className={styles.text}>
          <Image src="/formsphotos/icons8-done.svg" width={20} height={20} alt="asdda" className={styles.icondone} /> Responsive customer support in case you need any help
        </p>
      </div>
      <div className={styles.headerofsize}>
        <h3>Choose your size</h3>
        <p>Tip: If you are in doubt about your size, take a larger size.</p>
      </div>
      <div className={styles.sizeselection}>
        <div className={styles.bodySize}> 
          <h3 className={styles.sizetext}>{`Men's size`}</h3>
          <ul className={styles.sizelist}>
            <li>
              <button type="button" className={styles.btn}>
                XS
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                S
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                M
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                L
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                XL
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                XXL
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                3XL
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.boysSize}>
          <h3 className={styles.sizetext}>{`Boy's size`}</h3>
          <ul className={styles.sizelist}>
            <li>
              <button type="button" className={styles.btn}>
                104
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                110-116
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                122-128
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                134-140
              </button>
            </li>
            <li>
              <button type="button" className={styles.btn}>
                146-152
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.checking}>
          <i className={styles.checkingIcon}></i>
          <p className={styles.checkingText}>Check our size guide</p>
        </div>
        <img src="formsphotos/shorts.svg" className={styles.sizeguidePhoto}/>
        <div className={styles.features}>
          <p>Every month you will get a new pair</p>
        </div>
      </div>
    </div>
  );
};

export default SizeForm;
