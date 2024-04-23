"use client";
import ProgressBar from "@/components/progressbar/page";
import React from "react";
import { GlobalContext } from "@/context/StepContext";
import { useContext } from "react";
import styles from "./page.module.css";
import Link from "next/link"
const Subscribe = () => {
  const { currentStep, setCurrentStep, Page, setPage } =
    useContext(GlobalContext);

  const showPage = (props: string) => {
    if (currentStep && setCurrentStep) {
      if (props == "Next") {
        currentStep < 4 ? setCurrentStep(currentStep + 1) : "";
      }  else {
        currentStep > 1 ? setCurrentStep(currentStep - 1) : "";
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <ProgressBar />
      </div>
      <div className={styles.formSection}>{Page}</div>
      <div className={styles.footer}>
        {
          currentStep==4 ?  <Link href={"/"} ><button className={styles.prvBtn}>Submit</button></Link>:
<div className={styles.btns}>
              <button
                className={styles.prvBtn}
                onClick={() => showPage("Prev")}
              >
                Prev
              </button>
              <button
                className={styles.nextBtn}
                onClick={() => showPage("Next")}
              >
                Next
              </button>
            </div>
}
      </div>
      <div className={styles.imgSection}></div>
    </div>
  );
};

export default Subscribe;
