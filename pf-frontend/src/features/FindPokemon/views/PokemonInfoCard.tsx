type PokemonInfoCardProps = {
  children: any;
  tone?: "green" | "yellow" | "red" | "image";
  label?: string;
};

export default function PokemonInfoCard({
  children,
  label,
  tone = "green",
}: PokemonInfoCardProps) {
  return (
    <div className={`pokemon-info-card tone-${tone}`}>
      {label && <span className="pokemon-info-label">{label}</span>}
      <span className="pokemon-info-value">{children}</span>
    </div>
  );
}
