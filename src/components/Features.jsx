const features = [
  {
    icon: "🤖",
    title: "AI Chat Automation",
    desc: "Always-on AI agents that handle conversations intelligently and scale effortlessly."
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    desc: "Understand user behavior with real-time insights, metrics, and performance reports."
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    desc: "Connect with Slack, CRMs, and 500+ business tools to streamline workflows."
  }
];

export default function Features() {
  return (
    <section className="section-padding features-bg">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Powerful Features
          </h2>
          <p className="text-muted fs-5 mt-3">
            Everything you need to scale customer engagement and drive growth.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {features.map((f, i) => (
            <div key={i} className="col-md-4">
              <div className="feature-card h-100 p-4 p-lg-5 text-center">

                <div className="feature-icon">
                  {f.icon}
                </div>

                <h5 className="feature-title mt-3">
                  {f.title}
                </h5>

                <p className="feature-description">
                  {f.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
