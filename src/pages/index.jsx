//Third party libraries
import Image from "next/image";
//Shared libraries

//Files in our project
import iconList from "@/assets/images/icon-list.svg";
import iconSuccess from "@/assets/images/icon-success.svg";
import signUpDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "@/assets/images/illustration-sign-up-mobile.svg";

//Relative imports

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center bg-theme-charcoal-gray">
      <div className="flex border rounded-3xl p-6 pl-0 bg-theme-white">
        <div className="flex items-center">
          <div className="px-12">
            <h1 className="mb-6">Stay updated!</h1>

            <p className="">
              Stay updated! Join 60,000+ product managers receiving monthly{" "}
              updates on:
            </p>

            <ul className="my-4">
              <li className="flex items-center gap-3 pb-3">
                <Image src={iconList} alt="checked icon" />
                Product discovery and building what matters
              </li>
              <li className="flex items-center gap-3 pb-3">
                <Image src={iconList} alt="checked icon" />
                Measuring to ensure updates are a success
              </li>
              <li className="flex items-center gap-3 pb-3">
                <Image src={iconList} alt="checked icon" />
                And much more!
              </li>
            </ul>

            <form className="mt-6">
              <div className="flex flex-col">
                <label className="text-theme-dark-slate-gray text-xs font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="text"
                  className="px-6 py-3 rounded border focus:border-black border-theme-gray outline-none "
                  placeholder="email@company.com"
                />
              </div>
              <button
                type="submit"
                className="bg-theme-dark-slate-gray bg-gradient-to-r shadow-custom hover:from-pink-500 hover:shadow-2xl hover:to-theme-tomato mt-6 text-white p-3 w-full rounded"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>

        {/* <Image src={iconSuccess} /> */}
        <Image priority={true} src={signUpDesktop} alt="screens pictures" />
        {/* <Image src={signUpMobile} /> */}

        {/* <img src="/assets/images/illustration-sign-up-desktop.svg" /> */}
        {/* <img src="/assets/images/illustration-sign-up-mobile.svg" /> */}
      </div>
    </main>
  );
}
