export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'AC' | 'Piping' | 'Geyser' | 'RO';
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  overview: string;
  commonProblems: { problem: string; solution: string }[];
  processSteps: { step: string; title: string; description: string }[];
  applianceTypes: string[];
  supportedBrands: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string }[];
}

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'ac-repair-indore',
    title: 'AC Repair in Indore',
    shortTitle: 'AC Repair',
    category: 'AC',
    metaTitle: 'Professional AC Repair in Indore | Shri Sanwariya Air Conditioner',
    metaDescription: 'Expert AC repair services in Indore. Quick troubleshooting for cooling issues, compressor breakdown, water leakage, and PCB faults across all major AC brands.',
    headline: 'Reliable AC Repair Services Across Indore',
    subheadline: 'Fast, accurate diagnosis and professional repair for split, window, and inverter air conditioners.',
    overview: 'When your air conditioner stops cooling or develops an unexpected noise or leakage during Indore\'s intense summer heat, you need reliable and prompt assistance. Shri Sanwariya Air Conditioner offers thorough diagnostic and repair services for all air conditioning models. From sensor failure to compressor troubleshooting, our technicians arrive equipped to resolve your appliance issues efficiently.',
    commonProblems: [
      { problem: 'AC Not Cooling Effectively', solution: 'Inspection of cooling coils, blower fans, filter cleaning, and refrigerant pressure evaluation.' },
      { problem: 'Water Leakage from Indoor Unit', solution: 'Clearing clogged drain pipes, unblocking condensate trays, and leveling the indoor unit mount.' },
      { problem: 'Unusual Humming, Rattling or Grinding Noise', solution: 'Checking blower motor bearings, fan blade obstruction, and securing loose brackets.' },
      { problem: 'Frequent Tripping of MCB / Power Issues', solution: 'Testing compressor capacitors, electrical wiring integrity, and relay switches.' },
      { problem: 'Bad Odor Coming from AC Air Flow', solution: 'Deep cleaning coils, disinfecting evaporator fins, and clearing stagnant drain pans.' },
    ],
    processSteps: [
      { step: '01', title: 'Service Request', description: 'Contact us via phone or WhatsApp with your location and symptoms.' },
      { step: '02', title: 'Inspection & Diagnosis', description: 'Technician conducts physical and electrical assessment of indoor and outdoor units.' },
      { step: '03', title: 'Repair & Component Servicing', description: 'Performing necessary fixes, soldering, electrical component changes, or tune-up.' },
      { step: '04', title: 'Performance Testing', description: 'Verifying air throw temperature, current draw, and smooth quiet operation.' },
    ],
    applianceTypes: ['Split Inverter AC', 'Split Non-Inverter AC', 'Window Air Conditioners', 'Cassette AC Units'],
    supportedBrands: ['Voltas', 'LG', 'Daikin', 'Samsung', 'Blue Star', 'Carrier', 'Hitachi', 'Panasonic', 'Godrej', 'Haier', 'Whirlpool', 'IFB'],
    faqs: [
      {
        question: 'How quickly can a technician visit for AC repair in Indore?',
        answer: 'We provide prompt same-day service visits across Indore, especially in MR 10, Vijay Nagar, Nipania, Palasia, and nearby localities based on slot availability.'
      },
      {
        question: 'Do you repair both inverter and non-inverter split ACs?',
        answer: 'Yes, we service modern inverter ACs with micro-controller circuits as well as conventional non-inverter and window AC units.'
      },
      {
        question: 'Do you offer a diagnostic check before starting repairs?',
        answer: 'Yes, our technician first inspects the unit, explains the exact issue, and proceeds with your approval.'
      }
    ],
    relatedServices: [
      { title: 'AC Gas Refilling in Indore', slug: 'ac-gas-refilling-indore' },
      { title: 'AC Installation in Indore', slug: 'ac-installation-indore' },
      { title: 'AC Copper Piping in Indore', slug: 'ac-piping-indore' },
    ]
  },
  {
    slug: 'ac-installation-indore',
    title: 'AC Installation in Indore',
    shortTitle: 'AC Installation',
    category: 'AC',
    metaTitle: 'Professional AC Installation & Uninstallation in Indore | Shri Sanwariya AC',
    metaDescription: 'Precision AC installation and uninstallation in Indore. Secure mounting, vibration dampening, vacuuming, and proper electrical safety setup.',
    headline: 'Safe & Secure AC Installation in Indore',
    subheadline: 'Expert mounting, core drilling, vacuuming, and leak-proof setup for split and window air conditioners.',
    overview: 'Proper air conditioner installation is crucial for peak cooling efficiency, energy savings, and the longevity of your compressor. An improper tilt, unevacuated copper line, or poorly secured outdoor bracket can lead to refrigerant loss and high electricity bills. Shri Sanwariya Air Conditioner ensures precision mounting, clean core drilling, vacuum testing, and proper electrical wiring for homes and offices across Indore.',
    commonProblems: [
      { problem: 'Vibration & Excessive Wall Noise', solution: 'Using heavy-duty wall anchors, rubber vibration isolators, and balanced outdoor bracket alignment.' },
      { problem: 'Water Dripping Back into the Room', solution: 'Ensuring correct slope on the indoor unit backplate and smooth drain pipe routing.' },
      { problem: 'Refrigerant Leaks at Flaring Joints', solution: 'Professional flare tooling, copper deburring, and torque-accurate nut tightening.' },
      { problem: 'Inefficient Cooling After Relocation', solution: 'Ensuring deep vacuuming of lines before valve release to eliminate moisture and non-condensables.' },
    ],
    processSteps: [
      { step: '01', title: 'Site Inspection', description: 'Evaluating optimal airflow location, wall strength, piping distance, and drainage path.' },
      { step: '02', title: 'Mounting & Core Hole', description: 'Level mounting of indoor backplate and precise drilling for refrigerant and drain lines.' },
      { step: '03', title: 'Outdoor Stand & Line Connection', description: 'Rigid outdoor stand mounting, copper tubing flaring, and electrical wiring.' },
      { step: '04', title: 'Vacuuming & Commissioning', description: 'System evacuation, leak check, valve opening, and temperature differential verification.' },
    ],
    applianceTypes: ['Split AC (1 Ton, 1.5 Ton, 2 Ton+)', 'Window Air Conditioners', 'Tower ACs', 'Cassette Units'],
    supportedBrands: ['Daikin', 'Voltas', 'LG', 'Samsung', 'Blue Star', 'Carrier', 'Hitachi', 'Panasonic', 'Godrej', 'Haier'],
    faqs: [
      {
        question: 'Do you also handle AC uninstallation when shifting homes in Indore?',
        answer: 'Yes, we provide safe AC uninstallation including refrigerant pump-down into the outdoor unit to prevent gas loss during shifting.'
      },
      {
        question: 'What materials are needed for a new split AC installation?',
        answer: 'Installation generally requires copper pipes, insulation sleeves, electrical communication wire, outdoor mounting bracket, and drain pipe.'
      }
    ],
    relatedServices: [
      { title: 'AC Copper Piping in Indore', slug: 'ac-piping-indore' },
      { title: 'AC Repair in Indore', slug: 'ac-repair-indore' },
      { title: 'AC Gas Refilling in Indore', slug: 'ac-gas-refilling-indore' },
    ]
  },
  {
    slug: 'ac-piping-indore',
    title: 'AC Copper Piping in Indore',
    shortTitle: 'AC Copper Piping',
    category: 'Piping',
    metaTitle: 'AC Copper Piping & Concealed Pipeline Services in Indore | Shri Sanwariya AC',
    metaDescription: 'Heavy-gauge AC copper piping, concealed pipeline installation, nitrogen pressure testing, and drainage piping across Indore for homes and commercial sites.',
    headline: 'Concealed & Exposed AC Copper Piping in Indore',
    subheadline: 'Durable, heavy-gauge copper lines, proper thermal insulation, and pressure testing for residential & commercial sites.',
    overview: 'High-quality copper piping is the lifeline of any air conditioning system. Shri Sanwariya Air Conditioner specializes in both concealed (under-construction/renovation) and exposed AC copper pipeline installation. We use certified gauge copper tubing, premium closed-cell nitrile insulation, and leak-proof brazing to ensure your cooling setup remains problem-free for years.',
    commonProblems: [
      { problem: 'Refrigerant Leaks Inside Concealed Walls', solution: 'Using thick gauge seamless copper with nitrogen pressure holding tests before wall plastering.' },
      { problem: 'Condensation Sweating & Wall Dampness', solution: 'Dual-line individual closed-cell elastomeric insulation to prevent condensation dripping.' },
      { problem: 'Kinked or Pinched Copper Bends', solution: 'Precision hydraulic or mechanical pipe benders to retain uniform internal pipe diameter.' },
      { problem: 'Poor AC Performance on Long Pipe Runs', solution: 'Proper line sizing (suction and discharge diameters) according to OEM tonnage specifications.' },
    ],
    processSteps: [
      { step: '01', title: 'Route Survey & Measurement', description: 'Assessing shortest, most efficient route between indoor and outdoor locations.' },
      { step: '02', title: 'Wall Chasing & Pipe Laying', description: 'Clean wall cutting, securing copper pairs with proper insulation and electrical cable.' },
      { step: '03', title: 'Nitrogen Pressure Holding', description: 'Pressurizing pipes with dry nitrogen to certify complete joint integrity.' },
      { step: '04', title: 'Drainage & Sealing', description: 'Installing gravity-fed drain lines and securing pipe terminations for future AC mounting.' },
    ],
    applianceTypes: ['Residential Homes & Duplexes', 'Commercial Offices & Showrooms', 'New Building Construction Sites', 'Renovations'],
    supportedBrands: ['All Split, Multi-Split, and VRV/VRF compatible brand setups'],
    faqs: [
      {
        question: 'When should concealed AC piping be done during construction?',
        answer: 'The ideal stage is during electrical conduit work, before wall plastering and false ceiling installation.'
      },
      {
        question: 'Do you test the concealed pipes for leaks before plastering?',
        answer: 'Yes, we perform pressure checks to confirm the line is airtight before the civil contractor seals the wall groove.'
      }
    ],
    relatedServices: [
      { title: 'AC Installation in Indore', slug: 'ac-installation-indore' },
      { title: 'AC Repair in Indore', slug: 'ac-repair-indore' },
      { title: 'AC Gas Refilling in Indore', slug: 'ac-gas-refilling-indore' },
    ]
  },
  {
    slug: 'ac-gas-refilling-indore',
    title: 'AC Gas Refilling in Indore',
    shortTitle: 'AC Gas Refilling',
    category: 'AC',
    metaTitle: 'AC Gas Refilling & Refrigerant Leak Repair in Indore | Shri Sanwariya AC',
    metaDescription: 'Authentic AC gas refilling in Indore for R32, R410A, and R22 refrigerants. Complete leak detection, vacuum evacuation, and weight-based charging.',
    headline: 'Reliable AC Gas Refilling & Leak Repair in Indore',
    subheadline: 'Certified refrigerants (R32, R410A, R22), soap bubble & pressure leak tests, deep vacuuming, and accurate charging.',
    overview: 'An air conditioner does not consume gas under normal operation. If your AC has lost its cooling charge, there is almost certainly a refrigerant leak. Refilling refrigerant without repairing the leak causes the gas to escape again within weeks. Shri Sanwariya Air Conditioner performs thorough leak detection at flare joints, service valves, and coil U-bends, followed by vacuuming and charging authentic refrigerant to manufacturer specifications.',
    commonProblems: [
      { problem: 'AC Blower Running But No Cooling', solution: 'Diagnosing low standing/suction pressure and identifying refrigerant depletion.' },
      { problem: 'Ice Formation on Indoor Coils or Copper Pipes', solution: 'Detecting restricted refrigerant flow or sub-normal operating pressure.' },
      { problem: 'Hissing Sound Near Service Valves', solution: 'Replacing valve cores, tightening flare nuts, or re-brazing copper joint pinholes.' },
      { problem: 'High Electricity Bills with Lukewarm Air', solution: 'Compressor running continuously due to inadequate refrigerant charge.' },
    ],
    processSteps: [
      { step: '01', title: 'Pressure Diagnostic', description: 'Connecting manifold gauges to assess suction, discharge, and standing pressures.' },
      { step: '02', title: 'Leak Detection & Brazing', description: 'Locating joint leaks with pressure tests and performing silver-copper brazing repairs.' },
      { step: '03', title: 'Deep Vacuum Evacuation', description: 'Removing atmospheric moisture and non-condensables using a two-stage vacuum pump.' },
      { step: '04', title: 'Accurate Refrigerant Charging', description: 'Charging pure R32, R410A, or R22 refrigerant while monitoring running current and cooling drop.' },
    ],
    applianceTypes: ['Split Inverter Air Conditioners (R32 / R410A)', 'Window ACs (R22 / R32)', 'Commercial Split Systems'],
    supportedBrands: ['Voltas', 'LG', 'Daikin', 'Samsung', 'Blue Star', 'Carrier', 'Hitachi', 'Panasonic', 'Godrej', 'Haier', 'Whirlpool'],
    faqs: [
      {
        question: 'Why do you test for leaks before filling AC gas?',
        answer: 'Air conditioning systems are hermetically sealed closed loops. If gas is low, there is a leak. Simply refilling without fixing the leak wastes refrigerant and fails to resolve the underlying issue.'
      },
      {
        question: 'Which refrigerants do you handle?',
        answer: 'We handle all standard refrigerants including modern eco-friendly R32, R410A blends, and legacy R22 systems.'
      }
    ],
    relatedServices: [
      { title: 'AC Repair in Indore', slug: 'ac-repair-indore' },
      { title: 'AC Installation in Indore', slug: 'ac-installation-indore' },
      { title: 'AC Copper Piping in Indore', slug: 'ac-piping-indore' },
    ]
  },
  {
    slug: 'geyser-repair-indore',
    title: 'Geyser Repair in Indore',
    shortTitle: 'Geyser Repair',
    category: 'Geyser',
    metaTitle: 'Fast Electric Geyser Repair in Indore | Shri Sanwariya AC & Geyser Services',
    metaDescription: 'Expert electric geyser repair in Indore. Heating element replacement, thermostat repair, water leakage fixing, and electrical shock safety checks.',
    headline: 'Dependable Geyser Repair & Maintenance in Indore',
    subheadline: 'Quick resolution for no hot water, tripping MCB, tank leaks, thermostat failure, and calcification issues.',
    overview: 'During chilly Indore winters, a malfunctioning water heater disrupts your entire morning routine. Shri Sanwariya Air Conditioner provides swift doorstep repair for all types of storage and instant electric geysers. We handle burned heating coils, calcified elements caused by hard water, faulty thermostats, pressure relief valve leaks, and electrical short-circuits.',
    commonProblems: [
      { problem: 'Water Not Heating or Heating Very Slowly', solution: 'Replacing burned-out or scaled copper/incoloy heating elements.' },
      { problem: 'Electric Geyser Tripping the MCB', solution: 'Replacing grounded heating elements or repairing shorted internal wiring.' },
      { problem: 'Water Dripping from Tank or Valves', solution: 'Replacing worn gaskets, tightening inlet/outlet nipples, or servicing pressure release valves.' },
      { problem: 'Overheating / Steam Escaping from Faucets', solution: 'Calibrating or replacing malfunctioning primary and thermal cutout thermostats.' },
      { problem: 'Rust-Colored or Foul-Smelling Water', solution: 'Replacing depleted magnesium sacrificial anode rods and flushing tank sediment.' },
    ],
    processSteps: [
      { step: '01', title: 'Electrical & Safety Check', description: 'Checking power supply, earthing continuity, and isolating electrical hazards.' },
      { step: '02', title: 'Internal Tank Inspection', description: 'Examining element resistance, thermostat response, and tank structural condition.' },
      { step: '03', title: 'Component Replacement & Descaling', description: 'Fitting compatible heating elements, thermostats, or safety valves.' },
      { step: '04', title: 'Water Pressure & Thermal Test', description: 'Filling tank, testing under pressure, and confirming safe automatic shut-off.' },
    ],
    applianceTypes: ['Storage Electric Geysers (10L, 15L, 25L+)', 'Instant Geysers (1L, 3L)', 'Vertical & Horizontal Wall-Mount Units'],
    supportedBrands: ['Bajaj', 'Havells', 'AO Smith', 'Racold', 'Venus', 'Crompton', 'V-Guard', 'Orient', 'Usha'],
    faqs: [
      {
        question: 'Why is my geyser tripping the main electrical switch?',
        answer: 'This is usually caused by water penetration into the heating element casing, creating an earth leakage fault. Replacing the heating element typically resolves it.'
      },
      {
        question: 'Can hard water in Indore damage my geyser element?',
        answer: 'Yes, calcium and magnesium deposits coat the heating coil, causing it to overheat and fail prematurely. Regular descaling and anode replacement helps prolong element life.'
      }
    ],
    relatedServices: [
      { title: 'Geyser Installation in Indore', slug: 'geyser-installation-indore' },
      { title: 'RO Water Purifier Service in Indore', slug: 'ro-water-purifier-service-indore' },
      { title: 'AC Repair in Indore', slug: 'ac-repair-indore' },
    ]
  },
  {
    slug: 'geyser-installation-indore',
    title: 'Geyser Installation in Indore',
    shortTitle: 'Geyser Installation',
    category: 'Geyser',
    metaTitle: 'Professional Geyser Installation in Indore | Shri Sanwariya AC',
    metaDescription: 'Secure wall-mounting and plumbing installation for storage and instant electric geysers in Indore. Leak-proof connections and safety PRV valve setup.',
    headline: 'Safe & Secure Geyser Installation in Indore',
    subheadline: 'Heavy-duty hook mounting, reinforced connection pipes, pressure release valve setup, and electrical verification.',
    overview: 'A water heater combines high electrical wattage with pressurized water. Improper mounting or missing safety valves can pose severe structural and electrical hazards. Shri Sanwariya Air Conditioner delivers professional geyser installation across Indore. We ensure secure wall fastener anchoring, robust stainless-steel braided hoses, pressure-release safety valve installation, and verified electrical grounding.',
    commonProblems: [
      { problem: 'Loose Fasteners in Hollow Brick Walls', solution: 'Using specialized expansion anchor bolts suited for bathroom wall tiles and brickwork.' },
      { problem: 'Water Leaks at Inlet and Outlet Nipples', solution: 'High-grade Teflon sealing with durable multi-layer connection pipes.' },
      { problem: 'Excessive Pressure Build-up in High-Rise Buildings', solution: 'Fitting certified pressure-reducing valves (PRV) to protect the geyser tank from rupturing.' },
    ],
    processSteps: [
      { step: '01', title: 'Wall & Plumbing Assessment', description: 'Checking wall load capacity, cold water pressure, and electrical socket suitability.' },
      { step: '02', title: 'Precision Wall Anchoring', description: 'Drilling tile walls safely and securing heavy-duty mounting hooks.' },
      { step: '03', title: 'Hydraulic & Safety Connections', description: 'Connecting inlet/outlet hoses, multi-function safety valve (NRV/PRV).' },
      { step: '04', title: 'Tank Filling & Electrical Test', description: 'Bleeding air, filling tank before power-on, and testing heating cycles.' },
    ],
    applianceTypes: ['Storage Geysers', 'Instant Geysers', 'Vertical Bathroom Units', 'Kitchen Under-Sink Geysers'],
    supportedBrands: ['AO Smith', 'Racold', 'Havells', 'Bajaj', 'Crompton', 'V-Guard', 'Venus', 'Orient'],
    faqs: [
      {
        question: 'Do you provide the connection pipes and fasteners during installation?',
        answer: 'We carry high-quality connection pipes, angle valves, and heavy-duty expansion fasteners if your new geyser package did not include them.'
      },
      {
        question: 'Why must the tank be filled before turning on the power?',
        answer: 'Turning on power with an empty tank causes dry-heating, which burns out the heating element within seconds.'
      }
    ],
    relatedServices: [
      { title: 'Geyser Repair in Indore', slug: 'geyser-repair-indore' },
      { title: 'RO Water Purifier Service in Indore', slug: 'ro-water-purifier-service-indore' },
      { title: 'AC Installation in Indore', slug: 'ac-installation-indore' },
    ]
  },
  {
    slug: 'ro-water-purifier-service-indore',
    title: 'RO Water Purifier Service in Indore',
    shortTitle: 'RO Water Purifier Service',
    category: 'RO',
    metaTitle: 'RO Water Purifier Service in Indore | Shri Sanwariya AC & Water Solutions',
    metaDescription: 'Complete RO water purifier servicing in Indore. Filter replacement, RO membrane cleaning, TDS tuning, UV lamp check, and sanitization for clean drinking water.',
    headline: 'Pure Drinking Water: Complete RO Servicing in Indore',
    subheadline: 'Multi-stage filter replacement, RO membrane testing, mineral booster checks, and water quality TDS adjustment.',
    overview: 'Indore\'s groundwater and municipal supply often carry varying TDS levels and mineral hardness. Over time, sediment filters, carbon blocks, and reverse osmosis membranes become clogged with dirt and dissolved contaminants. Shri Sanwariya Air Conditioner offers comprehensive RO water purifier maintenance to keep your family\'s drinking water pure, sweet, and safe.',
    commonProblems: [
      { problem: 'High TDS or Salty Taste in Purified Water', solution: 'Testing membrane rejection efficiency and replacing worn semi-permeable membranes.' },
      { problem: 'Water Dispensing Very Slowly from RO Tap', solution: 'Clearing choked sediment pre-filters or replacing exhausted carbon cartridges.' },
      { problem: 'Unpleasant Odor or Stale Water Taste', solution: 'Replacing post-carbon taste enhancers and sanitizing the storage tank.' },
      { problem: 'Continuous Reject Water Running into Drain', solution: 'Diagnosing faulty auto-shutoff valves (ASV) or defective solenoid valves (SV).' },
    ],
    processSteps: [
      { step: '01', title: 'Water Quality Diagnostic', description: 'Testing input raw water TDS and output purified water TDS with calibrated digital meters.' },
      { step: '02', title: 'Filter Chamber Inspection', description: 'Inspecting spun sediment filter, pre-carbon, RO membrane, and post-carbon stages.' },
      { step: '03', title: 'Cartridge Replacement & Flushing', description: 'Replacing clogged filters with certified filter media and flushing carbon dust.' },
      { step: '04', title: 'Pressure & Sanitization Check', description: 'Testing booster pump pressure, auto cut-off switch, and tank sanitization.' },
    ],
    applianceTypes: ['RO + UV + UF Water Purifiers', 'Alkaline RO Purifiers', 'Under-the-Sink RO Systems', 'Commercial 25L/50L RO Plants'],
    supportedBrands: ['Kent', 'Aquaguard / Eureka Forbes', 'Pureit', 'Livpure', 'Blue Star', 'Havells', 'AO Smith', 'Aqua Fresh'],
    faqs: [
      {
        question: 'How often should RO filters be replaced in Indore?',
        answer: 'Pre-sediment filters should generally be replaced every 3 to 6 months depending on water turbidity, while carbon blocks and RO membranes usually last 12 to 18 months.'
      },
      {
        question: 'Do you check the TDS before and after servicing?',
        answer: 'Yes, our technician measures your input and output TDS with a digital meter in your presence to confirm optimal purification balance.'
      }
    ],
    relatedServices: [
      { title: 'RO Repair in Indore', slug: 'ro-repair-indore' },
      { title: 'Geyser Repair in Indore', slug: 'geyser-repair-indore' },
      { title: 'AC Servicing & Repair in Indore', slug: 'ac-repair-indore' },
    ]
  },
  {
    slug: 'ro-repair-indore',
    title: 'RO Repair in Indore',
    shortTitle: 'RO Repair',
    category: 'RO',
    metaTitle: 'Doorstep RO Repair in Indore | Shri Sanwariya AC & Appliance Care',
    metaDescription: 'Prompt RO repair services in Indore. Booster pump repair, SMPS adapter replacement, solenoid valve troubleshooting, and tank leak fixing.',
    headline: 'Doorstep RO Water Purifier Repair Across Indore',
    subheadline: 'Immediate troubleshooting for pump failure, power adapter issues, continuous beeping, and water leakage.',
    overview: 'When your water purifier stops working or begins leaking across your kitchen counter, you need an immediate fix. Shri Sanwariya Air Conditioner handles all technical RO breakdowns. We carry compatible high-pressure booster pumps, SMPS power supplies, solenoid valves, float switches, and food-grade push-fit fittings to restore your drinking water supply on the first visit.',
    commonProblems: [
      { problem: 'RO Purifier Not Turning On (No Power)', solution: 'Diagnosing and replacing faulty SMPS power adapters or damaged internal wiring.' },
      { problem: 'Booster Pump Making Loud Vibrations', solution: 'Servicing pump head diaphragms, replacing worn pump bearings, or installing new DC pumps.' },
      { problem: 'Machine Continuously Beeping / Alarm On', solution: 'Replacing burned UV lamps or resetting electronic service cycle monitors.' },
      { problem: 'Internal Water Leaking Inside Cabinet', solution: 'Replacing cracked filter bowls, loose push-fit connectors, or worn O-rings.' },
    ],
    processSteps: [
      { step: '01', title: 'Rapid Diagnosis', description: 'Testing electrical adapter output (24V/36V DC) and hydraulic pump pressure.' },
      { step: '02', title: 'Component Isolation', description: 'Pinpointing the exact faulty component (Solenoid Valve, Pump, Float Switch, UV ballast).' },
      { step: '03', title: 'Precision Replacement', description: 'Installing durable OEM-compatible replacements with high-grade tubing.' },
      { step: '04', title: 'Leak & Purity Verification', description: 'Running full filtration cycle under active line pressure to guarantee zero leaks.' },
    ],
    applianceTypes: ['Domestic RO Systems', 'Alkaline Water Ionizers', 'Commercial Water Purifiers', 'Wall-Hung RO Units'],
    supportedBrands: ['Kent', 'Eureka Forbes Aquaguard', 'Pureit', 'Livpure', 'Blue Star', 'AO Smith', 'Aqua Grand'],
    faqs: [
      {
        question: 'Why is my RO machine beeping continuously?',
        answer: 'Continuous beeping usually signals a UV lamp failure or a timed filter life indicator reminder. We inspect and replace the UV tube or ballast as required.'
      },
      {
        question: 'Can you fix water leaking from the bottom of my RO purifier?',
        answer: 'Yes, leaks are typically due to cracked tubing, loose quick-connect elbows, or damaged filter housing O-rings, which we replace quickly on-site.'
      }
    ],
    relatedServices: [
      { title: 'RO Water Purifier Service in Indore', slug: 'ro-water-purifier-service-indore' },
      { title: 'Geyser Repair in Indore', slug: 'geyser-repair-indore' },
      { title: 'AC Repair in Indore', slug: 'ac-repair-indore' },
    ]
  }
];
