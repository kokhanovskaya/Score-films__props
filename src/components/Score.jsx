import Star from "./Star";

export default function Score({ score = 0 }) {
  if (typeof score !== "number" || score <= 0 || score >= 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: score }).map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
}
