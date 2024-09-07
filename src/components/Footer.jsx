import reactLogo from "../assets/icons/favicon.ico";

const Footer = () => {
  return (
    <div
      className={
        "w-full bg-gray-900 text-gray-100 text-lg py-3 flex flex-col justify-center"
      }
    >
      <div className="flex flex-row justify-center text-center">
        <p>Made with &nbsp;</p>
        <img alt="react" src={reactLogo} className="w-5 h-5 mt-1" />
        <p>&nbsp;by Balaji V</p>
      </div>
      <p className="text-center">
        Copyright &#169; {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
