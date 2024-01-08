import axios from "axios";
import { useState } from "react";

const BankIDComponent = () => {
  const ExpressAPI = "/api/sign";
  const BankIDStatusAPI = "/api/status";
  const [BankIDPCUrl, setBankIDPCUrl] = useState("");

  const handleBankIDButtonClick = async () => {
    try {
      const response = await axios.post(ExpressAPI, {
        userVisibleData: "Text to sign - Wallenberg",
      });

      // Log the entire response
      console.log("Response:", response);
      console.log("TokenURLPC", response.data.autostartUrlPc);
      //   console.log("TokenURLMobile", response.data.autostartUrlMobile);
      console.log("QRImageURL", response.data.QrImageUrl);

      const autostartUrlPc = response.data.autostartUrlPc;
      setBankIDPCUrl(autostartUrlPc);

      // Open autostart URL's in new tab
      window.open(autostartUrlPc, "_blank");
      //   window.open(response.data.QrImageUrl, "_blank");

      // Handle the QRImage
      const QRImageElement = document.getElementById("qrImage");
      if (QRImageElement) {
        QRImageElement.src = response.data.QrImageUrl;
      }

      // Extract the order reference from the response
      const orderRef = response.data.apiCallResponse.Response.OrderRef;

      // After initiating BankID, start polling for status
      pollForStatus(orderRef);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const pollForStatus = async (orderRef) => {
    try {
      const statusResponse = await axios.post(BankIDStatusAPI, { orderRef });

      // Log the status response
      console.log("Status Response:", statusResponse);

      // Check the status and perform actions accordingly
      const status = statusResponse.data.apiCallResponse.Response.Status;

      if (status === "complete") {
        // BankID authentication is complete, Sets User data
        const userData =
          statusResponse.data.apiCallResponse.Response.CompletionData.user;
        console.log("User Data:", userData);
      } else if (status === "pending") {
        // BankID authentication is still pending, continue polling
        setTimeout(() => {
          pollForStatus(orderRef);
        }, 2000); // Adjust polling interval Atm 2 sec
      } else if (status === "failed") {
        console.log("Status Failed");
      } else {
        console.log("Something Went Wrong With Status Check");
      }
    } catch (error) {
      console.error("Error polling for status:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleBankIDButtonClick}
        type="button"
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600 mx-auto block"
      >
        BankID
      </button>

      {/* Display the QRImage on the page */}
      <div className="flex justify-center items-center pt-12">
        <img id="qrImage" alt="QR Code" />
        {BankIDPCUrl && (
          <a href={BankIDPCUrl} target="_blank" rel="noopener noreferrer">
            Länk för pc
          </a>
        )}
      </div>
    </>
  );
};

export default BankIDComponent;
