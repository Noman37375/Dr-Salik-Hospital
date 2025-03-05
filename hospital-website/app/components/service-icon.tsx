"use client"

import { 
  Pill, 
  Siren, 
  Users, 
  Syringe, 
  FlaskConical as Flask, 
  Heart,
  Brain,
  Baby, 
  Eye,
  Bone,
  Stethoscope,
  Activity,
  LucideIcon
} from "lucide-react"

export type IconName = "Pill" | "Siren" | "Users" | "Syringe" | "Flask" | "Heart" | "Brain" | "Baby" | "Eye" | "Bone" | "Stethoscope" | "Activity"

const iconMap: Record<IconName, LucideIcon> = {
  Pill,
  Siren,
  Users,
  Syringe,
  Flask,
  Heart,
  Brain,
  Baby,
  Eye,
  Bone,
  Stethoscope,
  Activity
}

interface ServiceIconProps {
  name: IconName
  className?: string
}

export function ServiceIcon({ name, className = "h-8 w-8" }: ServiceIconProps) {
  const Icon = iconMap[name]
  return <Icon className={className} />
} 