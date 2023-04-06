import { useRef } from "react";
import jsPDF from "jspdf";
import "./view.scss";
import { Education, Experience, Header } from "../../layouts/Display";

const View = () => {
    const pdfRef: any = useRef(null);

    const generatePdf = () => {
        const pdf = new jsPDF("p", "pt", "letter");

        pdf.html(pdfRef.current, {
            callback: () => {
                pdf.save("my-rezumee.pdf");
            },
        });
    };

    return (
        <div className="view">
            <div className="sheet" ref={pdfRef}>
                <Header />
                <Experience />
                <Education />
            </div>
            <button className="print-button" onClick={generatePdf}>
                Print
            </button>
        </div>
    );
};

export default View;
