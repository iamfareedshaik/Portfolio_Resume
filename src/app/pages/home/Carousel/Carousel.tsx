import { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import AiSweden from "../../../../assets/AiSweden.png";
import DakotaStateUniv from "../../../../assets/DakotaStateUniversity.png";
import Berkadia from "../../../../assets/berkadia.png";
import Legato from "../../../../assets/legato.png";
import omkara from "../../../../assets/omkaraVij.png";
import "./Carousel.css";

interface CarouselItem {
  company: string;
  domain: string;
  logo: string;
  skills: string;
  status: string;
}

export default function PersonalInfoCarousel() {
  const [items, setItems] = useState<CarouselItem[]>([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    // Example data, replace with your own
    const data: CarouselItem[] = [
      {
        company: "Associate Software Engineer",
        domain: "E-Commerce",
        logo: omkara,
        skills: "Python, Data Analysis, Research, AI",
        status: "ACTIVE",
      },
      {
        company: "Software Engineer",
        domain: "Healthcare",
        logo: Legato,
        skills: "Java, Spring Boot, Docker, Microservices",
        status: "ACTIVE",
      },
      {
        company: "Software Engineer",
        domain: "Financial Operations",
        logo: Berkadia,
        skills: "React.js, Node.js, Express, AWS",
        status: "ACTIVE",
      },
      {
        company: "Graduate Research Assistant",
        domain: "Education & Research",
        logo: DakotaStateUniv,
        skills: "Python, Data Analysis, Research, AI",
        status: "ACTIVE",
      },
      {
        company: "AI Research Assistant ",
        domain: "Automotive Industry",
        logo: AiSweden,
        skills: "Python, Data Analysis, Research, AI",
        status: "ACTIVE",
      },
    ];
    setItems(data);
  }, []);

  const itemTemplate = (item: CarouselItem) => {
    return (
      <div className='border-1 surface-border border-round m-2 text-center py-5 px-3'>
        <div className='mb-3'>
          <img
            src={item.logo}
            alt={item.company}
            className='w-6 shadow-2 mb-3' // Adjust size as needed
          />
          <h4>{item.company}</h4>
          <h6 className='mt-0 mb-3'>{item.domain}</h6>
        </div>
      </div>
    );
  };

  return (
    <div className='card carousel-css'>
      <Carousel
        value={items}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        className='custom-carousel'
        circular
        autoplayInterval={8000}
        itemTemplate={itemTemplate}
      />
    </div>
  );
}
