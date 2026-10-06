import React from "react";
import OtherProjectsCard from "./OtherProjectsCard";

const otherprojects = [
  {
    heading: "Ecommerce website",
    description:
      "An e-commerce storefront in React with Context API and Redux for state. Pulls products from the FakeStore API, with listings and a working cart — my first big lesson in scaling React state.",
    skills: ["React", "FakeStore API", "Context API", "MUI"],
  },
  {
    heading: "Cloud Food Ordering",
    description:
      "A full-stack food ordering app with a React frontend and FastAPI backend, hosted on AWS: Lambda for serverless functions, API Gateway for routing, EC2 and DynamoDB for compute and data, and S3 for storage.",
    skills: ["React", "FastAPI", "Lambda", "API Gateway", "Amplify", "EC2", "DynamoDB"],
  },
  {
    heading: "Clone of Cricbuzz",
    description: "A Cricbuzz clone where an admin creates matches and fans follow live scores in the app.",
    skills: ["Angular", ".NET", "Swagger"],
  },
];

function OtherProjects() {
  return (
    <section id="islands" className="isl" aria-labelledby="isl-h">
      <div className="isl-inner">
        <p className="eyebrow">Side Quests</p>
        <h2 id="isl-h" className="display h2">
          Messages in a bottle
        </h2>
        <div className="bottles">
          {otherprojects.map((project, i) => (
            <OtherProjectsCard key={project.heading} {...project} tilt={i % 2 ? 8 : -8} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProjects;
