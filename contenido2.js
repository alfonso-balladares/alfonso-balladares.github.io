window.CONTENIDO = {
  idiomas: ["en"],
  colorPrincipal: "#1f6f68",
  animaciones: true,
  actualizado: "November 2026",

  /* ---------- PERSONAL DETAILS (left column) ---------- */
  perfil: {
    nombre: "Alfonso David Balladares Quintana",
    nombreCorto: "Alfonso Balladares",
    foto: "imagenes/foto.jpg",
    titular: "Pharmacist & Biochemist · Metabolomics, Bioprospecting & Drug Delivery",
    ubicacion: "Lima, Peru",
    bio: "Researcher focused on bioactive molecule discovery via high-resolution metabolomics (UHPLC-HRMS-QTOF) and polymeric matrix encapsulation for controlled delivery, targeting biomedicine and molecular oncology.",
    correo: "alfo.david26@gmail.com",
    cv: "documentos/cv.pdf",
    enlaces: [
      { texto: "LinkedIn", url: "https://www.linkedin.com/in/alfonso-balladares" },
      { texto: "ORCID", url: "https://orcid.org" },
      { texto: "Google Scholar", url: "https://scholar.google.com" }
    ],
    cifras: [
      { numero: "5", texto: "peer-reviewed papers" },
      { numero: "2", texto: "patent-pending formulas" },
      { numero: "26+", texto: "formulations designed" },
      { numero: "UHPLC", texto: "HRMS-QTOF platform" }
    ]
  },

  /* ---------- SECTIONS ---------- */
  secciones: [
    {
      id: "research",
      titulo: "Research Overview",
      tipo: "texto",
      parrafos: [
        "My research integrates two complementary pillars of pharmaceutical development: bioprospecting microbial and plant secondary metabolites through high-resolution analytical platforms (UHPLC-HRMS-QTOF), and engineering polymeric delivery systems to stabilize and control the release of bioactive compounds.",
        "I complement this experimental foundation with hands-on training in molecular biology, statistical Design of Experiments (Response Surface Methodology), and pharmaceutical Quality Assurance under global GxP standards."
      ]
    },

    {
      id: "quote",
      tipo: "frase",
      texto: "Bridging **metabolomic discovery** of natural bioactives with precision **polymeric delivery systems**."
    },

    {
      id: "projects",
      titulo: "Featured Research Projects",
      intro: "Experimental evidence, formulation architectures, and graphical outputs from my core research lines.",
      tipo: "proyectos",
      items: [
        {
          imagen: "imagenes/proyecto-nanofibras.jpg",
          alt: "Transdermal formulations and electrospun nanofibers",
          etiquetas: ["Targeted Delivery", "Electrospun Nanofibers", "2 Patents Pending"],
          titulo: "Transdermal Delivery Systems & Amazonian Bioactive Matrices",
          resumen: "Physicochemical design and optimization of topical vehicles and nanofiber patches to stabilize bioactive ingredients from the Peruvian Amazon.",
          situacion: "Novel Amazonian natural extracts suffer from high oxidative instability and limited dermal permeation.",
          accion: "Formulated over 26 delivery architectures (emulsions, anhydrous matrices, electrospun nanofiber patches) and co-authored PROCIENCIA/CONCYTEC grant proposals.",
          resultado: "2 patent-pending formulations filed and PEN 180,000.00 secured in competitive R&D grant funding."
        },
        {
          imagen: "imagenes/proyecto-metabolomica.jpg",
          alt: "UHPLC-HRMS-QTOF chromatograms and metabolomic profiling",
          etiquetas: ["UHPLC-HRMS-QTOF", "MetaboScape", "Endophytic Bacteria"],
          titulo: "Metabolomic Profiling of High-Andean Endophytic Bacteria",
          resumen: "Bioprospecting and molecular dereplication of secondary metabolites produced by bacterial strains isolated from medicinal flora.",
          situacion: "Identifying novel bioactive candidates in complex microbial extracts requires high-resolution separation and bioinformatics annotation.",
          accion: "Operated UHPLC-MS/MS QTOF platforms and annotated mass spectra in MetaboScape for Rahnella aceris, Pseudomonas lurida, and Pantoea agglomerans.",
          resultado: "Annotated bioactive phenolics, phytohormones, and nucleoside analogs; findings presented at the PROCIENCIA national Foodomics workshop."
        },
        {
          imagen: "imagenes/proyecto-rsm.jpg",
          alt: "Response Surface Methodology (RSM) optimization plot",
          etiquetas: ["Nanoencapsulation", "Response Surface Methodology", "Biopolymers"],
          titulo: "Biopolymer Nanoencapsulation & Response Surface Optimization (RSM)",
          resumen: "Biopolymer extraction and formulation of high-antioxidant biostimulants/biopesticides from agro-industrial subproducts.",
          situacion: "Maximizing polyphenol and pectin extraction yields while preserving antioxidant bioactivity.",
          accion: "Applied statistical Response Surface Methodology (RSM) designs and validated in vitro DPPH, ABTS, and FRAP spectrophotometric assays.",
          resultado: "Optimized bioactive formulation submitted in final grant report; peer-reviewed manuscript currently in preparation."
        }
      ]
    },

    {
      id: "publications",
      titulo: "Peer-Reviewed Publications",
      tipo: "publicaciones",
      items: [
        {
          tipo: "Original Research",
          autores: "Fernández-Rebaza G, Balladares-Quintana A, Soto-Tantaraico E, Zeña-Chiara E, Salazar-Salvatierra M, Bonilla-R.",
          anio: "2024",
          titulo: "Flavonoid Characterization and Antimicrobial Activity of the Methanolic Extract of Luma chequen (Molina) A. Gray Leaves",
          medio: "An Fac med"
        },
        {
          tipo: "Review Article",
          autores: "Zeña Chiara EN, Huamanchay Meza AV, Balladares-Quintana A, Guadalupe-Sifuentes de Posadas LF, Arias Arroyo GC.",
          anio: "2023",
          titulo: "Goat Milk (Capra aegagrus hircus): A Review of its Nutritional Value, Biological Activities, Thermal Treatment, and Derived Food Products",
          medio: "Perspect Nut Hum",
          enlaces: [{ texto: "DOI", url: "https://doi.org/10.17533/udea.penh.v25n2a06" }]
        },
        {
          tipo: "Original Research",
          autores: "Bonilla Rivera PE, Toche Tuesta A, Fernández Rebaza GA, Curioso Melo DE, Rayme Gutiérrez RL, Soto Tantaraico EC, Balladares-Quintana AD, et al.",
          anio: "2021",
          titulo: "Chemical Composition and Flavonoid Characterization of Methanolic Leaf Extracts of Two Types of Ruta chalepensis L.",
          medio: "Rev Peru Med Integr"
        },
        {
          tipo: "Review Article",
          autores: "Huaccho-Rojas J, Yánac-Tellería W, Balladares-Quintana A, et al.",
          anio: "2021",
          titulo: "Foods with Potential Immunomodulatory and Antiviral Effects in the Context of the COVID-19 Pandemic",
          medio: "Perspect Nut Hum"
        },
        {
          tipo: "Review Article",
          autores: "Huaccho-Rojas J, Balladares-Quintana A, Yánac-Tellería W, Rodríguez CL, Villar-López M.",
          anio: "2020",
          titulo: "Review of the Antiviral and Immunomodulatory Effect of Medicinal Plants in the Context of the COVID-19 Pandemic",
          medio: "Arch Venez Farmacol Ter"
        }
      ]
    },

    {
      id: "experience",
      titulo: "Research & Industry Experience",
      tipo: "lista",
      items: [
        {
          titulo: "Researcher -- Nanoencapsulation & Bioactives",
          lugar: "Universidad Antonio Ruiz de Montoya (UARM)",
          fecha: "06/2026 – Present",
          logros: [
            "Developed nanoencapsulated biostimulants and biopesticides from agro-industrial waste using Response Surface Methodology (RSM).",
            "Executed biopolymer extraction/purification (pectins, polysaccharides) and validated in vitro antioxidant assays (DPPH, ABTS, FRAP)."
          ]
        },
        {
          titulo: "Research Laboratory Assistant",
          lugar: "Center for Cosmetic Research, Technology, and Innovation (CITIC) -- USIL",
          fecha: "01/2026 – 08/2026",
          logros: [
            "Formulated over 26 topical delivery systems and electrospun nanofiber transdermal patches, yielding 2 patent-pending formulations.",
            "Co-authored technical proposals for national competitive R&D grants (CONCYTEC / PROCIENCIA), securing PEN 180,000.00 in funding."
          ]
        },
        {
          titulo: "Research Assistant -- Metabolomics & Omics",
          lugar: "Biotechnology and Omics in Life Sciences (BIOLIFS) -- UNMSM",
          fecha: "05/2024 – 12/2025",
          logros: [
            "Conducted metabolomic profiling of endophytic bacteria (Rahnella aceris, Pseudomonas lurida, Pantoea agglomerans) operating UHPLC-HRMS-QTOF and MetaboScape."
          ]
        },
        {
          titulo: "Quality Assurance Intern (GxP)",
          lugar: "Boehringer Ingelheim",
          fecha: "07/2024 – 07/2025",
          logros: [
            "Audited batch release data and investigated Out-of-Specification (OOS) results under global GxP standards using Veeva Vault, TrackWise, and SAP."
          ]
        }
      ]
    },

    {
      id: "education",
      titulo: "Education",
      tipo: "lista",
      items: [
        {
          titulo: "Bachelor of Science in Pharmacy and Biochemistry",
          lugar: "Universidad Nacional Mayor de San Marcos (UNMSM)",
          fecha: "02/2018 – 02/2024",
          descripcion: "GPA: 15.036 / 20.000 (Mention Bien). Training in molecular biology, genetics, immunology, biochemistry, and organic chemistry."
        }
      ]
    },

    {
      id: "skills",
      titulo: "Technical Skills & Languages",
      tipo: "habilidades",
      grupos: [
        {
          nombre: "Molecular & Cell Biology",
          items: ["DNA/RNA Purification", "PCR & qPCR", "Gel Electrophoresis", "Microbial Isolation & Culture"]
        },
        {
          nombre: "Analytical & Formulation",
          items: ["UHPLC-HRMS-QTOF", "MetaboScape", "UV-Vis", "TLC / Column / Flash Chromatography", "Electrospun Nanofibers", "Polymer Encapsulation", "RSM"]
        },
        {
          nombre: "Data Science & Quality",
          items: ["R (Data Analysis)", "Python", "GxP / GLP", "Veeva Vault & SAP", "Patent Drafting (WIPO)"]
        },
        {
          nombre: "Languages",
          items: [
            "Spanish (Native)",
            "English (Certified B2)",
            "French (Reading B2 / Speaking B1)"
          ]
        }
      ]
    },

    {
      id: "contact",
      titulo: "Contact",
      tipo: "contacto",
      parrafos: [
        "Open to scientific collaborations and research projects in biotherapies, metabolomics, and nanomedicine. Feel free to reach out via email or download my CV."
      ]
    }
  ]
};