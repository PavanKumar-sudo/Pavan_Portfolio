import { Cloud, Rocket, Sparkles } from "lucide-react";
import quickAiBg from "@/assets/quickai-bg.jpg";

export const PROJECTS = [
  {
    id: "quickai",
    title: "QuickAI – AI-Powered Full-Stack Application",
    description:
      "AI-powered platform offering intelligent content generation, resume analysis, image creation, and more.",
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "Clerk Auth",
      "Express.js",
      "OpenAI API",
      "Cloudinary",
      "NeonDB",
      "Vercel",
    ],
    gradient: "from-blue-200/40 via-cyan-200/40 to-purple-200/40",
    icon: Sparkles,
    iconColor: "text-blue-600",
    githubKey: "quickAiGithub",
    liveKey: "quickAiLive",
    defaultBackgroundImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    backgroundImage: quickAiBg,
  },
  {
    id: "cloud-native-order-processing",
    title: "Cloud-Native Order Processing",
    description:
      "Scalable microservice architecture using Go, AWS EKS, and ArgoCD.",
    technologies: ["Go", "AWS EKS", "S3", "DynamoDB", "SQS", "ArgoCD"],
    gradient: "from-purple-200/40 via-pink-200/40 to-blue-200/40",
    icon: Cloud,
    iconColor: "text-purple-600",
    githubKey: "githubProfile",
    liveKey: undefined,
    defaultBackgroundImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: "mlops-credit-risk-system",
    title: "MLOps Credit Risk System",
    description:
      "End-to-end ML pipeline for credit-risk scoring using XGBoost, MLflow and Cloud Run.",
    technologies: [
      "Python",
      "XGBoost",
      "FastAPI",
      "MLflow",
      "Docker",
      "Cloud Run",
    ],
    gradient: "from-green-200/40 via-emerald-200/40 to-teal-200/40",
    icon: Rocket,
    iconColor: "text-green-600",
    githubKey: "githubProfile",
    liveKey: undefined,
    defaultBackgroundImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
] as const;


