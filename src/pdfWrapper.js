import html2pdf from "html2pdf.js";

function createPDF(element)
{

    html2pdf(element[0],{
        filename:'report.pdf',
        jsPDF:{format:"a4"},
        pagebreak:{
            after:[".print_container"]
        }
    });
}






export default createPDF;