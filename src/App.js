import "./App.css";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from "react-bootstrap";
function App() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
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
