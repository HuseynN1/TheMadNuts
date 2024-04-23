import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
import Subscribe from "./button subscribe"
const RegisterNavbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-gray-300 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/how-it-works">
                  <p>How does it work?</p>
                </Link>
              </li>
              <li>
                <Link href="/customer-service">
                  <p>Customer service</p>
                </Link>
              </li>
            </ul>
            <div className="flex flex-row gap-5">
            <Button />
            <Subscribe/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};









export default RegisterNavbar