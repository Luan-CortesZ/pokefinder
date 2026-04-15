type RegionButtonProps = {
  region: string;
  onSelect?: (region: string) => void;
  isOpen?: boolean;
};

export default function RegionButton(props: RegionButtonProps) {
  function handleClick() {
    props.onSelect?.(props.region);
  }

  return (
    <div className={`region-button-wrapper ${props.isOpen ? "is-open" : ""}`}>
      <button onClick={handleClick} type="button">
        {props.region}
      </button>
    </div>
  );
}
