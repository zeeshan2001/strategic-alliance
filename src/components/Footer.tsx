import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f7f2] text-[#7b8089] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}


        {/* Content Section */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold">MISA</h3>
            <p className="text-lg">Investment Dynamo</p>
            <a href="mailto:dbi@misa.gov.sa" className="text-blue-400">dbi@misa.gov.sa</a>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#123235] hover:underline">Play with Data</a></li>
              <li><a href="#" className="hover:text-[#123235] hover:underline">Reports</a></li>
              <li><a href="#" className="hover:text-[#123235] hover:underline">Learn</a></li>
              <li><a href="#" className="hover:text-[#123235] hover:underline">Insights</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#123235] hover:underline">Terms and Conditions</a></li>
              <li><a href="#" className="hover:text-[#123235] hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#123235] hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm text-">
          <p>&copy; 2024 MISA. All Rights Reserved. &nbsp; | &nbsp;<a href="#" className="hover:text-[#123235] hover:underline">Privacy</a> &nbsp;|&nbsp; <a href="#" className="hover:text-[#123235] hover:underline">Accessibility</a> &nbsp;|&nbsp; <a href="#" className="hover:text-[#123235] hover:underline">Digital Accessibility</a> &nbsp;|&nbsp; <a href="#" className="hover:text-[#123235] hover:underline">Report Copyright</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
