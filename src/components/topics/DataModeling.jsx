function DataModeling() {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">Data Modeling Cheat Sheet</h2>

      <article className="cheat-card cheat-card--sky">
        <h3>1. Core Concepts</h3>
        <ul>
          <li>
            <strong>Fact table:</strong> Numeric business events (sales, claims,
            payments).
          </li>
          <li>
            <strong>Dimension table:</strong> Descriptive context (date, client,
            location).
          </li>
          <li>
            <strong>Grain:</strong> The exact level of detail for each row.
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--green">
        <h3>2. Star Schema Principles</h3>
        <ul>
          <li>Single central fact table with surrounding dimensions.</li>
          <li>Use surrogate keys in dimensions where needed.</li>
          <li>Keep dimensions wide and human-readable.</li>
          <li>Minimize snowflaking for BI simplicity and speed.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--yellow">
        <h3>3. Modeling Quality Checks</h3>
        <ul>
          <li>Validate one-to-many relationships and key uniqueness.</li>
          <li>Ensure null/unknown handling strategy exists.</li>
          <li>Standardize naming and business definitions.</li>
          <li>Create test queries for row counts and metric parity.</li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--violet">
        <h3>4. ETL/ELT and OLTP/OLAP</h3>
        <ul>
          <li>
            <strong>ETL:</strong> Transform before loading to warehouse.
          </li>
          <li>
            <strong>ELT:</strong> Load first, transform in modern platform.
          </li>
          <li>
            <strong>OLTP:</strong> Transactional systems (app operations).
          </li>
          <li>
            <strong>OLAP:</strong> Analytical systems (reporting/insights).
          </li>
        </ul>
      </article>

      <article className="cheat-card cheat-card--orange">
        <h3>5. Interview Soundbite</h3>
        <p className="cheat-note">
          "I start with business grain, design a clean star schema, validate
          keys and relationships, and document metric logic so reporting is both
          trustworthy and easy to maintain."
        </p>
      </article>
    </section>
  );
}

export default DataModeling;
