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
    <main className="">
      <h1>Stay updated!</h1>
      <p className="font-bold">
        Stay updated! Join 60,000+ product managers receiving monthly updates
        on:
      </p>

      <ul>
        <li>
          <Image src={iconList} alt="checked icon" />
          Product discovery and building what matters
        </li>
        <li>
          <Image src={iconList} alt="checked icon" />
          Measuring to ensure updates are a success
        </li>
        <li>
          <Image src={iconList} alt="checked icon" />
          And much more!
        </li>
      </ul>
      <form>
        <div>
          <label>Email Address</label>
          <input type="text" placeholder="email@company.com" />
        </div>
        <button type="submit">
          Email address Subscribe to monthly newsletter
        </button>
      </form>

      {/* <Image src={iconSuccess} /> */}
      <Image priority={true} src={signUpDesktop} alt="screens pictures" />
      {/* <Image src={signUpMobile} /> */}

      {/* <img src="/assets/images/illustration-sign-up-desktop.svg" /> */}
      {/* <img src="/assets/images/illustration-sign-up-mobile.svg" /> */}
    </main>
  );
}
