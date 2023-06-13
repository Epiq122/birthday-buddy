interface PersonProps {
  image: string;
  name: string;
  age: number;
}

const Person = ({ image, name, age }: PersonProps) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
