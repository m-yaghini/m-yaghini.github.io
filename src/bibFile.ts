// NOTE: the key should be on the same line as the identifier (@).
/* eslint no-use-before-define: 0 */  // --> OFF

const bibFile = `

@inproceedings{fair-revenue,
title={{To Achieve Truly Generalist Models, We Need to Incentivize Collaboration Through Fair Revenue Sharing}},
author={Wanru Zhao\textsuperscript{*} and \textbf{M. Yaghini}\textsuperscript{*} and Nicolas Papernot },
booktitle={NeurIPS 2025 Workshop on Algorithmic Collective Action},
year={2025},
url={https://openreview.net/forum?id=H3V0dvjRAV}
}

@inproceedings{yaghini2024empirical,
  title = {Empirical {{Privacy Trade-Off Curves}}: {{Understanding}} the {{Gap}} between {{Theoretical}} and {{Practical Privacy Guarantees}}},
  author = {\textbf{M. Yaghini} and Wutschitz, Lukas and Zanella-Beguelin, Santiago},
  date = {2024},
  booktitle = {{{PPAI-24}}: {{The}} 5th {{AAAI Workshop}} on {{Privacy-Preserving Artificial Intelligence}}}
}

@inproceedings {tubes,
author = {Shimaa Ahmed and Yash Wani and Ali Shahin Shamsabadi and Mohammad Yaghini and Ilia Shumailov and Nicolas Papernot and Kassem Fawaz},
title = {Tubes Among Us: Analog Attack on Automatic Speaker Identification},
booktitle = {32nd USENIX Security Symposium (USENIX Security 23)},
year = {2023},
isbn = {978-1-939133-37-3},
address = {Anaheim, CA},
pages = {265--282},
url = {https://www.usenix.org/conference/usenixsecurity23/presentation/ahmed-shimaa},
publisher = {USENIX Association}
}

@article{raco-dp,
      title={{Private Rate-Constrained Optimization with Applications to Fair Learning}}, 
      author={Mohammad Yaghini\textsuperscript{*} and Tudor Cebere\textsuperscript{*} and Michael Menart and Aurélien Bellet and Nicolas Papernot},
      year={2025},
      eprint={2505.22703},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2505.22703}, 
}
@inproceedings{suitability,
title={{Suitability Filter: A Statistical Framework for Model Evaluation in Real-World Deployment Settings}},
author={Angéline Pouget and Mohammad Yaghini and Stephan Rabanser and Nicolas Papernot},
booktitle={Forty-second International Conference on Machine Learning (ICML 2025)},
year={2025},
url={https://openreview.net/forum?id=V0w8Kj3K6L}
}

@inproceedings{PAP,
  title={{Trustworthy ML Regulation as a Principal-Agent Problem}},
  author={Mohammad Yaghini and Patty Liu and Andrew Magnuson and Natalie Dullerud and Nicolas Papernot},
  booktitle={ACM Conference on Fairness, Accountability, and Transparency 2025 (FAccT 2025)},
  year={2025},
  url={https://dl.acm.org/doi/abs/10.1145/3715275.3732211}
}

@inproceedings{fairwashing,
  title={Washing The Unwashable: On The (Im) possibility of Fairwashing Detection},
  author={Ali Shahin Shamsabadi and Mohammad Yaghini and Natalie Dullerud and Sierra Wyllie and Ulrich A{\"\i}vodji and Aisha Alaagib Alryeh Mkean and S{\'e}bastien Gambs and Nicolas Papernot},
  booktitle={Thirty-sixth Conference on Neural Information Processing Systems (NeurIPS 2022)},
  url={https://openreview.net/forum?id=3vmKQUctNy},
}

@article{pol,
  title={Proof-of-Learning: Definitions and Practice}, 
  author={Hengrui Jia and Mohammad Yaghini and Christopher A. Choquette-Choo and Natalie Dullerud and Anvith Thudi and Varun Chandrasekaran and Nicolas Papernot},
  booktitle={42nd IEEE Symposium on Security and Privacy (2021)},
  year={2021},
  eprint={2103.05633},
  url={https://arxiv.org/abs/2103.05633},
}

@inproceedings{dataset-inference,
  title={Dataset Inference: Ownership Resolution in Machine Learning},
  author={Pratyush Maini and Mohammad Yaghini and Nicolas Papernot},
  booktitle={Proceedings of the 2021 International Conference on Learning Representations (ICLR 2021)},
  year={2021},
  url={https://openreview.net/forum?id=hvdKKV2yt7T}
  }

@inproceedings{disp-vuln,
    author    = {Bogdan Kulynych and Mohammad Yaghini and Giovanni Cherubin and Carmela Troncoso},
    title     = {Disparate Vulnerability: on the Unfairness of Privacy Attacks Against
                 Machine Learning},
    booktitle = {22nd Privacy Enhancing Technologies Symposium (PETS 2022)},
    volume    = {abs/1906.00389},
    year      = {2020},
    url       = {http://arxiv.org/abs/1906.00389},
    archivePrefix = {arXiv},
    eprint    = {1906.00389},
  }
  
  @inproceedings{human,
    author    = {Mohammad Yaghini and
                 Hoda Heidari and
                 Andreas Krause},
    title     = {A Human-in-the-loop Framework to Construct Context-dependent Mathematical
                 Formulations of Fairness},
    booktitle = {{AAAI/ACM} Conference on AI, Ethics, and Society
                 (AIES 2021)},
    volume    = {abs/1911.03020},
    year      = {2019},
    url       = {http://arxiv.org/abs/1911.03020},
    archivePrefix = {arXiv},
    eprint    = {1911.03020}
  }
  
  @inproceedings{non-discr,
    author    = {Naman Goel and
                 Mohammad Yaghini and
                 Boi Faltings},
    editor    = {Jason Furman and
                 Gary E. Marchant and
                 Huw Price and
                 Francesca Rossi},
    title     = {Non-Discriminatory Machine Learning through Convex Fairness Criteria},
    booktitle = {Proceedings of the 2018 {AAAI/ACM} Conference on AI, Ethics, and Society,
                 {AIES} 2018, New Orleans, LA, USA, February 02-03, 2018},
    pages     = {116},
    publisher = {{ACM}},
    year      = {2018},
    url       = {https://doi.org/10.1145/3278721.3278722},
    doi       = {10.1145/3278721.3278722}
  }
  
  @inproceedings{energy-aware,
    author    = {Mehdi Naderi Soorki and
                 Mohammad Yaghini and
                 Mohammad Hossein Manshaei and
                 Walid Saad and
                 Hossein Saidi},
    title     = {Energy-aware optimization and mechanism design for cellular device-to-device
                 local area networks},
    booktitle = {2016 Annual Conference on Information Science and Systems, {CISS}
                 2016, Princeton, NJ, USA, March 16-18, 2016},
    pages     = {309--314},
    publisher = {{IEEE}},
    year      = {2016},
    url       = {https://doi.org/10.1109/CISS.2016.7460520},
    doi       = {10.1109/CISS.2016.7460520}
  }
  
  @article{model-governance,
    author    = {Varun Chandrasekaran and Hengrui Jia and Anvith Thudi and Adelin Travers and Mohammad Yaghini and Nicolas Papernot},
    title     = {SoK: Machine Learning Governance}, 
    journal   = {CoRR},
    volume    = {abs/2109.10870},
    year      = {2021},
    url       = {https://arxiv.org/abs/2109.10870},
    eprinttype = {arXiv},
    eprint={2109.10870},
  }

@inproceedings{yaghini2023learninga,
  title = {Learning to {{Walk Impartially}} on the {{Pareto Frontier}} of {{Fairness}}, {{Privacy}}, and {{Utility}}},
  author = {Mohammad Yaghini and Patty Liu and Franziska Boenisch and Nicolas Papernot},
  date = {2023-12-12},
  url = {https://openreview.net/forum?id=R5MTSLPyYZ},
  urldate = {2024-06-25},
  eventtitle = {{NeurIPS 2023 Workshop on Regulatable ML}},
  langid = {english}
}

@inproceedings{impartiality,
  title = {Learning to {{Walk Impartially}} on the {{Pareto Frontier}} of {{Fairness}}, {{Privacy}}, and {{Utility}}},
  author = {Mohammad Yaghini and Patty Liu and Franziska Boenisch and Nicolas Papernot},
  date = {2023-12-12},
  url = {https://openreview.net/forum?id=R5MTSLPyYZ},
  urldate = {2024-06-25},
  eventtitle = {{{NeurIPS}} 2023 {{Workshop}} on {{Regulatable ML}}},
  langid = {english}
}

  @report{p-dknn,
    title = {p-{DkNN}: Out-of-Distribution Detection Through Statistical Testing of Deep Representations},
    url = {http://arxiv.org/abs/2207.12545},
    author = {Adam Dziedzic and Stephan Rabanser and Mohammad Yaghini and Armin Ale and  Murat A. Erdogdu and Nicolas Papernot},
    year={2022},
    doi = {10.48550/arXiv.2207.12545},
    eprinttype = {arxiv},
    eprint = {2207.12545 [cs, stat]},
    journal   = {CoRR},
    volume    = {abs/2207.12545},
  }

  @article{reg_games,
    author    = {Mohammad Yaghini and Patty Liu and Franziska Boenisch and Nicolas Papernot},
    title     = {Regulation Games for Trustworthy Machine Learning},
    journal   = {CoRR},
    volume    = {abs/2402.03540},
    year      = {2024},
    url       = {https://arxiv.org/pdf/2402.03540.pdf},
    eprinttype = {arXiv},
    eprint = {2402.03540},
  }

  @inproceedings{yaghini2023regulation,
  title = {Regulation {{Games}} for {{Trustworthy Machine Learning}}},
  author = {Mohammad Yaghini and Patty Liu and Franziska Boenisch and Nicolas Papernot},
  date = {2023-12-12},
  url = {https://openreview.net/forum?id=u9gLNSGgRA},
  urldate = {2024-06-25},
  eventtitle = {{{NeurIPS}} 2023 {{Workshop}} on {{Regulatable ML}}},
  langid = {english}
  }

  `

export default bibFile