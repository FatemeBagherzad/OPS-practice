import DayCard from './DayCard';

function ActionPlanSection({
  weeks,
  activeWeekKey,
  activeDayKey,
  onWeekClick,
  onDayClick,
}) {
  const activeWeek = weeks.find((week) => week.key === activeWeekKey);
  const activeDay = activeWeek?.days.find((day) => day.key === activeDayKey);

  return (
    <section className="panel-group">
      <h2 className="section-title">🗓️ Action Plan Menu</h2>
      <div className="menu-row" role="tablist" aria-label="Action plan weeks">
        {weeks.map((week) => (
          <button
            key={week.key}
            type="button"
            role="tab"
            className={`menu-button week-button ${
              activeWeekKey === week.key ? 'active' : ''
            }`}
            aria-selected={activeWeekKey === week.key}
            onClick={() => onWeekClick(week.key)}
          >
            {week.title}
          </button>
        ))}
      </div>

      {activeWeek ? (
        <div className="menu-children-panel">
          <div
            className="menu-row days-row"
            role="tablist"
            aria-label={`${activeWeek.title} days`}
          >
            {activeWeek.days.map((day) => (
              <button
                key={day.key}
                type="button"
                role="tab"
                className={`menu-button day-button ${
                  activeDayKey === day.key ? 'active' : ''
                }`}
                aria-selected={activeDayKey === day.key}
                onClick={() => onDayClick(day.key)}
              >
                {day.title}
              </button>
            ))}
          </div>

          {activeDay ? (
            <div className="menu-content-panel">
              <DayCard day={activeDay} />
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

export default ActionPlanSection;
