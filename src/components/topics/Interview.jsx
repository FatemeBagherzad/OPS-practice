function Interview() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">Interview Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. STAR Response Structure</h3>
        <ul>
          <li>
            <strong>Situation:</strong> Brief context.
          </li>
          <li>
            <strong>Task:</strong> What you needed to achieve.
          </li>
          <li>
            <strong>Action:</strong> Specific steps you took.
          </li>
          <li>
            <strong>Result:</strong> Measurable outcome and lesson learned.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. High-Value Questions to Prepare</h3>
        <ul>
          <li>Tell me about yourself.</li>
          <li>Why public service and why this role?</li>
          <li>Describe a complex data problem you solved.</li>
          <li>How do you ensure data quality and accessibility?</li>
          <li>Describe a difficult stakeholder situation.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>3. 60-Second Intro Template</h3>
        <p className="cheat-note">
          "I am a data-focused professional with experience building reliable
          reporting and analytics solutions. I enjoy translating complex data
          into actionable insights, and I care deeply about accessibility,
          governance, and delivering measurable public impact."
        </p>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>4. Interview Day Checklist</h3>
        <ul>
          <li>Review your 8 STAR stories.</li>
          <li>Keep one page of role-specific notes.</li>
          <li>Test audio/video and environment.</li>
          <li>Prepare concise closing statement.</li>
          <li>Have your questions ready for the panel.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--red">
        <h3>5. Closing Statement</h3>
        <p className="cheat-note">
          "Thank you for the opportunity. I am excited about contributing to
          accessible, high-quality data solutions that support evidence-based
          decisions and better outcomes for Ontarians."
        </p>
      </article>
    </section>
  );
}

export default Interview;
