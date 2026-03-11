export default function About() {
    return (
      <section className="page-card">
        <h1>About This Project</h1>
        <p>
          This application was created as part of an internship assignment to learn
          how real software teams manage code and deploy applications automatically.
        </p>
  
        <div className="grid">
          <div className="info-box">
            <h3>Version Control</h3>
            <p>Git is used to track changes and maintain a clean project history.</p>
          </div>
          <div className="info-box">
            <h3>GitHub Collaboration</h3>
            <p>Branches and pull requests simulate a real team development process.</p>
          </div>
          <div className="info-box">
            <h3>CI/CD</h3>
            <p>Every code push can trigger automated build and deployment on AWS.</p>
          </div>
        </div>
      </section>
    )
  }