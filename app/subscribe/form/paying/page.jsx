import React from "react";
import Link from "next/link";
const PayingForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold ">Your last step</h1>
      <p className="text-lg font-medium ">Good to keep in mind</p>
      <div className="flex flex-col ml-10 flex-wrap  ">
        <div className="flex gap-3 ">
          <img className="w-5" src="/formsphotos/icons8-done.svg" alt="" />
          <p className="text-base">
            {" "}
            We{"'"}ll notify you when your free trial ends.
          </p>
        </div>
        <div className="flex gap-3">
          <img className="w-5" src="/formsphotos/icons8-done.svg" alt="" />
          <p className="text-base">
            No commitments, cancel your membership online at any given time.
          </p>
        </div>
      </div>
      {/* select metod */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium ">
          Please select your verification method
        </h3>
        <p className="text-base mb-5">
          To activate your account and prevent fraud. We will refund the
          verification <br /> fee to your bank account within a few business days.
        </p>
      </div>
      {/* paypal metod */}
      <div className="flex flex-row gap-5 ">
        <div className="paypal">
          <div className="flex gap-5">
            <h3 className="text-2xl">PayPal</h3>
            <img src="/paypalicon.svg" alt="paypal" />
          </div>
          <div className="text-base">
            <p>0,00kr verification</p>
          </div>
        </div>
        <div className="">
          <input
            type="radio"
            name="paypal"
            className="h-4 w-4  cursor-pointer"
          />
        </div>
      </div>
      {/* credit card metod */}
      <div className="flex flex-row gap-5 ">
        <div className="creditcard">
          <div className="flex gap-5">
            <h3 className="text-2xl">Credit card</h3>
            <img src="/visa.svg" alt="visa" />
            <img src="/mastercard.svg" alt="mastercard" />
            <img src="/mastercard2.svg" alt="mastercard" />
            <img src="/amerexprs.svg" alt="american express" />
          </div>
          <div className="text-base">
            <p>11,00kr verification</p>
          </div>
        </div>
        <div className="">
          <input
            name="creditcard"
            type="radio"
            className="h-4 w-4  cursor-pointer"
          />
        </div>
      </div>
      {/* Total payments shipping and product */}
      <div className="flex flex-row gap-5">
        <div>
          <h3 className="text-2xl">Boxer short </h3>
          <h3 className="text-2xl">Shipping </h3>
        </div>
        <div>
          <p className="text-2xl">: 8kr</p>
          <p className="text-2xl">: 5kr</p>
        </div>
      </div>
      <div className="bg-slate-400 w-1/3 h-0.5 rounded-full  "></div>
      {/* total cost */}
      <div className="flex flex-row gap-24 ">
        <div>
          <p className="text-2xl">Total</p>
        </div>
        <div>
          <p className="text-2xl">:13kr</p>
        </div>
      </div>
      {/* terms and conditions */}
      <div>
        <p className="text-sm">
          {" "}
          By completing your order, you declare that you are 18 years of age or
          older and agree to the <br />{" "}
          <a href="" className="underline">
            {" "}
            Terms and conditions{" "}
          </a>
          , Terms of use and privacy statement and you declare that <br /> you have
          checked your order and data.
        </p>
      </div>
      <button className="bg-yellow-500 rounded-full w-80 h-8 text-base">
        Im going for it
      </button>
      {/* text for free trial */}
      <div className="text-base">
        <p className="ml-20 text-lg font-semibold">
          Are there really no strings attached?
        </p>
        <p className="ml-7 text-wrap">
          You start with a free trial, with no obligations. After completing
          verification, we send your boxer shorts immediately. We{"'"}ll send you
          your first boxer shorts absolutely free.
        </p>
      </div>
      {/* google review */}
      <div className="flex flex-row justify-center gap-3">
        <img className="w-6" src="/google.svg" alt="" />
        <p className="text-base">
          Customer review <span>4.5/5</span>-22023 Reviews
        </p>
      </div>
    </div>
  );
};

export default PayingForm;
