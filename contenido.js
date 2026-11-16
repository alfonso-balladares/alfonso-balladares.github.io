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
  idiomas: ["en", "es"],         // ["es"] solo español · ["en"] solo inglés · ["en", "es"] inglés primero
  colorPrincipal: "#2d4a8a",       // cualquier color: https://htmlcolorcodes.com
  // fuentes: { titulos: "Fraunces", texto: "Manrope" },   // opcional: quita las // y usa nombres de fonts.google.com
  animaciones: true,              // false = página sin animaciones (más sobria)
  actualizado: { es: "septiembre 2026", en: "September 2026" },

  /* ---------- DATOS PERSONALES (columna izquierda) ---------- */
  perfil: {
    nombre: "Alfonso David Balladares Quintana",
    nombreCorto: "Alfonso Balladares",
    foto: "imagenes/foto.jpg",   // sube tu foto a la carpeta imagenes con este nombre. Si no hay foto, se ven tus iniciales.
    titular: {
      es: "Químico Farmacéutico · Metabolómica y Bioprospección",
      en: "Pharmacist and Biochemist · Metabolomics and Bioprospecting"
    },
    ubicacion: { es: "Lima, Perú", en: "Lima, Peru" },
    bio: {
      es: "Optimicé perfiles metabolómicos de compuestos bioactivos operando plataformas UHPLC-HRMS-QTOF para valorizar subproductos agrícolas y flora medicinal. Busco una beca DAAD para realizar estudios de maestría en bioquímica en Alemania.",
      en: "I optimized metabolomic profiles of bioactive compounds operating UHPLC-HRMS-QTOF platforms to upregulate agricultural subproducts and medicinal flora. I am seeking a DAAD scholarship for master's studies in biochemistry in Germany."
    },
    correo: "alfo.david26@gmail.com",
    cv: { es: "documentos/cv.pdf", en: "documentos/cv.pdf" },   // sube tu CV en PDF a la carpeta documentos
    enlaces: [
      { texto: "LinkedIn", url: "https://www.linkedin.com/in/alfonso-balladares" },
      { texto: "ORCID", url: "https://orcid.org" },
      { texto: "Google Scholar", url: "https://scholar.google.com" }
    ],
    // Tus cifras más fuertes (evidencia rápida). Borra las que no apliquen.
    cifras: [
      { numero: "5", texto: { es: "publicaciones científicas", en: "scientific publications" } },
      { numero: "UHPLC", texto: { es: "plataforma HRMS-QTOF", en: "HRMS-QTOF platform" } },
      { numero: "B2", texto: { es: "inglés", en: "English" } },
      { numero: "3", texto: { es: "años de experiencia en I+D", en: "years of R&D experience" } }
    ]
  },

  /* ---------- SECCIONES (se muestran en este orden) ---------- */
  secciones: [
    {
      id: "investigacion",
      titulo: { es: "Investigación", en: "Research" },
      tipo: "texto",
      parrafos: [
        {
          es: "Mi trabajo se centra en el análisis metabolómico y la bioprospección de metabolitos secundarios, empleando instrumentación analítica avanzada como UHPLC-HRMS-QTOF para la caracterización de moléculas bioactivas en plantas medicinales y bacterias endófitas.",
          en: "My work focuses on metabolomic profiling and bioprospecting of secondary metabolites, employing advanced analytical instrumentation such as UHPLC-HRMS-QTOF to characterize bioactive molecules in medicinal plants and endophytic bacteria."
        },
        {
          es: "He desarrollado protocolos de extracción y purificación de biopolímeros aplicados a la valorización de subproductos agrícolas bajo principios de economía circular, integrando competencias en diseño de sistemas de liberación y control de calidad farmacéutica.",
          en: "I have developed extraction and purification protocols for biopolymers applied to the valorization of agricultural subproducts under circular economy principles, integrating competencies in delivery system design and pharmaceutical quality control."
        }
      ]
    },

    {
      // Frase grande que se ilumina palabra por palabra al bajar. **Entre asteriscos** va en color.
      // Una sola idea, máximo 20 palabras. Si no la quieres: mostrar: false
      id: "frase",
      tipo: "frase",
      texto: {
        es: "Transformo **residuos agrícolas** y flora medicinal en **soluciones bioactivas** de alto valor mediante metabolómica avanzada.",
        en: "I transform **agricultural waste** and medicinal flora into **high-value bioactive solutions** using advanced metabolomics."
      }
    },

    {
      id: "publicaciones",
      titulo: { es: "Publicaciones y pósters", en: "Publications and posters" },
      tipo: "publicaciones",
      items: [
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "Fernández-Rebaza G, Balladares A., Soto-Tantaraico E, et al.",
          anio: "2024",
          titulo: {
            es: "Caracterización de flavonoides y actividad antimicrobiana del extracto metanólico de hojas de Luma chequen (Molina) A. Gray",
            en: "Flavonoid Characterization and Antimicrobial Activity of the Methanolic Extract of Luma chequen (Molina) A. Gray Leaves"
          },
          medio: "An Fac med",
          enlaces: [{ texto: "DOI", url: "https://doi.org" }]
        },
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "Bonilla Rivera PE et al.",
          anio: "2021",
          titulo: {
            es: "Composición química y caracterización de flavonoides de extractos metanólicos de hojas de dos tipos de Ruta chalepensis L.",
            en: "Chemical Composition and Flavonoid Characterization of Methanolic Leaf Extracts of Two Types of Ruta chalepensis L."
          },
          medio: "Rev Peru Med Integr",
          enlaces: [{ texto: "DOI", url: "https://doi.org" }]
        },
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "Huaccho-Rojas J, Balladares A., Yanac-Telleria W, Rodríguez CL, Villar-López M.",
          anio: "2020",
          titulo: {
            es: "Revisión del efecto antiviral e inmunomodulador de plantas medicinales a propósito de la pandemia COVID-19",
            en: "Review of the Antiviral and Immunomodulatory Effect of Medicinal Plants in the Context of the COVID-19 Pandemic"
          },
          medio: "Arch Venez Farmacol Ter",
          enlaces: [{ texto: "DOI", url: "https://doi.org" }]
        },
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "Zeña Chiara EN, Huamanchay Meza AV, Balladares Quintana AD, Guadalupe-Sifuentes de Posadas LF, Arias Arroyo GC",
          anio: "2023",
          titulo: {
            es: "Leche de cabra (Capra aegagrus hircus): una revisión de su valor nutricional, actividades biológicas, tratamiento térmico y productos alimenticios derivados",
            en: "Goat Milk (Capra aegagrus hircus): A Review of its Nutritional Value, Biological Activities, Thermal Treatment, and Derived Food Products"
          },
          medio: "Perspect Nut Hum",
          enlaces: [{ texto: "DOI", url: "https://doi.org/10.17533/udea.penh.v25n2a06" }]
        },
        {
          tipo: { es: "Artículo", en: "Article" },
          autores: "Huaccho-Rojas J et al.",
          anio: "2021",
          titulo: {
            es: "Alimentos con potencial efecto inmunomodulador y antiviral a propósito de la pandemia COVID-19",
            en: "Foods with Potential Immunomodulatory and Antiviral Effects in the Context of the COVID-19 Pandemic"
          },
          medio: "Perspect Nut Hum",
          enlaces: [{ texto: "DOI", url: "https://doi.org" }]
        }
      ]
    },

    {
      id: "experiencia",
      titulo: { es: "Experiencia en investigación", en: "Research experience" },
      tipo: "lista",
      items: [
        {
          titulo: { es: "Investigador Contratado y Científico en Formulación", en: "Research Contractor & Formulation Scientist" },
          lugar: { es: "Universidad Antonio Ruiz de Montoya", en: "University Antonio Ruiz de Montoya" },
          fecha: "06/2026 – Presente",
          logros: [
            {
              es: "Ejecuté y optimicé protocolos de extracción de pectina y biopolímeros a partir de subproductos agroindustriales (café, cacao y uva) para el desarrollo de matrices de valorización.",
              en: "Executed and optimized extraction protocols for pectin and biopolymers from agro-industrial subproducts (coffee, cocoa, and grape) for matrix development."
            },
            {
              es: "Validé ensayos espectrofotométricos in vitro (DPPH, ABTS, FRAP) para cuantificar la capacidad antioxidante y compuestos fenólicos totales.",
              en: "Validated in vitro spectrophotometric assays (DPPH, ABTS, FRAP) to quantify antioxidant capacity and total phenolic content."
            }
          ]
        },
        {
          titulo: { es: "Asistente de Laboratorio", en: "Laboratory Assistant" },
          lugar: { es: "Centro de Investigación, Tecnología e Innovación Cosmética (CITIC), USIL", en: "Center for Cosmetic Research, Technology, and Innovation (CITIC), USIL" },
          fecha: "05/01/2026 – 04/09/2026",
          logros: [
            {
              es: "Diseñé y formulé sistemas de liberación tópica avanzados, incluyendo emulsiones, matrices anhidras y parches transdérmicos con nanofibras electrohiladas.",
              en: "Designed and formulated advanced topical delivery systems, including emulsions, anhydrous matrices, and transdermal patches incorporating electrospun nanofibers."
            },
            {
              es: "Co-redacté propuestas de proyectos técnicos y diseños experimentales para fondos concursables de CONCYTEC / PROCIENCIA.",
              en: "Co-drafted technical project proposals and experimental designs for CONCYTEC / PROCIENCIA competitive grants."
            }
          ]
        },
        {
          titulo: { es: "Asistente de Laboratorio", en: "Laboratory Assistant" },
          lugar: { es: "Biotechnology and Omics in Life Sciences (BIOLIFS), UNMSM", en: "Biotechnology and Omics in Life Sciences (BIOLIFS), UNMSM" },
          fecha: "05/2024 – 12/2025",
          logros: [
            {
              es: "Realicé perfiles metabolómicos de bacterias endófitas (Rahnella aceris, Pseudomonas lurida y Pantoea agglomerans) operando sistemas UHPLC-MS/MS y MetaboScape.",
              en: "Performed metabolomic profiling of endophytic bacteria (Rahnella aceris, Pseudomonas lurida, and Pantoea agglomerans) operating UHPLC-MS/MS systems and MetaboScape."
            }
          ]
        },
        {
          titulo: { es: "Practicante de Calidad", en: "Quality Intern" },
          lugar: { es: "Boehringer Ingelheim", en: "Boehringer Ingelheim" },
          fecha: "07/2024 – 07/2025",
          logros: [
            {
              es: "Conduje auditorías técnicas de datos y evaluaciones organolépticas para la liberación de lotes farmacéuticos bajo normas GxP.",
              en: "Conducted technical data audits and organoleptic evaluations for pharmaceutical batch release under GxP standards."
            },
            {
              es: "Investigué resultados fuera de especificación (OOS) y diseñé Acciones Correctivas y Preventivas (CAPAs) utilizando Veeva Vault y SAP.",
              en: "Investigated out-of-specification (OOS) results and designed Corrective and Preventive Actions (CAPAs) using Veeva Vault and SAP."
            }
          ]
        }
      ]
    },

    {
      id: "formacion",
      titulo: { es: "Formación", en: "Education" },
      tipo: "lista",
      items: [
        {
          titulo: { es: "Título de Químico Farmacéutico", en: "Bachelor of Pharmacy and Biochemistry" },
          lugar: { es: "Universidad Nacional Mayor de San Marcos", en: "National University of San Marcos" },
          fecha: "02/2018 – 02/2024",
          descripcion: { es: "Formación rigurosa en ciencias farmacéuticas, química orgánica y bioquímica.", en: "Rigorous training in pharmaceutical sciences, organic chemistry, and biochemistry." }
        }
      ]
    },

    {
      id: "premios",
      titulo: { es: "Premios y becas", en: "Awards and scholarships" },
      tipo: "lista",
      items: [
        { 
          titulo: { es: "Ponente y Demostrador Técnico en Foodómica", en: "Speaker & Technical Demonstrator in Foodomics" }, 
          lugar: { es: "UNMSM / PROCIENCIA", en: "UNMSM / PROCIENCIA" }, 
          fecha: "2026" 
        },
        { 
          titulo: { es: "Curso de Especialización en Propiedad Intelectual y Patentes", en: "Specialization Course in Intellectual Property & Patents" }, 
          lugar: { es: "OMPI / WIPO", en: "WIPO" }, 
          fecha: "2026" 
        }
      ]
    },

    {
      id: "habilidades",
      titulo: { es: "Habilidades", en: "Skills" },
      tipo: "habilidades",
      grupos: [
        { nombre: { es: "Instrumentación y Análisis", en: "Instrumentation & Analysis" }, items: ["UHPLC-HRMS-QTOF", "HPLC", "Espectrofotometría UV-Vis", "MetaboScape", "Cromatografía en columna y capa fina"] },
        { nombre: { es: "Formulación e I+D", en: "Formulation & R&D" }, items: ["Sistemas transdérmicos", "Nanofibras", "Extracción de biopolímeros", "Normas GxP / GLP"] },
        { nombre: { es: "Idiomas", en: "Languages" }, items: [{ es: "Español (nativo)", en: "Spanish (native)" }, { es: "Inglés (B2)", en: "English (C1)" }, { es: "Francés (B2)", en: "French (B2)" }] }
      ]
    },

    {
      id: "contacto",
      titulo: { es: "Contacto", en: "Contact" },
      tipo: "contacto",
      parrafos: [
        {
          es: "Interesado en colaboraciones científicas, investigación doctoral y proyectos en bioquímica y metabolómica. Escríbeme por correo o conéctate conmigo en LinkedIn.",
          en: "Interested in scientific collaborations, doctoral research, and projects in biochemistry and metabolomics. Reach out via email or connect with me on LinkedIn."
        }
      ]
    }
  ]
};
