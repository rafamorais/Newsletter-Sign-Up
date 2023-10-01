import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscribeSchema } from "@/util/validation-forms/schemas/subscribe";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(subscribeSchema) });

  const onSubmit = (data) => {
    Router.push(`/newsletter-confirmation?email=${data.email}`);
  };

  return (
    <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="text-theme-dark-slate-gray text-xs font-bold mb-2">
            Email Address
          </label>
          <span className="text-red-700 text-xs font-bold mb-2">
            {errors.email?.message}
          </span>
        </div>

        <input
          type="text"
          className={`px-6 py-3 rounded border border-theme-gray outline-none `.concat(
            errors.email
              ? "focus:border-red-700 border-red-700 bg-red-200 text-red-700 "
              : "focus:border-black"
          )}
          placeholder="email@company.com"
          {...register("email", { required: true })}
        />
      </div>

      <button
        type="submit"
        className="bg-theme-dark-slate-gray bg-gradient-to-r shadow-custom hover:from-pink-500 hover:shadow-2xl hover:to-theme-tomato md:mt-6 mt-4 text-white p-3 w-full rounded"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default SubscribeForm;
