import * as yup from "yup";
import { emailRegex } from "@/util/validation-forms/valid-email";

export const subscribeSchema = yup
  .object({
    email: yup
      .string()
      .email("Valid email is required")
      .trim()
      .matches(emailRegex, "Valid email is required")
      .required("Valid email is required"),
  })
  .required();
