import {ReactComponent as ChannelIcon} from '../../assets/Channel.svg'

type Props = {
    name: string,
    selected: boolean,
    idx: number
    onClick: (number: number) => void
}

export default function Channel({name, selected, onClick, idx}: Props) {
  return (
    <p className={`channel ${selected ? "selected" : ""}`} onClick={() => onClick(idx)}><ChannelIcon width={'1rem'} className='mr-2' stroke='rgb(156 163 175)'/> {name}</p>
  )
}