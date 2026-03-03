import axios from "axios";

export const ContactUs = async (data: any) => {
  const ContactUsUrl = `https://xeniamailsender.onrender.com/aider/send-email`;
  const response = await axios.post(ContactUsUrl, data);
  return response;
};
