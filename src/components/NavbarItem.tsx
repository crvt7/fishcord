
type Props = {
  Icon: any;
  tooltipText: string
  idx: number
  onClick: (number: number) => void
  selected: boolean
};

export default function NavbarItem({ Icon, tooltipText, onClick, idx, selected}: Props) {


  return (
    <div className="flex items-center group z-50">
      <div onClick={() => onClick(idx)} className={`navbar-item ${selected ? "selected" : ""}`}><Icon /></div>
      <p className={`tooltip group-hover:scale-100`}>{tooltipText}</p>
    </div>
  );
}
