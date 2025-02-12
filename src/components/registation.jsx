import { useState } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const [foodcolor, setFoodcolor] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  const colorselector = [
    { name: "red", code: "#FF0000" },
    { name: "blue", code: "#0000FF" },
    { name: "green", code: "#008000" },
    { name: "yellow", code: "#FFFF00" },
    { name: "purple", code: "#800080" },
    { name: "orange", code: "#FFA500" },
    { name: "black", code: "#000000" },
    { name: "white", code: "#FFFFFF" },
    { name: "lemon", code: "#FFF700" },
    { name: "peach", code: "#FFDAB9" },
  ];

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const colorselected = (colorName) => {
    setFoodcolor(colorName);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!userInfo.name || !userInfo.email || !foodcolor) {
      alert("Please fill in all fields!");
      return;
    }

    const templateParams = {
      user_name: userInfo.name,
      user_email: userInfo.email,
      selected_color: foodcolor,
      message: "Thank you for registering!" +userInfo.name + "\n" + "Your selected color is: " + foodcolor,
    };

    emailjs
      .send("service_vtmrbzd", "template_1bi7ipv", templateParams, "Ji33v0GarIE0wHe3q")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Error sending email.");
      });
  };

  return (
    <div className="App">
      <h2>Registration</h2>
      <p>Please fill in the form below to register for the event.</p>
      <form onSubmit={sendEmail}>
        <div className="label">
          <label>
            Name:
              <input type="text" name="name" placeholder="First Name" value={userInfo.name} onChange={handleChange} />
          </label>
          <label>
            Email:
              <input type="email" name="email" placeholder="Enter your email" value={userInfo.email} onChange={handleChange} />
          </label>
        </div>
        

        <h3 className="colorheader">Selected Color: {foodcolor}</h3>

        <div className="colorselector">
          {colorselector.map((color, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault(); // Prevent button from submitting form
                colorselected(color.name);
              }}
              className="colorbtn"
              style={{
                backgroundColor: color.code,
                color: ["black", "purple", "blue"].includes(color.name) ? "white" : "black",
                border: foodcolor === color.name ? "3px solid white" : "none",
              }}
            >
              {color.name}
            </button>
          ))}
        </div>
          <div className="btn">
            <button type="submit" className="submit">Submit</button>
          </div>
      </form>
    </div>
  );
};

export default App;
