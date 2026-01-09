export default function HowItWorks() {
  const steps = [
    {
      icon: "🔌",
      title: "Connect",
      desc: "Integrate Ryze AI with your website, CRM, or existing tools in minutes."
    },
    {
      icon: "🤖",
      title: "Configure",
      desc: "Train your AI agent and set up intelligent flows without coding."
    },
    {
      icon: "📊",
      title: "Optimize",
      desc: "Monitor conversations in real time and improve automatically."
    },
    {
      icon: "🚀",
      title: "Scale",
      desc: "Handle unlimited conversations with human-like interactions."
    }
  ];

  return (
    <section className="section-padding how-it-works-bg">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">How Ryze AI Works</h2>
          <p className="text-muted fs-5 mt-3">
            Get up and running in minutes — no technical expertise required.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step, i) => (
            <div key={i} className="col-md-3">
              <div className="feature-card h-100 p-4 text-center">

                <div className="feature-icon mb-3">
                  {step.icon}
                </div>

                <div className="badge bg-primary mb-3">
                  Step {i + 1}
                </div>

                <h5 className="fw-bold mt-2">{step.title}</h5>
                <p className="text-muted mt-2">{step.desc}</p>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg px-5">
            Get Started Free
          </button>
        </div>

      </div>
    </section>
  );
}
