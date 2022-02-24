import * as yup from "yup";

const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .trim()
    .required("A first name is required")
    .min(3, "First name must be more than 3 characters"),
  lastname: yup
    .string()
    .trim()
    .required("A last name is required")
    .min(2, "Last name must be more than 2 characters"),
  password: yup
    .string()
    .trim()
    .required("A password is required")
    .min(8, "Password must be more than 8 characters"),
  email: yup.string().trim().required("An email is required"),
  gender: yup.string().required("A gender is required"),
  occupation: yup.string().required("An occupation is required"),
  relationship: yup.string().required("A relaionship status is required"),
  learnMore: yup.boolean(),
  learnMoreReact: yup.boolean(),
  network: yup.boolean(),
  findJob: yup.boolean(),
  findSpouse: yup.boolean(),
  laugh: yup.boolean(),
  terms: yup.string().required(
    "It is required that you sell your information and soul to the data people who want you to look at these terms written by some lawyer that has not graduated law school yet. CLICK IT"
  ),
});

export default formSchema;
