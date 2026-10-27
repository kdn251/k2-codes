// Single source of truth for everything shown on the site.
// Edit copy, numbers, links, and partners here; components only render this data.

export const site = {
  name: 'Kevin Naughton Jr.',
  handle: '@KevinNaughtonJr',
  title: 'Kevin Naughton Jr. - Software engineer, creator, founder',
  description:
    'Ex-Google software engineer and creator reaching 550K+ engineers across YouTube, LinkedIn, X and The Software Engineer Weekly. Partner with Kevin to reach developers who actually ship.',
  url: 'https://kevinnaughtonjr.com',
  location: 'New York City',
  email: null as string | null, // set to a business inbox to show a mailto link in Contact
  portrait: {
    src: '/images/kevin.jpg',
    alt: 'Kevin Naughton Jr. at his desk wearing headphones, coding on a laptop',
  },
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Audience', href: '#audience' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Newsletter', href: '#newsletter' },
];

export const links = {
  youtube: 'https://www.youtube.com/@KevinNaughtonJr',
  linkedin: 'https://www.linkedin.com/in/kevindnaughtonjr/',
  x: 'https://x.com/KevinNaughtonJr',
  instagram: 'https://www.instagram.com/kevinnaughtonjr',
  github: 'https://github.com/kdn251',
  newsletter: 'https://www.thesweekly.com/',
  inquiry: 'https://www.passionfroot.me/kevin-naughton-jr/inquiry',
  mediaKit: 'https://www.passionfroot.me/kevin-naughton-jr',
  call: 'https://cal.com/kevinnaughtonjr',
  ferryman: 'https://ferryman.io',
  interviewsRepo: 'https://github.com/kdn251/interviews',
};

export const socials = [
  { id: 'youtube', label: 'YouTube', href: links.youtube },
  { id: 'linkedin', label: 'LinkedIn', href: links.linkedin },
  { id: 'x', label: 'X', href: links.x },
  { id: 'instagram', label: 'Instagram', href: links.instagram },
  { id: 'github', label: 'GitHub', href: links.github },
  { id: 'substack', label: 'Newsletter', href: links.newsletter },
] as const;

export const hero = {
  eyebrow: 'Ex-Google software engineer · Creator · Founder',
  heading: ['Hey, I’m', 'Kevin.'],
  lede: 'I spent three years as a software engineer at Google, then quit to build my own products and make content about it. 550K+ engineers follow along across YouTube, LinkedIn, X and my weekly newsletter.',
  primaryCta: { label: 'Work with me', href: '#contact' },
  secondaryCta: { label: 'Watch my content', href: '#content' },
};

// Combined reach shown in the hero. Keep these in sync with the platform cards below.
export const headlineStats = [
  { value: '550K+', label: 'Combined audience' },
  { value: '240K+', label: 'LinkedIn followers' },
  { value: '139K', label: 'YouTube subscribers' },
  { value: '31K+', label: 'Newsletter subscribers' },
];

// Brands that have sponsored or partnered on content. Logos live in /public/images/brands
// and are painted through a CSS mask, so any SVG or transparent PNG works. `scale` nudges
// a wordmark that reads too small or too large next to its neighbours.
export type Partner = { name: string; logo: string; href?: string; note?: string; scale?: number };

export const partners: Partner[] = [
  { name: 'AWS', logo: '/images/brands/aws.svg', href: 'https://aws.amazon.com', scale: 0.9 },
  {
    name: 'OpenAI',
    logo: '/images/brands/openai.svg',
    href: 'https://openai.com',
    note: 'ChatGPT partner video',
    scale: 0.9,
  },
  {
    name: 'Linear',
    logo: '/images/brands/linear.svg',
    href: 'https://linear.app',
    note: 'YouTube series sponsor',
  },
  {
    name: 'Genspark',
    logo: '/images/brands/genspark.svg',
    href: 'https://www.genspark.ai',
    note: 'Dedicated YouTube video',
  },
  {
    name: 'Postmark',
    logo: '/images/brands/postmark.svg',
    href: 'https://postmarkapp.com',
    note: 'YouTube sponsor',
    scale: 0.95,
  },
  {
    name: 'Streamable',
    logo: '/images/brands/streamable.png',
    href: 'https://streamable.run',
    note: 'Streaming partner',
    scale: 0.9,
  },
];

export const about = {
  eyebrow: 'About',
  heading: 'From coding interviews to building in public.',
  paragraphs: [
    'I started making videos because I struggled through my own coding interview prep and wanted to give other people a clearer path. That turned into one of the most-starred interview prep repositories on GitHub and a YouTube channel that helped thousands of engineers land offers at top companies.',
    'After three years as a software engineer at Google in New York, I left in 2025 to work for myself. Now I build products like Ferryman.io completely solo and document every part of it: the revenue, the mistakes, the tools I actually use, and what life looks like after big tech.',
    'My audience is engineers in their twenties and thirties who are deciding what to build, which tools to adopt, and where to take their careers next. When I recommend something, it is because I use it.',
  ],
  facts: [
    { value: '65K+', label: 'GitHub stars on my interviews repo' },
    { value: '3 yrs', label: 'Software engineer at Google' },
    { value: '2013', label: 'Making videos since' },
    { value: 'NYC', label: 'Based in New York' },
  ],
};

export type Video = {
  id: string; // YouTube video ID; thumbnail lives at /images/videos/<id>.jpg
  title: string;
  views: string;
  tag: string;
  partner?: string;
};

export const content = {
  eyebrow: 'Content',
  heading: 'Honest videos about building software and a life around it.',
  lede: 'Long-form stories on YouTube, Shorts and Reels for the scroll, daily posts on LinkedIn and X, and a Friday newsletter. Here is a sample of what the audience has been watching.',
  videos: [
    { id: 'uaA6W6psPzA', title: 'I Quit my Software Engineering Job at 30', views: '46K', tag: 'Career' },
    {
      id: '_CaBcEuJ6NQ',
      title: 'I Cloned an Entire Business with Genspark',
      views: '46K',
      tag: 'AI',
      partner: 'Genspark',
    },
    { id: 'UrpgyslvWK8', title: 'How LLMs Killed Computer Science', views: '35K', tag: 'AI' },
    { id: 'pf9aOJ7D9QA', title: 'The HARSH Reality of Working in Big Tech', views: '30K', tag: 'Big tech' },
    { id: 'xYULUSKqQIk', title: 'How I Grew a PROFITABLE SaaS Solo', views: '8.3K', tag: 'Building' },
    {
      id: 'J90BUTnYd84',
      title: 'How to Code PROFITABLE Apps Alone',
      views: '5.7K',
      tag: 'Building',
      partner: 'Linear',
    },
  ] satisfies Video[],
  shorts: [
    { id: 'qzlCBJVV1j4', title: 'Is software engineering dead?', views: '52K', tag: 'Career' },
    { id: 'HkTnskm0ORA', title: 'Your AI Era Starts Here', views: '7.2K', tag: 'AI' },
    {
      id: '7gYith1Y2uQ',
      title: 'It’s just me and my laptop against the world',
      views: '3.3K',
      tag: 'Building',
    },
    { id: 'Kge0sYQPcfw', title: 'Life is hard. Make it harder.', views: '3.2K', tag: 'Founder life' },
  ] satisfies Video[],
  pillars: [
    {
      title: 'Building in public',
      body: 'Revenue numbers, product decisions and the tools behind Ferryman.io, shared as they happen.',
    },
    {
      title: 'Engineering careers',
      body: 'Interview prep, big-tech reality checks, and what to do when the ladder stops making sense.',
    },
    {
      title: 'AI for engineers',
      body: 'Which AI tools earn a place in a real workflow, demonstrated on real products rather than demos.',
    },
  ],
};

export type Platform = {
  id: 'youtube' | 'linkedin' | 'x' | 'substack' | 'instagram' | 'github';
  name: string;
  handle: string;
  href: string;
  metric: string;
  metricLabel: string;
  detail: string;
};

export const audience = {
  eyebrow: 'Audience',
  heading: 'Engineers who ship, and the people who hire them.',
  lede: 'Readers and viewers at Google, Netflix, Meta and thousands of startups. Mostly 25 to 34, mostly in the US and India, and highly engaged for a technical audience.',
  platforms: [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'kevindnaughtonjr',
      href: links.linkedin,
      metric: '240K+',
      metricLabel: 'followers',
      detail: 'Daily posts · 1.1M impressions per month',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@KevinNaughtonJr',
      href: links.youtube,
      metric: '139K',
      metricLabel: 'subscribers',
      detail: 'Long-form stories · 12.9M lifetime views',
    },
    {
      id: 'x',
      name: 'X',
      handle: '@KevinNaughtonJr',
      href: links.x,
      metric: '100K+',
      metricLabel: 'followers',
      detail: 'Daily posts · 6.7% engagement rate',
    },
    {
      id: 'substack',
      name: 'The Software Engineer Weekly',
      handle: 'thesweekly.com',
      href: links.newsletter,
      metric: '31K+',
      metricLabel: 'subscribers',
      detail: 'Every Friday · 41.8% open rate',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@kevinnaughtonjr',
      href: links.instagram,
      metric: '24K',
      metricLabel: 'followers',
      detail: 'Reels · 6.1K views per reel',
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: 'kdn251/interviews',
      href: links.interviewsRepo,
      metric: '65K+',
      metricLabel: 'stars',
      detail: 'One of the most-starred interview prep repos',
    },
  ] satisfies Platform[],
  demographics: [
    { label: 'Age 25 to 34', value: 70, suffix: '%' },
    { label: 'Age 35 to 44', value: 18, suffix: '%' },
    { label: 'United States', value: 30, suffix: '%' },
    { label: 'India', value: 26, suffix: '%' },
  ],
  demographicsNote:
    'YouTube audience. Newsletter readers skew similarly, with India at 34% and the US at 26%.',
};

export type Package = {
  platform: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
};

export const partnerships = {
  eyebrow: 'Partnerships',
  heading: 'Ways to work together.',
  lede: 'Every placement is written in my voice and shown to an audience that trusts it. One sponsor per video, one sponsor per newsletter, no stacking.',
  showPrices: true,
  packages: [
    {
      platform: 'YouTube',
      name: 'Dedicated product video',
      price: '$30,000',
      description:
        'A full 8 to 10 minute video built around your product, with a link in the description and on-screen placement.',
      featured: true,
    },
    {
      platform: 'YouTube',
      name: 'Product mention',
      price: '$15,000',
      description: 'A 60-second integration inside a video, with a description link and on-screen placement.',
    },
    {
      platform: 'LinkedIn',
      name: 'Sponsored post',
      price: '$3,500',
      description:
        'A dedicated post describing and promoting your product to 240K+ engineers and hiring managers.',
    },
    {
      platform: 'Newsletter',
      name: 'Primary sponsor',
      price: '$800',
      description:
        'Top-of-email placement with a banner, three sentences in my voice and a CTA button. Secondary slots from $400.',
    },
    {
      platform: 'X',
      name: 'Sponsored thread',
      price: '$1,600',
      description: 'An educational three-post thread about your product. Single sponsored posts from $800.',
    },
    {
      platform: 'Instagram',
      name: 'Sponsored reel',
      price: '$2,500',
      description: 'A dedicated reel promoting your brand or tool.',
    },
  ] satisfies Package[],
  custom: {
    heading: 'Something else in mind?',
    body: 'Multi-platform launches, long-term ambassadorships, conference talks and advisory work are all on the table.',
    cta: { label: 'Start a conversation', href: '#contact' },
  },
};

export const newsletter = {
  eyebrow: 'Newsletter',
  name: 'The Software Engineer Weekly',
  heading: 'One email every Friday that engineers actually open.',
  body: 'Career moves, tools and lessons from building software, read by 31,000+ engineers at Google, Netflix, Meta and more. 41.8% open rate.',
  cta: { label: 'Read the newsletter', href: links.newsletter },
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Want to work together?',
  body: 'If you are a brand looking to reach engineers through sponsored videos, posts, newsletter placements or a custom partnership, send a short note about what you are launching and when. I read everything.',
  primary: { label: 'Send a partnership inquiry', href: links.inquiry },
  secondary: { label: 'Book a call', href: links.call },
};

export const footer = {
  tagline: 'Software engineer, creator and founder. Building in public from New York.',
  legal: `© ${new Date().getFullYear()} Kevin Naughton Jr.`,
};
