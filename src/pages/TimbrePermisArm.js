import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button
} from "react-bootstrap";

export default function () {
  const submitHandler = (e) => {
    e.preventDefault();
  };
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
    </div>
  );
}
