export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "workshop" | "preprint";
  abstract: string;
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
  selected?: boolean;
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    id: "fiverr-nsfw-2026",
    title:
      "From Underground to Mainstream Marketplaces: Measuring AI-Enabled NSFW Deepfakes on Fiverr",
    authors: ["Mohamed Moustafa Dawoud", "Alejandro Cuevas", "Ram Sundara Raman"],
    venue: "Symposium on Usable Security and Privacy (USEC), co-located with NDSS",
    year: 2026,
    type: "workshop",
    abstract:
      "Generative AI has enabled the large-scale production of photorealistic synthetic sexual imagery, yet prior work on non-consensual intimate imagery and deepfakes has focused mostly on underground forums and dedicated nudification tools. In this paper, we investigate whether these services have moved into mainstream gig marketplaces, where they benefit from larger user bases and higher trust. Through keyword searches, sitemap analysis, and snowball sampling, we identify 593 AI-enabled NSFW gigs on Fiverr and use an LLM classifier to analyze them. Our results reveal a rapidly emerging market: 82.8% expose deepfake-enabling features, 74.9% of NSFW sellers joined in 2025, and sellers disproportionately target downstream platforms such as OnlyFans (54.2%) and Instagram (29.5%). We uncover a new type of service not previously documented: custom sexually explicit LoRA/model training.",
    tags: ["AI Abuse", "Gig Economy", "Platform Safety", "NCII"],
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
    year: 2025,
    type: "journal",
    abstract:
      "In online illicit marketplaces, the Ransomware-as-a-Service (RaaS) industry is experiencing rapid growth. While traditionally ransomware was deployed by adept cybercriminals to lock or encrypt network assets, subsequently demanding a ransom for the decryption key, at present, RaaS is being marketed on darknet platforms as a pre-built, user-friendly form of ransomware. This study employs a thematic analysis of RaaS advertisements on darknet markets to discern patterns in vendor communication with potential customers. The most common theme identified was victimization, appearing in 70% of the dataset, underscoring the nature of RaaS products as instruments of criminal activity. Victimization was commonly combined with other themes to persuade users to make a purchase. These findings provide critical insights into the commodification of ransomware and reveal the strategic mechanisms employed by vendors to attract both novice and experienced cybercriminals.",
    tags: ["Cybercrime", "Ransomware", "Dark Web", "Underground Economy"],
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
    year: 2024,
    type: "conference",
    abstract:
      "The Android accessibility (a11y) service is widely abused by malware to conduct on-device monetization fraud. Existing mitigation techniques focus on malware detection but overlook providing users evidence of abuses that have already occurred and notifying victims to facilitate defenses. We developed DVa, a malware analysis pipeline based on dynamic victim-guided execution and abuse-vector-guided symbolic analysis, to help investigators uncover a11y malware's targeted victims, victim-specific abuse vectors, and persistence mechanisms. We deployed DVa to investigate Android devices infected with 9,850 a11y malware. From the extractions, DVa uncovered 215 unique victims targeted with an average of 13.9 abuse routines. DVa also extracted six persistence mechanisms empowered by the a11y service.",
    tags: ["Android", "Malware", "Accessibility", "Mobile Security"],
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
    year: 2022,
    type: "conference",
    abstract:
      "Ensuring the secure transmission of sensitive messages over unsecured networks has been a staggering problem in the face of scientists and engineers in recent times. This is exaggerated by developments in cryptanalysis, steganalysis and computing powers at the disposal of hackers. In this paper, a message security scheme that is based on social engineering and technical security fusion is proposed. The proposed scheme makes use of traditional cryptographic algorithms and LSB steganography in addition to ideas pooling from the ever advancing field of social engineering. The provided discussion and numerical analysis showcase the ability of the proposed scheme to fend off cyber attacks.",
    tags: ["Social Engineering", "Security", "Human Factors"],
    image: "/publications/social-engineering.png",
    links: {
      paper: "https://ieeexplore.ieee.org/document/9855761",
      pdf: "/publications/pdfs/social-engineering-2022.pdf",
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
    year: 2022,
    type: "conference",
    abstract:
      "This paper proposes a lightweight image encryption scheme that is based on 3 stages. The first stage incorporates the use of the Rössler attractor for the Rössler system, the second stage incorporates the use of a PRNG S-Box, while the third stage makes use of the Recamán's sequence. Performance of the proposed encryption scheme is evaluated using a number of metrics. The computed values of the metrics indicate a comparable performance to counterpart schemes from the literature, at a very low cost of processing time. Such a trait indicates that the proposed image encryption scheme possesses potential for real-time image security applications.",
    tags: ["Cryptography", "Image Encryption", "Chaos Theory"],
    image: "/publications/rossler-encryption.png",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9720905",
      pdf: "/publications/pdfs/rossler-encryption-2022.pdf",
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
    year: 2021,
    type: "conference",
    abstract:
      "The Internet of Medical Things (IoMT) has been witnessing huge leaps in its development due to the advancements of neighboring technologies. Those include 5G, big data and cloud storage. While IoMT provides a rich environment for the ultra-fast share and transfer of pathological analyses and disease diagnoses, it also presents networking and security engineers with unprecedented challenges. The need to protect the transmission of the sensitive information in relation to patients' identities and diagnoses has always been a priority. This paper proposes an information security scheme for IoMT that utilizes AES-256, RSA, SHA3-512 and LSB embedding in medical scans or images. The proposed scheme not only guarantees the secure transmission of medical data through a network, but also satisfies the conditions of user authentication and confidentiality.",
    tags: ["IoMT", "Cryptography", "Healthcare Security", "Steganography"],
    image: "/publications/iomt-security.png",
    links: {
      paper: "https://ieeexplore.ieee.org/abstract/document/9701567",
      pdf: "/publications/pdfs/iomt-security-2021.pdf",
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
