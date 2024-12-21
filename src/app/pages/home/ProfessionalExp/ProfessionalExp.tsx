import { Card } from "primereact/card";
import "./ProfessionalExp.css";

const ProfessionalExp = () => {
  const companies = [
    {
      name: "Dakota State University (South Dakota, United States)",
      position: "Graduate Research Assistant (Aug 2023 – May 2024)",
      points: [
        "Developed a web application integrated with ChatGPT for document processing, reducing effort and time to manually read and compare the meaning of each sentence of 100s of documents against 1000+ records in an Excel sheet.",
        "Created Python-based bots to streamline tasks, saving time and effort.",
        "Applied BERT Topic and LDA models to classify topics from hundreds of documents, making it easier to identify the main context.",
      ],
    },
    {
      name: "AI Sweden (Gothenburg, Sweden)",
      position: "AI Research Assistant (Jun 2024 – Aug 2024)",
      points: [
        "Worked with Volvo to detect cyber-attacks on cars, creating a Linux-based Large Language Model (LLM) to interpret Linux-like commands.",
        "Used Cowrie to simulate attacks and attract hackers for testing security measures.",
        "Applied Game Theory and Federated Learning techniques to enhance automotive security.",
      ],
    },
    {
      name: "Berkadia (Hyderabad, India)",
      position: "Software Engineer (Sep 2022 – Jul 2023)",
      points: [
        "Designed and developed a full-stack Single-page Web Application from the ground up using React, Node.js, Express, and SQL, following microservices architecture principles.",
        "Integrated Keycloak authentication (OAuth 2.0, OpenID Connect, and SAML 2.0) into a React app with an existing .NET backend to ensure secure access control.",
        "Developed a proof of concept (POC) to streamline data transfer from Excel sheets to backend applications, reducing customer data input time by 50%.",
        "Gained hands-on experience with AWS cloud services, including managing S3 buckets, CloudWatch analysis, and Docker images through Elastic Container Registry (ECR).",
        "Received the Hi-Fi Award for taking on challenging work, creating a POC, proactively fixing production bugs, and consistently delivering solutions before deadlines.",
      ],
    },
    {
      name: "Legato Health Technologies (Hyderabad, India)",
      position: "Software Engineer (Aug 2020 – Sep 2022)",
      points: [
        "Worked in a Waterfall Model team to process over 1 million insurance claims per day using React, Spring Boot, and SQL.",
        "Developed a POC for transitioning the mainframe claim system to a modern web application using React.js, Node.js, and SQL, resulting in significant cost savings by eliminating the need for manual COBOL program and database updates.",
        "Automated claim analysis by developing a Python script that generates daily reports and sends emails, reducing manual checks and saving costs.",
        "Contributed to the Medicare claim system for surcharges using React, Node.js, Express.js, SQL, and AWS.",
        "Recognized with the 'Rising Superstar' award for outstanding contributions and dedication to the company.",
      ],
    },
    {
      name: "Omkara Vijayalakshmi Strips (Andhra Pradesh, India)",
      position: "Associate Software Engineer (May 2019 – Nov 2019)",
      points: [
        "Worked in an Agile team to develop a user interface website using Angular, HTML, CSS, and JavaScript (ES6).",
        "Contributed to backend development using Spring Boot and deployed the application to AWS using S3 buckets, EC2 instances, and subnets.",
        "Collaborated with the team to develop a website, resulting in a more than 30% increase in sales and profits where no website existed previously.",
      ],
    },
  ];

  return (
    <div>
      <div className='prof-title'>Work Experience</div>
      {companies.map((company, index) => (
        <Card key={index} className='porfessionalExp'>
          <h2>{company.name}</h2>
          <h3>{company.position}</h3>
          <ul>
            {company.points.map((point, pointIndex) => (
              <li key={pointIndex}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
};

export default ProfessionalExp;
