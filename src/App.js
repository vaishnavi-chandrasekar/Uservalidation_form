import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const validateData = (data) => {
    const errors = {};
    if (!data.Name) {
      errors.Name = "Please enter the username";
    } else if (data.Name.length < 3) {
      errors.Name = "mimimum 3 characters are required";
    }
    if (!data.Email) {
      errors.Email = "Please Enter Email ID";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.Email)) {
      errors.Email = "Invalid email address";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      PhoneNumber: "",
      Country: "",
      City: "",
      State: "",
      Message: "",
    },
    validate: validateData,
    onSubmit: (values) => {
      alert("Logged in Successfully");
    },
  });

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <h1>User Registration</h1>
          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={formik.values.Name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>{" "}
          {formik.touched.Name && formik.errors.Name ? (
            <span style={{ color: "red" }}>{formik.errors.Name}</span>
          ) : null}
          <br />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></input>{" "}
          {formik.touched.Email && formik.errors.Email ? (
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
          ) : null}
          <br />
          <input type="Number" placeholder="Phone Number" required></input>
          <br />
          <input type="text" placeholder="Country" required></input>
          <br />
          <input type="text" placeholder="city" required></input>
          <br />
          <input type="state" placeholder="State" required></input>
          <br />
          <input
            type="message"
            className="message"
            placeholder="Message"
            required
          ></input><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
// const element = <Validate></Validate>;

export default App;
