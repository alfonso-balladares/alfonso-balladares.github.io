/*
  MOTOR DEL PORTAFOLIO: no necesitas editar este archivo.
  Todo tu contenido va en contenido.js.

  Portfolio engine: you don't need to edit this file.
  All your content lives in contenido.js.
*/
(function () {
  "use strict";

  var UI = {
    es: {
      otroIdioma: "EN",
      otroIdiomaLargo: "Ver en inglés",
      saltar: "Saltar al contenido",
      cv: "Descargar CV",
      correo: "Escríbeme",
      situacion: "Situación y reto",
      accion: "Qué hice",
      resultado: "Resultado",
      aprendizaje: "Qué aprendí",
      actualizado: "Última actualización",
      errorTitulo: "Tu portafolio tiene un error en contenido.js",
      errorTexto:
        "Casi siempre es una coma, comilla o llave que falta o sobra. Copia todo contenido.js en tu IA (ChatGPT, Claude o Gemini) y pídele: \"Revisa la sintaxis de este archivo JavaScript y corrígela sin cambiar el contenido\".",
      errorDetalle: "Detalle técnico (revisa esa línea y la anterior)"
    },
    en: {
      otroIdioma: "ES",
      otroIdiomaLargo: "Ver en español",
      saltar: "Skip to content",
      cv: "Download CV",
      correo: "Email me",
      situacion: "Context and challenge",
      accion: "What I did",
      resultado: "Result",
      aprendizaje: "What I learned",
      actualizado: "Last updated",
      errorTitulo: "Your portfolio has an error in contenido.js",
      errorTexto:
        "It is almost always a missing or extra comma, quote or bracket. Paste all of contenido.js into your AI assistant and ask it to fix the JavaScript syntax without changing the content.",
      errorDetalle: "Technical detail (check that line and the one before)"
    }
  };

  var datos = window.CONTENIDO;
  var idioma = "es";

  /* ---------- utilidades ---------- */

  // Devuelve el texto en el idioma activo. Acepta "texto" o {es: "...", en: "..."}.
  function t(valor) {
    if (valor === null || valor === undefined) return "";
    if (typeof valor === "string" || typeof valor === "number") return String(valor);
    if (typeof valor === "object") {
      if (valor[idioma] !== undefined && valor[idioma] !== "") return String(valor[idioma]);
      for (var k in valor) {
        if (Object.prototype.hasOwnProperty.call(valor, k) && valor[k]) return String(valor[k]);
      }
    }
    return "";
  }

  function lista(valor) {
    if (!valor) return [];
    return Array.isArray(valor) ? valor : [valor];
  }

  function escapar(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Solo permite enlaces http(s), mailto, tel o rutas del propio repositorio.
  // Un sitio escrito sin https:// ("linkedin.com/in/tu-usuario", "www.github.com/...") se completa;
  // si no, el navegador lo buscaría como una página dentro de tu propio portafolio.
  function urlSegura(url) {
    url = String(url || "").trim();
    if (!url) return "";
    if (/^(https?:|mailto:|tel:)/i.test(url)) return url;
    if (/^[a-z][a-z0-9+.\-]*:/i.test(url)) return "";
    if (/^\/\//.test(url)) return "https:" + url;
    if (pareceSitio(url)) return "https://" + url;
    return url;
  }

  // "linkedin.com/in/x" o "github.com" son sitios; "cv.pdf" o "documentos/cv.pdf" son archivos tuyos.
  function pareceSitio(url) {
    var dominio = url.split(/[\/?#]/)[0];
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}(:\d+)?$/i.test(dominio)) return false;
    if (/^www\./i.test(dominio) || url.charAt(dominio.length) === "/") return true;
    return !/\.(pdf|docx?|pptx?|xlsx?|odt|zip|html?|jpe?g|png|gif|svg|webp|txt|md)$/i.test(dominio);
  }

  // Sitios externos y archivos (CV, PDF, póster) se abren en otra pestaña; anclas, correo y teléfono no.
  function enOtraPestana(url) {
    return !/^(#|mailto:|tel:)/i.test(url);
  }

  // Formato mínimo dentro de los textos: **negrita** y [texto](https://enlace)
  function formato(texto) {
    var html = escapar(texto);
    html = html.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, etiqueta, url) {
      var segura = urlSegura(url.replace(/&amp;/g, "&"));
      if (!segura) return etiqueta;
      return '<a href="' + escapar(segura) + '"' + externo(segura) + ">" + etiqueta + "</a>";
    });
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return html;
  }

  function externo(url) {
    return enOtraPestana(url) ? ' target="_blank" rel="noopener"' : "";
  }

  function el(etiqueta, clase, html) {
    var nodo = document.createElement(etiqueta);
    if (clase) nodo.className = clase;
    if (html !== undefined) nodo.innerHTML = html;
    return nodo;
  }

  function enlace(texto, url, clase) {
    var segura = urlSegura(url);
    if (!segura || !texto) return null;
    var a = el("a", clase || "");
    a.href = segura;
    a.textContent = texto;
    if (enOtraPestana(segura)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    return a;
  }

  function agregar(padre, hijo) {
    if (hijo) padre.appendChild(hijo);
    return padre;
  }

  function iniciales(nombre) {
    return String(nombre || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (p) { return p.charAt(0).toUpperCase(); })
      .join("");
  }

  /* ---------- partes de la página ---------- */

  function barra(perfil, secciones) {
    var header = el("header", "barra");
    var int = el("div", "contenedor barra__int");
    var marca = el("a", "barra__marca");
    marca.href = "#inicio";
    marca.textContent = t(perfil.nombreCorto) || t(perfil.nombre);
    int.appendChild(marca);

    var nav = el("nav", "barra__nav");
    nav.setAttribute("aria-label", idioma === "es" ? "Secciones" : "Sections");
    secciones.forEach(function (s) {
      if (s.enMenu === false) return;
      agregar(nav, enlace(t(s.menu) || t(s.titulo), "#" + s.id));
    });
    int.appendChild(nav);

    if (idiomas().length > 1) {
      var boton = el("button", "barra__idioma");
      boton.type = "button";
      boton.textContent = UI[idioma].otroIdioma;
      boton.setAttribute("aria-label", UI[idioma].otroIdiomaLargo);
      boton.addEventListener("click", function () {
        cambiarIdioma(idioma === "es" ? "en" : "es");
      });
      int.appendChild(boton);
    }
    header.appendChild(int);
    return header;
  }

  function hero(perfil) {
    var seccion = el("section", "hero");
    seccion.id = "inicio";
    var int = el("div", "contenedor hero__int");

    var foto = el("div", "hero__foto");
    if (perfil.foto) {
      var img = el("img");
      img.src = perfil.foto;
      img.alt = t(perfil.nombre);
      img.onerror = function () {
        foto.innerHTML = "";
        foto.appendChild(el("span", "hero__iniciales", escapar(iniciales(t(perfil.nombre)))));
      };
      foto.appendChild(img);
    } else {
      foto.appendChild(el("span", "hero__iniciales", escapar(iniciales(t(perfil.nombre)))));
    }
    int.appendChild(foto);

    var texto = el("div", "hero__texto");
    if (t(perfil.saludo)) texto.appendChild(el("p", "hero__saludo", formato(t(perfil.saludo))));
    texto.appendChild(el("h1", "hero__nombre", escapar(t(perfil.nombre))));
    if (t(perfil.titular)) texto.appendChild(el("p", "hero__titular", formato(t(perfil.titular))));
    if (t(perfil.ubicacion)) texto.appendChild(el("p", "hero__ubicacion", formato(t(perfil.ubicacion))));
    if (t(perfil.bio)) texto.appendChild(el("p", "hero__bio", formato(t(perfil.bio))));

    var acciones = el("div", "hero__acciones");
    agregar(acciones, enlace(UI[idioma].cv, t(perfil.cv), "boton boton--principal"));
    if (perfil.correo) agregar(acciones, enlace(UI[idioma].correo, "mailto:" + perfil.correo, "boton"));
    lista(perfil.enlaces).forEach(function (e) {
      agregar(acciones, enlace(t(e.texto), t(e.url), "boton boton--suave"));
    });
    if (acciones.children.length) texto.appendChild(acciones);

    var cifras = lista(perfil.cifras);
    if (cifras.length) {
      var ul = el("ul", "cifras");
      cifras.forEach(function (c) {
        var li = el("li", "cifra");
        li.appendChild(el("span", "cifra__numero", escapar(t(c.numero))));
        li.appendChild(el("span", "cifra__texto", formato(t(c.texto))));
        ul.appendChild(li);
      });
      texto.appendChild(ul);
    }

    int.appendChild(texto);
    seccion.appendChild(int);
    return seccion;
  }

  function seccion(s) {
    var nodo = el("section", "seccion seccion--" + (s.tipo || "texto"));
    nodo.id = s.id;
    var int = el("div", "contenedor");
    if (t(s.titulo)) int.appendChild(el("h2", "seccion__titulo", escapar(t(s.titulo))));
    if (t(s.intro)) int.appendChild(el("p", "seccion__intro", formato(t(s.intro))));
    var cuerpo = (TIPOS[s.tipo] || TIPOS.texto)(s);
    if (cuerpo) int.appendChild(cuerpo);
    nodo.appendChild(int);
    return nodo;
  }

  var TIPOS = {
    texto: function (s) {
      var caja = el("div", "texto");
      lista(s.parrafos).forEach(function (p) {
        if (t(p)) caja.appendChild(el("p", "", formato(t(p))));
      });
      return caja;
    },

    // Frase grande que se ilumina palabra por palabra al bajar. Las **palabras** entre asteriscos van en color.
    frase: function (s) {
      var p = el("p", "frase");
      var color = false;
      t(s.texto).split(/\s+/).forEach(function (palabra) {
        if (!palabra) return;
        var span = el("span", "frase__palabra");
        palabra.split("**").forEach(function (trozo, i) {
          if (i > 0) color = !color;
          if (trozo) span.appendChild(color ? el("span", "frase__color", escapar(trozo)) : document.createTextNode(trozo));
        });
        if (!span.childNodes.length) return;
        p.appendChild(span);
        p.appendChild(document.createTextNode(" "));
      });
      return p;
    },

    lista: function (s) {
      var ol = el("ol", "lista");
      lista(s.items).forEach(function (item) {
        if (item.mostrar === false) return;
        var li = el("li", "item");
        var cab = el("div", "item__cab");
        cab.appendChild(el("h3", "item__titulo", formato(t(item.titulo))));
        if (t(item.fecha)) cab.appendChild(el("span", "item__fecha", escapar(t(item.fecha))));
        li.appendChild(cab);
        if (t(item.lugar)) li.appendChild(el("p", "item__lugar", formato(t(item.lugar))));
        if (t(item.descripcion)) li.appendChild(el("p", "item__desc", formato(t(item.descripcion))));
        var logros = lista(item.logros).filter(function (l) { return t(l); });
        if (logros.length) {
          var ul = el("ul", "item__logros");
          logros.forEach(function (l) { ul.appendChild(el("li", "", formato(t(l)))); });
          li.appendChild(ul);
        }
        var enlaces = lista(item.enlaces || item.enlace);
        if (enlaces.length) {
          var caja = el("div", "enlaces");
          enlaces.forEach(function (e) { agregar(caja, enlace(t(e.texto), t(e.url), "enlace-flecha")); });
          li.appendChild(caja);
        }
        ol.appendChild(li);
      });
      return ol;
    },

    publicaciones: function (s) {
      var ol = el("ol", "pubs");
      lista(s.items).forEach(function (p) {
        if (p.mostrar === false) return;
        var li = el("li", "pub");
        if (t(p.tipo)) li.appendChild(el("span", "pub__tipo", escapar(t(p.tipo))));
        var ref = el("p", "pub__ref");
        var partes = [];
        if (t(p.autores)) partes.push('<span class="pub__autores">' + formato(t(p.autores)) + "</span>");
        if (t(p.anio)) partes.push("(" + escapar(t(p.anio)) + ")");
        ref.innerHTML =
          partes.join(" ") +
          (partes.length ? ". " : "") +
          '<span class="pub__titulo">' + formato(t(p.titulo)) + "</span>" +
          (t(p.medio) ? '. <em class="pub__medio">' + formato(t(p.medio)) + "</em>" : "") +
          ".";
        li.appendChild(ref);
        if (t(p.nota)) li.appendChild(el("p", "pub__nota", formato(t(p.nota))));
        var enlaces = lista(p.enlaces || p.enlace);
        if (enlaces.length) {
          var caja = el("div", "enlaces");
          enlaces.forEach(function (e) { agregar(caja, enlace(t(e.texto), t(e.url), "enlace-flecha")); });
          li.appendChild(caja);
        }
        ol.appendChild(li);
      });
      return ol;
    },

    proyectos: function (s) {
      var grid = el("div", "tarjetas");
      lista(s.items).forEach(function (p) {
        if (p.mostrar === false) return;
        var art = el("article", "tarjeta");
        if (p.imagen) {
          var img = el("img", "tarjeta__img");
          img.onerror = function () { img.remove(); };
          img.src = p.imagen;
          img.alt = t(p.alt) || t(p.titulo);
          img.loading = "lazy";
          art.appendChild(img);
        }
        var cuerpo = el("div", "tarjeta__cuerpo");
        var etiquetas = lista(p.etiquetas);
        if (etiquetas.length) {
          var ul = el("ul", "etiquetas");
          etiquetas.forEach(function (e) { ul.appendChild(el("li", "", escapar(t(e)))); });
          cuerpo.appendChild(ul);
        }
        cuerpo.appendChild(el("h3", "tarjeta__titulo", formato(t(p.titulo))));
        if (t(p.resumen)) cuerpo.appendChild(el("p", "tarjeta__resumen", formato(t(p.resumen))));

        var dl = el("dl", "star");
        ["situacion", "accion", "resultado", "aprendizaje"].forEach(function (clave) {
          if (!t(p[clave])) return;
          var fila = el("div", "star__fila star__fila--" + clave);
          fila.appendChild(el("dt", "", escapar(UI[idioma][clave])));
          fila.appendChild(el("dd", "", formato(t(p[clave]))));
          dl.appendChild(fila);
        });
        if (dl.children.length) cuerpo.appendChild(dl);

        var enlaces = lista(p.enlaces);
        if (enlaces.length) {
          var caja = el("div", "enlaces");
          enlaces.forEach(function (e) { agregar(caja, enlace(t(e.texto), t(e.url), "enlace-flecha")); });
          cuerpo.appendChild(caja);
        }
        art.appendChild(cuerpo);
        grid.appendChild(art);
      });
      return grid;
    },

    habilidades: function (s) {
      var caja = el("div", "habilidades");
      lista(s.grupos).forEach(function (g) {
        var grupo = el("div", "habilidades__grupo");
        if (t(g.nombre)) grupo.appendChild(el("h3", "habilidades__nombre", escapar(t(g.nombre))));
        var ul = el("ul", "chips");
        lista(g.items).forEach(function (i) { if (t(i)) ul.appendChild(el("li", "chip", formato(t(i)))); });
        grupo.appendChild(ul);
        caja.appendChild(grupo);
      });
      return caja;
    },

    contacto: function (s) {
      var perfil = datos.perfil || {};
      var caja = el("div", "contacto");
      lista(s.parrafos).forEach(function (p) {
        if (t(p)) caja.appendChild(el("p", "", formato(t(p))));
      });
      var acciones = el("div", "hero__acciones");
      if (perfil.correo) agregar(acciones, enlace(perfil.correo, "mailto:" + perfil.correo, "boton boton--principal"));
      lista(perfil.enlaces).forEach(function (e) {
        agregar(acciones, enlace(t(e.texto), t(e.url), "boton boton--suave"));
      });
      agregar(acciones, enlace(UI[idioma].cv, t(perfil.cv), "boton boton--suave"));
      caja.appendChild(acciones);
      return caja;
    }
  };

  function pie(perfil) {
    var footer = el("footer", "pie");
    var int = el("div", "contenedor pie__int");
    var anio = new Date().getFullYear();
    var texto = "© " + anio + " " + escapar(t(perfil.nombre));
    if (t(datos.actualizado)) texto += " · " + UI[idioma].actualizado + ": " + escapar(t(datos.actualizado));
    int.appendChild(el("p", "", texto));
    // Nota opcional al pie: solo si contenido.js trae  pie: "..." .
    if (t(datos.pie)) int.appendChild(el("p", "pie__nota", formato(t(datos.pie))));
    footer.appendChild(int);
    return footer;
  }

  /* ---------- idioma ---------- */

  function idiomas() {
    var l = lista(datos.idiomas).filter(function (i) { return UI[i]; });
    return l.length ? l : ["es"];
  }

  function idiomaInicial() {
    var disponibles = idiomas();
    var pedido = (location.search.match(/[?&]lang=(es|en)/) || [])[1];
    if (pedido && disponibles.indexOf(pedido) >= 0) return pedido;
    try {
      var guardado = localStorage.getItem("portafolio-idioma");
      if (guardado && disponibles.indexOf(guardado) >= 0) return guardado;
    } catch (e) {}
    if (datos.idiomaInicial && disponibles.indexOf(datos.idiomaInicial) >= 0) return datos.idiomaInicial;
    return disponibles[0];
  }

  function cambiarIdioma(nuevo) {
    idioma = nuevo;
    try { localStorage.setItem("portafolio-idioma", nuevo); } catch (e) {}
    var y = window.scrollY;
    dibujar();
    window.scrollTo(0, y);
    vida(false);
    var boton = document.querySelector(".barra__idioma");
    if (boton) boton.focus();
  }

  /* ---------- vida: animaciones y menú activo ----------
     Todo es mejora progresiva: si el navegador es antiguo, la persona pidió
     "reducir movimiento" o contenido.js dice  animaciones: false,
     el contenido se ve completo y quieto. */

  var estadoVida = { observadores: [], alLimpiar: [] };
  var cada = function (lista, fn) { Array.prototype.forEach.call(lista, fn); };

  function quiereMovimiento() {
    if (datos.animaciones === false) return false;
    try { return !window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return true; }
  }

  function observar(callback, opciones) {
    var io = new IntersectionObserver(callback, opciones);
    estadoVida.observadores.push(io);
    return io;
  }

  function vida(primeraVez) {
    estadoVida.observadores.forEach(function (io) { io.disconnect(); });
    estadoVida.alLimpiar.forEach(function (fn) { fn(); });
    estadoVida = { observadores: [], alLimpiar: [] };

    var raiz = document.documentElement;
    raiz.classList.remove("animar", "entrada");
    if (!("IntersectionObserver" in window)) return;
    var movimiento = quiereMovimiento();
    try {
      barraFlotante();
      menuActivo(movimiento);
      if (!movimiento) return;
      raiz.classList.add("animar");
      if (primeraVez) entradaInicial();
      revelarAlBajar(primeraVez);
      frases();
      if (primeraVez) contarCifras();
    } catch (e) {
      raiz.classList.remove("animar", "entrada"); // ante cualquier fallo, todo visible
    }
  }

  // Sombra en la barra cuando ya no estás arriba del todo.
  function barraFlotante() {
    var barra = document.querySelector(".barra");
    if (!barra) return;
    var centinela = el("div", "centinela");
    centinela.setAttribute("aria-hidden", "true");
    barra.parentNode.insertBefore(centinela, barra);
    observar(function (e) {
      barra.classList.toggle("barra--flotante", !e[0].isIntersecting);
    }).observe(centinela);
  }

  // Marca en el menú la sección que estás leyendo, con una píldora que se desliza.
  function menuActivo(movimiento) {
    var nav = document.querySelector(".barra__nav");
    if (!nav) return;
    var enlaces = {}, ids = [];
    cada(nav.querySelectorAll('a[href^="#"]'), function (a) {
      var id = a.getAttribute("href").slice(1);
      if (id && document.getElementById(id)) { enlaces[id] = a; ids.push(id); }
    });
    if (!ids.length) return;

    var pildora = el("span", "barra__indicador");
    pildora.setAttribute("aria-hidden", "true");
    nav.insertBefore(pildora, nav.firstChild);
    var activo = null;

    function colocar() {
      var a = activo && enlaces[activo];
      if (!a) { pildora.style.opacity = "0"; return; }
      var aparece = pildora.style.opacity !== "1";
      if (aparece) pildora.style.transition = "none"; // la primera vez aparece en su sitio, sin deslizarse desde el borde
      pildora.style.width = a.offsetWidth + "px";
      pildora.style.height = a.offsetHeight + "px";
      pildora.style.transform = "translate(" + a.offsetLeft + "px, " + a.offsetTop + "px)";
      if (aparece) { void pildora.offsetWidth; pildora.style.transition = ""; }
      pildora.style.opacity = "1";
    }

    function activar(id) {
      if (id === activo) return;
      if (activo) { enlaces[activo].classList.remove("activo"); enlaces[activo].removeAttribute("aria-current"); }
      activo = id;
      if (id) {
        var a = enlaces[id];
        a.classList.add("activo");
        a.setAttribute("aria-current", "true");
        if (nav.scrollWidth > nav.clientWidth) {
          nav.scrollTo({ left: a.offsetLeft - (nav.clientWidth - a.offsetWidth) / 2, behavior: movimiento ? "smooth" : "auto" });
        }
      }
      colocar();
    }

    // Activa la última sección cuyo inicio ya pasó el 42 % de la pantalla (o la última si llegaste al final).
    function recalcular() {
      var elegido = null, linea = window.innerHeight * 0.42;
      var pie = document.querySelector(".pie");
      var alFinal = window.scrollY > 0 && pie && pie.getBoundingClientRect().bottom <= window.innerHeight + 2;
      if (alFinal) elegido = ids[ids.length - 1];
      else ids.forEach(function (id) {
        if (document.getElementById(id).getBoundingClientRect().top <= linea) elegido = id;
      });
      activar(elegido);
    }

    var io = observar(recalcular, { rootMargin: "-42% 0px -57% 0px" });
    ids.forEach(function (id) { io.observe(document.getElementById(id)); });
    var pie = document.querySelector(".pie");
    if (pie) observar(recalcular, { threshold: [0, 1] }).observe(pie);

    var pendiente = false;
    function alRedimensionar() {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(function () { pendiente = false; colocar(); recalcular(); });
    }
    window.addEventListener("resize", alRedimensionar);
    estadoVida.alLimpiar.push(function () { window.removeEventListener("resize", alRedimensionar); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(colocar);
    recalcular();
  }

  // Al cargar, la portada entra por partes: foto, nombre, titular...
  function entradaInicial() {
    var hero = document.querySelector(".hero");
    if (!hero) return;
    var piezas = [hero.querySelector(".hero__foto")].concat(Array.prototype.slice.call(hero.querySelectorAll(".hero__texto > *")));
    piezas.forEach(function (p, i) { if (p) p.style.setProperty("--i", i); });
    document.documentElement.classList.add("entrada");
    setTimeout(function () { document.documentElement.classList.remove("entrada"); }, 2600);
  }

  var REVELAR = [
    ".seccion__titulo", ".seccion__intro", ".texto > p", ".lista > .item", ".pubs > .pub",
    ".tarjetas > .tarjeta", ".habilidades__grupo", ".contacto > *"
  ].join(", ");

  // Cada bloque sube y se enfoca al entrar en pantalla. Los que entran juntos lo hacen en cascada.
  function revelarAlBajar(primeraVez) {
    var alto = window.innerHeight;
    var io = observar(function (entradas) {
      var orden = 0;
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var nodo = e.target;
        io.unobserve(nodo);
        var retraso = Math.min(orden++, 6) * 90;
        nodo.style.setProperty("--retraso", retraso + "ms");
        nodo.classList.add("visible");
        // Al terminar se quitan las clases para que el hover y la impresión vuelvan a lo normal.
        setTimeout(function () {
          nodo.classList.remove("revelar", "visible");
          nodo.style.removeProperty("--retraso");
        }, retraso + 2200);
      });
    }, { rootMargin: "0px 0px -8% 0px" });

    cada(document.querySelectorAll(REVELAR), function (nodo) {
      // Al cambiar de idioma solo se anima lo que aún no has visto.
      if (!primeraVez && nodo.getBoundingClientRect().top < alto) return;
      cada(nodo.querySelectorAll(".chip"), function (chip, j) { chip.style.setProperty("--j", Math.min(j, 14)); });
      nodo.classList.add("revelar");
      io.observe(nodo);
    });
  }

  // Frases grandes: cada palabra se enciende según avanzas.
  function frases() {
    cada(document.querySelectorAll(".frase"), function (frase) {
      var palabras = frase.querySelectorAll(".frase__palabra");
      var pendiente = false, escuchando = false;

      function pintar() {
        pendiente = false;
        var r = frase.getBoundingClientRect(), alto = window.innerHeight;
        var inicio = alto * 0.85, fin = alto * 0.45; // empieza al asomar abajo; termina cuando su final llega al 45 %
        var avance = Math.max(0, Math.min(1, (inicio - r.top) / (inicio - fin + r.height)));
        var n = Math.round(avance * palabras.length);
        for (var i = 0; i < palabras.length; i++) palabras[i].classList.toggle("encendida", i < n);
      }
      function alMover() {
        if (!pendiente) { pendiente = true; requestAnimationFrame(pintar); }
      }

      // Solo escucha el scroll mientras la frase está en pantalla.
      observar(function (e) {
        if (e[0].isIntersecting && !escuchando) window.addEventListener("scroll", alMover, { passive: true });
        if (!e[0].isIntersecting && escuchando) window.removeEventListener("scroll", alMover);
        escuchando = e[0].isIntersecting;
        pintar();
      }).observe(frase);
      estadoVida.alLimpiar.push(function () { window.removeEventListener("scroll", alMover); });
      pintar();
    });
  }

  // Las cifras de la portada cuentan desde cero. Solo números simples: "4", "15k", "94 %", "3,5".
  function contarCifras() {
    var cargada = Date.now();
    var io = observar(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        contar(e.target, Date.now() - cargada < 1500 ? 600 : 0);
      });
    }, { threshold: 0.6 });
    cada(document.querySelectorAll(".cifra__numero"), function (n) {
      if (/^\D*\d+([.,]\d+)?\D*$/.test(n.textContent.trim())) io.observe(n);
    });
    // Si imprimen a mitad de la cuenta, cada cifra salta a su valor real.
    function terminar() {
      cada(document.querySelectorAll(".cifra__numero[data-final]"), function (n) {
        n.textContent = n.getAttribute("data-final");
        n.removeAttribute("data-final");
      });
    }
    window.addEventListener("beforeprint", terminar);
    estadoVida.alLimpiar.push(function () { window.removeEventListener("beforeprint", terminar); });
  }

  function contar(nodo, espera) {
    var final = nodo.textContent;
    var m = final.trim().match(/^(\D*)(\d+)(?:([.,])(\d+))?(\D*)$/);
    if (!m) return;
    var objetivo = parseFloat(m[2] + (m[4] ? "." + m[4] : ""));
    var decimales = m[4] ? m[4].length : 0;
    var duracion = 1400, inicio = null;
    nodo.setAttribute("data-final", final);
    function escribir(valor) {
      var texto = valor.toFixed(decimales);
      nodo.textContent = m[1] + (m[3] ? texto.replace(".", m[3]) : texto) + m[5];
    }
    function paso(ahora) {
      if (!nodo.hasAttribute("data-final")) return; // ya terminada (por ejemplo, al imprimir)
      if (inicio === null) inicio = ahora + espera;
      var x = Math.max(0, Math.min(1, (ahora - inicio) / duracion));
      if (x >= 1) { nodo.textContent = final; nodo.removeAttribute("data-final"); return; }
      escribir(objetivo * (1 - Math.pow(1 - x, 4))); // arranca rápido y frena al llegar
      requestAnimationFrame(paso);
    }
    escribir(0);
    requestAnimationFrame(paso);
  }

  /* ---------- fuentes ----------
     Opcional en contenido.js:  fuentes: { titulos: "Fraunces", texto: "Manrope" }
     Nombres exactos de Google Fonts (fonts.google.com). Sin este campo se usan las de la plantilla. */

  function aplicarFuentes(f) {
    if (!f || typeof f !== "object") return;
    var limpia = function (n) { return typeof n === "string" ? n.replace(/["';{}<>]/g, "").trim() : ""; };
    var titulos = limpia(f.titulos), texto = limpia(f.texto);
    var familias = [titulos, texto].filter(function (n, i, a) { return n && a.indexOf(n) === i; });
    if (!familias.length) return;
    var link = document.getElementById("fuentes-propias");
    if (!link) {
      link = document.createElement("link");
      link.id = "fuentes-propias";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = "https://fonts.googleapis.com/css2?" + familias.map(function (n) {
      return "family=" + encodeURIComponent(n).replace(/%20/g, "+") + ":wght@400;700";
    }).join("&") + "&display=swap";
    var raiz = document.documentElement.style;
    if (titulos) raiz.setProperty("--letra-titulos", '"' + titulos + '", system-ui, sans-serif');
    if (texto) raiz.setProperty("--letra-texto", '"' + texto + '", system-ui, sans-serif');
  }

  /* ---------- dibujar ---------- */

  function dibujar() {
    var perfil = datos.perfil || {};
    var secciones = lista(datos.secciones).filter(function (s) { return s && s.mostrar !== false; });
    secciones.forEach(function (s, i) { if (!s.id) s.id = "seccion-" + (i + 1); });

    document.documentElement.lang = idioma;
    document.title = t(datos.tituloPestana) || [t(perfil.nombre), t(perfil.titular)].filter(Boolean).join(" · ");
    if (datos.colorPrincipal) document.documentElement.style.setProperty("--acento", datos.colorPrincipal);
    aplicarFuentes(datos.fuentes);

    var app = document.getElementById("app");
    app.innerHTML = "";

    var saltar = enlace(UI[idioma].saltar, "#contenido", "saltar");
    app.appendChild(saltar);
    app.appendChild(barra(perfil, secciones));
    var main = el("main");
    main.id = "contenido";
    main.appendChild(hero(perfil));
    secciones.forEach(function (s) { main.appendChild(seccion(s)); });
    app.appendChild(main);
    app.appendChild(pie(perfil));
  }

  function mostrarError() {
    var ui = UI.es;
    var app = document.getElementById("app");
    var errores = (window.__erroresPortafolio || []).join("\n");
    app.innerHTML =
      '<div class="error-carga"><h1>' + ui.errorTitulo + "</h1><p>" + escapar(ui.errorTexto) + "</p><p>" +
      escapar(UI.en.errorTexto) + "</p>" +
      (errores ? "<details open><summary>" + ui.errorDetalle + "</summary><pre>" + escapar(errores) + "</pre></details>" : "") +
      "</div>";
  }

  if (!datos || typeof datos !== "object") {
    mostrarError();
    return;
  }
  try {
    idioma = idiomaInicial();
    dibujar();
    vida(true);
  } catch (e) {
    window.__erroresPortafolio = (window.__erroresPortafolio || []).concat(String(e && e.message ? e.message : e));
    mostrarError();
  }
})();
