import Layout from "@/components/Layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@apollo/client";
import { sendEmailMutation } from "../../graphql/mutations";
import toast from "react-hot-toast";
import { ColorRing } from "react-loader-spinner";

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
      <div className="flex flex-col justify-center items-center p-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#303030] flex items-center justify-center">
            Let's
            <span className="text-customBlueWaveyColor mx-2">Connect</span> And
            Collaborate!
            <img
              src="./img/rocket-icon.png"
              alt="rocket-icon"
              className="h-10 mx-4 animate-pulse"
            />
          </h2>

          <p className="text-[#303030] font-medium text-2xl mt-3">
            Reach out to us for inquiries, support, or to explore how we can
            help your business thrive.
          </p>
        </div>

        <div className="w-full custom-contact-card-style overflow-hidden my-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <img
              src="./img/contact-img.png"
              alt="contact-img"
              className="h-full"
            />

            <form className="p-12 bg-[#F3F5F9]">
              <div className="space-y-14">
                <div className="flex items-center">
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

                <div className="flex items-center">
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

                <div className="flex items-center">
                  <label
                    htmlFor="phone"
                    className="block text-base font-normal text-[#191919] me-14"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#31303066] rounded-[8px] focus:ring-[#23AAEB] focus:border-[#23AAEB] bg-[#F3F5F9]"
                    placeholder="(000) 000-0000"
                  />
                </div>

                <div className="flex items-center">
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
                    rows={14}
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

              <div className="flex gap-4 mt-16">
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
