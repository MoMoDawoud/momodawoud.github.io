export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  /** Compact venue for cards and lists, e.g. "USENIX Security 2024". */
  shortVenue?: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  abstract: string;
  /** One numerate sentence for cards, where the full abstract is too long. */
  summary?: string;
  tags: string[];
  image?: string;
  links: {
    paper?: string;
    pdf?: string;
    code?: string;
    slides?: string;
    video?: string;
    doi?: string;
  };
  citations?: number;
  /** Publication status when not yet published, e.g. "To appear". */
  status?: string;
  selected?: boolean;
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: "privaudit-ccpa-2026",
    title:
      "PrivAudit: A Dual-Lens Auditing Framework for Website Privacy Practices under the CCPA",
    authors: [
      "Mohamed Moustafa Dawoud",
      "Riya Aggarwal",
      "Likith Rahul Krishnamurthy",
      "Ram Sundara Raman",
    ],
    venue: "ACM SIGSAC Conference on Computer and Communications Security (CCS)",
    shortVenue: "ACM CCS 2026",
    year: 2026,
    type: "conference",
    abstract:
      "Five years after the enforcement of the California Consumer Privacy Act (CCPA), understanding how website privacy practices evolve at scale in response to regulation remains a key challenge for both researchers and regulators. Prior work and regulatory efforts have focused on manual and case-specific enforcement, but there remain no scalable approaches to systematically audit two key user-facing facets of websites that are crucial signals for the CCPA: privacy disclosures and front-end user tracking behavior. In this paper, we present PrivAudit, an automated auditing framework that adopts a dual-lens approach to capture: (1) privacy disclosures through large language model-based analysis of privacy policies grounded in CCPA provisions, and (2) user-observable data collection behavior through automated browser measurements of cookie writes under diverse privacy configurations. We apply PrivAudit to 998 websites and report two broad findings. The law is associated with stronger privacy disclosures: CCPA-subject policies are more likely to disclose opt-out mechanisms, data-sharing practices, and user rights. On the other hand, cookie-based tracking remains pervasive, with both CCPA-subject and not-subject websites setting a total of 6,392 targeting cookies, 49% of which are third-party writes. Moreover, cookies show limited-to-moderate responsiveness to privacy signals and consent choices, even when websites claim to honor them in their disclosures. Our results highlight the need for multi-layered and scalable auditing approaches that combine policy analysis with behavioral evidence. PrivAudit can support these auditing workflows at scale by generating actionable signals and patterns for further manual review. We open-source PrivAudit and are engaging with regulators to support auditing in practice.",
    summary:
      "An automated framework that audits website privacy two ways at once: LLM scoring of privacy policies against CCPA provisions, and browser measurement of what cookies actually get written. Across 998 sites, CCPA-subject policies disclose more, but tracking barely moves: 6,392 targeting cookies, 49% of them third-party writes, largely unresponsive to privacy signals.",
    tags: [
      "Policy & User Privacy",
      "Regulatory Auditing",
      "Web Tracking",
      "LLMs-Powered Analysis",
      "Intelligent Measurements",
    ],
    image: "/publications/privaudit-ccpa.png",
    links: {
      paper: "https://arxiv.org/abs/2609.09697",
      pdf: "https://arxiv.org/pdf/2609.09697",
      code: "https://github.com/r-andlab/PrivAudit",
    },
    citations: 0,
    status: "To appear",
    selected: true,
    bibtex: `@inproceedings{dawoud2026privaudit,
  title={PrivAudit: A Dual-Lens Auditing Framework for Website Privacy Practices under the CCPA},
  author={Dawoud, Mohamed Moustafa and Aggarwal, Riya and Krishnamurthy, Likith Rahul and Sundara Raman, Ram},
  booktitle={Proceedings of the 2026 ACM SIGSAC Conference on Computer and Communications Security (CCS)},
  year={2026}
}`,
  },
  {
    id: "fiverr-nsfw-2026",
    title:
      "From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr",
    authors: ["Mohamed Moustafa Dawoud", "Alejandro Cuevas", "Ram Sundara Raman"],
    venue: "Symposium on Usable Security and Privacy (USEC), co-located with NDSS",
    shortVenue: "USEC 2026, co-located with NDSS",
    year: 2026,
    type: "workshop",
    abstract:
      "Generative AI has enabled the large-scale production of photorealistic synthetic sexual imagery, yet prior work on non-consensual intimate imagery and deepfakes has focused mostly on underground forums and dedicated nudification tools. In this paper, we investigate whether these services have moved into mainstream gig marketplaces, where they benefit from larger user bases and higher trust. Through keyword searches, sitemap analysis, and snowball sampling, we identify 593 AI-enabled NSFW gigs on Fiverr and use an LLM classifier to analyze them. Our results reveal a rapidly emerging market: 82.8% expose deepfake-enabling features, 74.9% of NSFW sellers joined in 2025, and sellers disproportionately target downstream platforms such as OnlyFans (54.2%) and Instagram (29.5%). We uncover a new type of service not previously documented: custom sexually explicit LoRA/model training.",
    summary:
      "We investigate whether AI-enabled NSFW services have moved into mainstream gig marketplaces. Through keyword searches, sitemap analysis, and snowball sampling, we identify 593 AI-enabled NSFW gigs on Fiverr: 82.8% expose deepfake-enabling features, 74.9% of sellers joined in 2025, and sellers disproportionately target platforms like OnlyFans and Instagram.",
    tags: [
      "AI Abuse & Harm",
      "NCII",
      "LLMs-Powered Analysis",
      "Marketplace Measurement",
      "Platform Governance",
    ],
    image: "/publications/fiverr-deepfakes.png",
    links: {
      paper: "https://www.ndss-symposium.org/ndss-paper/from-underground-to-mainstream-marketplaces-measuring-ai-enabled-nsfw-deepfakes-on-fiverr/",
      pdf: "https://www.ndss-symposium.org/wp-content/uploads/usec26-68.pdf",
    },
    citations: 0,
    selected: true,
    bibtex: `@inproceedings{dawoud2026fiverr,
  title={From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr},
  author={Dawoud, Mohamed Moustafa and Cuevas, Alejandro and Raman, Ram Sundara},
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
    shortVenue: "Computers in Human Behavior",
    year: 2025,
    type: "journal",
    abstract:
      "In online illicit marketplaces, the Ransomware-as-a-Service (RaaS) industry is experiencing rapid growth. While traditionally ransomware was deployed by adept cybercriminals to lock or encrypt network assets, subsequently demanding a ransom for the decryption key, at present, RaaS is being marketed on darknet platforms as a pre-built, user-friendly form of ransomware. This study employs a thematic analysis of RaaS advertisements on darknet markets to discern patterns in vendor communication with potential customers. The most common theme identified was victimization, appearing in 70% of the dataset, underscoring the nature of RaaS products as instruments of criminal activity. Victimization was commonly combined with other themes to persuade users to make a purchase. These findings provide critical insights into the commodification of ransomware and reveal the strategic mechanisms employed by vendors to attract both novice and experienced cybercriminals.",
    summary:
      "A thematic analysis of RaaS advertisements on darknet markets. The most common theme was victimization, appearing in 70% of the dataset, revealing the strategic mechanisms vendors employ to attract both novice and experienced cybercriminals through the commodification of ransomware.",
    tags: ["Cybercrime Economies", "Darknet Markets", "Qualitative Analysis", "Threat Intelligence"],
    image: "/publications/raas-darknet.png",
    links: {
      paper:
        "https://www.sciencedirect.com/science/article/abs/pii/S0747563225000184",
      pdf: "/publications/pdfs/raas-darknet-2025.pdf",
      doi: "10.1016/j.chb.2025.108571",
    },
    citations: 3,
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
    venue: "33rd USENIX Security Symposium (USENIX Security 24)",
    shortVenue: "USENIX Security 2024",
    year: 2024,
    type: "conference",
    abstract:
      "The Android accessibility (a11y) service is widely abused by malware to conduct on-device monetization fraud. Existing mitigation techniques focus on malware detection but overlook providing users evidence of abuses that have already occurred and notifying victims to facilitate defenses. We developed DVa, a malware analysis pipeline based on dynamic victim-guided execution and abuse-vector-guided symbolic analysis, to help investigators uncover a11y malware's targeted victims, victim-specific abuse vectors, and persistence mechanisms. We deployed DVa to investigate Android devices infected with 9,850 a11y malware. From the extractions, DVa uncovered 215 unique victims targeted with an average of 13.9 abuse routines. DVa also extracted six persistence mechanisms empowered by the a11y service.",
    summary:
      "We developed DVa, a malware analysis pipeline using dynamic victim-guided execution and symbolic analysis, to uncover accessibility malware's targeted victims and abuse vectors. Deployed on 9,850 a11y malware samples, DVa uncovered 215 unique victims targeted with an average of 13.9 abuse routines.",
    tags: ["Mobile Security", "Malware Analysis", "Victim Identification", "Program Analysis"],
    image: "/publications/dva-malware.png",
    links: {
      paper:
        "https://www.usenix.org/conference/usenixsecurity24/presentation/xu-haichuan",
      pdf: "https://www.usenix.org/system/files/usenixsecurity24-xu-haichuan.pdf",
      code: "https://github.com/CyFI-Lab-Public/DVa",
    },
    citations: 7,
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
    title: "Social Engineering and Technical Security Fusion",
    authors: [
      "Wassim Alexan",
      "Eyad Mamdouh",
      "Mohamed ElBeltagy",
      "Ahmed Ashraf",
      "Mohamed Moustafa",
      "Hashem Al-Qurashi",
    ],
    venue: "International Telecommunications Conference (ITC-Egypt)",
    shortVenue: "ITC-Egypt 2022",
    year: 2022,
    type: "conference",
    abstract:
      "Ensuring the secure transmission of sensitive messages over unsecured networks has been a staggering problem in the face of scientists and engineers in recent times. This is exaggerated by developments in cryptanalysis, steganalysis and computing powers at the disposal of hackers. In this paper, a message security scheme that is based on social engineering and technical security fusion is proposed. The proposed scheme makes use of traditional cryptographic algorithms and LSB steganography in addition to ideas pooling from the ever advancing field of social engineering. The provided discussion and numerical analysis showcase the ability of the proposed scheme to fend off cyber attacks.",
    summary:
      "A message security scheme fusing traditional cryptographic algorithms and LSB steganography with ideas from social engineering. The scheme ensures secure transmission of sensitive messages over unsecured networks, defending against advances in cryptanalysis and growing computing power.",
    tags: ["Applied Cryptography", "Steganography", "Human Factors", "Secure Communication"],
    image: "/publications/social-engineering.png",
    links: {
      paper: "https://ieeexplore.ieee.org/document/9855761",
      doi: "10.1109/ITC-Egypt55520.2022.9855761",
    },
    citations: 9,
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
    venue: "IEEE 12th Annual Computing and Communication Workshop and Conference (CCWC)",
    shortVenue: "IEEE CCWC 2022",
    year: 2022,
    type: "conference",
    abstract:
      "This paper proposes a lightweight image encryption scheme that is based on 3 stages. The first stage incorporates the use of the Rössler attractor for the Rössler system, the second stage incorporates the use of a PRNG S-Box, while the third stage makes use of the Recamán's sequence. Performance of the proposed encryption scheme is evaluated using a number of metrics. The computed values of the metrics indicate a comparable performance to counterpart schemes from the literature, at a very low cost of processing time. Such a trait indicates that the proposed image encryption scheme possesses potential for real-time image security applications.",
    summary:
      "A lightweight three-stage image encryption scheme using the Rössler chaotic attractor, a PRNG-based S-Box, and Recamán's sequence. Performance metrics show comparable security to existing schemes at very low processing cost, making it suitable for real-time image security applications.",
    tags: ["Applied Cryptography", "Chaos-Based Security", "Image Encryption", "Lightweight Systems"],
    image: "/publications/rossler-encryption.png",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9720905",
      doi: "10.1109/CCWC54503.2022.9720905",
    },
    citations: 77,
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
    title: "IoMT Security: SHA3-512, AES-256, RSA and LSB Steganography",
    authors: [
      "Wassim Alexan",
      "Ahmed Ashraf",
      "Eyad Mamdouh",
      "Sarah Mohamed",
      "Mohamed Moustafa",
    ],
    venue: "8th NAFOSTED Conference on Information and Computer Science (NICS)",
    shortVenue: "NICS 2021",
    year: 2021,
    type: "conference",
    abstract:
      "The Internet of Medical Things (IoMT) has been witnessing huge leaps in its development due to the advancements of neighboring technologies. Those include 5G, big data and cloud storage. While IoMT provides a rich environment for the ultra-fast share and transfer of pathological analyses and disease diagnoses, it also presents networking and security engineers with unprecedented challenges. The need to protect the transmission of the sensitive information in relation to patients' identities and diagnoses has always been a priority. This paper proposes an information security scheme for IoMT that utilizes AES-256, RSA, SHA3-512 and LSB embedding in medical scans or images. The proposed scheme not only guarantees the secure transmission of medical data through a network, but also satisfies the conditions of user authentication and confidentiality.",
    summary:
      "An information security scheme for the Internet of Medical Things utilizing AES-256, RSA, SHA3-512, and LSB embedding in medical scans. The scheme guarantees secure transmission of medical data while satisfying user authentication and confidentiality requirements.",
    tags: ["Applied Cryptography", "Steganography", "Healthcare Security", "Connected Devices"],
    image: "/publications/iomt-security.png",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9701567",
      doi: "10.1109/NICS54270.2021.9701567",
    },
    citations: 32,
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

export const publicationYears = [
  ...new Set(publications.map((pub) => pub.year.toString())),
].sort((a, b) => parseInt(b) - parseInt(a));

export const allTags = Array.from(
  new Set(publications.flatMap((pub) => pub.tags))
).sort();
