"use client";

import Subscribe from "@/components/Subscribe";
import { GlobalProvider } from "@/context/StepContext";

const SubscribePage = () => {
  return (
    <GlobalProvider>
      <Subscribe />
    </GlobalProvider>
  )
};

export default SubscribePage;
