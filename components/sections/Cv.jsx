import React from "react";

const Cv = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Maxruo.pdf";
        link.download = "Maxruo.pdf";
        link.click();
      };
      
  return (
    <section id="Cv">
    <div className="flex items-center justify-center  py-16">
      <div className="max-w-screen-lg w-full mx-auto  rounded-lg shadow-lg p-8 md:p-16">
        <div className="flex justify-end mb-8">
          <img src="https://github.com/MaxRuotsalainen/multi-feature-react-native/raw/main/ProjectImg/maxruo.png" alt="Profile" className="h-16 w-16 rounded-full" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white-800 mb-4">Want to know more? Download my Resume</h2>
          <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
            Download
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Cv;
