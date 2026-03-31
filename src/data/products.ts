import AiderADT62M from "/assets/products/AiderADT62M/mainImage.jpg";
import levelImage1 from "/assets/products/AiderADT62M/LevelImage.jpeg";
import AiderADT107M from "/assets/products/AiderADT107M/mainImage.jpg";
import levelImage2 from "/assets/products/AiderADT107M/levelImage.png";
import AiderADUG20 from "/assets/products/AiderADUG20/mainImage.jpg";
import AiderADCPE from "/assets/products/AiderADCPE/mainImage.jpg";
import AiderADCBR from "/assets/products/AiderADCBR/mainImage.jpg";
import AiderAPC18 from "/assets/products/AiderAPC18&APC24/mainImage.jpg";
import AiderADLM600 from "/assets/products/AiderADLM600/mainImage.jpeg";

export interface Product {
  id: string;
  name: string;
  subname?: string;
  shortDescription?: string;
  description: string;
  category?: string;
  Protection?: string;
  customtext?: string;
  Warranty?: string;
  image: string;
  LevelImage?: string;
  specifications?: { label: string; value: string }[];
  purpose?: any[];
  features?: string[];
  comparison?: {
    heading: string;
    headers: {
      parameter: string;
      gec: string;
      conventional: string;
    };
    rows: {
      parameter: string;
      gec: string;
      conventional: string;
    }[];
  };
  subTexts?: {
    subHeading: string;
    subDescription1: string;
    subDescription2: string;
    points: any;
  };
  brochureAvailable: boolean;
  benefits?: any[];
  areas?: any[];
}

export const products: Product[] = [
  {
    id: "Aider AD T62M",
    name: "Aider AD T62M",
    shortDescription:
      "Aider E S E Heavy Duty Lightning Protection System model: AD T62M",
    description:
      "Aider E S E Heavy Duty Lightning Protection System model: AD T62M with independently tested and configured with lightning terminal as spheroid. This consists of an electrically isolated HE-30 (6082) alloy panel body surrounding an earthed central fin. The insulation material used to electrically isolate the panel is comprised oa base polymer which provides high ozone and uv resistance with a die-electric strength of 24-38 uv/mm tested.. As per NFC 17-102, the ESE air terminal is tested with the“Switching Impulse Voltage and” Direct Voltage of 70 kv.",
    image: AiderADT62M,
    specifications: [
      { label: "Brand", value: "Aider" },
      { label: "Model", value: "AD T62M" },
      { label: "RP", value: "32-62m radius" },
      { label: "Weight", value: "2.20 Kg (Avarage)" },
      { label: "Dimension", value: "460mm H x 90mm D" },
      { label: "Capacity", value: "70kA - 8/20μs" },
    ],
    features: [],
    brochureAvailable: true,
    Warranty: "<b> 20 Yrs. Product Replacement </b>",
    Protection: "<b> 62 Meters Radius </b>",
    LevelImage: levelImage1,
  },
  {
    id: "AiderADT107M",
    name: "Aider AD T107M",
    shortDescription:
      "Aider E S E Heavy Duty Lightning Protection System model: AD T107M",
    description:
      "Aider E S E Heavy Duty Lightning Protection System model: AD T107M with independently tested &amp; configured with lightning terminal as a spheroid. This is comprised of electrically isolated He-30 (6082 alloy panel body surrounding an earthed central final. The insulation material used to electrically isolate the panel is comprised oa base polymer which provides high ozone &amp; uv resistance with a die-electric strength of 24-38 uv/mm tested.. As per NFC 17-102, the ESE air terminal is tested with the “Switching Impulse Voltage and” Direct Voltage of 70 kv.",
    image: AiderADT107M,
    specifications: [
      { label: "Brand", value: "Aider" },
      { label: "Model", value: "AD T107M" },
      { label: "RP", value: "79-107m radius" },
      { label: "Weight", value: "2.75 Kg (Avarage)" },
      { label: "Dimension", value: "580mm H x 90mm D" },
      { label: "Capacity", value: "70kA - 8/20μs" },
    ],
    features: [],
    brochureAvailable: true,
    Warranty: "<b> 20 Yrs. Product Replacement </b>",
    Protection: "<b>107 Meters Radius </b>",
    LevelImage: levelImage2,
  },
  {
    id: "AiderADUG20",
    name: "Aider AD UG20",
    shortDescription: "Aider Ultra Grip Backfill",

    description:
      "<p>Aider Ultra Grip Backfill is low resistance high conductivity mineral combination, which effectively reduces the earth resistance in difficult soil conditions. During installation with proper water pouring, the ultra grip compound will convert to the GEL formation and its quality to retain the moisture up to 20 X of its dry volume. It also creates a GEL protective layer surrounding the electrode. Being non soluble in water, it stays at the electrode and is not washed out by the rain water.</p>" +
      "<p>The pH-adjusting agent maintains the pH value surrounding the grounding material within the required protective range.</p>" +
      "<p>The service life of an earthing electrode surrounded by Ultra Grip Ground Enhancement Compound (GEC) is maintenance-free and significantly longer than that of a conventional salt- and charcoal-based earthing system.</p>" +
      "<p>Since the contents of Aider Ultra Grip Compound are extracted from natural minerals, it is environmentally friendly and suitable for underground use.</p>" +
      "<p>Aider Ultra Grip Compound continuously absorbs and retains naturally available moisture from the surrounding environment, ensuring stable earth resistance values even under dry conditions.</p>" +
      "<p>Aider Ultra Grip Compound is available in 20 kg bags.</p>" +
      "<p><strong>**The ohmic value depends on soil conditions.</strong></p>",

    image: AiderADUG20,
    specifications: [],
    features: [],
    brochureAvailable: true,
    comparison: {
      heading:
        "Technical Comparison: Ultra Grip Compound vs Conventional Salt & Charcoal System",
      headers: {
        parameter: "Parameter",
        gec: "Ultra Grip Ground Enhancement Compound (GEC)",
        conventional: "Conventional Salt & Charcoal System",
      },
      rows: [
        {
          parameter: "Composition",
          gec: "Engineered conductive mineral compound",
          conventional: "Mixture of salt (NaCl) and charcoal",
        },
        {
          parameter: "Leachability",
          gec: "Non-leachable, chemically stable",
          conventional: "Highly leachable; salt dissolves in water",
        },
        {
          parameter: "Earth Resistance Stability",
          gec: "Stable over long duration",
          conventional: "Increases over time due to salt depletion",
        },
        {
          parameter: "Moisture Retention",
          gec: "High moisture retention capability",
          conventional: "Dependent on natural soil moisture",
        },
        {
          parameter: "Corrosion Impact on Electrode",
          gec: "Low corrosion rate",
          conventional: "Accelerated corrosion due to salt content",
        },
        {
          parameter: "Maintenance Requirement",
          gec: "Minimal / maintenance-free",
          conventional: "Periodic recharging of salt required",
        },
        {
          parameter: "Environmental Impact",
          gec: "Environmentally safe, non-toxic",
          conventional: "May contaminate surrounding soil and groundwater",
        },
        {
          parameter: "Performance in Dry Soil",
          gec: "Effective in high resistivity soils",
          conventional: "Performance drops significantly in dry conditions",
        },
        {
          parameter: "Service Life",
          gec: "20–25+ years (depending on soil conditions)",
          conventional: "3–5 years (typical, varies by soil)",
        },
        {
          parameter: "Compliance Compatibility",
          gec: "Suitable for installations as per IEC 62561 and IS 3043 guidelines",
          conventional:
            "Not recommended for long-term installations in modern standards",
        },
        {
          parameter: "Life Cycle Cost",
          gec: "Lower (long-term stability, less maintenance)",
          conventional: "Higher (frequent maintenance and replacement)",
        },
      ],
    },
    subTexts: {
      subHeading: "Engineering Insight",
      subDescription1:
        "Salt-based systems initially provide low earth resistance due to ionic conductivity. However, over time:",
      points: [
        { point: "Salt dissolves and migrates with groundwater." },
        { point: "Soil resistivity increases." },
        { point: "Electrode corrosion accelerates." },
        { point: "Periodic maintenance becomes necessary." },
      ],
      subDescription2:
        "Ultra Grip Compound, being non-leachable and mineral-based, ensures <b> consistent resistivity control </b>, enhanced electrode life, and stable grounding performance.",
    },
    benefits: [
      {
        point: "Aider BFC is tested from NABL Accredited Lab",
      },
      {
        point:
          "Helps to reduce the soil resistivity and develop a smooth dissipation path for fault current.",
      },
      {
        point: "Maintenance-Free & Eco- friendly",
      },
      {
        point: "Durable and Long and Life",
      },
      {
        point: "Highly conductive and non-corrosive.",
      },
      {
        point: "Reduce soil resistivity and Retain moisture for long time.",
      },
    ],
    areas: [
      {
        area: "HT &LT Earthing for Domestic & Industrial Areas.",
      },
      {
        area: "Lightning Protectors, Transformers, Mobile Towers & Digital Power Generators",
      },
      {
        area: "Substations, Electric power Generating Industries & Refineries.",
      },
      {
        area: "Computer & Data processing Centers",
      },
      {
        area: "Wherever dedicated earthing is required ",
      },
    ],
  },
  {
    id: "AiderADCPE",
    name: "Aider AD CPE 2&3",
    subname: "Copper Pipe Earth Electrodes:",
    shortDescription: "Aider Pressed Copper Pipe Earth Electrode",

    description:
      "<b> Aider Pressed Copper Pipe Earth Electrode</b> is a high-performance grounding/Earthing solution designed to provide low-resistance earthing for electrical systems. It ensures safety, equipment protection, and stable system performance by efficiently dissipating fault currents into the ground.  It manufactured from high-conductivity copper pipes that are mechanically pressed to enhance strength and durability. They are widely used in residential, commercial, and industrial installations where reliable earthing is essential and are manufactured in accordance with applicable Indian and international grounding standards such as: <b> IEC 62561, IEEE 80, BS 7430,IS 3043</b>",

    image: AiderADCPE,
    specifications: [
      { label: "Length", value: "1500mm – 3000mm" },
      { label: "Outer Diameter", value: "25mm – 50mm" },
      { label: "Wall Thickness", value: "1.5mm – 3mm" },
      { label: "Material Purity", value: "≥ 99.9 % Copper" },
      {
        label: "Current Carrying Capacity",
        value: "As per installation design",
      },
      { label: "Installation Type", value: "Vertical driven" },
      { label: "Finish", value: "Natural copper finish" },
    ],
    customtext: "(Custom dimensions available on request.)",
    features: [
      "<b>High Conductivity:</b> Made from 99.9% pure EC grade copper for excellent electrical performance.",
      "<b>Heavy-Duty Construction:</b> Pressed design ensures mechanical strength and durability.",
      "<b>Corrosion Resistant:</b> Superior resistance to rust and soil chemicals for long service life.",
      "<b>Low Earth Resistance: </b>Efficient grounding even in varying soil conditions.",
      "<b>Long Service Life:</b> Maintenance-free and highly reliable.",
    ],
    brochureAvailable: true,
    areas: [
      {
        area: "Residential  and Commercial buildings",
      },
      {
        area: "Industrial plants",
      },
      {
        area: "Telecom towers",
      },
      {
        area: "Power distribution systems",
      },
      {
        area: "Solar power installations",
      },
      {
        area: "Substations",
      },
    ],
  },
  {
    id: "AiderADCBR",
    name: "Aider AD CBR",
    subname: "Aider Copper Bonded Rods",
    shortDescription: "Aider Copper-bonded rods",
    description:
      "Aider Copper-bonded rods are high-performance earthing electrodes designed for<b> effective electrical grounding, lightning protection systems, and industrial and residential electrical installations.</b> These rods provide low-resistance earth connections and ensure <b>stable system</b> performance under varying soil and environmental conditions.",

    image: AiderADCBR,
    specifications: [
      {
        label: "Material",
        value:
          "Hot-dip galvanized steel core with high-purity electrolytic copper coating",
      },
      { label: "Copper Thickness", value: "≥ 250 µm (standard)" },
      { label: "Length", value: "1.5 m, 2.4 m, 3 m (custom sizes available)" },
      { label: "Diameter", value: "16 mm – 25 mm (standard)" },
      {
        label: "Electrical Conductivity",
        value: "> 97% IACS",
      },
      {
        label: "Mechanical Strength",
        value: "High tensile steel core for deep driving",
      },
      { label: "Installation Type", value: "Vertical or inclined driving" },
      {
        label: "Service Life",
        value: "25–30+ years in normal soil conditions",
      },
    ],
    features: [
      "<b>Superior Conductivity:</b> Copper-bonded surface ensures excellent electrical conductivity for rapid fault current dissipation.",
      "<b>Corrosion Resistance: </b> Thick copper coating protects the steel core against corrosion,<b> extending service life up to 30 years or more.</b>",
      "<b>Mechanical Strength: </b> Strong steel core allows easy driving into soil without bending or breaking.",
      "<b>Maintenance-Free: </b>Designed for <b>long-term reliability</b> in both dry and moist soil conditions.",
      "<b>Uniform Copper Coating:</b> Ensures <b>consistent low-resistance contact</b> with surrounding soil.",
      "<b>Compatibility:</b> Works seamlessly with <b> down conductors, grounding strips, and lightning protection systems.</b>",
    ],
    brochureAvailable: true,

    benefits: [
      {
        point:
          "<b>Effective Electrical Earthing: </b> Provides <b>stable earth resistance </b>for personnel safety and equipment protection.",
      },
      {
        point:
          "<b>Enhanced Lightning Safety:</b> Works with <b>ESE Lightning Arrestors </b> and conventional air terminals to safely discharge lightning currents. ",
      },
      {
        point:
          "<b>Low Maintenance:</b> Minimal inspection and long-term durability. ",
      },
      {
        point:
          "<b>Environmental Compatibility:</b>Copper-bonded rods are<b> non-toxic and eco-friendly.</b> ",
      },
    ],
    areas: [
      {
        area: "HT &LT Earthing for Domestic & Industrial Areas.",
      },
      {
        area: "Lightning Protectors, Transformers, Mobile Towers & Digital Power Generators",
      },
      {
        area: "Substations, Electric power Generating Industries & Refineries.",
      },
      {
        area: "Computer & Data processing Centers",
      },
      {
        area: "Wherever dedicated earthing is required ",
      },
    ],
  },
  {
    id: "AiderAPC18&APC24",
    name: "Aider APC18 & APC24",
    subname:
      "Poly Plastic Earth Pit Chamber Covers – Durable & Sustainable Solutions",
    shortDescription: "Aider Poly Plastic Earth Pit Chamber Covers",
    description:
      "<b>Aider Poly Plastic Earth Pit Chamber Covers</b> are engineered to provide strong, lightweight, and corrosion-resistant protection for electrical, telecom, and water utility pits. Designed for modern infrastructure, these covers ensure safety, durability, and ease of installation.Available Sizes are 18 x 18, 24 x 24, 30 x 30",

    image: AiderAPC18,
    specifications: [
      {
        label: "Lightweight Yet Strong",
        value:
          "Made from high-quality poly plastic materials, these covers are lighter than traditional concrete or metal covers, making installation easier without compromising strength.",
      },
      {
        label: "Corrosion and Weather Resistant",
        value:
          "Unlike metal, poly plastic is resistant to rust, water damage, and environmental wear, ensuring long-lasting performance in outdoor conditions.",
      },
      {
        label: "Eco-Friendly and Sustainable",
        value:
          "manufactured using recyclable materials; poly plastic covers contribute to sustainable construction practices while maintaining high durability.",
      },
      {
        label: "Customizable and Versatile",
        value:
          "Available in multiple sizes and load-bearing capacities, these covers fit a wide range of earth pit chamber dimensions and applications, including residential, commercial, and industrial projects.",
      },
      {
        label: "Safety and Reliability",
        value:
          "Poly plastic chamber covers provide a non-slip surface and secure fit, reducing the risk of accidents around open pits and utility chambers.",
      },
    ],
    features: [],
    brochureAvailable: true,

    benefits: [
      {
        point: "Lightweight and easy to handle",
      },
      {
        point: "High tensile strength for heavy loads",
      },
      {
        point: "Long-lasting performance in harsh weather conditions",
      },
      {
        point: "Low maintenance and corrosion-free",
      },
      {
        point: "Environmentally friendly and recyclable",
      },
    ],
    areas: [
      {
        area: "Electrical junction boxes",
      },
      {
        area: "Telecom and fiber optic pits",
      },
      {
        area: "Water supply and irrigation chambers",
      },
      {
        area: "Roadside and pedestrian utility chambers",
      },
      {
        area: "Industrial and commercial infrastructure",
      },
    ],
  },
  {
    id: "AiderADLM600",
    name: "Aider AD LM 600",
    subname: "Lattice Mat Earth Electrode",
    shortDescription: "Aider Poly Plastic Earth Pit Chamber Covers",
    description:
      "<p> A <b> lattice mat earthing system </b>is a network of <b> horizontal conductors buried in the ground forming a grid (lattice) pattern </b>. This grid is connected to equipment and structures to provide a <b> low-resistance path for fault current to flow safely into the earth</b>.</p>" +
      "<p>The grid typically looks like a <b> mesh of conductors arranged in squares  or rectangles </b> beneath the ground,that <b> safely carries dangerous fault currents into the earth</b>.</p>",

    image: AiderADLM600,
    specifications: [],
    features: [],
    purpose: [
      { point: "Protect <b> people from electric shock </b>." },
      { point: "Provide <b>low earth resistance path </b>." },
      { point: "Reduce <b>step potential and touch potential</b>." },
      { point: "Safely dissipate <b>lightning and fault currents</b>" },
    ],
    brochureAvailable: true,

    benefits: [
      {
        point: "Low earth resistance",
      },
      {
        point: "Improves electrical safety",
      },
      {
        point: "handles large fault currents",
      },
      {
        point: "Reduces voltage gradients on ground surface",
      },
    ],
    areas: [
      {
        area: "Electrical substations",
      },
      {
        area: "Lightning Arrestors",
      },
      {
        area: "Power plants",
      },
      {
        area: "Transformer yards",
      },
      {
        area: "Large industrial plants",
      },
    ],
  },
];
