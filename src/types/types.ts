export type ProjectType = {
  name: string;
  image: string;
  techStack: string;
  description: string;
  demo: string;
  gitHub: string;
  olderSite?: string;
};

export type UiUxProjectType = {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  projectInfo: {
    role: string;
    team: string[];
    time: string;
    research: string[];
  };
  sections: Section[];
};

export type Section = {
  title: string;
  intro: string;
  subsections?: Subsection[];
  improvements?: Improvement[];
};

type Subsection = {
  subtitle: string;
  content?: string;
  screenshotType?:
    | 'mobileAsymmetric'
    | 'mobileSymmetric'
    | 'desktop'
    | 'mobileAsymmetricInverted';
  issue1Title?: string;
  issue1Description?: string;
  issue2Title?: string;
  issue2Description?: string;
  image1Src?: string;
  image2Src?: string;
  methods?: Method[];
};

type Method = {
  name: string;
  description: string;
  link?: string;
  imageSrc?: string;
  summary?: string;
  imageSrc2?: string;
  summary2?: string;
};

type Improvement = {
  title: string;
  description: string;
  afterImgSrc?: string;
  beforeImgSrc?: string;
};
