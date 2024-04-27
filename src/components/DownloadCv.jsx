import React from 'react'
import cv from "../assets/VinayakD_resume.pdf"

const DownloadCv = () => {

  const DownloadCVButton = ()=>{
    // const cvUrl = cv
    // window.open(cvUrl, "_blank");
    const downloadLink = document.createElement("a");
    downloadLink.href = cv
    downloadLink.download = "VinayakD_resume.pdf";
    downloadLink.click();
  } 
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white dont-bold py-2 px-4 rounded mt-3' onClick={DownloadCVButton}>
        Download CV
    </button>
  )
}

export default DownloadCv
