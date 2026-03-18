export const passport = {
  full_name: 'Ava Rahman',
  slug: 'ava-rahman',
  role: 'tenant',
  score: 82,
  verified_identity: true,
  verified_income: true,
  pep_sanctions_check: 'clear',
  monthly_income: 3200,
  affordability_ratio: '2.8x',
  review_average: 4.8,
  reviews_count: 7,
  bio: 'Reliable tenant with consistent income, strong property care history and verified identity.',
  share_summary: ['ID verified', 'Income reviewed', 'Clear sanctions check', '7 verified reviews'],
};

export const reviews = [
  { author: 'Verified landlord', rating: 5, text: 'Paid on time and left the property in excellent condition.', status: 'approved' },
  { author: 'Verified tenant', rating: 5, text: 'Repairs were handled quickly and communication was fair.', status: 'approved' },
  { author: 'Verified tenant', rating: 4, text: 'Clean flat, deposit returned promptly.', status: 'approved' },
];

export const maintenance = [
  { title: 'Boiler pressure issue', urgency: 'High', status: 'Open' },
  { title: 'Bathroom extractor fan', urgency: 'Medium', status: 'In progress' },
  { title: 'Window latch replacement', urgency: 'Low', status: 'Resolved' },
];

export const properties = [
  { address: '12 Station Road, Manchester', inventory: 'PDF + 24 photos', score: 4.7 },
  { address: '18 Queens Drive, Leeds', inventory: 'Manual notes', score: 4.5 },
];
