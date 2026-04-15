import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "FPT NEXUS",
      subtitle: "REAL-TIME LEAD OPERATIONS SYSTEM",
      repoUrl: "https://github.com/NguyenQuan297/FPT-Nexus",
      bulletPoints: [
        "Built a full-stack CRM system using FastAPI, PostgreSQL, and Redis to manage and track student leads in real time",
        "Designed an Excel ingestion pipeline that normalizes data and processes 800+ leads per upload",
        "Implemented SLA tracking (16-hour threshold) with background jobs and alerting (Telegram + email)",
        "Developed real-time synchronization between admin and sales using WebSocket",
        "Deployed the system on AWS EC2 with Docker, supporting internal sales operations",
      ],
      impact:
        "Reduced manual tracking effort and enabled real-time visibility into sales operations",
    },
    {
      title: "AIS PIPELINE",
      subtitle: "LARGE-SCALE MARITIME DATA PIPELINE",
      repoUrl: "https://github.com/NguyenQuan297/AIS-Based-Maritime-Logistics-Analytics-Pipeline",
      bulletPoints: [
        "Built an end-to-end data pipeline processing ~8.7M AIS records per day using PySpark",
        "Implemented streaming decompression and schema enforcement for large maritime datasets (.csv.zst)",
        "Designed a medallion architecture (Bronze/Silver/Gold) for scalable data transformation",
        "Generated analytical datasets including vessel activity, voyage segmentation, and route metrics",
        "Automated workflows using Apache Airflow and stored partitioned data in AWS S3 (Parquet)",
        "Enabled analytics using AWS Athena and PostgreSQL",
      ],
      impact:
        "Delivered a scalable data platform for analyzing real-world vessel traffic and movement patterns",
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

