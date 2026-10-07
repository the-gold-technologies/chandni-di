export interface MediaItem {
  id: string;
  title: string;
  outlet: string;
  category: "all" | "tv-video" | "print-articles" | "profiles" | "archives";
  categoryLabel: string;
  badge: string;
  url: string;
  date: string;
  description: string;
  iconType:
    | "wikipedia"
    | "tv"
    | "newspaper"
    | "video"
    | "twitter"
    | "facebook"
    | "archive";
  featured?: boolean;
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "wikipedia-chandni",
    title: "Chandni Khan — Wikipedia Official Biography",
    outlet: "Wikipedia",
    category: "profiles",
    categoryLabel: "Encyclopedia Profile",
    badge: "Official Encyclopedia",
    url: "https://en.wikipedia.org/wiki/Chandni_Khan",
    date: "Established Entry",
    description:
      "Official biographical page documenting Chandni Khan's life journey from street childhood to founding Voice of Slum and Chandni Di Foundation, pioneering street journalism and child education.",
    iconType: "wikipedia",
    featured: true,
  },
  {
    id: "gnt-exclusive-interview",
    title:
      "Exclusive Interview: How Chandni Di Built a Children's Magazine & Educational Movement",
    outlet: "Good News Today (India Today Group)",
    category: "print-articles",
    categoryLabel: "National News Interview",
    badge: "Exclusive Interview",
    url: "https://www.gnttv.com/india/story/exclusive-interview-chandni-di-voice-slum-started-magazine-which-being-run-children-slums-329149-2022-01-03",
    date: "January 2022",
    description:
      "A deep-dive national feature detailing how Chandni Di transformed children from street and slum settlements into confident learners, writers, and change-makers.",
    iconType: "tv",
    featured: true,
  },
  {
    id: "youtube-documentary",
    title:
      "Documentary Film: The Inspiring Story of Chandni Di & Her Learning Centres",
    outlet: "YouTube Feature Documentary",
    category: "tv-video",
    categoryLabel: "Video Documentary",
    badge: "Documentary Film",
    url: "https://youtu.be/oM5dczvwlY8?si=Dk8r-H-d5x0YD_NK",
    date: "Full Documentary",
    description:
      "A moving visual documentary capturing daily life in our learning centres, student testimonials, and the transformative impact of community education.",
    iconType: "video",
    featured: true,
  },
  {
    id: "good-news-today-instagram",
    title:
      "Good News Today TV Special: From the Streets to National Recognition",
    outlet: "Good News Today (India Today Group)",
    category: "tv-video",
    categoryLabel: "TV Special Broadcast",
    badge: "Televised Feature",
    url: "https://www.instagram.com/tv/CYZL8D3KQUa/?utm_medium=share_sheet",
    date: "January 2022",
    description:
      "Televised broadcast highlighting Chandni Di's grassroots work in rescuing underprivileged children from child labour and enrolling them in formal classrooms.",
    iconType: "video",
  },
  {
    id: "india-today-twitter",
    title: "India Today Broadcast: Empowering Slum Children Through Education",
    outlet: "India Today (Official Channel)",
    category: "tv-video",
    categoryLabel: "Television Broadcast",
    badge: "Broadcast Feature",
    url: "https://twitter.com/IndiaToday/status/1479126001904865281?t=8UQ0TK8-FCAJhh3LK8LuyQ&s=08",
    date: "January 2022",
    description:
      "India Today's official channel broadcast covering Chandni Di's mission to break the cycle of poverty through bridge education and dignified learning spaces.",
    iconType: "twitter",
  },
  {
    id: "dainik-jagran-bhaskar",
    title:
      "National Daily Print Coverage: Ground Report on Chandni Di's Learning Centres",
    outlet: "Dainik Jagran / Bhaskar",
    category: "print-articles",
    categoryLabel: "Print Newspaper",
    badge: "Print Daily Report",
    url: "https://dainik-b.in/ZZBYy4srBnb",
    date: "Ground Report",
    description:
      "Frontline Hindi daily report covering the practical challenges and remarkable successes of bridge schools operating in underprivileged settlements.",
    iconType: "newspaper",
  },
  {
    id: "facebook-viral-feature",
    title: "Community Spotlight: Children Reclaiming Their Right to Learn",
    outlet: "Facebook Video Coverage",
    category: "tv-video",
    categoryLabel: "Social Feature",
    badge: "Impact Video",
    url: "https://www.facebook.com/1954072204870360/posts/3156720444605524/",
    date: "Impact Video",
    description:
      "High-engagement video documentation showing student classroom interactions, vocational workshops, and community parent meetings.",
    iconType: "facebook",
  },
  {
    id: "google-press-archive-1",
    title: "National Press Clippings & Media Gallery (Part 1)",
    outlet: "Verified Press Archival",
    category: "archives",
    categoryLabel: "Press Kit & Archive",
    badge: "Verified Archive",
    url: "https://share.google/Lm8QFKyh1Pq2HymyD",
    date: "Digital Archive",
    description:
      "Curated archive of national news clippings, event photographs, and public interviews documenting the foundation's institutional growth.",
    iconType: "archive",
  },
  {
    id: "google-press-archive-2",
    title: "Institutional Recognition & Documentary Media (Part 2)",
    outlet: "Verified Press Archival",
    category: "archives",
    categoryLabel: "Press Kit & Archive",
    badge: "Verified Archive",
    url: "https://share.google/gL9tcocb9Kt5UiDG0",
    date: "Digital Archive",
    description:
      "Verified media records, award citations, television interview archives, and high-resolution institutional photo assets.",
    iconType: "archive",
  },
];
