import { useForm } from "react-hook-form";
import contactForm from "../assets/images/contactForm.jpg";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../validationSchema/contactSchema.js";
import { useState } from "react";
import contactAction from "../actions/contactAction.js"

function Contact() {
  const [backendError, setbackendError] = useState()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema)
  });

  async function submitData(data) {
    setbackendError()
    const respone = await contactAction(data);
    const { success, error } = await respone.json()
    if (error) {
      setbackendError(error.messages.join(', '))
    }
    else if (success) {
      console.log(success.message)


    }
  }
  return (

    <>
      <div>
        <h1 className="inline-block bg-gradient-to-r from-cyan-400 via-orange-800 to-green-500 bg-clip-text text-5xl text-transparent mb-20">Contact</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-b border-neutral-900 pb-4">
        <img
          className="inset-0 w-full h-[280px] hidden md:block object-cover"
          src={contactForm}
          alt="picture"
        />
        {
          backendError && <p className="text-red-500 text-sm mt-2">{backendError}</p>
        }

        <form onSubmit={handleSubmit(submitData)} className="space-y-6">

          <div className="w-full">
            <h2 className="text-2xl font-semibold leading-9 tracking-tight text-slate-400">
              Please fillup the contact form below
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="fName"
                className="block text-sm font-medium leading-6 text-slate-200"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fName"
                  {...register("fName")}
                  type="name"

                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>

            </div>

            <div>
              <label
                htmlFor="lName"
                className="block text-sm font-medium leading-6 text-slate-200"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lName"
                  {...register("lName")}
                  type="name"

                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="Mobile"
                className="block text-sm font-medium leading-6 text-slate-200"
              >
                Mobile Number*
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  {...register("mobile")}
                  type="text"

                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
              {errors.mobile && (
                <span className="text-xs text-red-500">
                  {errors.mobile.message}
                </span>
              )}

            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-slate-200"
              >
                Email*
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email")}
                  type="email"

                  className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>

        </form>
      </div>
    </>
  )
}

export default Contact;