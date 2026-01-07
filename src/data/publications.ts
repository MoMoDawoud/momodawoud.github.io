export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  abstract: string;
  tags: string[];
  links: {
    paper?: string;
    pdf?: string;
    code?: string;
    slides?: string;
    video?: string;
    doi?: string;
  };
  selected?: boolean;
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: "fiverr-nsfw-2026",
    title:
      "The Rise of NSFW Generative AI Services on Mainstream Marketplaces: A Case Study of Fiverr",
    authors: ["Mohamed Moustafa Dawoud", "Alejandro Cuevas", "Ramakrishnan (Ram) Sundara Raman"],
    venue: "Symposium on Usable Security and Privacy (USEC)",
    year: 2026,
    type: "workshop",
    abstract:
      "A mixed-methods empirical study analyzing how the mainstream gig platform Fiverr enables AI-driven abuse and NCII-related services. We designed and led sampling, large-scale data collection, LLM-assisted classification, and manual validation to measure prevalence, capabilities, and risk patterns of AI-enabled services.",
    tags: ["AI Abuse", "Gig Economy", "Platform Safety", "NCII"],
    links: {
      paper: "#",
    },
    selected: true,
    bibtex: `@inproceedings{dawoud2026fiverr,
  title={The Rise of NSFW Generative AI Services on Mainstream Marketplaces: A Case Study of Fiverr},
  author={Dawoud, Mohamed Moustafa and Cuevas, Alejandro and Raman, Ramakrishnan Sundara},
  booktitle={Symposium on Usable Security and Privacy (USEC 2026), co-located with NDSS},
  year={2026}
}`,
  },
  {
    id: "raas-communication-2025",
    title:
      "Vendor communication themes in darknet Ransomware-as-a-Service (RaaS) advertisements",
    authors: ["Taylor Fisher", "Zacharias Pieri", "C. Jordan Howell", "Roberta O'Malley", "Lauren Tremblay", "Mohamed Dawoud"],
    venue: "Computers in Human Behavior",
    year: 2025,
    type: "journal",
    abstract:
      "This study analyzes how Ransomware-as-a-Service (RaaS) is marketed on darknet marketplaces. We examine vendor communication themes, seller strategies, pricing models, and customer engagement tactics that enable these underground markets to thrive.",
    tags: ["Cybercrime", "Ransomware", "Dark Web", "Underground Economy"],
    links: {
      paper:
        "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
      doi: "10.1016/j.chb.2025.108571",
    },
    selected: true,
    bibtex: `@article{fisher2025vendor,
  title={Vendor communication themes in darknet Ransomware-as-a-Service (RaaS) advertisements},
  author={Fisher, Taylor and Pieri, Zacharias and Howell, C Jordan and O'Malley, Roberta and Tremblay, Lauren and Dawoud, Mohamed},
  journal={Computers in Human Behavior},
  volume={165},
  pages={108571},
  year={2025},
  publisher={Elsevier}
}`,
  },
  {
    id: "dva-android-2024",
    title: "DVa: Extracting Victims and Abuse Vectors from Android Accessibility Malware",
    authors: [
      "Haichuan Xu",
      "Mingxuan Yao",
      "Runze Zhang",
      "Mohamed Moustafa Dawoud",
      "Jeman Park",
      "Brendan Saltaformaggio",
    ],
    venue: "USENIX Security Symposium",
    year: 2024,
    type: "conference",
    abstract:
      "We present DVa, a system for extracting victims and abuse vectors from Android accessibility malware. Our approach analyzes how modern malware families exploit accessibility services to perform malicious actions, and contributes techniques for improved mobile security defenses.",
    tags: ["Android", "Malware", "Accessibility", "Mobile Security"],
    links: {
      paper:
        "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
    },
    selected: true,
    bibtex: `@inproceedings{xu2024dva,
  title={DVa: Extracting Victims and Abuse Vectors from Android Accessibility Malware},
  author={Xu, Haichuan and Yao, Mingxuan and Zhang, Runze and Dawoud, Mohamed Moustafa and Park, Jeman and Saltaformaggio, Brendan},
  booktitle={33rd USENIX Security Symposium (USENIX Security 24)},
  pages={701--718},
  year={2024}
}`,
  },
  {
    id: "social-engineering-2022",
    title: "Social engineering and technical security fusion",
    authors: [
      "Wassim Alexan",
      "Eyad Mamdouh",
      "Mohamed ElBeltagy",
      "Ahmed Ashraf",
      "Mohamed Moustafa",
      "Hashem Al-Qurashi",
    ],
    venue: "International Telecommunications Conference (ITC-Egypt)",
    year: 2022,
    type: "conference",
    abstract:
      "This paper explores the fusion of social engineering techniques with technical security measures, examining how human factors intersect with technological defenses in cybersecurity.",
    tags: ["Social Engineering", "Security", "Human Factors"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/9917768",
    },
    bibtex: `@inproceedings{alexan2022social,
  title={Social engineering and technical security fusion},
  author={Alexan, Wassim and Mamdouh, Eyad and ElBeltagy, Mohamed and Ashraf, Ahmed and Moustafa, Mohamed and Al-Qurashi, Hashem},
  booktitle={2022 International Telecommunications Conference (ITC-Egypt)},
  pages={1--5},
  year={2022},
  organization={IEEE}
}`,
  },
  {
    id: "image-encryption-2022",
    title: "Image Encryption Through Rössler System, PRNG S-Box and Recamán's Sequence",
    authors: [
      "Mohamed ElBeltagy",
      "Wassim Alexan",
      "Abdelrahman Elkhamry",
      "Mohamed Moustafa",
      "Hisham H. Hussein",
    ],
    venue: "IEEE Computing and Communication Workshop and Conference (CCWC)",
    year: 2022,
    type: "conference",
    abstract:
      "We propose a novel image encryption scheme combining the Rössler chaotic system, PRNG-based S-Box, and Recamán's sequence to achieve secure and efficient image encryption.",
    tags: ["Cryptography", "Image Encryption", "Chaos Theory"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/9720781",
    },
    bibtex: `@inproceedings{elbeltagy2022image,
  title={Image Encryption Through Rössler System, PRNG S-Box and Recamán's Sequence},
  author={ElBeltagy, Mohamed and Alexan, Wassim and Elkhamry, Abdelrahman and Moustafa, Mohamed and Hussein, Hisham H},
  booktitle={2022 IEEE 12th Annual Computing and Communication Workshop and Conference (CCWC)},
  pages={0716--0722},
  year={2022},
  organization={IEEE}
}`,
  },
  {
    id: "iomt-security-2021",
    title: "IoMT security: SHA3-512, AES-256, RSA and LSB steganography",
    authors: [
      "Wassim Alexan",
      "Ahmed Ashraf",
      "Eyad Mamdouh",
      "Sarah Mohamed",
      "Mohamed Moustafa",
    ],
    venue: "NAFOSTED Conference on Information and Computer Science (NICS)",
    year: 2021,
    type: "conference",
    abstract:
      "This paper presents a comprehensive security framework for the Internet of Medical Things (IoMT), combining SHA3-512 hashing, AES-256 encryption, RSA key exchange, and LSB steganography for secure medical data transmission.",
    tags: ["IoMT", "Cryptography", "Healthcare Security", "Steganography"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/9667894",
    },
    bibtex: `@inproceedings{alexan2021iomt,
  title={IoMT security: SHA3-512, AES-256, RSA and LSB steganography},
  author={Alexan, Wassim and Ashraf, Ahmed and Mamdouh, Eyad and Mohamed, Sarah and Moustafa, Mohamed},
  booktitle={2021 8th NAFOSTED Conference on Information and Computer Science (NICS)},
  pages={177--181},
  year={2021},
  organization={IEEE}
}`,
  },
];

export const publicationsByYear = publications.reduce(
  (acc, pub) => {
    const year = pub.year.toString();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  },
  {} as Record<string, Publication[]>
);

export const publicationYears = Object.keys(publicationsByYear).sort(
  (a, b) => parseInt(b) - parseInt(a)
);

export const allTags = Array.from(
  new Set(publications.flatMap((pub) => pub.tags))
).sort();

export const publicationTypes = [
  { value: "all", label: "All" },
  { value: "journal", label: "Journals" },
  { value: "conference", label: "Conferences" },
  { value: "workshop", label: "Workshops" },
  { value: "preprint", label: "Preprints" },
];
