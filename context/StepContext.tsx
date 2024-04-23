"use client";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

import RegisterForm from "@/app/subscribe/form/register/page";
import ShippingPage from "@/app/subscribe/form/shippingadress/page";
import PayingPage from "@/app/subscribe/form/paying/page";
import SizeForm from "@/app/subscribe/form/sizeInfo/page";
interface ContextI {
  currentStep?: number,
  setCurrentStep?: Dispatch<SetStateAction<number>>,
  Page?: ReactNode,
  setPage?: Dispatch<SetStateAction<ReactNode>>
}
export const GlobalContext = createContext<ContextI>({ currentStep: undefined, setCurrentStep: undefined, Page: undefined, setPage: undefined });


export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [Page, setPage] = useState<ReactNode>(null)
  

  useEffect(() => {
    if (currentStep == 1) {
      setPage(<SizeForm />)
    }
    else if (currentStep == 2) {
      setPage(<RegisterForm />)
    }
    else if (currentStep == 3) {
      setPage(<ShippingPage />)
    }
    else if (currentStep == 4) {
      setPage(<PayingPage />)
    }
    else {
      setPage("Error")
    }
  }, [currentStep])

  return (
    <GlobalContext.Provider value={{ currentStep, setCurrentStep, Page, setPage }}>
      {children}
    </GlobalContext.Provider>
  );
};
