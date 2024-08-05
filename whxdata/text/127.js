rh._.exports({"0":[[" ","Clases de Sucesos"]],"1":[["Clases de Sucesos"]],"2":[[" ","Clases de Sucesos"]],"3":[[" ","Las ","Clases de sucesos"," tienen por objeto ser asociadas a los ","Sucesos"," de modo de determinar las características principales de éstos últimos."," ","Cuando se informa una novedad en el sistema, tanto si se trata de una novedad de liquidación como si se trata de novedades de administración de personal, lo primero que debe indicarse es el Suceso que la motiva."," ","Según cual sea la Clase de sucesos que se ha asociado al Suceso, al momento de definirlo, será la información que se solicite y, eventualmente, se controle, al registrar una novedad asociada al mismo."," "," Código"," ","Identifica a la clase de suceso."," ","Alfanumérico de hasta 8 caracteres."," "," Descripción"," ","Texto que se exhibe, cada vez que se invoca a la Clase de sucesos, conjuntamente al código de la misma."," "," Tratamiento"," ","Se debe seleccionar el ","Tratamiento"," a asociar a la \"Clase de Sucesos\"."," ","Según cual sea el Tratamiento que se asocie a la Clase de sucesos, los sucesos que las utilicen estarán destinados a informar novedades de distinto tipo tales como licencias por examen, ingresos, egresos, resultado de evaluaciones, sanciones, etc."," ","Los posibles tratamientos son:"," ","Adelanto de haberes"," ","Las Clases de sucesos que poseen este tratamiento están destinadas a sucesos que al asociarse a una novedad solicitan como dato un importe. Este será tomado como un adelanto de haberes que no se descuenta por recibo."," ","Es decir que el importe que se ingrese no figurará en el recibo de sueldos sino que se descontará del importe neto a cobrar en el informe llamado Planilla de Pago, en una columna dispuesta a tal fin."," ","Contrato de trabajo"," ","Los sucesos cuyas \"Clases de sucesos\" utilizan este tratamiento, al ser invocados en una novedad, solicitan que se informe la fecha de vencimiento del contrato de trabajo."," ","Evaluación"," ","Los sucesos cuyas Clases de sucesos utilizan este tratamiento permiten registrar el resultado de evaluaciones tomadas al personal."," ","Licencia sin goce de haberes - Licencia con goce de haberes"," ","Los sucesos que corresponden a ambos tipos de tratamiento están destinados exclusivamente a ingresar novedades correspondientes a licencias y vacaciones, cualquiera sea su tipo. La única diferencia radica que en un caso se liquidan haberes y en el otro no."," ","Los sucesos que tienen asociadas Clases de sucesos con este tratamiento están destinados a informar suspensiones de días de trabajo originadas en sanciones disciplinarias."," ","Modificación de Fechas"," ","Los sucesos que corresponden a la clase Modificación de fechas, permiten modificar las fechas asignadas en dos grandes grupos:"," ","De ingreso",": en el cual se encuentran incluidas la fecha de ingreso, la fecha base antigüedad y la ","fecha base indemnización."," ","De egreso",": en el cual solo se encuentra la fecha de egreso."," ","En caso de requerir modificar fechas de ingreso y egreso simultáneamente, la modificación se debe realizar a través de dos clases de suceso distintas."," ","Egreso"," ","Al registrar novedades con sucesos que tienen asociadas Clases de sucesos con este tratamiento, se solicita la fecha correspondiente a la desvinculación del empleado de la empresa."," ","Los sucesos con tratamiento asociado Egreso se pueden informar como novedad para legajos que pertenecen a la empresa, es decir, que tienen informada una Fecha de ingreso en el legajo y que no han egresado, es decir, que tienen el dato Fecha de egreso en blanco."," ","Al registrar la novedad, la fecha ingresada completa automáticamente la información del campo Fecha de egreso."," ","Ingreso - Reingreso"," ","En los casos de novedades cuyos sucesos corresponden a este tipo de tratamiento, se solicita la fecha de ingreso, la fecha a tener en cuenta para el cálculo de la antigüedad y la fecha base indemnización."," ","Al informar la novedad, las fechas ingresadas actualizan automáticamente los campos Fecha de ingreso, Base de antigüedad y Base indemnización correspondientes a la tabla de legajos."," ","Los sucesos con tratamiento asociado Ingreso sólo pueden informarse como novedad a legajos no ingresados, es decir, para los cuáles el campo Fecha de ingreso del legajo no contiene ningún dato."," ","Los sucesos con tratamiento asociado Reingreso, en cambio, sólo pueden informarse como novedad para legajos que han egresado de la empresa, es decir, que poseen una fecha en el campo Fecha de egreso de la tabla Legajos."," ","La fecha informada como fecha de reingreso actualiza automáticamente la fecha que figura en el campo Fecha de ingreso del legajo."," ","Sin particularidad"," ","Este tipo de tratamiento, como su nombre lo indica, no tiene ninguna particularidad especial, no solicita ningún dato específico."," ","Es el tratamiento que se vincula a los sucesos destinados a informar las Novedades vinculadas a la liquidación."," ","Todas las novedades a informar al sistema, en relación a la liquidación de sueldos, deben utilizar sucesos que indiquen Vinculado a la liquidación y, en general la clase que se asocia tiene como tratamiento Sin particularidad."," ","Prorrateo de centros de costos"," ","Este tratamiento está destinado a las clases de sucesos que se asocian a sucesos que se han de utilizar para informar novedades de rotación de personal."," ","Las novedades de rotación de personal permiten establecer excepciones en relación a los centros de costos que se asocian a los legajos en la tabla Legajos."," ","Sanción disciplinaria"," ","Este tratamiento está destinado a informar suspensiones de días de trabajo originadas en sanciones disciplinarias."," ","La novedad correspondiente se puede informar como novedad de liquidación o como novedad de personal, según que el suceso al cual se asocie, indique que se vincula, o no, a la liquidación."," ","Cambio de Puesto"," ","Este tratamiento esta destinado a informar novedades correspondientes a cambio de puesto, estas son aquellas novedades por ingreso, egreso o reasignación de puesto."," ","Estos sucesos no están vinculados a la liqu","i","dación."," "," Afecta SAC"," ","Sólo se activa en caso que el tratamiento corresponda a Licencia sin goce de haberes o a Licencia con goce de haberes."," ","En caso que esté activado, al informar días de licencia o vacaciones en relación a sucesos con este tratamiento, no se tendrán en cuenta dichos días para el cálculo del SAC. Es decir se descontará, al momento de realizar el cálculo, el proporcional correspondiente a la cantidad de días informados."," "," Establecer topes"," ","En caso de activar este campo se habilita la posibilidad de establecer Topes. Es decir de informar valores que actuarán como valores máximos de todos los sucesos que tengan asociada esa clase de sucesos."," ","Así, al informar novedades en relación a dichos sucesos, se controlará que la suma de las cantidades o importes correspondientes a las mismas no superen los valores máximos informados para la clase de suceso correspondiente."," ","BAS Laboro controla la carga de los días de vacaciones correspondientes a los legajos, a través de la tarea Novedades de licencias y vacaciones. En el caso de ingresar una cantidad de días mayor a la informada en los datos del legajo, se advierte de la situación o directamente restringe el ingreso de la información."," ","Los topes se establecen en relación a los valores de un atributo de legajos y pueden establecerse valores máximos permitidos por cada novedad que se informe, por mes y por año."," "," Atributo"," ","Atributo en base a cuyos valores se establecerán los valores máximos a considerar como topes."," "," Advertencia"," ","Si está activado, en caso de informar una novedad de liquidación tal que se superen los valores informados, se emite un mensaje de alerta al usuario dejando en sus manos la decisión de continuar, o no, con la tarea."," "," Restrictivo"," ","Si se activa, en caso de informar una novedad de liquidación tal que se superen los valores informados, se emite un aviso de error y no se permite su registración en el sistema."," "," Topes"," ","Este cuadro está destinado a informar los valores máximos."," ","Incluirá una línea por cada valor del atributo para el cual interese informar topes."," ","Valor"," ","Valor del atributo para el cual se indican los valores a considerar como máximos."," ","Novedad"," ","Tope a considerar en el ingreso de novedades."," ","Si se ingresa una novedad asociada al suceso y la cantidad o importe de la misma supera el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," ","Mes"," ","Tope mensual a tener en cuenta en relación al ingreso de novedades."," ","Si dentro de un mismo mes se informan novedades asociadas al suceso de modo tal que la suma de las cantidades o importes involucrados supere el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," ","Año"," ","Tope anual a tener en cuenta en relación al ingreso de novedades."," ","Si dentro de un determinado año se informan novedades asociadas al suceso de modo tal que la suma de las cantidades o importes involucrados supere el valor que aquí se informe, se emitirá un mensaje de advertencia o prohibición, según corresponda."," "," Para tener en cuenta:"," ","Las novedades asociadas a sucesos correspondientes a una misma Clase de sucesos tienen como única restricción, al momento de su ingreso, en relación a los topes, que la suma de todos los valores no supere el tope establecido por la correspondiente clase de sucesos."," ","Pero, independientemente de ello, también es posible establecer topes al definir un Suceso."," ","Si para un suceso se establecen topes, las novedades que lo utilicen tienen en cuenta también esos valores para efectuar el control. Por lo cual, dicho control tendrá en cuenta ambos topes, el del suceso y el de la correspondiente Clase de sucesos. El valor que se ingrese como novedad quedará limitado por el tope que se alcance primero. Por lo cual, en la práctica, los topes de los sucesos sólo tienen aplicación si son menores a los topes establecidos en la clase de sucesos que tienen asociada."]],"id":"127"})