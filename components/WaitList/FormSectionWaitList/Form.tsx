"use client"

import { postData } from "@/components/WaitList/FormSectionWaitList"
import { PostFormData, SizesI } from "@/types"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios"
import GoogleCaptchaWrapper from "@/app/GoogleCaptchaWrapper"

const sizes: SizesI = {
    men: [
        {
            label: "XS",
            value: "xs"
        },
        {
            label: "S",
            value: "s"
        },
        {
            label: "M",
            value: "m"
        },
        {
            label: "L",
            value: "l"
        },
        {
            label: "XL",
            value: "xl"
        },
        {
            label: "XXL",
            value: "xxl"
        },
        {
            label: "3XL",
            value: "3xl"
        },
    ],
    boy: [
        {
            value: "104",
            label: "104  (Age: 3-4)"
        },
        {
            value: "110-116",
            label: "110-116  (Age: 5-6)"
        },
        {
            value: '122-128',
            label: "122-128  (Age: 7-8)"
        },
        {
            value: "134-140",
            label: "134-140  (Age: 9-10)"
        },
        {
            value: "146-152",
            label: "146-152  (Age: 11-12)"
        },
    ]
}
const Form = () => {
    const initialFormData: PostFormData = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        size: ''
    }
    console.log('salam');
    const [formData, setFormData] = useState(initialFormData);
    const changeInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postData(formData);

        if(!executeRecaptcha) {
            console.log("not available to evaluate recapctha")
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('waitlistSubmit');

        const response = await axios({
            method: "post",
            url: "/api/recaptchaSubmit",
            data: {
              gRecaptchaToken,
            },
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          });
      
          if (response?.data?.success === true) {
            console.log(`Success with score: ${response?.data?.score}`);
            postData(formData);
            // setSubmit('ReCaptcha Verified and Form Submitted!')
          } else {
            console.log(`Failure with score: ${response?.data?.score}`);
            // setSubmit("Failed to verify recaptcha! You must be a robot!")
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="firstName"
                            id="first_name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={changeInput}
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={changeInput}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={changeInput}
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={changeInput}
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="size" className="block text-sm font-medium leading-6 text-gray-900">
                        Size
                    </label>
                    <div className="mt-2">
                        <select
                            id="size"
                            name="size"
                            autoComplete="size-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={changeInput}
                        >
                            {Object.keys(sizes).map((item) => (
                                <optgroup key={item} label={item} className="capitalize">
                                    {sizes[item as keyof SizesI].map(({ value, label }) => (<option key={value} value={value}>{label}</option>))}
                                </optgroup>))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 px-4 py-4 sm:px-8">
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}


const form = () => (
    <GoogleCaptchaWrapper>
      <Form />
    </GoogleCaptchaWrapper>
  );
    
export default form