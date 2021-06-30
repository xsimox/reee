import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";

export default function DocxTPL(doc, data, name) {
  loadFile("test.docx", function (error, content) {
    if (error) console.log(error);
    let pzip = new PizZip(content);
    let doc = new Docxtemplater(pzip, {
      paragraphLoop: true,
      linebreaks: true
    });
    let formData = new FormData(e.target);
    doc.setData({
      nom: formData.get("nom"),
      cin: formData.get("cin"),
      permis: formData.get("permis"),
      arm: formData.get("arm")
    });
    try {
      doc.render();
    } catch (err) {
      console.log(err);
    }
    var out = doc.getZip().generate({
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    }); //Output the document using Data-URI
    saveAs(out, "output.docx");
  });
}

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}
