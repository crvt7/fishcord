import {ReactComponent as ChannelIcon} from '../../assets/Channel.svg'

type Props = {
  name: string;
  description: string;
};

export default function ChannelInfoBar({ name, description }: Props) {
  return (
    <div className="pl-4 py-2 flex items-center grow select-none min-w-[16rem] overflow-hidden">
      
      <div className="flex gap-4 items-center shrink-0 overflow-hidden">
        <ChannelIcon/>
        <p className="font-bold text-gray-100">{name}</p>
        <div className="w-px bg-gray-900 self-stretch" />
        <p className="text-gray-400 hover:cursor-pointer">{description}</p>
      </div>
      
    </div>
  );
}
