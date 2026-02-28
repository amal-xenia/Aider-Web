import productAirTerminal from "@/assets/product-air-terminal.jpg";
import productEseTerminal from "@/assets/product-ese-terminal.jpg";
import productEarthingRod from "@/assets/product-earthing-rod.jpg";
import productSurgeProtector from "@/assets/product-surge-protector.jpg";
import productDownConductor from "@/assets/product-down-conductor.jpg";
import productStrikeCounter from "@/assets/product-strike-counter.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  category: string;
  specifications: { label: string; value: string }[];
  features: string[];
  brochureAvailable: boolean;
}

export const products: Product[] = [
  {
    id: "air-terminal",
    name: "Conventional Air Terminal",
    shortDescription: "High-quality copper air terminals for direct lightning interception.",
    description: "Our Conventional Air Terminals are manufactured from high-grade copper and stainless steel, designed to provide reliable lightning interception points on structures. These air terminals comply with IS/IEC 62305 standards and are suitable for all types of buildings and industrial installations.",
    image: productAirTerminal,
    category: "Air Terminals",
    specifications: [
      { label: "Material", value: "Pure Copper / Stainless Steel" },
      { label: "Height", value: "300mm to 1000mm" },
      { label: "Base Diameter", value: "16mm" },
      { label: "Tip Design", value: "Multi-point / Single-point" },
      { label: "Compliance", value: "IS/IEC 62305" },
      { label: "Warranty", value: "10 Years" },
    ],
    features: [
      "Corrosion-resistant construction",
      "Easy rooftop mounting",
      "UV-stabilized components",
      "Tested to withstand 200kA impulse current",
    ],
    brochureAvailable: true,
  },
  {
    id: "ese-terminal",
    name: "ESE Lightning Arrester",
    shortDescription: "Early Streamer Emission technology for extended protection radius.",
    description: "The Aider ESE Lightning Arrester uses advanced Early Streamer Emission technology to provide a significantly larger protection zone compared to conventional terminals. Ideal for large open areas, warehouses, and critical infrastructure.",
    image: productEseTerminal,
    category: "Air Terminals",
    specifications: [
      { label: "Technology", value: "Early Streamer Emission" },
      { label: "Protection Radius", value: "Up to 107m (Level I)" },
      { label: "Material", value: "Stainless Steel 316L" },
      { label: "Advance Time", value: "60μs" },
      { label: "Compliance", value: "NFC 17-102 / UNE 21186" },
      { label: "Warranty", value: "15 Years" },
    ],
    features: [
      "No external power source required",
      "360° protection coverage",
      "Suitable for open areas and large structures",
      "Laboratory tested and certified",
    ],
    brochureAvailable: true,
  },
  {
    id: "earthing-electrode",
    name: "Copper Bonded Earthing Electrode",
    shortDescription: "Superior grounding solutions for effective lightning current dissipation.",
    description: "Our Copper Bonded Earthing Electrodes provide excellent grounding for lightning protection systems. The molecular bonding process ensures long-lasting conductivity and corrosion resistance in all soil conditions.",
    image: productEarthingRod,
    category: "Earthing System",
    specifications: [
      { label: "Material", value: "Copper Bonded Steel" },
      { label: "Copper Thickness", value: "254 microns (min)" },
      { label: "Length", value: "1.2m to 3m" },
      { label: "Diameter", value: "14.2mm / 17.2mm" },
      { label: "Compliance", value: "UL 467 / IS 3043" },
      { label: "Warranty", value: "25 Years" },
    ],
    features: [
      "Molecular copper bonding for durability",
      "Low impedance grounding",
      "Suitable for all soil conditions",
      "Easy drive-in installation",
    ],
    brochureAvailable: true,
  },
  {
    id: "surge-protector",
    name: "Surge Protection Device (SPD)",
    shortDescription: "Class I+II SPD for protection against transient overvoltages.",
    description: "Aider Surge Protection Devices safeguard sensitive electrical and electronic equipment from transient overvoltages caused by lightning. Available in Type 1, Type 2, and combined configurations for comprehensive protection.",
    image: productSurgeProtector,
    category: "Surge Protection",
    specifications: [
      { label: "Type", value: "Class I+II Combined" },
      { label: "Max Discharge", value: "100kA (10/350μs)" },
      { label: "Voltage Protection", value: "≤1.5kV" },
      { label: "Mounting", value: "DIN Rail 35mm" },
      { label: "Compliance", value: "IEC 61643-11" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "Visual status indicator",
      "Remote signaling contact",
      "Plug-in replaceable modules",
      "Thermal disconnector built-in",
    ],
    brochureAvailable: true,
  },
  {
    id: "down-conductor",
    name: "Down Conductor Tape",
    shortDescription: "High-conductivity copper tape for lightning current path.",
    description: "Our Down Conductor Tapes provide a reliable path for lightning current to travel from the air terminal to the earthing system. Available in bare copper and PVC-covered variants for different installation requirements.",
    image: productDownConductor,
    category: "Conductors",
    specifications: [
      { label: "Material", value: "Electrolytic Copper" },
      { label: "Size", value: "25x3mm / 25x6mm" },
      { label: "Cross Section", value: "50 sq.mm / 150 sq.mm" },
      { label: "Conductivity", value: "≥99.9% IACS" },
      { label: "Compliance", value: "IS/IEC 62305-3" },
      { label: "Warranty", value: "10 Years" },
    ],
    features: [
      "High purity electrolytic copper",
      "Available in tape and round variants",
      "PVC-covered option for aesthetics",
      "Suitable for exposed and concealed routing",
    ],
    brochureAvailable: true,
  },
  {
    id: "strike-counter",
    name: "Lightning Strike Counter",
    shortDescription: "Digital counter to monitor lightning events on your protection system.",
    description: "The Aider Lightning Strike Counter provides accurate recording of lightning events on your protection system. Essential for maintenance scheduling and insurance documentation.",
    image: productStrikeCounter,
    category: "Monitoring",
    specifications: [
      { label: "Display", value: "6-digit LCD" },
      { label: "Sensitivity", value: "≥1kA" },
      { label: "Power", value: "No external power needed" },
      { label: "Housing", value: "IP65 Polycarbonate" },
      { label: "Compliance", value: "IEC 62561-6" },
      { label: "Warranty", value: "5 Years" },
    ],
    features: [
      "Self-powered by lightning energy",
      "Weatherproof IP65 enclosure",
      "Easy retrofit installation",
      "Non-resettable counter for authenticity",
    ],
    brochureAvailable: true,
  },
];
