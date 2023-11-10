const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-gradient-to-r from-black to-gray-700 px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-5 ">
        <div className="flex flex-col text-white">
          <p class="font-bold">Reader's Guide</p>
          <p>Featured Blogs</p>
          <p>Most viewed</p>
          <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
          <p class="font-bold">Contact Us</p>
          <p>Forum</p>
          <p>Mail us</p>
          <p>Donate</p>
        </div>

        <div className="flex flex-col text-white">
          <p class="font-bold">About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <p className="py-1 pb-2 text-center text-white text-sm font-medium bg-black">
        All rights reserved @PenCraft 2023
      </p>
    </>
  );
};

export default Footer;
