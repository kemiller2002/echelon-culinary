export const foodserviceSystems = [
  {
    title: 'Ordering & guest experience',
    signal: 'Friction moves downstream.',
    description:
      'Digital ordering, exceptions, accessibility needs, service handoffs, and recovery have to arrive in the operation with enough context to act.',
    examples: [
      'Ordering flows',
      'Channel handoffs',
      'Accessible journeys',
      'Exception handling',
    ],
  },
  {
    title: 'Kitchen & production',
    signal: 'Time changes the cost of ambiguity.',
    description:
      'Prep, production, prioritization, consistency, and kitchen information flow all depend on decisions that stay clear under pressure.',
    examples: [
      'Prep workflow',
      'Production planning',
      'Information flow',
      'Process consistency',
    ],
  },
  {
    title: 'Inventory & purchasing',
    signal: 'The numbers have to match the shelf.',
    description:
      'Ordering, receiving, availability, usage, waste, forecasting, and reference data become one decision system whether the software recognizes it or not.',
    examples: [
      'Receiving',
      'Waste visibility',
      'Forecasting',
      'System integration',
    ],
  },
  {
    title: 'Labor & management',
    signal: 'Manager attention is finite.',
    description:
      'Scheduling, training, communication, repetitive administration, and disconnected systems can turn managers into the manual bridge between tools.',
    examples: [
      'Scheduling',
      'Training systems',
      'Manager workflow',
      'Administrative burden',
    ],
  },
  {
    title: 'Multi-location operations',
    signal: 'Consistency needs controlled variation.',
    description:
      'Reporting, integrations, central standards, local judgment, and fragmented technology have to coexist without hiding what each location needs to know.',
    examples: [
      'Operational visibility',
      'Reporting',
      'Central vs. local control',
      'Integrations',
    ],
  },
  {
    title: 'Technology & software',
    signal: 'Architecture reaches the operation.',
    description:
      'Legacy systems, data flow, reliability, build-versus-buy choices, automation, AI, and custom software eventually become somebody’s service experience.',
    examples: ['Architecture', 'Modernization', 'Reliability', 'Build vs. buy'],
  },
] as const;

export const engagements = [
  {
    title: 'Foodservice Technology Opportunity Assessment',
    summary:
      'Take one foodservice problem or operating area and determine where process change, software, automation, or AI could create measurable value.',
    outcome:
      'Prioritized opportunities, intervention options, risks, and recommended next moves.',
  },
  {
    title: 'Foodservice Workflow & Productivity Assessment',
    summary:
      'Follow work through a real workflow to find repetition, bottlenecks, fragile handoffs, manual burden, and technology that gets in the way.',
    outcome:
      'A workflow map, friction points, simplification opportunities, and a practical action sequence.',
  },
  {
    title: 'Technology & Architecture Assessment',
    summary:
      'Evaluate systems, integrations, architecture, technical debt, data flow, operational fit, and modernization needs.',
    outcome:
      'An evidence-backed technical posture, risk map, and sequenced recommendations.',
  },
  {
    title: 'Foodservice Automation & AI Value Review',
    summary:
      'For an automation or AI initiative already in motion: examine whether it produces labor savings, throughput, consistency, decision speed, or lower cost.',
    outcome:
      'A value assessment, hidden-cost analysis, guardrails, and continue/change/stop recommendation.',
  },
  {
    title: 'Clarity Workshop',
    summary:
      'Bring one difficult foodservice decision and work it through problem, context, constraints, evidence, options, and risk.',
    outcome:
      'A decision posture, next move, and smallest useful experiment when an experiment is warranted.',
  },
  {
    title: 'Accessibility Review',
    summary:
      'Review selected foodservice technology and workflows for barriers affecting customers, employees, service interactions, menus, and ordering.',
    outcome:
      'Documented barriers, priority, operational impact, and pragmatic remediation paths.',
  },
  {
    title: 'Custom Software Development',
    summary:
      'Design and build a system when the evidence shows that custom software is the right intervention—not simply because software can be built.',
    outcome:
      'A right-sized architecture and implementation grounded in operational states, authority, constraints, and reliability.',
  },
] as const;

export const claritySteps = [
  'Problem',
  'Context',
  'Constraints',
  'Evidence',
  'Options',
  'Risks',
  'Decision posture',
  'Next move',
] as const;

export const clarityOutcomes = [
  'Eliminate the work',
  'Simplify the workflow',
  'Improve the process',
  'Use conventional automation',
  'Combine human judgment + AI',
  'Use controlled AI automation',
  'Build custom software',
  'Buy a product',
  'Do nothing',
] as const;

export const workshopFactors = [
  'Repeatability',
  'Data availability',
  'Consequence of error',
  'Reversibility',
  'Human verification cost',
  'Task frequency',
  'Integration burden',
  'Expected value',
] as const;

export const workshopTakeaways = [
  'A decision posture',
  'A smallest useful experiment',
  'A success metric',
  'A guardrail',
  'A stopping rule',
] as const;
