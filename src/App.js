import "./App.css";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from "react-bootstrap";
function App() {
  //https://stackblitz.com/edit/react-docxtemplater-example?file=app.js
  const submitHandler = (e) => {
    e.preventDefault();
    /*loadFile('', function(error, content){
      if(error)
        throw error;
    })*/
    console.log(e);
  };
  function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback);
  }
  return (
    <div className="App">
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <FormLabel>الاسم</FormLabel>
          <FormControl type="text" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>CIN</FormLabel>
          <FormControl type="text" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>رخصة الصيد</FormLabel>
          <FormControl type="text" required />
        </Form.Group>
        <Form.Group>
          <FormLabel>رخصة حمل السلاح</FormLabel>
          <FormControl type="text" required />
        </Form.Group>
        <Button type="Submit">حفظ</Button>
      </Form>
    </div>
  );
}

export default App;
