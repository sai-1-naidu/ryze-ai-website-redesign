export default function Pricing() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Simple Pricing</h1>
          <p className="text-muted">
            Transparent pricing for teams of all sizes.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center p-4">
                <h5 className="fw-bold">Starter</h5>
                <h2 className="my-3">Free</h2>
                <p className="text-muted">Perfect for trying Ryze AI</p>
                <button className="btn btn-outline-primary w-100 mt-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-primary shadow h-100">
              <div className="card-body text-center p-4">
                <span className="badge bg-primary mb-2">Most Popular</span>
                <h5 className="fw-bold">Pro</h5>
                <h2 className="my-3">$29 / mo</h2>
                <p className="text-muted">For growing businesses</p>
                <button className="btn btn-primary w-100 mt-3">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
