import PrimaryButton from "./PrimaryButton";
import LiveStats from "./LiveStats";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">

        {/* Badge */}
        <span className="badge bg-light text-dark mb-3">
          ✨ AI-powered customer support
        </span>

        {/* Heading */}
        <h1 className="display-4 fw-bold mt-3">
          Automate customer conversations <br className="d-none d-md-block" />
          without losing the human touch
        </h1>

        {/* Description */}
        <p className="lead mt-4" style={{ maxWidth: 720 }}>
          Ryze AI helps teams respond instantly, qualify leads automatically,
          and reduce manual support work using intelligent chat automation.
        </p>

        {/* CTA */}
        <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
          <PrimaryButton>
            Get started free
          </PrimaryButton>

          <button className="btn btn-outline-light btn-lg px-4">
            Book a demo
          </button>
        </div>

        {/* Live stats */}
        <LiveStats />

      </div>
    </section>
  );
}
