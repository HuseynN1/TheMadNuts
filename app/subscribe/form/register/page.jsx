import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <p className={styles.text}>
          <Image
            src="/formsphotos/icons8-done.svg"
            width={15}
            height={15}
            alt="icondone"
            className={styles.icondone}
          />{" "}
          Your free trial is always cancelable online
        </p>
        <p className={styles.text}>
          {" "}
          <Image
            src="/formsphotos/icons8-done.svg"
            width={15}
            height={15}
            alt="icondone"
            className={styles.icondone}
          />{" "}
          You will receive your boxer shorts within 7 work days.
        </p>
      </div>
      <div className={styles.header}>
        <h1>Your details for free boxer shorts.</h1>
      </div>
      <form action="" className={styles.formData}>
        <div className={styles.nameAndSurname}>
          <div className={styles.namesection}>
            <label className={styles.textInp}>First Name</label>
            <input className={styles.inp} name="name" type="text" />
          </div>
          <div className={styles.surnamesection}>
            <label className={styles.textInp} htmlFor="">Last Name</label>
            <input className={styles.inp} type="text" />
          </div>
        </div>
        <label className={styles.textInp}>Email adress</label>
        <input className={styles.inp} name="email" type="email" />
        <label className={styles.textInp} htmlFor="">Password</label>
        <input className={styles.inp} type="password" />
      </form>
    </div>
  );
};

export default RegisterForm;
