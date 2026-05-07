function renderListItem(item) {
  if (typeof item === 'string') {
    return item;
  }

  if (item.label) {
    return (
      <>
        <strong>{item.label}</strong>
        {item.text ? ` ${item.text}` : ''}
      </>
    );
  }

  return item.text || '';
}

function renderParagraph(paragraph, index) {
  if (typeof paragraph === 'string') {
    return <p key={index}>{paragraph}</p>;
  }

  if (paragraph.label) {
    return (
      <p key={index}>
        <strong>{paragraph.label}</strong> {paragraph.text}
      </p>
    );
  }

  return <p key={index}>{paragraph.text}</p>;
}

function ContentSheet({ title, sections }) {
  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">{title}</h2>
      {sections.map((section) => (
        <article
          key={section.title}
          className={`cheat-card ${section.variant || 'cheat-card--neutral'}`}
        >
          <h3>{section.title}</h3>

          {section.paragraphs?.map(renderParagraph)}

          {section.list ? (
            <ul>
              {section.list.map((item, index) => (
                <li key={index}>{renderListItem(item)}</li>
              ))}
            </ul>
          ) : null}

          {section.orderedList ? (
            <ol>
              {section.orderedList.map((item, index) => (
                <li key={index}>{renderListItem(item)}</li>
              ))}
            </ol>
          ) : null}

          {section.tags ? (
            <div className="cheat-tags">
              {section.tags.map((tag) => (
                <span key={tag} className="cheat-tag">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {section.note ? <p className="cheat-note">{section.note}</p> : null}
        </article>
      ))}
    </section>
  );
}

export default ContentSheet;
