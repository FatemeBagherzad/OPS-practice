import { useState } from 'react';
import DayCard from './components/plan/DayCard';
import { weeks } from './data/planData';
import MccssAccessibility from './components/topics/MccssAccessibility';
import PowerBi from './components/topics/PowerBi';
import Dax from './components/topics/Dax';
import Azure from './components/topics/Azure';
import Databricks from './components/topics/Databricks';
import DataModeling from './components/topics/DataModeling';
import RedditOpsResearch from './components/topics/RedditOpsResearch';
import Interview from './components/topics/Interview';

const topicPanels = [
  { title: 'MCCSS / Accessibility', Component: MccssAccessibility },
  { title: 'Power BI', Component: PowerBi },
  { title: 'DAX', Component: Dax },
  { title: 'Azure', Component: Azure },
  { title: 'Databricks', Component: Databricks },
  { title: 'Data Modeling', Component: DataModeling },
  { title: 'Reddit / OPS Research', Component: RedditOpsResearch },
  { title: 'Interview', Component: Interview },
];

function App() {
  const [activeWeekKey, setActiveWeekKey] = useState('');
  const [activeDayKey, setActiveDayKey] = useState('');
  const [activeTopicKey, setActiveTopicKey] = useState('');

  const activeWeek = weeks.find((week) => week.key === activeWeekKey);
  const activeDay = activeWeek?.days.find((day) => day.key === activeDayKey);

  const handleWeekClick = (weekKey) => {
    setActiveWeekKey((prev) => (prev === weekKey ? '' : weekKey));
    setActiveDayKey('');
  };

  const handleDayClick = (dayKey) => {
    setActiveDayKey((prev) => (prev === dayKey ? '' : dayKey));
  };

  const handleTopicClick = (topicKey) => {
    setActiveTopicKey((prev) => (prev === topicKey ? '' : topicKey));
  };

  const ActiveTopicComponent = topicPanels.find(
    (topic) => topic.title === activeTopicKey,
  )?.Component;

  return (
    <main className="page">
      <div className="container">
        <header className="hero">
          <h1>📅 13-Day Action Plan</h1>
          <p>
            May 6 → May 19, 2026 · Data Solutions Developer (Job ID: 242255)
          </p>
        </header>

        <section className="panel-group">
          <h2 className="section-title">Action Plan Menu</h2>
          <div
            className="menu-row"
            role="tablist"
            aria-label="Action plan weeks"
          >
            {weeks.map((week) => (
              <button
                key={week.key}
                type="button"
                role="tab"
                className={`menu-button week-button ${
                  activeWeekKey === week.key ? 'active' : ''
                }`}
                aria-selected={activeWeekKey === week.key}
                onClick={() => handleWeekClick(week.key)}
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
                    onClick={() => handleDayClick(day.key)}
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

        <section className="panel-group">
          <h2 className="section-title">Cheat Sheet Menu</h2>
          <div
            className="menu-row"
            role="tablist"
            aria-label="Cheat sheet topics"
          >
            {topicPanels.map(({ title }) => (
              <button
                key={title}
                type="button"
                role="tab"
                className={`menu-button topic-button ${
                  activeTopicKey === title ? 'active' : ''
                }`}
                aria-selected={activeTopicKey === title}
                onClick={() => handleTopicClick(title)}
              >
                {title}
              </button>
            ))}
          </div>

          {ActiveTopicComponent ? (
            <div className="menu-content-panel">
              <ActiveTopicComponent />
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}

export default App;
