import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Lead Management System",
      subtitle: "Full-Stack CRM Platform",
      bulletPoints: [
        "Built scalable backend using FastAPI, PostgreSQL, and Redis",
        "Designed data pipeline to process Excel uploads and detect inactive leads (>16h SLA)",
        "Implemented real-time notifications via WebSocket and email alerts",
        "Deployed on AWS (EC2, S3) using Docker",
      ],
      impact:
        "Reduced manual tracking effort and enabled real-time monitoring of sales operations",
    },
    {
      title: "End-to-End Data Pipeline",
      subtitle: "for Sales Analytics",
      bulletPoints: [
        "Built ETL pipeline using PySpark and Apache Airflow",
        "Stored raw data in AWS S3 (data lake architecture)",
        "Transformed and loaded data into PostgreSQL",
        "Queried datasets using AWS Athena",
      ],
      impact:
        "Improved data processing efficiency and enabled scalable analytics workflows",
    },
    {
      title: "Real-Time Event Streaming System",
      subtitle: "Distributed Streaming",
      bulletPoints: [
        "Processed streaming data using Kafka and Spark Streaming",
        "Deployed pipeline on AWS EC2",
        "Implemented anomaly detection and alerting system",
      ],
      impact:
        "Enabled real-time monitoring and faster response to system events",
    },
    {
      title: "Recommendation System",
      subtitle: "Product Recommendation System",
      bulletPoints: [
        "Built backend with Node.js and MongoDB",
        "Deployed service on AWS EC2",
        "Integrated recommendation logic into user workflow",
      ],
      impact:
        "Improved user engagement through personalized recommendations",
    },
    {
      title: "NLP Semantic Similarity System",
      subtitle: "BERT Embeddings",
      bulletPoints: [
        "Built an NLP system using BERT embeddings for document similarity",
        "Stored documents on AWS S3",
        "Compared semantic similarity beyond traditional TF-IDF (improved matching accuracy)",
      ],
      impact:
        "Enhanced plagiarism detection and semantic understanding capabilities",
    },
  ];

  return (
    <SectionWrapper id="projects" title="Projects" eyebrow="WHAT I BUILD">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

