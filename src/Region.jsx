import Button from './Button';

export default function Rigion({ regions }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <Button name={region.name} />
        </li>
      ))}
    </ul>
  );
}
