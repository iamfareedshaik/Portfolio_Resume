import { TabView, TabPanel } from "primereact/tabview";
import "./Tabview.css";

export default function ScrollableDemo() {
  const scrollableTabs = [
    {
      title: "Datastructures",
      link: "https://github.com/iamfareedshaik/Datastructures",
      content:
        "In this repository, I have practiced and learned data structures. I explored various concepts like arrays, linked lists, stacks, trees, sorting techniques, graphs, and queues. This experience helped me understand the importance of memory management and time complexity, and it allowed me to deepen my logical skills.",
    },
    {
      title: "Design Patterns Practice",
      link: "https://github.com/iamfareedshaik/DesignPatterns",
      content:
        "In this Repository, I delved into design patterns, which are standard solutions to common software development problems. I learned patterns of Creational, Structural and Behavioural Design Patterns. These patterns help make code more flexible, reusable, and easier to maintain. By using these patterns, I can structure my code in a more organized and efficient way, especially when working on larger projects. This knowledge has given me a better understanding of how to approach software design and how to create maintainable systems.",
    },
    {
      title: "React Todo App",
      link: "https://github.com/iamfareedshaik/Todoapp",
      content:
        "In this project, I created a to-do list app using React. React helped me break the app into smaller components, making the code modular and easy to manage. I learned how to manage state and handle user inputs efficiently, and I also got familiar with concepts like hooks and props. This project improved my skills in building interactive user interfaces and understanding how React simplifies the development of dynamic and responsive applications.",
    },
    {
      title: "React Typescript",
      link: "https://github.com/iamfareedshaik/test",
      content:
        "In this project, I worked with both React and TypeScript, which allowed me to build a more robust and error-free application. TypeScript adds type safety to JavaScript, reducing the chances of bugs and improving the development process. By combining TypeScript with React, I was able to create an application that was not only interactive but also less prone to errors. This project enhanced my understanding of modern web development practices and the power of static typing in JavaScript.",
    },
    {
      title: "HTML & CSS & JavaScript",
      link: "https://github.com/iamfareedshaik/UI",
      content:
        "This project allowed me to dive into the fundamentals of web development. I learned how to use HTML for creating the structure of a website, CSS for styling and layout, and JavaScript to make the website interactive. By practicing these three core technologies, I gained a solid foundation in building websites from scratch. This project helped me understand how web pages work together and gave me the confidence to start building more complex applications.",
    },
    {
      title: "Portfolio_Resume using Html, CSS, React & Prime React",
      link: "https://github.com/iamfareedshaik/Portfolio_Resume",
      content:
        "This project showcases a personal portfolio and resume built using HTML, CSS, and React. It is designed to highlight my skills, work experience, and achievements in an interactive and visually appealing way. By creating this project, I have applied my knowledge of front-end technologies to build a responsive, user-friendly portfolio that can be easily updated and maintained. It serves as a professional representation of my skills and serves as a reference for potential employers or clients.",
    },
    {
      title: "Kubernetes",
      link: "https://github.com/iamfareedshaik/testkub",
      content:
        "Through this project, I explored Kubernetes, a powerful tool used to manage containerized applications. I learned how to deploy and manage applications across a cluster of computers, scaling them up or down as needed. Kubernetes automates many aspects of app deployment, making it easier to manage applications in production. This project helped me understand how to manage large-scale applications in the cloud and improve the reliability and scalability of systems.",
    },
    {
      title: "Kafka",
      link: "https://github.com/iamfareedshaik/Kafka",
      content:
        "In this project, I learned how to work with Kafka, a tool used to handle large streams of real-time data. Kafka enables communication between different systems by sending messages efficiently. I gained hands-on experience with setting up Kafka brokers, producers, and consumers, which are the core components of Kafka's messaging system. This project gave me insights into how real-time data is processed and communicated in large systems and how Kafka can help manage high-throughput, low-latency data streams.",
    },
    {
      title: "Amount Tracker App",
      link: "https://github.com/iamfareedshaik/AmountTracker",
      content:
        "For this project, I built a mobile app using React Native and Node.js. The app helps users track their spending and manage their finances. I learned how to handle front-end and back-end development, working with React Native for the user interface and Node.js for managing data on the server. This project improved my full-stack development skills and taught me how to create real-world applications that interact with databases and provide users with useful features like expense tracking and budget management.",
    },
    {
      title: "ChatBot App",
      link: "https://github.com/iamfareedshaik/chatbot",
      content:
        "In this project, I created a chatbot app that uses ChatGPT to respond to user queries. I learned how to integrate AI APIs into web applications and build conversational interfaces. By using HTML, CSS, and JavaScript, I was able to design a simple interface where users can interact with the AI chatbot. This project helped me understand how chatbots work and how to leverage artificial intelligence to enhance user experiences in applications.",
    },
    {
      title: "Python Django",
      link: "https://github.com/iamfareedshaik/django-todod",
      content:
        "With Django, I learned how to build web applications quickly using Python. This project involved creating a to-do app where users could add, edit, and delete tasks. Django provided the backend structure, including database management and user authentication. I learned how to set up routes, handle requests, and work with models in Django. This project gave me hands-on experience in backend development and helped me understand how to create web apps with Python in a structured and scalable way.",
    },
    {
      title: "Cyber Security",
      link: "https://github.com/iamfareedshaik/honeypotpoc",
      content:
        "In this project, I built a system to track suspicious activities and understand how hackers might attack systems. By setting up a honeypot, I was able to monitor and log potential attacks in real-time. This project helped me understand the basics of cybersecurity, including threat detection and how to protect systems from vulnerabilities. I learned about the tools and techniques used by attackers and how to safeguard applications from common security threats.",
    },
    {
      title: "LLM",
      link: "https://github.com/iamfareedshaik/vusion_fed_learning",
      content:
        "Large Language Models (LLMs), like ChatGPT, are AI systems trained to understand and generate text. In this project, I learned how to create an LLM using the LLama framework. I explored how these models are trained on vast amounts of text to understand human language. This project gave me valuable insights into the development and functioning of generative AI models, helping me understand their capabilities and applications in chatbots and other intelligent systems.",
    },
    {
      title: "Crypto Currency Website",
      link: "https://github.com/iamfareedshaik/CryptoCurrency",
      content:
        "In this project, I built a website that provides live data on cryptocurrency prices. Using React.js, I created a dynamic user interface that fetches real-time market data and displays it on the website. I learned how to integrate APIs, display live information, and create a responsive and user-friendly design. This project helped me understand the cryptocurrency market and how to build data-driven applications using modern web technologies.",
    },
  ];

  return (
    <div className='card cardss'>
      <div className='p-3'>
        <strong>Github</strong> - Below are the details of my repositories,
        which show my daily practice to enhance my skills and stay updated with
        current trends.
      </div>
      <TabView scrollable>
        {scrollableTabs.map((tab) => {
          return (
            <TabPanel key={tab.title} header={tab.title}>
              <div>
                Repository Link:{" "}
                <a href={tab.link} target='_blank'>
                  Click Here
                </a>
              </div>
              <p className='m-0'>{tab.content}</p>
            </TabPanel>
          );
        })}
      </TabView>
    </div>
  );
}
