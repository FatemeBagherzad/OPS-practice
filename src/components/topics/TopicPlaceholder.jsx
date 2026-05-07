function TopicPlaceholder({ title }) {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">📋 {title} Cheat Sheet</h2>
      <article className="cheat-card cheat-card--neutral">
        <h3>{title}</h3>
        <p>cheet sheet go here.</p>
      </article>
    </section>
  );
}

export default TopicPlaceholder;
