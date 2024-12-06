const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 mt-8 w-full">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My App. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  