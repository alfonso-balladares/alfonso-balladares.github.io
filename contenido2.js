/* =====================================================================
   TU PORTAFOLIO · PLANTILLA ACADÉMICA
   Este es el ÚNICO archivo que necesitas editar.

   REGLAS RÁPIDAS
   1. Cambia solo el texto que está entre comillas "así".
   2. Los textos bilingües se escriben así: { es: "Hola", en: "Hello" }.
      Si solo quieres un idioma, deja  idiomas: ["es"]  más abajo.
   3. No borres comas, llaves { } ni corchetes [ ]. Cada bloque termina en coma.
   4. Para ocultar una sección o un elemento sin borrarlo: mostrar: false
   5. Dentro de un texto puedes usar **negrita** y [un enlace](https://...).
   6. Si la página sale en blanco o con un aviso rojo, pega este archivo en tu IA
      y pídele: "corrige la sintaxis sin cambiar el contenido".

   ===================================================================== */

window.CONTENIDO = {
  idiomas: ["en", "es"],
  colorPrincipal: "#1f6f68",
  animaciones: true,
  actualizado: { es: "noviembre 2026", en: "November 2026" },

  /* ---------- DATOS PERSONALES (columna izquierda) ---------- */
  perfil: {
    nombre: "Alfonso David Balladares Quintana",
    nombreCorto: "Alfonso Balladares",
    foto: "imagenes/foto.jpg",
    titular: {
      es: "Químico Farmacéutico · Metabolómica, Bioprospección y Sistemas de Liberación",
      en: "Pharmacist & Biochemist · Metabolomics, Bioprospecting & Drug Delivery"
    },
    ubicacion: { es: "Lima, Perú", en: "Lima, Peru" },
    bio: {
      es: "Investigador enfocado en el descubrimiento de moléculas bioactivas mediante metabolómica de alta resolución (UHPLC-HRMS-QTOF) y su encapsulación en matrices poliméricas para liberación controlada, orientado a la biomedicina y oncología molecular.",
      en: "Researcher focused on bioactive molecule discovery via high-resolution metabolomics (UHPLC-HRMS-QTOF) and polymeric matrix encapsulation for controlled delivery, targeting biomedicine and molecular oncology."
    },
    correo: "alfo.david26@gmail.com",
    cv: { es: "documentos/cv.pdf", en: "documentos/cv.pdf" },
    enlaces: [
      { texto: "LinkedIn", url: "https://www.linkedin.com/in/alfonso-balladares" },
      { texto: "ORCID", url: "https://orcid.org" },
      { texto: "Google Scholar", url: "https://scholar.google.com" }
    ],
    cifras: [
      { numero: "5", texto: { es: "artículos científicos", en: "peer-reviewed papers" } },
      { numero: "2", texto: { es: "patentes en trámite", en: "patent-pending formulas" } },
      { numero: "26+", texto: { es: "formulaciones diseñadas", en: "formulations designed" } },
      { numero: "UHPLC", texto: { es: "plataforma HRMS-QTOF", en: "HRMS-QTOF platform" } }
    ]
  },

  /* ---------- SECCIONES ---------- */
  secciones: [
    {
      id: "investigacion",
      titulo: { es: "Perfil de Investigación", en: "Research Overview" },
      tipo: "texto",
      parrafos: [
        {
          es: "Mi trayectoria integra dos pilares complementarios del desarrollo farmacéutico: la bioprospección de metabolitos secundarios de origen microbiano y vegetal mediante plataformas analíticas de alta resolución (UHPLC-HRMS-QTOF), y el diseño de sistemas poliméricos de liberación controlada para proteger compuestos bioactivos inestables.",
          en: "My research integrates two complementary pillars of pharmaceutical development: bioprospecting microbial and plant secondary metabolites through high-resolution analytical platforms (UHPLC-HRMS-QTOF), and engineering polymeric delivery systems to stabilize and control the release of bioactive compounds."
        },
        {
          es: "Complemento esta base experimental con formación en biología molecular, diseño estadístico de experimentos (Metodología de Superficie de Respuesta) y aseguramiento de la calidad bajo estándares globales GxP.",
          en: "I complement this experimental foundation with hands-on training in molecular biology, statistical Design of Experiments (Response Surface Methodology), and pharmaceutical Quality Assurance under global GxP standards."
        }
      ]
    },

    {
      id: "frase",
      tipo: "frase",
      texto: {
        es: "Conecto el **descubrimiento metabolómico** de bioactivos naturales con **sistemas poliméricos de liberación** de precisión.",
        en: "Bridging **metabolomic discovery** of natural bioactives with precision **polymeric delivery systems**."
      }
    },

    /* ---------- NUEVA SECCIÓN VISUAL DE PROYECTOS CON IMÁGENES ---------- */
    {
      id: "proyectos",
      titulo: { es: "Proyectos Destacados", en: "Featured Research Projects" },
      intro: {
        es: "Evidencia experimental, diseños de formulación y resultados gráficos de mis líneas de investigación.",
        en: "Experimental evidence, formulation architectures, and graphical outputs from my core research lines."
      },
      tipo: "proyectos",
      items: [
        {
          // Sube tus imágenes a la carpeta imagenes/ de tu repositorio GitHub
          imagen: "imagenes/proyecto-nanofibras.jpg",
          alt: { es: "Formulaciones transdérmicas y nanofibras CITIC-USIL", en: "Transdermal formulations and electrospun nanofibers" },
          etiquetas: ["Targeted Delivery", "Electrospun Nanofibers", "2 Patents Pending"],
          titulo: {
            es: "Sistemas de Liberación Transdérmica y Matrices Bioactivas Amazónicas",
            en: "Transdermal Delivery Systems & Amazonian Bioactive Matrices"
          },
          resumen: {
            es: "Diseño y optimización fisicoquímica de vehículos tópicos y parches con nanofibras para estabilizar compuestos bioactivos de la Amazonía peruana.",
            en: "Physicochemical design and optimization of topical vehicles and nanofiber patches to stabilize bioactive ingredients from the Peruvian Amazon."
          },
          situacion: {
            es: "Los extractos naturales amazónicos presentan alta sensibilidad a la oxidación y baja permeación cutánea.",
            en: "Novel Amazonian natural extracts suffer from high oxidative instability and limited dermal permeation."
          },
          accion: {
            es: "Formulé más de 26 sistemas (emulsiones, matrices anhidras y parches con nanofibras) y co-redacté propuestas técnicas para fondos PROCIENCIA/CONCYTEC.",
            en: "Formulated over 26 delivery architectures (emulsions, anhydrous matrices, electrospun nanofiber patches) and co-authored PROCIENCIA/CONCYTEC grant proposals."
          },
          resultado: {
            es: "2 formulaciones en proceso de solicitud de patente y S/ 180,000.00 en financiamiento adjudicado para I+D.",
            en: "2 patent-pending formulations filed and PEN 180,000.00 secured in competitive R&D grant funding."
          }
        },
        {
          imagen: "imagenes/proyecto-metabolomica.jpg",
          alt: { es: "Cromatogramas UHPLC-HRMS-QTOF y redes moleculares", en: "UHPLC-HRMS-QTOF chromatograms and metabolomic profiling" },
          etiquetas: ["UHPLC-HRMS-QTOF", "MetaboScape", "Endophytic Bacteria"],
          titulo: {
            es: "Perfilamiento Metabolómico de Bacterias Endófitas Altoandinas",
            en: "Metabolomic Profiling of High-Andean Endophytic Bacteria"
          },
          resumen: {
            es: "Bioprospección y dereplicación molecular de metabolitos secundarios producidos por cepas aisladas de flora medicinal.",
            en: "Bioprospecting and molecular dereplication of secondary metabolites produced by bacterial strains isolated from medicinal flora."
          },
          situacion: {
            es: "Identificar moléculas bioactivas novedosas en matrices microbianas complejas requiere separación de alta resolución y análisis bioinformático.",
            en: "Identifying novel bioactive candidates in complex microbial extracts requires high-resolution separation and bioinformatics annotation."
          },
          accion: {
            es: "Operé plataformas UHPLC-MS/MS QTOF y procesé espectros de masas en MetaboScape para cepas de Rahnella aceris, Pseudomonas lurida y Pantoea agglomerans.",
            en: "Operated UHPLC-MS/MS QTOF platforms and annotated mass spectra in MetaboScape for Rahnella aceris, Pseudomonas lurida, and Pantoea agglomerans."
          },
          resultado: {
            es: "Identificación de fitohormonas, compuestos fenólicos y nucleósidos bioactivos; resultados presentados en taller nacional PROCIENCIA.",
            en: "Annotated bioactive phenolics, phytohormones, and nucleoside analogs; findings presented at the PROCIENCIA national Foodomics workshop."
          }
        },
        {
          imagen: "imagenes/proyecto-rsm.jpg",
          alt: { es: "Gráfico de Metodología de Superficie de Respuesta (RSM)", en: "Response Surface Methodology (RSM) optimization plot" },
          etiquetas: ["Nanoencapsulation", "Response Surface Methodology", "Biopolymers"],
          titulo: {
            es: "Nanoencapsulación y Optimización por Superficie de Respuesta (RSM)",
            en: "Biopolymer Nanoencapsulation & Response Surface Optimization (RSM)"
          },
          resumen: {
            es: "Extracción de biopolímeros y formulación de bioestimulantes/biopesticidas antioxidantes a partir de subproductos agroindustriales.",
            en: "Biopolymer extraction and formulation of high-antioxidant biostimulants/biopesticides from agro-industrial subproducts."
          },
          situacion: {
            es: "Maximizar el rendimiento de extracción de polifenoles y pectinas manteniendo su capacidad antioxidante.",
            en: "Maximizing polyphenol and pectin extraction yields while preserving antioxidant bioactivity."
          },
          accion: {
            es: "Apliqué diseños estadísticos de Metodología de Superficie de Respuesta (RSM) y validé ensayos espectrofotométricos DPPH, ABTS y FRAP.",
            en: "Applied statistical Response Surface Methodology (RSM) designs and validated in vitro DPPH, ABTS, and FRAP spectrophotometric assays."
          },
          resultado: {
            es: "Formulación bioactiva optimizada reportada a la entidad financiadora y manuscrito científico actualmente en preparación.",
            en: "Optimized bioactive formulation submitted in final grant report; peer-reviewed manuscript currently in preparation."
          }
        }
      ]
    },

    {
      id: "publicaciones",
      titulo: { es: "Publicaciones Científicas", en: "Peer-Reviewed Publications" },
      tipo: "publicaciones",
      items: [
        {
          tipo: { es: "Artículo Original", en: "Original Research" },
          autores: "Fernández-Rebaza G, Balladares-Quintana A, Soto-Tantaraico E, Zeña-Chiara E, Salazar-Salvatierra M, Bonilla-R.",
          anio: "2024",
          titulo: {
            es: "Caracterización de flavonoides y actividad antimicrobiana del extracto metanólico de hojas de Luma chequen (Molina) A. Gray",
            en: "Flavonoid Characterization and Antimicrobial Activity of the Methanolic Extract of Luma chequen (Molina) A. Gray Leaves"
          },
          medio: "An Fac med"
        },
        {
          tipo: { es: "Artículo de Revisión", en: "Review Article" },
          autores: "Zeña Chiara EN, Huamanchay Meza AV, Balladares-Quintana A, Guadalupe-Sifuentes de Posadas LF, Arias Arroyo GC.",
          anio: "2023",
          titulo: {
            es: "Leche de cabra (Capra aegagrus hircus): una revisión de su valor nutricional, actividades biológicas, tratamiento térmico y productos alimenticios derivados",
            en: "Goat Milk (Capra aegagrus hircus): A Review of its Nutritional Value, Biological Activities, Thermal Treatment, and Derived Food Products"
          },
          medio: "Perspect Nut Hum",
          enlaces: [{ texto: "DOI", url: "https://doi.org/10.17533/udea.penh.v25n2a06" }]
        },
        {
          tipo: { es: "Artículo Original", en: "Original Research" },
          autores: "Bonilla Rivera PE, Toche Tuesta A, Fernández Rebaza GA, Curioso Melo DE, Rayme Gutiérrez RL, Soto Tantaraico EC, Balladares-Quintana AD, et al.",
          anio: "2021",
          titulo: {
            es: "Composición química y caracterización de flavonoides de extractos metanólicos de hojas de dos tipos de Ruta chalepensis L.",
            en: "Chemical Composition and Flavonoid Characterization of Methanolic Leaf Extracts of Two Types of Ruta chalepensis L."
          },
          medio: "Rev Peru Med Integr"
        },
        {
          tipo: { es: "Artículo de Revisión", en: "Review Article" },
          autores: "Huaccho-Rojas J, Yánac-Tellería W, Balladares-Quintana A, et al.",
          anio: "2021",
          titulo: {
            es: "Alimentos con potencial efecto inmunomodulador y antiviral a propósito de la pandemia COVID-19",
            en: "Foods with Potential Immunomodulatory and Antiviral Effects in the Context of the COVID-19 Pandemic"
          },
          medio: "Perspect Nut Hum"
        },
        {
          tipo: { es: "Artículo de Revisión", en: "Review Article" },
          autores: "Huaccho-Rojas J, Balladares-Quintana A, Yánac-Tellería W, Rodríguez CL, Villar-López M.",
          anio: "2020",
          titulo: {
            es: "Revisión del efecto antiviral e inmunomodulador de plantas medicinales a propósito de la pandemia COVID-19",
            en: "Review of the Antiviral and Immunomodulatory Effect of Medicinal Plants in the Context of the COVID-19 Pandemic"
          },
          medio: "Arch Venez Farmacol Ter"
        }
      ]
    },

    {
      id: "experiencia",
      titulo: { es: "Experiencia en Investigación y Farmacia", en: "Research & Industry Experience" },
      tipo: "lista",
      items: [
        {
          titulo: { es: "Investigador en Nanoencapsulación y Bioactivos", en: "Researcher -- Nanoencapsulation & Bioactives" },
          lugar: { es: "Universidad Antonio Ruiz de Montoya (UARM)", en: "Universidad Antonio Ruiz de Montoya (UARM)" },
          fecha: "06/2026 – Presente",
          logros: [
            {
              es: "Desarrollo de bioestimulantes y biopesticidas nanoencapsulados a partir de residuos agroindustriales mediante Metodología de Superficie de Respuesta (RSM).",
              en: "Developed nanoencapsulated biostimulants and biopesticides from agro-industrial waste using Response Surface Methodology (RSM)."
            },
            {
              es: "Extracción y purificación de biopolímeros (pectinas, polisacáridos) y validación de ensayos antioxidantes in vitro (DPPH, ABTS, FRAP).",
              en: "Executed biopolymer extraction/purification (pectins, polysaccharides) and validated in vitro antioxidant assays (DPPH, ABTS, FRAP)."
            }
          ]
        },
        {
          titulo: { es: "Asistente de Laboratorio de Investigación", en: "Research Laboratory Assistant" },
          lugar: { es: "Centro de Investigación, Tecnología e Innovación Cosmética (CITIC) – USIL", en: "Center for Cosmetic Research, Technology, and Innovation (CITIC) -- USIL" },
          fecha: "01/2026 – 08/2026",
          logros: [
            {
              es: "Formulación de más de 26 sistemas de liberación tópica y parches transdérmicos con nanofibras electrohiladas, logrando 2 solicitudes de patente.",
              en: "Formulated over 26 topical delivery systems and electrospun nanofiber transdermal patches, yielding 2 patent-pending formulations."
            },
            {
              es: "Co-redacción de propuestas técnicas para fondos concursables (CONCYTEC / PROCIENCIA), asegurando S/ 180,000.00 en financiamiento.",
              en: "Co-authored technical proposals for national competitive R&D grants (CONCYTEC / PROCIENCIA), securing PEN 180,000.00 in funding."
            }
          ]
        },
        {
          titulo: { es: "Asistente de Investigación – Metabolómica y Ómica", en: "Research Assistant -- Metabolomics & Omics" },
          lugar: { es: "Biotechnology and Omics in Life Sciences (BIOLIFS) – UNMSM", en: "Biotechnology and Omics in Life Sciences (BIOLIFS) -- UNMSM" },
          fecha: "05/2024 – 12/2025",
          logros: [
            {
              es: "Perfilamiento metabolómico de bacterias endófitas (Rahnella aceris, Pseudomonas lurida, Pantoea agglomerans) operando plataformas UHPLC-HRMS-QTOF y MetaboScape.",
              en: "Conducted metabolomic profiling of endophytic bacteria (Rahnella aceris, Pseudomonas lurida, Pantoea agglomerans) operating UHPLC-HRMS-QTOF and MetaboScape."
            }
          ]
        },
        {
          titulo: { es: "Practicante de Aseguramiento de la Calidad (GxP)", en: "Quality Assurance Intern (GxP)" },
          lugar: { es: "Boehringer Ingelheim", en: "Boehringer Ingelheim" },
          fecha: "07/2024 – 07/2025",
          logros: [
            {
              es: "Auditoría técnica de registros de lote e investigación de resultados fuera de especificación (OOS) bajo estándares globales GxP utilizando Veeva Vault, TrackWise y SAP.",
              en: "Audited batch release data and investigated Out-of-Specification (OOS) results under global GxP standards using Veeva Vault, TrackWise, and SAP."
            }
          ]
        }
      ]
    },

    {
      id: "formacion",
      titulo: { es: "Formación Académica", en: "Education" },
      tipo: "lista",
      items: [
        {
          titulo: { es: "Bachiller en Farmacia y Bioquímica", en: "Bachelor of Science in Pharmacy and Biochemistry" },
          lugar: { es: "Universidad Nacional Mayor de San Marcos (UNMSM)", en: "Universidad Nacional Mayor de San Marcos (UNMSM)" },
          fecha: "02/2018 – 02/2024",
          descripcion: {
            es: "Promedio ponderado: 15.036 / 20.000 (Mention Bien). Formación en biología molecular, genética, inmunología, bioquímica y química orgánica.",
            en: "GPA: 15.036 / 20.000 (Mention Bien). Training in molecular biology, genetics, immunology, biochemistry, and organic chemistry."
          }
        }
      ]
    },

    {
      id: "habilidades",
      titulo: { es: "Competencias Técnicas e Idiomas", en: "Technical Skills & Languages" },
      tipo: "habilidades",
      grupos: [
        {
          nombre: { es: "Biología Molecular y Celular", en: "Molecular & Cell Biology" },
          items: ["DNA/RNA Purification", "PCR & qPCR", "Gel Electrophoresis", "Microbial Isolation & Culture"]
        },
        {
          nombre: { es: "Química Analítica y Formulación", en: "Analytical & Formulation" },
          items: ["UHPLC-HRMS-QTOF", "MetaboScape", "UV-Vis", "TLC / Column / Flash Chromatography", "Electrospun Nanofibers", "Polymer Encapsulation", "RSM"]
        },
        {
          nombre: { es: "Ciencia de Datos y Calidad", en: "Data Science & Quality" },
          items: ["R (Data Analysis)", "Python", "GxP / GLP", "Veeva Vault & SAP", "Patent Drafting (WIPO)"]
        },
        {
          nombre: { es: "Idiomas", en: "Languages" },
          items: [
            { es: "Español (Nativo)", en: "Spanish (Native)" },
            { es: "Inglés (Certificado B2)", en: "English (Certified B2)" },
            { es: "Francés (Lectura B2 / Oral B1)", en: "French (Reading B2 / Speaking B1)" }
          ]
        }
      ]
    },

    {
      id: "contacto",
      titulo: { es: "Contacto", en: "Contact" },
      tipo: "contacto",
      parrafos: [
        {
          es: "Disponible para colaboraciones científicas, proyectos de investigación en bioterapias, metabolómica y nanomedicina. Escríbeme directamente o descarga mi CV.",
          en: "Open to scientific collaborations and research projects in biotherapies, metabolomics, and nanomedicine. Feel free to reach out via email or download my CV."
        }
      ]
    }
  ]
};
