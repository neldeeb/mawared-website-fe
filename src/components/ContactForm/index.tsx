import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { sendEmailMutation } from "../../graphql/mutations";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactForm = () => {
  // useStates
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company_name: "",
    job_title: "",
    number_of_employees: "",
  });
  const [formErrorMessage, setFormErrorMessage] = useState("");

  // handle form validation function
  const handleFormValidation = () => {
    // for email validation format
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      formData?.email?.match(regex) &&
      formData?.name != "" &&
      formData?.phone != "" &&
      formData?.message != "" &&
      formData?.company_name != "" &&
      formData?.job_title != "" &&
      formData?.number_of_employees != ""
    ) {
      return true;
    } else {
      // set error message
      setFormErrorMessage(
        "Please fill all required fields or type right email format."
      );
      return false;
    }
  };

  // handle form submit function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // client side validation
    if (!handleFormValidation()) {
      return;
    } else {
      // reset form error message
      setFormErrorMessage("");

      // send email
      handleSendMail();
    }
  };

  // Start of handle send message mutation
  const handleSendMail = () => {
    sendEmail({
      variables: {
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        message: formData?.message,
        company_name: formData?.company_name,
        job_title: formData?.job_title,
        number_of_employees: formData?.number_of_employees,
      },
    })
      .then((response) => {
        if (response?.errors) {
          // trigger toaster
          toast.error(
            "There is something went wrong, please try again later.",
            {
              style: {
                border: "1px solid #f64c4c",
                padding: "10px",
                color: "#f64c4c",
              },
              iconTheme: {
                primary: "#f64c4c",
                secondary: "#fff",
              },
            }
          );
        }
      })
      .catch((error) => {
        // trigger toaster
        toast.error(error?.message ?? "Something went wrong", {
          style: {
            border: "1px solid #f64c4c",
            padding: "10px",
            color: "#f64c4c",
          },
          iconTheme: {
            primary: "#f64c4c",
            secondary: "#fff",
          },
        });
        console.log("catch", { error });
      });
  };

  const [sendEmail, { loading: isSendEmailLoading }] = useMutation(
    sendEmailMutation,
    {
      onCompleted: (data) => {
        if (data?.sendContactEmail?.status === "success") {
          // trigger toaster
          toast.success(
            "Your email has been sent successfully, we appreciate you contacting us.",
            {
              style: {
                border: "1px solid #27b40c",
                padding: "10px",
                color: "#27b40c",
              },
              iconTheme: {
                primary: "#27b40c",
                secondary: "#fff",
              },
            }
          );
        }
      },
    }
  );
  // End of handle send message mutation

  return (
    <div
      className="mx-auto custom-contact-card-style overflow-hidden mt-1 mb-20 md:mb-0"
      style={{ boxShadow: "0px 0px 20px 0px #0000001A" }}
    >
      <form className="p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="space-y-3">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="block text-base font-normal text-[#191919]"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                placeholder="Type your full name"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="phone"
                className="block text-base font-normal text-[#191919]"
              >
                Phone
              </label>

              <PhoneInput
                defaultCountry="EG"
                type="tel"
                id="phone"
                value={formData?.phone}
                onChange={(value) =>
                  setFormData({ ...formData, phone: `${value}` })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB]"
                placeholder="(000) 000-0000"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="company_name"
                className="block text-base font-normal text-[#191919]"
              >
                Company Name
              </label>

              <input
                type="text"
                id="company_name"
                value={formData?.company_name}
                onChange={(e) =>
                  setFormData({ ...formData, company_name: e.target.value })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                placeholder="Type your company name"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="job_title"
                className="block text-base font-normal text-[#191919]"
              >
                Job Title
              </label>

              <input
                type="text"
                id="job_title"
                value={formData?.job_title}
                onChange={(e) =>
                  setFormData({ ...formData, job_title: e.target.value })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                placeholder="Type your job title"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="block text-base font-normal text-[#191919]"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                placeholder="Type your email"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="number_of_employees"
                className="block text-base font-normal text-[#191919]"
              >
                Number of employees
              </label>

              <input
                type="number"
                id="number_of_employees"
                value={formData.number_of_employees}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    number_of_employees: e.target.value,
                  })
                }
                className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                placeholder="Type number of employees"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <label
            htmlFor="message"
            className="block text-base font-normal text-[#191919]"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={3}
            className="w-full text-sm lg:text-base px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9] resize-none"
            placeholder="Type your message"
          />
        </div>

        {formErrorMessage && (
          <div className="text-base font-normal text-[#f64c4c] mt-6">
            {formErrorMessage}
          </div>
        )}

        <div className="flex flex-col justify-center items-center lg:flex-row gap-4 mt-8">
          <Button
            type="submit"
            className="w-10/12 custom-linear-bg-blue-wavy-color-style py-2 px-6 text-white font-medium text-base h-12"
            onClick={handleSubmit}
          >
            {isSendEmailLoading ? (
              <ColorRing
                visible={isSendEmailLoading}
                wrapperStyle={{ height: "2rem", width: "2rem" }}
                colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
              />
            ) : (
              "Send"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
