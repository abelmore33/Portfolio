import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdfFile from "../assets/Aaron Belmore Resume.pdf";

const Resume = () => {
  const file = "../assets/Aaron Belmore Resume.pdf";
  return (
    <div>
      <h1>Resume</h1>
      <div className="resume">
        <Document file={pdfFile} renderMode="canvas">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
