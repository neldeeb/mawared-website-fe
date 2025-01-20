import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { sendEmailMutation } from "../../graphql/mutations";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ContactUsPage = () => {
  // useStates
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      formData?.message != ""
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

  // handle reset form function
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Start of handle send message mutation
  const handleSendMail = () => {
    sendEmail({
      variables: {
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone,
        message: formData?.message,
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

          // handle reset form
          handleReset();
        }
      },
    }
  );
  // End of handle send message mutation

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center p-11 lg:p-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#303030] flex items-center flex-col lg:flex-row gap-2 lg:gap-0 justify-center">
            Let's
            <span className="text-customBlueWaveyColor mx-2">Connect</span> And
            Collaborate!
            <img
              src="./img/rocket-icon.png"
              alt="rocket-icon"
              className="h-10 mx-4 animate-pulse"
            />
          </h2>

          <p className="text-[#303030] font-medium text-lg lg:text-2xl mt-3">
            Reach out to us for inquiries, support, or to explore how we can
            help your business thrive.
          </p>
        </div>

        <div className="xl:w-5/6 custom-contact-card-style overflow-hidden my-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div
              style={{
                backgroundImage: `url(./img/contact-us-bg.png)`,
              }}
              className="bg-[#303030] bg-no-repeat bg-cover p-6 lg:p-16"
            >
              <h3 className="font-semibold text-white text-xl lg:text-2xl">
                Get a free experience
              </h3>

              <hr className="my-7 w-4/5" />

              <div className="flex mt-11">
                <div>
                  <img src="./img/call-white-icon.png" alt="call-white-icon" />
                </div>

                <div className="flex flex-col gap-4 mx-3">
                  <p className="font-normal text-xs lg:text-base text-white">
                    (+971) 50 460 2733
                  </p>
                  <p className="font-normal text-xs lg:text-base text-white">
                    (+20) 03 5849945
                  </p>
                  <p className="font-normal text-xs lg:text-base text-white">
                    (+20) 10 25285760
                  </p>
                </div>
              </div>

              <div className="flex my-11 items-center">
                <div>
                  <img src="./img/email-whit-icon.png" alt="email-whit-icon" />
                </div>

                <div className="flex flex-col gap-4 mx-3">
                  <p className="font-normal text-xs lg:text-base text-white">
                    info@mawaredhr.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-3">
                  <img
                    src="./img/white-location-icon.png"
                    alt="white-location-icon"
                  />
                </div>

                <div className="flex flex-col gap-4 mx-7">
                  <p className="font-normal text-xs lg:text-base text-white">
                    • Al Kunoz Business Center Building C, 3rd floor,
                    <span className="ms-2 font-bold">Dubai, UAE.</span>
                  </p>
                  <p className="font-normal text-xs lg:text-base text-white">
                    • 257 Maynard Summit Way, Cary,
                    <span className="ms-2 font-bold">NC 27511, USA.</span>
                  </p>
                  <p className="font-normal text-xs lg:text-base text-white">
                    • 22 Goal Gamal St. Off Gamaet ElDewal El Arabeya St.,
                    Mohandeseen,
                    <span className="ms-2 font-bold">Giza, Egypt.</span>
                  </p>
                  <p className="font-normal text-xs lg:text-base text-white">
                    • 24 Aziz Koheil st from Abdel Hamid AlDeeb St., Tharwat,
                    <span className="ms-2 font-bold">Alexandria, Egypt.</span>
                  </p>
                </div>
              </div>
            </div>

            <form className="p-12 bg-[#F3F5F9]">
              <div className="space-y-8">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center">
                  <label
                    htmlFor="name"
                    className="block text-base font-normal text-[#191919] me-14"
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
                    className="w-full px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                    placeholder="Type your full name"
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center">
                  <label
                    htmlFor="email"
                    className="block text-base font-normal text-[#191919] me-16"
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
                    className="w-full px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                    placeholder="Type your email"
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center">
                  <label
                    htmlFor="phone"
                    className="block text-base font-normal text-[#191919] me-14"
                  >
                    Phone
                  </label>

                  <PhoneInput
                    defaultCountry="US"
                    type="tel"
                    id="phone"
                    value={formData?.phone}
                    onChange={(value) =>
                      setFormData({ ...formData, phone: `${value}` })
                    }
                    className="w-full px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB]"
                    placeholder="(000) 000-0000"
                  />
                </div>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-start lg:items-center">
                  <label
                    htmlFor="message"
                    className="block text-base font-normal text-[#191919] me-9"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={7}
                    className="w-full px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9] resize-none"
                    placeholder="Type your message"
                  />
                </div>
              </div>

              {formErrorMessage && (
                <div className="text-base font-normal text-[#f64c4c] mt-6">
                  {formErrorMessage}
                </div>
              )}

              <div className="flex flex-col lg:flex-row gap-4 mt-16">
                <Button
                  type="button"
                  onClick={handleReset}
                  disabled={isSendEmailLoading}
                  className="flex-1 bg-[#31303033] hover:bg-[#31303033] py-2 px-6 font-medium text-base text-[#313030] h-12"
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  className="w-full custom-linear-bg-blue-wavy-color-style py-2 px-6 text-white font-medium text-base h-12"
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
        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
