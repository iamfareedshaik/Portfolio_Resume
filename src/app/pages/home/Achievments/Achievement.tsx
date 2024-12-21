import { Card } from "primereact/card";
import "./Achievement.css";

const Achievements = () => {
  return (
    <>
      <Card title='Achievements' className='mt-1 achievement'>
        <ul>
          <li>
            <strong>Award for Innovation:</strong> This grabs attention right
            away, showcasing your recognition for creativity and
            problem-solving.
          </li>
          <li>
            <strong>Recognized for Excellence:</strong> A strong follow-up,
            demonstrating that your contributions have been noticed and
            rewarded.
          </li>
          <li>
            <strong>Improved Sales and Profits:</strong> This is a clear,
            measurable impact that shows your work has had a direct positive
            effect on the business.
          </li>
          <li>
            <strong>Reduced Time and Effort:</strong> This shows your practical
            impact on efficiency and how you made processes better.
          </li>
          <li>
            <strong>Efficient Problem-Solving:</strong> It emphasizes your
            ability to tackle complex problems, which is valuable to any
            employer.
          </li>
          <li>
            <strong>Team Leadership:</strong> Shows your ability to lead and
            work with others, an important skill for any role.
          </li>
          <li>
            <strong>Improved Data Accuracy:</strong> Highlights your technical
            skills, especially in reducing errors and saving time.
          </li>
          <li>
            <strong>Automation Saves Time:</strong> Demonstrates your ability to
            improve processes through automation, a key strength for many roles.
          </li>
        </ul>
      </Card>
    </>
  );
};

export default Achievements;
