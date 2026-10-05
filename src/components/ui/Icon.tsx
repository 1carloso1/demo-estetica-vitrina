import {
  ChevronDown,
  Clock,
  Droplets,
  Hand,
  MapPin,
  Menu,
  Palette,
  Scissors,
  Sparkles,
  X,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { IconName } from "@/types";

const icons: Record<IconName, ComponentType<LucideProps>> = {
  scissors: Scissors,
  palette: Palette,
  hand: Hand,
  droplets: Droplets,
  clock: Clock,
  "map-pin": MapPin,
  sparkles: Sparkles,
  "chevron-down": ChevronDown,
  menu: Menu,
  close: X,
};

interface IconProps extends LucideProps {
  name: IconName;
}

/** Íconos decorativos: siempre ocultos para lectores de pantalla. */
export function Icon({ name, ...props }: IconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" strokeWidth={1.75} {...props} />;
}
