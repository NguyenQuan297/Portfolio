import SectionWrapper from "../layout/SectionWrapper";
import ProjectCard from "../projects/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "JamSight",
      subtitle: "AI-POWERED PIANO CHORD ANALYSIS & JAM IMPROVISATION",
      timeframe: "Apr 2026 – Present",
      role: "AI Engineer",
      stack: [
        "Python",
        "FastAPI",
        "PyTorch",
        "ONNX Runtime",
        "CREPE",
        "librosa",
        "Claude Sonnet API",
        "React",
        "Tone.js",
        "Docker",
        "FFmpeg",
      ],
      repoUrl: "https://github.com/NguyenQuan297/JamSight",
      bulletPoints: [
        "Built end-to-end piano chord detection pipeline from video/audio (FFmpeg → WAV → CREPE pitch detection + librosa CQT → ONNX classifier) across 96 chord classes (12 roots × 8 types)",
        "Designed a 36-dimensional audio feature representation combining CREPE-based chroma, CQT spectral chroma, MFCCs, and spectral descriptors for consistent training and inference",
        "Trained PianoMLP (residual MLP, LayerNorm + GELU) on MAPS & MAESTRO with cosine LR warmup, label smoothing, and weighted sampling; exported to ONNX for low-latency inference",
        "Implemented data augmentation (pitch shift, Gaussian noise, feature dropout, chroma detuning, mixup) to bridge the gap between clean MIDI training data and real-world recordings",
        "Integrated Claude Sonnet API (with prompt caching) for chord reharmonization — 3 ranked suggestions with voice-leading analysis — and AI two-hand piano solo generation (8 bars, MIDI) across 5 genres",
        "Built a user feedback loop (accept/reject) stored in SQLite; top-rated examples are injected back into Claude prompts per genre for adaptive personalization",
        "Developed a React frontend with video upload, chord visualization, piano-roll viewer, browser MIDI playback via Tone.js, and MIDI export; containerized with Docker Compose",
      ],
      impact:
        "Turns any piano performance video into structured chord data, with AI-generated reharmonizations and solo ideas that adapt to user taste over time",
    },
    {
      title: "FPT NEXUS",
      subtitle: "REAL-TIME LEAD OPERATIONS SYSTEM",
      timeframe: "Jan 2026 – Apr 2026",
      role: "Full-Stack Developer · FPT School Hai Phong",
      stack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "React",
        "WebSocket",
        "Docker",
        "AWS EC2",
      ],
      repoUrl: "https://github.com/NguyenQuan297/FPT-Nexus",
      liveUrl: "http://18.118.211.15:8000/",
      bulletPoints: [
        "Developed an internal CRM system to manage and track high-school student lead contact information in real time",
        "Built RESTful APIs with FastAPI for lead assignment, status tracking, SLA monitoring, and reporting workflows",
        "Designed an Excel ingestion pipeline (Pandas, OpenPyXL) with fuzzy column matching and an async Redis queue for bulk lead processing",
        "Implemented SLA tracking logic (16-hour contact threshold) using APScheduler and Redis with automated Telegram alerts",
        "Developed a React dashboard for lead filtering, bulk assignment, and per-staff performance analytics",
        "Integrated real-time updates via WebSocket (Redis Pub/Sub) for live sync between admin and sales users",
        "Deployed on AWS EC2 with Docker Compose, PostgreSQL 16, and Redis 7 as production services",
      ],
      impact:
        "Replaced manual spreadsheet workflows with a live, SLA-aware sales operations platform used by real staff",
    },
    {
      title: "AIS PIPELINE",
      subtitle: "LARGE-SCALE MARITIME DATA PIPELINE & ANALYTICS",
      timeframe: "Nov 2025 – Feb 2026",
      role: "Data Engineer",
      stack: [
        "PySpark",
        "Apache Airflow",
        "AWS S3",
        "AWS Athena",
        "PostgreSQL",
        "Docker",
        "Streamlit",
        "pydeck",
      ],
      repoUrl:
        "https://github.com/NguyenQuan297/AIS-Based-Maritime-Logistics-Analytics-Pipeline",
      liveUrl:
        "https://ais-based-maritime-logistics-analytics-pipeline-99sggipjxkvdz3.streamlit.app/",
      bulletPoints: [
        "Ingested real-world AIS vessel traffic from MarineCadastre.gov (.csv.zst, ~250 MB/day compressed, ~1.5 GB uncompressed, ~8.7M position reports/day); processed 8 consecutive days (~70M rows) end-to-end in ~12 min on a 16 GB laptop",
        "Built a Bronze/Silver/Gold Medallion pipeline on partitioned Parquet + Snappy; Bronze lands raw records, Silver cleans and deduplicates on (mmsi, event_time), Gold produces 4 analytics tables",
        "Engineered AIS quality gates at the Silver layer: null-island filter (lat=0, lon=0), SOG sentinel 102.3 → null per AIS spec, coordinate range validation, and a DataQualityChecker running null/duplicate/value-range checks after each stage",
        "Implemented deterministic voyage segmentation: PySpark window functions split voyages on time gaps > 4h, classify segments as stationary/short_move/coastal/transit; idempotent Gold writes via partitionOverwriteMode=dynamic",
        "Orchestrated a 9-task Airflow DAG (daily, Docker Compose with Postgres + Spark cluster); three Gold branches run in parallel after Silver, converge into a Postgres serving load, then run automated quality checks; 2-retry × 5-min backoff for transient failures",
        "Hosted Gold layer on AWS S3 with Athena external tables (partitioned Parquet, least-privilege IAM); deployed a public Streamlit + pydeck dashboard reading S3 directly via pyarrow — vessel density heatmap, speed/type scatter map, voyage origin–destination arc map, per-MMSI vessel lookup",
      ],
      impact:
        "Delivered a production-shape data platform that analyzes real-world vessel traffic at scale, all from a single laptop",
    },
  ];

  return (
    <SectionWrapper id="projects" title="Projects" eyebrow="WHAT I BUILD">
      <div className="grid gap-5 md:grid-cols-2">
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
