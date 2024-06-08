import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "../App.css";
function ImageSlider({ url, limits = 5, pages = 1 }) {

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const [download, setDownload] = useState("");
    const [fileName, setFileName] = useState("");

    // To load data from api
    async function loadImages(url) {
        try {
            setLoading(true);

            const response = await fetch(`${url}?page=${pages}&limit=${limits}`);

            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }



        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);
        }
    }


    useEffect(() => {
        if (url !== "") loadImages(url);
    }, [url]);

    console.log("this is images value final:", images);


    // If data is loading then do this
    if (loading) {
        return <div>Loading Data Please Wait</div>;
    }
    // If any kind of error message then do this
    if (errorMsg !== null) {
        return <div>Something Went Wrong.{errorMsg}</div>;
    }

    // console.log("This is final data of Images:", images);

    const handleLeftClick = () => {

        setCurrentImage(currentImage == 0 ? images.length - 1 : currentImage - 1);
        return true;
    };
    const handleRightClick = (getCurrentIndex) => {
        setCurrentImage(currentImage == images.length - 1 ? 0 : currentImage + 1);

        return true;

    };

    const handleDownload = (url, fileName) => {
        setDownload(url);
        console.log("Image are downloading");
        console.log("Image name ", fileName);
        console.log("Image url: ", url);
        setFileName(fileName);



    };


    return (
        <>
            <div className='slider-container'>

                <BsArrowLeftCircleFill
                    className='arrow arrow-left'
                    onClick={handleLeftClick}

                />

                {
                    images && images.length > 0 ?

                        images.map((eachImage, index) => (

                            <div className="wrapper" key={index}>
                                <img
                                    src={eachImage.download_url}
                                    alt={eachImage.author}
                                    key={eachImage.id}
                                    className={currentImage == index ? 'current-image' : 'current-image hide-current-image '}
                                    onClick={() => (handleDownload(eachImage.url, eachImage.author))}
                                />


                            </div>


                        ))


                        : null
                }

                <BsArrowRightCircleFill
                    className='arrow arrow-right'
                    onClick={handleRightClick}

                />

                <div className='indicator-container'>
                    {
                        images && images.length > 0 ?

                            images.map((_, index) => (
                                <button
                                    key={index}
                                    className={currentImage === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                                    onClick={() => setCurrentImage(index)}
                                >
                                </button>

                            ))
                            : null
                    }




                </div>





            </div>
            <button className='btn download' onClick={handleDownload}><a href={download} download={fileName} >
                Download</a></button>

            {/* {
                images && images.length>0?
                images.map((eachImage)=>(
               

                ))
                
                
                :null
            } */}






            {/* Thumbnai images */}

            <div className='thumbnail row'>
                {
                    images && images.length > 0 ?
                        images.map((eachImage, index) => (

                            <div className='column'
                                key={index}
                            >
                                <img
                                    key={eachImage.id}
                                    alt={eachImage.author}
                                    src={eachImage.download_url}
                                    // className="demo cursor img"
                                    className={(currentImage == index ? 'clear-demo' : 'blur-demo') + " demo cursor img"}
                                    onClick={() => setCurrentImage(index)}
                                />
                            </div>

                        ))

                        : null

                }


            </div>
        </>
    );
}

export default ImageSlider;

