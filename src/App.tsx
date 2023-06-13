import List from './components/List';
import { names } from './data';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(names);

  const clearAll = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today!</h3>
        <List people={people} />
        <button onClick={clearAll} type="button" className="btn btn-block">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
