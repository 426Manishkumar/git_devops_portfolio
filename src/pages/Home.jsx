export default function Home() {
    return (
      <section className="hero page-card">
        <p className="tag">Frontend Project</p>
        <h1>Auto Demo123</h1>
        <p className="subtitle">
          This project demonstrates React development, GitHub workflow,
          feature branching, pull requests and automatic AWS deployment.
        </p>
  
        <div className="grid">
          <div className="info-box">
            <h3>React + Vite</h3>
            <p>Fast frontend setup with reusable components and clean project structure.</p>
          </div>
          <div className="info-box">
            <h3>Git Workflow</h3>
            <p>Feature branches, pull requests and merge-based development workflow.</p>
          </div>
          <div className="info-box">
            <h3>AWS Deployment</h3>
            <p>Automatic build and deployment using CodePipeline, CodeBuild and S3.</p>
          </div>
        </div>
      </section>
    )
  }