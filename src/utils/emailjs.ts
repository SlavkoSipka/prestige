import emailjs from '@emailjs/browser';

// Initialize EmailJS with your User ID
emailjs.init("wX5m_cS_3-DzsGiwM");

interface EmailParams {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      "service_vi9w28v",
      "template_dqnxjb9",
      {
        from_name: params.name,
        from_email: params.email,
        phone_number: params.phone,
        message: params.message || "Zahtev za informacije",
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};