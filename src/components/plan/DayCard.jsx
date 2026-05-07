import './DayCard.scss';

function DayCard({ day }) {
  return (
    <article className={`day-card ${day.variant || ''}`}>
      <h3>{day.heading}</h3>
      <ul>
        {day.tasks.map((task) => (
          <li key={task}>
            <input type="checkbox" />
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default DayCard;
