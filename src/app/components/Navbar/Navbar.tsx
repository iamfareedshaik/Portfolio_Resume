import { Menubar } from "primereact/menubar";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import resume from "./Fareed Shaik.pdf";

export default function Navbar() {
  const navigate = useNavigate();
  const items = [
    {
      id: "Home",
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      id: "React",
      label: "Achievemnts",
      icon: "pi pi-heart-fill",
      command: () => navigate("/achievments"),
    },
    {
      id: "React",
      label: "LinkedIn",
      icon: "pi pi-link",
      command: () =>
        window.open(
          "https://www.linkedin.com/in/fareed-shaik-27506b216",
          "_blank"
        ),
    },
    {
      id: "React",
      label: "Professional Experience",
      icon: "pi pi-briefcase",
      command: () => navigate("/ProfessionalExperience"),
    },
    {
      id: "Resume Download",
      label: "Download Resume",
      icon: "pi pi-download",
      command: () => {
        const link = document.createElement("a");
        link.href = resume;
        link.download = "Fareed_Shaik_Resume.pdf";
        link.click();
      },
    },
  ];

  const start = (
    <>
      <div className='logo-container' onClick={() => navigate("/")}>
        <span className='logo-text'>Fareed Shaik</span>
      </div>
    </>
  );

  return <Menubar model={items} start={start} />;
}
