import './AccordionItem.scss';

function AccordionItem({ title, isOpen, onToggle, children, level = 'week' }) {
  return (
    <div className={`accordion-item accordion-${level}`}>
      <button
        type="button"
        className={`accordion-trigger ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
      >
        <span>{title}</span>
        <span className="chevron" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen ? <div className="accordion-content">{children}</div> : null}
    </div>
  );
}

export default AccordionItem;
