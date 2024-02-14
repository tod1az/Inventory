export const references = {
  AMB: "AMB", //ambientales
  ASE: "ASE", // aseo
  BAÑ: "BAÑ", // baño
  COC: "COC", // cocina
  DES: "DES", // desinfectantes
  DET: "DET", //detergentes
  FUM: "FUM", //fumigación
  HID: "HID", //
  MAS: "MAS", // mascota
  PAP: "PAP", //papeles
  PER: "PER", // perfumeria
  PIS: "PIS", // Limpia piso
  PLA: "PLA", // plasticos
  REP: "REP", // repuestos
  RES: "RES", // restaurant
  RPT: "RPT",
  VAR: "VAR", // varios
  VEH: "VEH", // vehiculo
} as const;

export type Reference = (typeof references)[keyof typeof references];
