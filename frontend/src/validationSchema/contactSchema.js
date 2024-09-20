import * as yup from "yup";

const contactSchema = yup
    .object({
        email: yup.string().email().required("Email is required*"),
        mobile: yup.string().required("contact number is required*"),

    })
    .required();

export default contactSchema;