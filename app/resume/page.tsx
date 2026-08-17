'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const ResumeComponent = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rounakk_Raaj_Sabat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-8 py-12 print:p-0">
        <div className="flex justify-end mb-8 print:hidden">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Download size={18} />
            Download Resume
          </button>
        </div>
        <div className="mb-8 border-b-2 border-gray-300 pb-6">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Rounakk Raaj Sabat</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91 76069 54674</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <a href="mailto:rounakkraaj707@gmail.com" className="hover:text-blue-600">
                rounakkraaj707@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={14} />
              <a href="https://linkedin.com/in/rounakkraajsabat" className="hover:text-blue-600">LinkedIn</a>
            </div>
            <div className="flex items-center gap-1">
              <Github size={14} />
              <a href="https://github.com/rounakkraaj-1744" className="hover:text-blue-600">GitHub</a>
            </div>
            <a href="https://rounakk.in" className="hover:text-blue-600 text-sm">Portfolio</a>
            <a href="https://leetcode.com/rounakk_745" className="hover:text-blue-600 text-sm">LeetCode</a>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-bold tracking-wide mb-4 border-l-4 border-blue-600 pl-3 uppercase">
            Education
          </h2>
          <div className="ml-0">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-semibold text-base">NIST University Berhampur, Odisha</h3>
                <p className="text-gray-700">B.Tech in Computer Science and Engineering</p>
              </div>
              <span className="text-gray-700 text-sm whitespace-nowrap ml-4">2023 – 2027</span>
            </div>
            <p className="text-gray-700 text-sm">CGPA: 8.47/10</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold tracking-wide mb-4 border-l-4 border-blue-600 pl-3 uppercase">
            Experience
          </h2>
          <div className="space-y-6">
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-base">Software Engineer Intern</h3>
                  <p className="text-gray-700 text-sm">Proto Corp Pvt Ltd • Remote</p>
                </div>
                <span className="text-gray-700 text-sm whitespace-nowrap ml-4">Mar 2026 – Present</span>
              </div>
              <ul className="list-none space-y-2 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Engineered a full-stack IoT platform using Next.js, Socket.io, WebRTC, and MQTT to stream real-time drone telemetry and camera feeds with low-latency communication.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Containerized services with Docker and deployed on AWS using CI/CD pipelines, reducing deployment time by 35%.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-base">Backend & Cloud Engineer Intern</h3>
                  <p className="text-gray-700 text-sm">Torqis Horizons • Remote</p>
                </div>
                <span className="text-gray-700 text-sm whitespace-nowrap ml-4">Sep 2025 – Jan 2026</span>
              </div>
              <ul className="list-none space-y-2 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Engineered a serverless e-commerce backend using Node.js and AWS Lambda, implementing idempotent APIs and secure payment workflows to improve transaction reliability and fault tolerance.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Integrated PhonePe payment webhooks with validation and automated retry mechanisms for failure recovery.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Architected infrastructure using Cognito, S3, CloudFront, AWS SAM, and CloudWatch for scalable deployment and monitoring.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-base">SDE Intern</h3>
                  <p className="text-gray-700 text-sm">GoLaddu Food Products Pvt. Ltd. • Remote</p>
                </div>
                <span className="text-gray-700 text-sm whitespace-nowrap ml-4">Aug 2025 – Oct 2025</span>
              </div>
              <ul className="list-none space-y-2 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Developed a React Native application integrated with Supabase and PostgreSQL, enabling real-time data synchronization and improving user experience across connected devices.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Implemented Postgres subscriptions, Edge Functions, and GitHub Actions CI/CD workflows, reducing deployment time by 30%.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Enhanced application reliability through event-driven architecture and optimized database operations.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold tracking-wide mb-4 border-l-4 border-blue-600 pl-3 uppercase">
            Projects
          </h2>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-base">Observability Platform</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">TypeScript, Docker, Kubernetes, ArgoCD, Prometheus, Grafana • <a href="#" className="text-blue-600 hover:underline">[GitHub]</a></p>
              <ul className="list-none space-y-1 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Developed a real-time observability dashboard and REST APIs for monitoring distributed microservices.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Deployed cloud-native infrastructure using Docker, Kubernetes, ArgoCD, Prometheus, and Grafana to improve system observability and operational visibility.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-base">NSE Stocks Arbitrage Bot</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">TypeScript, Express.js, Rust, LangChain, LangGraph • <a href="#" className="text-blue-600 hover:underline">[GitHub]</a></p>
              <ul className="list-none space-y-1 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Built an automated arbitrage trading system executing cross-exchange strategies with 15% annualized returns in backtests.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Processed 1M+ stock market data points daily with real-time analysis latency below 200ms.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-base">Memory Allocator in C</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">C, Makefile • <a href="#" className="text-blue-600 hover:underline">[GitHub]</a></p>
              <ul className="list-none space-y-1 ml-0">
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Built a custom memory allocator using segregated free lists with coalescing and block splitting techniques.</span>
                </li>
                <li className="text-gray-700 text-sm flex">
                  <span className="mr-3">–</span>
                  <span>Reduced memory fragmentation and improved allocation efficiency through optimized memory management and alignment strategies.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold tracking-wide mb-4 border-l-4 border-blue-600 pl-3 uppercase">
            Technical Skills
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">Languages:</span>
              <span className="text-gray-700">TypeScript, JavaScript, Java, C</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">Backend:</span>
              <span className="text-gray-700">Node.js, Express.js, NestJS, REST APIs, WebSockets, Socket.io, MQTT, WebRTC</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">Databases:</span>
              <span className="text-gray-700">PostgreSQL, MongoDB, Redis, Supabase</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">Cloud:</span>
              <span className="text-gray-700">AWS (EC2, Lambda, CloudWatch, CloudFront, S3, Cognito), Docker, Kubernetes, Terraform, GitHub Actions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">Systems:</span>
              <span className="text-gray-700">Microservices, Message Queues, Caching, Load Balancing</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold min-w-fit">AI:</span>
              <span className="text-gray-700">LangChain, LangGraph, Groq API, Gemini API</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold tracking-wide mb-4 border-l-4 border-blue-600 pl-3 uppercase">
            Achievements
          </h2>
          <div>
            <h3 className="font-semibold text-base mb-1">TechFiesta International Hackathon Finalist 2025</h3>
            <ul className="list-none space-y-1 ml-0">
              <li className="text-gray-700 text-sm flex">
                <span className="mr-3">–</span>
                <span>Ranked among the Top 100 teams out of 600+ global teams and secured Top 5 position in the Grand Finals among 60 finalists.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ResumeComponent;