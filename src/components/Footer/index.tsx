const Footer = () => {
  return (
    <footer className="bg-[#313030]">
      <div className="flex flex-col px-11 lg:px-24">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-11 gap-10">
          <img
            src="./img/mawared-white-logo.png"
            alt="mawared-logo"
            className="h-8 lg:h-10"
          />

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.qu_attendance"
              target="_blank"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="./img/google-play-icon.png"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/mawared-hr/id1572304856"
              target="_blank"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="./img/apple-store-icon.png"
                alt="Download on App Store"
                className="h-12"
              />
            </a>
            <a
              href="https://install.appcenter.ms/users/aelbawab-arabiclocalizer.com/apps/serene-hr/distribution_groups/public/releases/12"
              target="_blank"
              className="hover:opacity-90 transition-opacity"
            >
              <img
                src="./img/app-gallery-icon.png"
                alt="Explore it on AppGallery"
                className="h-12"
              />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-sm font-normal py-12">
          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/location-icon.png" alt="location-icon" />
            24 Aziz Koheil st from Abdel Hamid AlDeeb St., Tharwat, Alexandria,
            21599, Egypt.
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/location-icon.png" alt="location-icon" />
            22 Goal Gamal St. Off Gamaet ElDewal El Arabeya St., Mohandeseen,
            Giza, Egypt.
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/location-icon.png" alt="location-icon" />
            Al Kunoz Business Center Building C, 3rd floor, Dubai, UAE.
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/location-icon.png" alt="location-icon" />
            257 Maynard Summit Way, Cary, NC 27511, USA.
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/call-icon.png" alt="call-icon" />
            (+20) 03 5849945
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/call-icon.png" alt="call-icon" />
            (+20) 10 25285760
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/call-icon.png" alt="call-icon" />
            (+971) 50 460 2733
          </div>

          <div className="flex items-center gap-6 text-white opacity-70">
            <img src="./img/email-icon.png" alt="email-icon" />
            info@mawaredhr.com
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left bg-[#00000033] px-24 gap-0 md:gap-10">
        <p className="text-white opacity-70 text-sm font-normal my-4">
          All rights reserved for MAWARED HR {new Date().getFullYear()} ©
        </p>

        <div className="flex items-center gap-4 my-4">
          <a
            href="https://www.facebook.com/MawaredHR"
            target="_blank"
            className="hover:opacity-90 transition-opacity"
          >
            <img src="./img/facebook-icon.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/mawaredhrsystem"
            target="_blank"
            className="hover:opacity-90 transition-opacity"
          >
            <img src="./img/instgram-icon.png" alt="instgram" />
          </a>
          <a
            href="https://eg.linkedin.com/company/mawaredhr-system"
            target="_blank"
            className="hover:opacity-90 transition-opacity"
          >
            <img src="./img/linkedn-icon.png" alt="linkedn" />
          </a>
        </div>

        <p className="text-white opacity-70 text-sm font-normal my-4">
          Privacy policy and using conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
