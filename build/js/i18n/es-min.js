/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-a1
 */
(function(b){var a=window.pe||{fn:{}};a.dic={get:function(d,e,c){var f=(typeof d==="string"&&d!=="")|(typeof e==="string"&&e!=="")<<1|(typeof c==="string"&&c!=="")<<2;switch(f){case 1:return this.ind[d];case 3:return this.ind[d][e];case 7:return this.ind[d][e].replace("[MIXIN]",c);default:return""}},ago:function(d){var g,c,f,e;c=pe.date.convert(d);e=(arguments.length>1?arguments[1]:new Date());g=parseInt((e.getTime()-c)/1000,10);g=g+(e.getTimezoneOffset()*60);f="";if(g<60){f=this.get("%minute-ago")}else{if(g<120){f=this.get("%couple-of-minutes")}else{if(g<(45*60)){f=this.get("%minutes-ago","mixin",(parseInt(g/60,10)).toString())}else{if(g<(90*60)){f=this.get("%hour-ago")}else{if(g<(24*60*60)){f=this.get("%hours-ago","mixin",(parseInt(g/3600,10)).toString())}else{if(g<(48*60*60)){f=this.get("%yesterday")}else{f=this.get("%days-ago","mixin",(parseInt(g/86400,10)).toString())}}}}}}return f},ind:{"%all":"Todo","%home":"Página de Inicio","%main-page":"Página Principal","%top-of-page":"Arriba","%you-are-in":"Usted está en: ","%welcome-to":"Bienvenido/a  a: "+b("#gcwu-title").text(),"%loading":"cargando...","%search":"Búsqueda","%search-for-terms":"Buscar por palabra(s):","%no-match-found":"0 resultados encontrados","%matches-found":{mixin:"[MIXIN] resultado(s) encontrados"},"%menu":"Menú","%hide":"Ocultar","%error":"Error","%colon":":","%start":"Iniciar","%stop":"Detener","%back":"Volver","%new-window":" (Abrir nueva ventana)","%minute-ago":"hace un minuto","%couple-of-minutes":"hace algunos minutos","%minutes-ago":{mixin:"hace [MIXIN] minutos"},"%hour-ago":"hace una hora","%hours-ago":{mixin:"hace [MIXIN] horas"},"%days-ago":{mixin:"hace [MIXIN] d�as"},"%yesterday":"ayer","%archived-page":"Esta página Web ha estado archivada en la red.","%sub-menu-help":'(Aprete "enter" para abrir el sub-menú y ciérrelo con la tecla "esc")',"%tab-rotation":{disable:"Detener rotación de tabs",enable:"Comenzar rotación de tabs"},"%play":"Reproducir","%pause":"Pausa","%close":"Cerrar","%rewind":"Retroceder","%next":"Siguiente","%previous":"Previo","%fast-forward":"Avance rápido ","%mute":{enable:"Silenciar",disable:"Habilitar Sonido"},"%closed-caption":{disable:"Ocultar subt�tulos",enable:"Mostrar subt�tulos"},"%captionserror":"Error al cargar subt�tulos","%audio-description":{enable:"Habilitar Audio Descripción",disable:"Deshabilitar Audio Descripción"},"%progress-bar":"Usar las teclas de flechas IZQUIERDA y DERECHA para avanzar o retroceder la presentación multimedia","%no-video":"Su browser no es compatible con este video, por favor descargue el video que aparece abajo","%position":"Posición actual: ","%percentage":"Porcentaje de Playback: ","%duration":"Tiempo Total: ","%buffered":"Buffered: ","%favourite":"Favorito","%email":"Email","%share-text":"Compartir esta página","%share-hint":" con {s}","%share-email-subject":"Página de interés","%share-email-body":"Pienso que encontrarás interesante esta página:\n{t} ({u})","%share-fav-title":" (colocar esta página como bookmark)","%share-manual":"Por favor cierre este diálogo y  pulse Ctrl-D para colocar esta página como bookmark.","%share-showall":"Mostrar todo ({n})","%share-showall-title":"Todos los sitios marcados como bookmark","%share-disclaimer":"No implica la promoción ni recomendación de ningún producto o servicio.","%form-not-submitted":"El formulario no pudo ser enviado debido a ","%errors-found":" se hallaron errores.","%error-found":" se hallo un error.","%datepicker-hide":"Ocultar Calendario","%datepicker-show":"Seleccionar una fecha del calendario por tema: ","%datepicker-selected":"Seleccionado","%calendar-weekDayNames":["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],"%calendar-monthNames":["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],"%calendar-currentDay":" (Hoy)","%calendar-goToLink":'Ir a<span class="wb-invisible"> Mes del Año</span>',"%calendar-goToTitle":"Ir al Mes del Año","%calendar-goToMonth":"Mes:","%calendar-goToYear":"Año:","%calendar-goToButton":"Ir","%calendar-cancelButton":"Cancelar","%calendar-previousMonth":"Mes Anterior: ","%calendar-nextMonth":"Mes Siguiente: ","%show-toc":"Mostrar","%show-image":"mostrar.png","%hide-image":"ocultar.png","%table-contents":" �ndice","%lb-current":"�?tem {current} de {total}","%lb-next":"�?tem siguiente","%lb-prev":"�?tem previo","%lb-xhr-error":"Este contenido no pudo ser cargado.","%lb-img-error":"Esta imagen no pudo ser cargada.","%lb-slideshow":"slideshow","%jqm-expand":" click para expandir contenidos","%jqm-collapse":" click para achicar contenidos","%jqm-clear-search":"nueva búsqueda","%jqm-filter":"Filtrar �tems","%table-mention":"Tabla","%table-following":"Gráfico. Detalles en la siguiente tabla.","%st-timeout-msg":'Su sesión está próxima a expirar, tiene hasta #expireTime# para activar el botón "OK" y as� extender su sesión.',"%st-msgbox-title":"Aviso de finalización de sesión","%st-already-timeout-msg":"Lamentablemente su sesión ha expirado. Por favor ingrese nuevamente.","%toggle-open":"Toggle open","%toggle-close":"Toggle close","%pe-disable":"Versión básica HTML","%pe-enable":"Versión standard"}};b(document).trigger("languageloaded");window.pe=a;return a}(jQuery));