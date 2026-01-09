export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "AI & Automation",
      icon: "🤖",
      highlight: true,
      features: [
        "Human-like conversations using intent detection",
        "Multi-language support (tested with 50+ locales)",
        "Fallback to human agents when confidence is low"
      ]
    },
    {
      title: "Analytics",
      icon: "📊",
      features: [
        "Conversation-level metrics",
        "Drop-off and intent analysis",
        "Custom reports (CSV export)"
      ]
    },
    {
      title: "Integrations",
      icon: "🔗",
      features: [
        "Slack and Microsoft Teams",
        "Salesforce & HubSpot",
        "Webhook-based custom flows"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">

        {/* Heading (smaller, more realistic) */}
        <div className="mb-5">
          <h1 className="fw-bold">
            Features built for real support teams
          </h1>
          <p className="text-muted mt-2" style={{ maxWidth: 640 }}>
            Instead of cramming every feature possible, Ryze AI focuses on what
            support teams actually use day-to-day.
          </p>
        </div>

        <div className="row g-4">
          {featureCategories.map((cat, i) => (
            <div key={i} className="col-md-4">
              <div
                className={`feature-category-card ${
                  cat.highlight ? "border-primary" : ""
                }`}
                style={{
                  padding: cat.highlight ? "2.5rem" : "2rem"
                }}
              >
                <div className="feature-category-icon">
                  {cat.icon}
                </div>

                <h4 className="fw-bold mb-3">
                  {cat.title}
                </h4>

                <ul className="list-unstyled feature-list">
                  {cat.features.map((f, idx) => (
                    <li key={idx}>
                      <span className="feature-bullet">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {cat.highlight && (
                  <div className="mt-4 small text-muted">
                    Most teams start here →
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
