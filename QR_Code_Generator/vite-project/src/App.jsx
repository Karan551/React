import { useRef, useState } from 'react';
import React from 'react';
import './App.css';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import { toJpeg } from "html-to-image";
import Heading from './Heading';


function App() {
  const [input, setInput] = useState("");
  const [qrCode, setQRCode] = useState("");
  const [qrColor, setQRColor] = useState("#000");
  const [isDownload, setIsDownload] = useState(false);
  const qrCodeRef = useRef(null);
  const backgroundImageLink = "https://cdn.pixabay.com/photo/2022/08/05/20/23/hydrangeas-7367535_960_720.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input && input.trim !== "") {
      setQRCode(input);
      setIsDownload(true);
      setInput("");
    }
  };


  const downLoadQR = () => {
    htmlToImage.toJpeg(qrCodeRef.current, { cacheBust: true, style: { background: "white", width: "100%", height: "100%" } })
      .then(function (dataUrl) {
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;

        downloadLink.download = 'YourQRCode.jpeg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      )
      .catch(
        function (error) {
          console.error('Error generating QR code image:', error);
        }
      );


  };

  const colorArray = ["aqua", "aquamarine", "blue", "black", "blueviolet", "brown", "burlywood", "chartreuse", "coral", "cornflowerblue", "chocolate", "crimson", "darkorange", "darkblue", "darkgreen", "darkseagreen",
    , "dodgerblue", "fuchsia", "gold", "gray", "green", "orange", "pink", "purple", "red", "yellow"];


  return (
    <>
      <main className='min-h-screen flex flex-col justify-center items-center bg-gray-100 w-full bg-cover bg-no-repeat  '
        style={{
          backgroundImage: `url(${backgroundImageLink})`
        }}

      >

          <Heading />
 
        <div className='px-9 py-4 backdrop-blur border-2 border-gray-500 rounded-xl my-2'>
          <form action="#" className="flex flex-col mx-auto my-2 bg-white  rounded-lg px-4 py-5 transition-colors transform hover:scale-110 sm:w- sm:flex-row spac-y-2"
            onSubmit={handleSubmit}
          >
            <div className='sm:w-2/3'>


              <input
                type="text"
                required
                className='text-2xl rounded font-semibold px-4 py-3 w-full border bg-white border-blue-300 sm:rounded-l-lg outline-0 placeholder-slate-300 focus:outline-none
            focus:border-blue-700 focus:ring-blue-700
            sm:text-2xl 
            '

                placeholder='Enter Text Here....'
                value={input}
                onChange={(e) => setInput(e.target.value)}

              />
            </div>
            <div className="button-container w-full sm:w-1/3 my-2 sm:m-0">
              <button type='submit'
                className='text-white  w-full  rounded text-xl inline-block p-4 font-semibold bg-teal-500 sm:rounded-r-lg hover:bg-teal-700 text-center sm:text-lg outline-0 border-0 shadow-none hover:cursor-pointer'


                disabled={(input && input.trim()) !== "" ? false : true}
                title='Please Input Something input Field'
              >Create QR Code</button>
            </div>
          </form>
          <section className='h-auto max-w-72  mx-auto mt-4' id="qrCode-section">
            <div id="qrCode"
              ref={qrCodeRef}
              className='h-auto w-full px-6 py-6 bg-white rounded-lg'>
              <QRCode
                value={qrCode}
                title="Generated QR CODE"
                bgColor='#ffffff'
                fgColor={qrColor}
                className='w-full max-w-full h-auto'
              />
            </div>
          </section>
          <section className='flex flex-col mx-auto my-4 space-x-3  rounded-lg px-4 py-2 justify-center items-center sm:flex-row bg-white transition-colors transform hover:scale-110'
            id="download-color-section"
          >
            <div className='my-2 w-full mx-auto sm:my-3'>

              <a href="#" id="link"
                onClick={() => (isDownload ? downLoadQR() : setIsDownload(false))}><button className={`block w-full px-6 py-2 text-[#f5f5f5] ${isDownload ? "bg-sky-500 hover:bg-sky-700 hover:cursor-pointer" : "bg-sky-300 hover:cursor-not-allowed hover:bg-sky-400"} font-sans font-semibold text-3xl rounded-lg`}
                  title='Please Generate QR Code First.'
                >Download</button>
              </a>
            </div>
            <div className='w-full mx-auto my-2 sm:my-3'>
              <select name="color" id="color"


                className={`block px-6 py-3 w-full text-[#000] 
              ${isDownload ? "bg-gray-300 cursor-pointer" : "bg-zinc-200 hover:cursor-not-allowed hover:bg-zinc-300"}
               font-sans font-semibold text-2xl rounded-lg sm:text-2xl sm:px-2`}
                value={qrColor}
                onChange={(e) => (setQRColor(e.target.value))}
                disabled={!isDownload}
                title='Please Generate QR Code First.'

              >
                <option className='hover:cursor-pointer'>---Select Color---</option>
                {colorArray.map((eachColor, index) => (

                  <option key={index} value={eachColor}>{eachColor[0].toUpperCase() + eachColor.slice(1,)}</option>

                ))
                }

              </select>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
