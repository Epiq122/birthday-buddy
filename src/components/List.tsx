import Person from './Person';

type Person = {
  id: number;
  name: string;
  age: number;
  image: string;
};

type Props = {
  people: Person[];
};

function List({ people }: Props) {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
}

export default List;
