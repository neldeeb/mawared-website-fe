const Footer = () => {
  return (
    <footer className="bg-[#313030]">
      <div className="flex flex-col px-24">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-11">
          <div className="text-white text-2xl font-bold">
            <img src="/img/mawared-white-logo.png" alt="mawared-logo" />
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img
                src="/img/google-play-icon.png"
                alt="Get it on Google Play"
              />
            </a>
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img
                src="/img/apple-store-icon.png"
                alt="Download on App Store"
              />
            </a>
            <a href="#" className="hover:opacity-90 transition-opacity">
              <img
                src="/img/app-gallery-icon.png"
                alt="Explore it on AppGallery"
              />
            </a>
          </div>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base font-normal py-12">
          <div className="flex items-center gap-6 text-white">
            <img src="/img/location-icon.png" alt="location-icon" />
            24 Aziz Koheil st from Abdel Hamid AlDeeb St., Tharwat, Alexandria,
            21599,Egypt.
          </div>

          <div className="flex items-center gap-6 text-white">
            <img src="/img/location-icon.png" alt="location-icon" />
            22 Goal Gamal St. Off Gamaet ElDewal El Arabeya St., Mohandeseen,
            Giza, Egypt.
          </div>

          <div className="flex items-center gap-6 text-white">
            <img src="/img/location-icon.png" alt="location-icon" />
            Al Kunoz Business Center Building C, 3rd floor, Dubai, UAE.
          </div>

          <div className="flex items-center gap-6 text-white">
            <img src="/img/call-icon.png" alt="call-icon" />
            (+20) 03 5849945
          </div>

          <div className="flex items-center gap-6 text-white">
            <img src="/img/email-icon.png" alt="email-icon" />
            info@mawaredhr.com
          </div>

          <div className="flex items-center gap-6 text-white">
            <img src="/img/call-icon.png" alt="call-icon" />
            (+971) 050 460 2733
          </div>
        </div>

        {/* Bottom section */}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center bg-[#00000033] px-24 h-[81px]">
        <p className="text-white text-base font-normal">
          All rights reserved for MAWARED HR 2025 ©
        </p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-90 transition-opacity">
            <img src="/img/facebook-icon.png" alt="facebook" />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <img src="/img/instgram-icon.png" alt="instgram" />
          </a>
          <a href="#" className="hover:opacity-90 transition-opacity">
            <img src="/img/linkedn-icon.png" alt="linkedn" />
          </a>
        </div>

        <p className="text-white text-base font-normal">
          Privacy policy and using conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
