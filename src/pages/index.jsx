//Third party libraries
import Image from "next/image";

//Files in our project
import iconList from "@/assets/images/icon-list.svg";
import signUpDesktop from "@/assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "@/assets/images/illustration-sign-up-mobile.svg";
import SubscribeForm from "@/components/SubscribeForm";
import Seo from "@/components/SubscribeForm/Seo";

export default function Home() {
  return (
    <>
      <Seo title="Newsletter" desc="Subscribe page" />
      <main className="flex md:h-screen justify-center items-center bg-theme-charcoal-gray">
        <div className="flex flex-col md:flex-row md:rounded-3xl md:p-6 md:pl-0 bg-theme-white">
          <Image
            className="md:hidden w-full object-top object-cover"
            src={signUpMobile}
            alt="screens pictures"
          />

          <div className="flex items-center">
            <div className="md:px-12 px-4 max-w-[470px]">
              <h1 className="mb-6 mt-6 md:mt-0">Stay updated!</h1>

              <p>Join 60,000+ product managers receiving monthly updates on:</p>

              <ul className="my-4">
                <li className="product-item md:pb-3">
                  <Image src={iconList} alt="checked icon" />
                  Product discovery and building what matters
                </li>
                <li className="product-item md:pb-3">
                  <Image src={iconList} alt="checked icon" />
                  Measuring to ensure updates are a success
                </li>
                <li className="product-item md:pb-3">
                  <Image src={iconList} alt="checked icon" />
                  And much more!
                </li>
              </ul>
              <SubscribeForm />
            </div>
          </div>

          <Image
            className="hidden md:block"
            priority={true}
            src={signUpDesktop}
            alt="screens pictures"
          />
        </div>
      </main>
    </>
  );
}
{
}
