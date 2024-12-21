import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./ContactForm.css";
import { FloatLabel } from "primereact/floatlabel";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import resume from "../../../components/Navbar/Fareed Shaik.pdf";

const GOOGLE_SHEET_API_URL = "";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send data to Google Sheets
  const sendDataToGoogleSheets = async () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const payload = {
      values: [[name, email, message]],
    };

    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data to Google Sheets.");
    }
  };

  const download = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Fareed_Shaik_Resume.pdf";
    link.click();
  };

  return (
    <div className='card contact-card'>
      <div className='flex flex-column md:flex-row'>
        <div className='w-full md:w-5 flex justify-content-center py-5'>
          <div className='flex flex-column'>
            <h1>Contact Me</h1>
            <div>
              <span className='pi pi-envelope mr-3'></span>
              Fareed.Shaik@trojans.dsu.edu
            </div>
            <div className='mt-3'>
              <span className='pi pi-phone mr-3'></span>+1 6056719550
            </div>
            <Button
              label='Download Resume'
              icon='pi pi-download'
              className='w-14rem mt-5'
              onClick={download}
            ></Button>
          </div>
        </div>
        <div className='w-full md:w-2'>
          <Divider layout='vertical' className='hidden md:flex'>
            <b></b>
          </Divider>
          <Divider
            layout='horizontal'
            className='flex md:hidden'
            align='center'
          >
            <b></b>
          </Divider>
        </div>
        <div className='w-full md:w-5 flex flex-column gap-3 p-5'>
          <div className='flex flex-wrap gap-2 mt-3'>
            <FloatLabel>
              <InputText
                className='w-30'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor='name'>Your Name</label>
            </FloatLabel>
          </div>
          <div className='flex flex-wrap gap-2 mt-3'>
            <FloatLabel>
              <InputText
                className='w-30'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor='email'>Your Email</label>
            </FloatLabel>
          </div>
          <div className='mt-3'>
            <div className='card flex'>
              <InputTextarea
                placeholder='Your Message'
                autoResize
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                cols={30}
                name='message'
              />
            </div>
          </div>
          <Button
            label='Send'
            icon='pi pi-send'
            className='w-10rem'
            severity='success'
            onClick={sendDataToGoogleSheets}
          ></Button>
        </div>
      </div>
    </div>
  );
}
