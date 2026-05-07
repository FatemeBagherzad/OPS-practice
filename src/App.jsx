import { useState } from 'react';
import MenuSection from './components/common/MenuSection';
import ContentSheet from './components/common/ContentSheet';
import ActionPlanSection from './components/plan/ActionPlanSection';
import { appMeta } from './data/appMeta';
import { weeks } from './data/planData';
import { topicMenuItems, topicSheets } from './data/topicSheets';
import { coffeeChatMenuItems, coffeeChatSheets } from './data/coffeeChatSheets';

function App() {
  const [activeWeekKey, setActiveWeekKey] = useState('');
  const [activeDayKey, setActiveDayKey] = useState('');
  const [activeTopicKey, setActiveTopicKey] = useState('');
  const [activeCoffeeChatKey, setActiveCoffeeChatKey] = useState('');

  const handleWeekClick = (weekKey) => {
    setActiveTopicKey('');
    setActiveCoffeeChatKey('');
    setActiveWeekKey((prev) => (prev === weekKey ? '' : weekKey));
    setActiveDayKey('');
  };

  const handleDayClick = (dayKey) => {
    setActiveDayKey((prev) => (prev === dayKey ? '' : dayKey));
  };

  const handleTopicClick = (topicKey) => {
    setActiveWeekKey('');
    setActiveDayKey('');
    setActiveCoffeeChatKey('');
    setActiveTopicKey((prev) => (prev === topicKey ? '' : topicKey));
  };

  const handleCoffeeChatClick = (personKey) => {
    setActiveWeekKey('');
    setActiveDayKey('');
    setActiveTopicKey('');
    setActiveCoffeeChatKey((prev) => (prev === personKey ? '' : personKey));
  };

  const activeTopicSheet = activeTopicKey ? topicSheets[activeTopicKey] : null;
  const activeCoffeeChatSheet = activeCoffeeChatKey
    ? coffeeChatSheets[activeCoffeeChatKey]
    : null;

  return (
    <main className="page">
      <div className="container">
        <header className="hero">
          <h1>{appMeta.title}</h1>
          <p>{appMeta.subtitle}</p>
        </header>

        <ActionPlanSection
          weeks={weeks}
          activeWeekKey={activeWeekKey}
          activeDayKey={activeDayKey}
          onWeekClick={handleWeekClick}
          onDayClick={handleDayClick}
        />

        <MenuSection
          title="📚 Cheat Sheet Menu"
          ariaLabel="Cheat sheet topics"
          items={topicMenuItems}
          activeKey={activeTopicKey}
          onItemClick={handleTopicClick}
          buttonClassName="topic-button"
          ContentComponent={
            activeTopicSheet
              ? () => (
                  <ContentSheet
                    title={activeTopicSheet.title}
                    sections={activeTopicSheet.sections}
                  />
                )
              : null
          }
        />

        <MenuSection
          title="☕ Coffee Chat"
          ariaLabel="Coffee chat people"
          items={coffeeChatMenuItems}
          activeKey={activeCoffeeChatKey}
          onItemClick={handleCoffeeChatClick}
          buttonClassName="people-button"
          ContentComponent={
            activeCoffeeChatSheet
              ? () => (
                  <ContentSheet
                    title={activeCoffeeChatSheet.title}
                    sections={activeCoffeeChatSheet.sections}
                  />
                )
              : null
          }
        />
      </div>
    </main>
  );
}

export default App;
