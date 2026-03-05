import axios from "axios";

export const ContactUs = async (data: any) => {
  const ContactUsUrl = `https://xeniamailsender.onrender.com/aider/send-email`;
  const response = await axios.post(ContactUsUrl, data);
  return response;
};

export const DealerRegistration = async (data: any) => {
  const DealerRegistrationUrl = `https://xeniamailsender.onrender.com/aider/register-dealer`;
  const response = await axios.post(DealerRegistrationUrl, data);
  return response;
};

export const WarrantyRegistration = async (data: any) => {
  const WarrantyRegistrationUrl = `https://xeniamailsender.onrender.com/aider/register-warranty`;
  const response = await axios.post(WarrantyRegistrationUrl, data);
  return response;
};
