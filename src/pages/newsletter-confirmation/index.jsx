import { useSearchParams } from "next/navigation";
import iconSuccess from "@/assets/images/icon-success.svg";
import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/SubscribeForm/Seo";

const NewsletterConfirmation = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  return (
    <>
      <Seo
        title="Thanks - Subscription confirmation"
        desc="Subscription confirmation"
      />
      <main className="flex bg-theme-charcoal-gray h-screen justify-center md:items-center">
        <div className="flex flex-col bg-white md:p-[5rem] p-4 md:w-[40vw] w-full md:rounded-3xl">
          <Image
            className="mb-10 mt-24 md:mt-0"
            src={iconSuccess}
            alt="checked icon"
          />
          <h1 className="text-5xl">
            Thanks for <br /> subscribing!
          </h1>
          <p className="py-6 text-base">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span> Please open it and click
            the button inside to confirm your subscription.
          </p>

          <Link
            href="/"
            type="submit"
            className="bg-theme-dark-slate-gray mt-auto bg-gradient-to-r text-center shadow-custom hover:from-pink-500 hover:shadow-2xl hover:to-theme-tomato text-white p-3 w-full rounded"
          >
            Dismiss message
          </Link>
        </div>
      </main>
    </>
  );
};

export default NewsletterConfirmation;
