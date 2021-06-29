import "./App.css";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from "react-bootstrap";
import { useState } from "react";
function App() {
  //https://stackblitz.com/edit/react-docxtemplater-example?file=app.js
  const [ifr, setIfr] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    loadFile('http://localhost:3000/test.docx', function(error, content){
      if(error)
        console.log(error);
      let pzip = new PizZip(content); 
      let doc = new Docxtemplater(pzip, {
        paragraphLoop: true,
        linebreaks: true
      })
      let formData = new FormData(e.target)
      doc.setData({
        nom : formData.get("nom"),
        cin : formData.get("cin"),
        permis : formData.get("permis"),
        arm : formData.get("arm")
      })
      try{
        doc.render();
      }catch(err) {
        console.log(err);
      }
      var out = doc.getZip().generate({
        type: 'blob',
        mimeType:
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      }); //Output the document using Data-URI
      //setIfr(out)
      //console.log(out)
      //let file = new FileReader();
      //file.readAsDataURL(out);
     // console.log(file);
      const fileUrl = URL.createObjectURL(out)
      setIfr(fileUrl);
      console.log(fileUrl);
     //saveAs(out, 'output.docx');
     //const fileURL = window.URL.createObjectURL(file);
    })
    
  };
  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }
  return (
    <div className="App">
      <div className="container">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <FormLabel>الاسم</FormLabel>
          <FormControl type="text" name="nom" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>CIN</FormLabel>
          <FormControl type="text" name="cin" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>رخصة الصيد</FormLabel>
          <FormControl type="text" name="permis" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>رخصة حمل السلاح</FormLabel>
          <FormControl type="text" name="arm" required />
        </Form.Group>
        <Button type="Submit">حفظ</Button>
      </Form>
      </div>
      {ifr && <iframe src={'https://view.officeapps.live.com/op/embed.aspx?src='+ifr.result} width='100%' height='100%' frameborder='0'></iframe>}
    </div>
  );
}

export default App;
