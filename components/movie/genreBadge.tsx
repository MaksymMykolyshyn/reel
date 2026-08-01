type GenreBadgeProps = {
  name: string;
};

export default function GenreBadge({ name }: GenreBadgeProps) {
  return (
    <span className="border border-secondary px-3 py-1 rounded-full text-sm">
      {name}
    </span>
  );
}