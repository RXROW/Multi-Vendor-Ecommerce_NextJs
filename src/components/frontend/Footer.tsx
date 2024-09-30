export default function Footer() {
  return (
    <section className="py-10 bg-gray-50 dark:bg-slate-900  sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-16" src="/Logo-Front.png" alt="" />

            <p className="text-base leading-relaxed text-gray-600 dark:text-slate-100 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
 
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 dark:text-slate-100 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-slate-100 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-slate-100 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-slate-100 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black dark:text-slate-100 transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest dark:text-slate-100 text-gray-400 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base dark:text-slate-100 text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base dark:text-slate-100 text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base dark:text-slate-100 text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base dark:text-slate-100 text-black transition-all duration-200 hover:text-green-600 focus:text-green-600"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold dark:text-slate-100 tracking-widest text-gray-400 uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-600 caret-green-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center dark:text-slate-100 justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-green-600 rounded-md hover:bg-green-700 focus:bg-green-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200 dark:text-slate-100" />

        <p className="text-sm text-center text-gray-600 dark:text-slate-100">
          © Copyright 2024, All Rights Reserved by XROW
        </p>
      </div>
    </section>
  );
}