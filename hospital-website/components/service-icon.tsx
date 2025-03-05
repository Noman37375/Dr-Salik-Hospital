import { 
  PillIcon,
  SirenIcon,
  Stethoscope,
  Syringe,
  Beaker,
  HeartIcon,
  BabyIcon,
  UserRound,
  ScanLine
} from 'lucide-react'

const icons = {
  Pill: PillIcon,
  Siren: SirenIcon,
  Stethoscope,
  Syringe,
  Flask: Beaker,
  Heart: HeartIcon,
  Baby: BabyIcon,
  User: UserRound,
  Scanner: ScanLine
} as const

type IconName = keyof typeof icons

interface ServiceIconProps {
  name: IconName
  className?: string
}

export function ServiceIcon({ name, className = "w-6 h-6" }: ServiceIconProps) {
  const Icon = icons[name]
  return <Icon className={className} />
} 