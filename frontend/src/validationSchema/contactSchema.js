import * as yup from "yup";

const contactSchema = yup
  .object({
    fName: yup.string().required("First Name is required*"),
    lName: yup.string().required("Last Name is required*"),
    email: yup.string().email().required("Email is required*"),
    mobile: yup.string().required("contact number is required*"),
  })
  .required();

export default contactSchema;
