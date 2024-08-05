// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "BLBHTML/Welcome.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("BLBHTML/Welcome.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'f5760a8c-0c61-48c6-b96c-08c1cb1a2be0' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "es");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"SyncToc":"Sincronizar TOC","Show":"Mostrar","Next":"Siguiente","Hide":"Ocultar","Search":"-Búsqueda-","Contents":"Contenido","Logo/Author":"Con tecnología de","Disabled Next":">>","Seperate":"|","Index":"Índice","Glossary":"Glosario","Disabled Prev":"<<","OpenLinkInNewTab":"Abrir en una pestaña nueva","Prev":"Anterior","Separator":"|","SearchOptions":"Opciones de búsqueda","Loading":"Cargando...","UnknownError":"Error desconocido","Logo":"Logotipo","HomeButton":"Inicio","SearchPageTitle":"Resultados de búsqueda","PreviousLabel":"Anterior","NextLabel":"Siguiente","TopicsNotFound":"No se encontraron resultados","JS_alert_LoadXmlFailed":"No se pudo cargar el archivo XML","JS_alert_InitDatabaseFailed":"No se pudo inicializar la base de datos","JS_alert_InvalidExpression_1":"La cadena de búsqueda que ha escrito no es válida","Searching":"Buscando...","Cancel":"Cancelar","Canceled":"Cancelado","ResultsFoundText":"%1 resultado(s) encontrado(s) para %2","SearchResultsPerScreen":"Resultados de búsqueda por página","Back":"Atrás","TableOfContents":"Tabla de contenido","IndexFilterKewords":"Encontrar palabra clave","GlossaryFilterTerms":"Encontrar término","ShowAll":"Mostrar todo","HideAll":"Ocultar todo","ShowHide":"Mostrar/Ocultar","IeCompatibilityErrorMsg":"Esta página no se puede ver en Internet Explorer 8 o versiones anteriores.","NoScriptErrorMsg":"Active la compatibilidad con JavaScript en el explorador para ver esta página.","EnableAndSearch":"Mostrar resultados que incluyan todas las palabras de búsqueda","HighlightSearchResults":"Resaltar resultados de búsqueda","Expand/Collapse All":"Expandir/colapsar todo","Remove Highlight":"Quitar resaltado","Print":"Imprimir","Filter":"Filtrar","SearchTitle":"Buscar","ContentFilterChanged":"Se ha cambiado el filtro de contenido, vuelva a buscar","EndOfResults":"Fin de resultados de búsqueda.","Reset":"Restablecer","NavTip":"Menú","ToTopTip":"Ir al principio","ApplyTip":"Aplicar","SidebarToggleTip":"Expandir/colapsar","Copyright":"© Copyright 2017. Todos los derechos reservados.","FavoriteBoxTitle":"Favoritos","setAsFavorites":"Añadir a favoritos","unsetAsFavorite":"Quitar de favoritos","favoritesNameLabel":"Nombre","favoritesLabel":"Favoritos","setAsFavorite":"Establecer como favorito","nofavoritesFound":"No ha marcado ninguna página como favorita.","Welcome_header":"Bienvenido a nuestro Centro de ayuda","Welcome_text":"¿En qué le podemos ayudar hoy?","SearchButtonTitle":"Buscar","ShowTopicInContext":"Haga clic aquí para ver esta página en contexto","TopicHiddenText":"Este tema ha quedado fuera del filtro por los filtros seleccionados.","NoTermsFound":"No se ha encontrado ningún término.","NoKeywordFound":"No se ha encontrado ninguna palabra clave.","SkipToMainContent":"Saltar al contenido principal","SearchPaginationLabel":"De %1 a %2 de %3 resultados","NextSearchResults":"Página de búsqueda siguiente","PrevSearchResults":"Página de búsqueda anterior","FilterIntro":"Seleccione filtro(s):"});

model.publish(rh.consts('KEY_HEADER_TITLE'), "BAS LABORO");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "20");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey");
model.publish(rh.consts('CHAT_API_SESSION_TOKEN'), "");
model.publish(rh.consts('CHAT_API_PROJ_ID'), "");

model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
model.publish(rh.consts('KEY_LOGO_URL'), "");
model.publish(rh.consts('KEY_SPECIAL_CHARS'), "0;1;2;3;4;5;6;7;8;9");
model.publish(rh.consts('SEARCH_PAGE'), "search.htm");
})();
