function MenuSection({
  title,
  ariaLabel,
  items,
  activeKey,
  onItemClick,
  buttonClassName,
  ContentComponent,
}) {
  return (
    <section className="panel-group">
      <h2 className="section-title">{title}</h2>
      <div className="menu-row" role="tablist" aria-label={ariaLabel}>
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            className={`menu-button ${buttonClassName} ${
              activeKey === item.key ? 'active' : ''
            }`}
            aria-selected={activeKey === item.key}
            onClick={() => onItemClick(item.key)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {ContentComponent ? (
        <div className="menu-content-panel">
          <ContentComponent />
        </div>
      ) : null}
    </section>
  );
}

export default MenuSection;
