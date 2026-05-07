import './DayCard.scss';

function DayCard({ day }) {
  return (
    <article className={`day-card ${day.variant || ''}`}>
      <h3>{day.heading}</h3>
      <ul>
        {day.tasks.map((task) => {
          const taskLabel = typeof task === 'string' ? task : task.label;
          const isChecked = typeof task === 'object' && Boolean(task.checked);

          return (
            <li key={taskLabel}>
              <input type="checkbox" checked={isChecked} readOnly />
              <span>{taskLabel}</span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default DayCard;
