"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-ivoryCream text-darkWalnut">
      <header className="sticky top-0 z-10 w-full border-b bg-ivoryCream/95 backdrop-blur supports-[backdrop-filter]:bg-ivoryCream/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Anchula Lakshmi Sruthi</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-darkWalnut/70 hover:text-darkWalnut transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-darkWalnut/70 hover:text-darkWalnut transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-darkWalnut/70 hover:text-darkWalnut transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-darkWalnut/70 hover:text-darkWalnut transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-darkWalnut/70 hover:text-darkWalnut transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild className="border-mutedCaramel/50 hover:bg-mutedCaramel/10">
              <Link href="https://github.com/sruthi211364" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-darkWalnut" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="border-mutedCaramel/50 hover:bg-mutedCaramel/10">
              <Link
                href="https://www.linkedin.com/in/anchula-lakshmi-sruthi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-darkWalnut" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild className="border-mutedCaramel/50 hover:bg-mutedCaramel/10">
              <Link href="mailto:lakshmisruthi2113@gmail.com">
                <Mail className="h-4 w-4 text-darkWalnut" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Data Science <span className="text-mutedCaramel">Professional</span>
            </h1>
            <p className="text-xl text-darkWalnut/80">
              Not your average Data Scientist — I turn spreadsheets into strategies, numbers into narratives, and data
              noise into decisions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                Data Analysis
              </Badge>
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                Python
              </Badge>
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                SQL
              </Badge>
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                AWS
              </Badge>
              <Badge variant="outline" className="text-sm text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                Azure AI
              </Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="bg-mutedCaramel text-white hover:bg-mutedCaramel/90 border-none">
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact Me
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-mutedCaramel/50 text-darkWalnut hover:bg-mutedCaramel/10"
              >
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Projects
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-mutedCaramel/30">
              <Image
                src="/images/profile.png"
                alt="Anchula Lakshmi Sruthi"
                width={320}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-darkWalnut/80">
                  Not your average Data Scientist — I turn spreadsheets into strategies, numbers into narratives, and
                  data noise into decisions. If it's data, I'll find the pattern.
                </p>
                <p className="text-darkWalnut/80">
                  From building machine learning pipelines to crafting real-time dashboards, I create solutions that are
                  as efficient as they are insightful — powered by Python, R, SQL, and a serious love for clean,
                  purposeful code.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-mutedCaramel" />
                  <span>lakshmisruthi2113@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-mutedCaramel" />
                  <span>(716) 907-5970</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-mutedCaramel" />
                  <Link
                    href="https://www.linkedin.com/in/anchula-lakshmi-sruthi/"
                    className="hover:text-mutedCaramel transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </Link>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Education</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="font-medium">SUNY Buffalo</div>
                      <div className="text-sm text-darkWalnut/80">
                        Master in Science - Engineering Science data science
                      </div>
                      <div className="text-xs text-darkWalnut/70">Aug 2024 - Dec 2025</div>
                    </div>
                    <div>
                      <div className="font-medium">MNR Institute of Technology</div>
                      <div className="text-sm text-darkWalnut/80">Bachelor of Technology - BTech, Data Science</div>
                      <div className="text-xs text-darkWalnut/70">Dec 2020 - April 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Programming</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Python
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Java
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    R
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    SQL
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    No-SQL
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Data Science</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Machine Learning
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Data Analysis
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Data Visualization
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Applied Mathematics
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Algorithms
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Big Data</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Hadoop
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Spark
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Data Pipelines
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Data Warehousing
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    ETL/Processing
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Cloud & BI Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    AWS EC2
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    AWS S3
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    SageMaker
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Azure AI
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Tableau
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Hadoop
                  </Badge>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Problem Solving
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Communication
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Team Collaboration
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Critical Thinking
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Adaptability
                  </Badge>
                  <Badge className="mr-1 bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                    Time Management
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
            <div className="space-y-8">
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-darkWalnut">Data Science Engineer Intern</CardTitle>
                      <CardDescription className="text-darkWalnut/70">Wobblr</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                      Jan 2023 - May 2023
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-darkWalnut/80">
                    <li>
                      Built and optimized data pipelines to extract and process large datasets, improving data-driven
                      decision-making.
                    </li>
                    <li>
                      Developed and implemented machine learning models and statistical modeling techniques,
                      contributing to a 15% increase in performance.
                    </li>
                    <li>Worked with SQL databases for efficient data extraction, transformation, and loading (ETL).</li>
                    <li>
                      Collaborated with cross-functional teams to develop business insights from structured and
                      unstructured data.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-darkWalnut">Data Scientist Intern</CardTitle>
                      <CardDescription className="text-darkWalnut/70">Personify</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                      July 2022 - August 2022
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-darkWalnut/80">
                    <li>
                      Cleaned and analyzed large datasets, leveraging SQL and Python to build predictive models that
                      improved business decision-making accuracy by 20%.
                    </li>
                    <li>
                      Optimized data pipelines and enhanced ETL processes to streamline data exploration & merging.
                    </li>
                    <li>
                      Assisted in ad-hoc reporting for key stakeholders, providing actionable insights for
                      decision-making.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-darkWalnut">Data Science Intern</CardTitle>
                      <CardDescription className="text-darkWalnut/70">Skill Vertex</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-darkWalnut border-mutedCaramel/50 bg-ivoryCream">
                      November 2021 - December 2021
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul className="list-disc pl-5 space-y-2 text-darkWalnut/80">
                    <li>
                      Assisted in data cleaning, transformation, and analysis, ensuring high-quality data engineering
                      workflows.
                    </li>
                    <li>
                      Utilized Python and SQL to manage and process large datasets, supporting data-driven analytics
                      initiatives.
                    </li>
                    <li>
                      Developed data visualizations and contributed to exploratory data analysis (EDA) for business
                      insights.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Academic Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Employee Attrition Prediction</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-darkWalnut/80 mb-4">
                    Developed an ETL process to store employee's interests and analyzed historical data of employee
                    turnover. Identified patterns and trends to predict attrition and built a machine learning model to
                    predict output and retain employees.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Python
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Machine Learning
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      ETL
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Data Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Movie Recommendation System</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-darkWalnut/80 mb-4">
                    Built a recommendation engine analyzing user preferences and optimizing SQL queries for faster
                    retrieval. Focused on assessment, language-based genre analysis, and developing recommendation
                    systems based on actors, movies, and genres to enhance understanding of user preferences in the film
                    industry.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      SQL
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Recommendation Systems
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Data Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Mental Health Screening Chatbot</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-darkWalnut/80 mb-4">
                    Developed a pioneering mental health solution leveraging technology, encompassing a cost-effective
                    screening process and an emotionally intelligent chatbot using NLP. Applied machine learning
                    algorithms, computer vision, and sentiment analysis for holistic user assessment.
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      NLP
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Python
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Machine Learning
                    </Badge>
                    <Badge className="text-xs bg-mutedCaramel/10 text-darkWalnut hover:bg-mutedCaramel/20 border-mutedCaramel/30">
                      Sentiment Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Azure AI Fundamentals</CardTitle>
                  <CardDescription className="text-darkWalnut/70">Microsoft</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-darkWalnut/80">POWER BI CERTIFIED THROUGH TATA</p>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Python for Data Science</CardTitle>
                  <CardDescription className="text-darkWalnut/70">NTEL</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-darkWalnut/80">DATA ANALYTICS WITH PYTHON</p>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Merit Certificate</CardTitle>
                  <CardDescription className="text-darkWalnut/70">Event by EWB</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-darkWalnut/80">
                    Awarded merit certificate in an event conducted by EWB, Hyderabad
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-mutedCaramel" />
                    <span>lakshmisruthi2113@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-mutedCaramel" />
                    <span>(716) 907-5970</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-mutedCaramel" />
                    <Link
                      href="https://www.linkedin.com/in/anchula-lakshmi-sruthi/"
                      className="hover:underline text-darkWalnut hover:text-mutedCaramel"
                    >
                      LinkedIn Profile
                    </Link>
                  </div>
                  <div className="pt-4">
                    <p className="text-darkWalnut/80">Located in Buffalo, NY</p>
                    <p className="text-darkWalnut/80">1525 Amherst Manor Dr, Buffalo, NY</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-ivoryCream border-mutedCaramel/30">
                <CardHeader>
                  <CardTitle className="text-darkWalnut">Community Contributions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-darkWalnut/80">
                      Content creator for "Service to Mankind" NGO, raising awareness for charitable activities.
                    </p>
                    <p className="text-darkWalnut/80">
                      Published research on blockchain technology at CFSAM Conference.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-mutedCaramel/30 bg-ivoryCream">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-darkWalnut">Anchula Lakshmi Sruthi</h3>
            <p className="text-sm text-darkWalnut/70">Data Science Professional</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="text-darkWalnut hover:bg-mutedCaramel/10">
              <Link href="https://github.com/sruthi211364" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-darkWalnut hover:bg-mutedCaramel/10">
              <Link
                href="https://www.linkedin.com/in/anchula-lakshmi-sruthi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-darkWalnut hover:bg-mutedCaramel/10">
              <Link href="mailto:lakshmisruthi2113@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="text-sm text-darkWalnut/70">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

