import { useState } from 'react';

function renderTextWithLinks(text) {
  if (!text) {
    return '';
  }

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (/^https?:\/\/\S+$/.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noreferrer"
        >
          {part}
        </a>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function renderListItem(item) {
  if (typeof item === 'string') {
    return renderTextWithLinks(item);
  }

  if (item.label) {
    return (
      <>
        <strong>{item.label}</strong>
        {item.text ? <> {renderTextWithLinks(item.text)}</> : ''}
      </>
    );
  }

  return renderTextWithLinks(item.text || '');
}

function renderParagraph(paragraph, index) {
  if (typeof paragraph === 'string') {
    return <p key={index}>{renderTextWithLinks(paragraph)}</p>;
  }

  if (paragraph.label) {
    return (
      <p key={index}>
        <strong>{paragraph.label}</strong> {renderTextWithLinks(paragraph.text)}
      </p>
    );
  }

  return <p key={index}>{renderTextWithLinks(paragraph.text)}</p>;
}

function ContentSheet({ title, sections }) {
  const [collapsedGroups, setCollapsedGroups] = useState({});

  const toggleCollapse = (groupKey) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  return (
    <section className="cheat-sheet">
      <h2 className="cheat-sheet__title">{title}</h2>
      {sections.map((section) => {
        const isCollapsible = section.isCollapsible || false;
        const groupKey = section.collapsibleGroup;
        const isGroupCollapsed = groupKey
          ? collapsedGroups[groupKey] || false
          : false;
        const shouldHide = groupKey && isGroupCollapsed && !isCollapsible;

        return (
          <article
            key={section.title}
            className={`cheat-card ${section.variant || 'cheat-card--neutral'}`}
            style={{ display: shouldHide ? 'none' : 'block' }}
          >
            <h3
              onClick={() =>
                isCollapsible && groupKey && toggleCollapse(groupKey)
              }
              style={{
                cursor: isCollapsible ? 'pointer' : 'default',
              }}
            >
              {isCollapsible && groupKey && (
                <span
                  style={{
                    marginRight: '8px',
                  }}
                >
                  {isGroupCollapsed ? '▶' : '▼'}
                </span>
              )}
              {section.title}
            </h3>

            {!shouldHide && (
              <>
                {section.code ? (
                  <pre className="cheat-code">
                    <code>{section.code}</code>
                  </pre>
                ) : null}

                {section.subsections?.length ? (
                  <div className="cheat-subsections">
                    {section.subsections.map((subsection) => (
                      <section
                        key={subsection.title}
                        className="cheat-subsection"
                      >
                        <h4>{subsection.title}</h4>

                        {subsection.code ? (
                          <pre className="cheat-code">
                            <code>{subsection.code}</code>
                          </pre>
                        ) : null}

                        {subsection.list ? (
                          <ul>
                            {subsection.list.map((item, index) => (
                              <li key={index}>{renderListItem(item)}</li>
                            ))}
                          </ul>
                        ) : null}

                        {subsection.note ? (
                          <p className="cheat-note">
                            {renderTextWithLinks(subsection.note)}
                          </p>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : null}

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

                {section.note ? (
                  <p className="cheat-note">
                    {renderTextWithLinks(section.note)}
                  </p>
                ) : null}
              </>
            )}
          </article>
        );
      })}
    </section>
  );
}

export default ContentSheet;
