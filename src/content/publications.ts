export interface PublicationLink {
  title: string;
  url: string;
}

export interface PublicationDownload extends PublicationLink {
  downloadName: string;
  buttonLabel: string;
  style: 'primary' | 'light';
}

export const featuredPublication = {
  title: 'Horizon Collective White Paper',
  url: '/downloads/Horizon%20Collective%20White%20Paper.pdf',
  cover: {
    src: '/white-paper-cover.png',
    width: 1414,
    height: 2000,
    alt: 'Cover of the Horizon Collective white paper: Exploring the Future of Work in the Age of AI',
  },
} as const;

export const publicationDownloads = [
  {
    title: 'Horizon Collective White Paper',
    url: featuredPublication.url,
    downloadName: 'Horizon-Collective-White-Paper.pdf',
    buttonLabel: 'Download the white paper',
    style: 'primary',
  },
  {
    title: 'Horizon Collective Workshop Summary',
    url: '/downloads/Summary%20Workshop%20HoRizon%20Collective.pdf',
    downloadName: 'Horizon-Collective-Workshop-Summary.pdf',
    buttonLabel: 'Download the workshop summary',
    style: 'light',
  },
] as const satisfies readonly PublicationDownload[];

export const previousPublications = [
  {
    title: 'The (de)Humanized Workforce',
    url: 'https://www.linkedin.com/posts/ruudrikhof_the-dehumanized-workforce-ugcPost-7285680408615137280-uGwp/',
  },
  {
    title: 'Tomorrow’s Re-Humanized HR',
    url: 'https://www.linkedin.com/pulse/tomorrows-re-humanized-hr-ruud-rikhof/',
  },
  {
    title: '10 Unavoidable Trends Relevant for HR',
    url: 'https://www.linkedin.com/pulse/10-unavoidable-trends-relevant-hr-ruud-rikhof/',
  },
] as const satisfies readonly PublicationLink[];
