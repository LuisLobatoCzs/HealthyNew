var app = angular.module("home", [])
.controller('homeController', function($scope,$http){   

    $scope.pu1 = false;
    $scope.pu2 = false;
    $scope.pu3 = false;
    $scope.pu4 = false;
    $scope.pu5 = false;
    $scope.pu6 = false;
    $scope.pu7 = false;
    $scope.pu8 = false;
    $scope.pu9 = false;
    $scope.pu10 = false;
    $scope.pu11 = false;
    $scope.pu12 = false;
    $scope.pu13 = false;
    $scope.pu14 = false;

    $scope.selectorPUR = function(){
        $scope.pu1 = false;
        $scope.pu2 = false;
        $scope.pu3 = false;
        $scope.pu4 = false;
        $scope.pu5 = false;
        $scope.pu6 = false;
        $scope.pu7 = false;
        $scope.pu8 = false;
        $scope.pu9 = false;
        $scope.pu10 = false;
        $scope.pu11 = false;
        $scope.pu12 = false;
        $scope.pu13 = false;
        $scope.pu14 = false;
    }

    $scope.selectorPU = function(p){
        switch (p){
            case 1:
                $scope.selectorPUR();
                $scope.pu1 = true;
                break;
            case 2:
                $scope.selectorPUR();
                $scope.pu2 = true;
                break;
            case 3:
                $scope.selectorPUR();
                $scope.pu3 = true;
                break;
            case 4:
                $scope.selectorPUR();
                $scope.pu4 = true;
                break;
            case 5:
                $scope.selectorPUR();
                $scope.pu5 = true;
                break;
            case 6:
                $scope.selectorPUR();
                $scope.pu6 = true;
                break;
            case 7:
                $scope.selectorPUR();
                $scope.pu7 = true;
                break;
            case 8:
                $scope.selectorPUR();
                $scope.pu8 = true;
                break;
            case 9:
                $scope.selectorPUR();
                $scope.pu9 = true;
                break;
            case 10:
                $scope.selectorPUR();
                $scope.pu10 = true;
                break;
            case 11:
                $scope.selectorPUR();
                $scope.pu11 = true;
                break;
            case 12:
                $scope.selectorPUR();
                $scope.pu12 = true;
                break;
            case 13:
                $scope.selectorPUR();
                $scope.pu13 = true;
                break;
            case 14:
                $scope.selectorPUR();
                $scope.pu14 = true;
                break;
            case 15:
                Swal.fire(
                    '¿Cómo me registro para ser nuevo usuario?',
                    'Registrarte como usuario en Health& es muy sencillo Primero, agrega la forma de registro por la que te quieras dar de alta en la app y acepta los términos y condiciones (no olvides leerlos bien antes de aceptarlos). Una vez finalizado este paso llenarás un formulario con algunos datos importantes como contraseña y aspectos básicos de tu perfil. Finalmente te pediremos que nos compartas tus datos e información de pago y ¡Ya estás listo para recibir consultas Health&!',
                );
                break;
            case 16:
                Swal.fire(
                    '¿Cómo puedo cambiar la información en mi perfil?',
                    'Puedes cambia la información de tu perfil haciendo clic en el botón “mi perfil“ y luego en “cuenta”, aquí podrás editar: Foto de perfil, Nombre Completo, Número de Teléfono asociado a tu cuenta, Correo Electrónico y Contraseña.',
                );
                break;
            case 17:
                Swal.fire(
                    '¿Cómo agrego un contacto de emergencia?',
                    'Para ingresar a tus contactos de emergencia da clic en el botón “mi perfil” después, selecciona “contactos de emergencia”, posteriormente clic en “añadir contacto de emergencia” y regístralos. En caso de querer actualizar los contactos establecidos, puedes borrar el contacto previo y dar de alta el nuevo.',
                );
                break;
            case 18:
                Swal.fire(
                    '¿Se realiza algún cargo de Pre-autorización?',
                    '  Por seguridad de las cuentas la plataforma realiza un cargo previo de autorización. Este cargo no es válido y será re integrado a tu cuenta de manera inmediata, sin embargo, puede que este reembolso tarde de 7 a 10 días en verse reflejado en tu cuenta, en caso de que no sea así, te recomendamos que contactes a tu banco para que puedas recibir asesoría.',
                );
                break;
            case 19:
                Swal.fire(
                    '¿Qué métodos de pago son aceptados en Healthy?',
                    'Por el momento aceptamos todas las tarjetas de crédito y débito Visa y MasterCard. ',
                );
                break;
            case 20:
                Swal.fire(
                    '¿Cómo se realiza el cobro del servicio?',
                    'Antes de poder realizar alguna cita con nuestros especialistas, primero debes dar de alta una tarjeta de crédito en la aplicación, una vez que se da por finalizada la consulta se realiza el cobro. En Healthy es primordial que puedas tener una consulta tranquila y segura. ',
                );
                break;
            case 21:
                Swal.fire(
                    '¿Puedo programar una cita con algún especialista?',
                    'Por el momento Healthy no cuenta con esta función, ya que buscamos que nuestros especialistas tengan la libertar de poder elegir cuándo y cómo trabajar en la aplicación, sin embargo, puedes pedir una consulta en el momento que desees y con el especialista que desees. ',
                );
                break;
            case 22:
                Swal.fire(
                    '¿Puedo dar propinas?',
                    ' ¡Por supuesto! Si deseas darle una propina al especialista puedes hacerlo por medio de la app al terminar tu consulta califica a tu especialista y posterior selecciona la cantidad de propina que deseas añadir. Recuerda que NO ES OBLIGATORIO y no pueden cobrar más que el monto por el que solicitaste el servicio, si tu especialista te solicitó propina o dinero en efectivo, por favor repórtalo inmediatamente a Soporte Healthy',
                );
                break;
            case 23:
                Swal.fire(
                    '¿Cómo solicito un servicio de algún especialista?',
                    'Al momento de ingresar a la app veras en la parte superior tres esferas (médico general, fisioterapeuta y enfermera) da clic en alguna de ella acorde con tus necesidades, si no te encuentras seguro de que especialista es el adecuado para tu necesidad, puedes escribir el motivo de consulta y la app te direccionará al especialista que necesites. Posteriormente, en la parte inferior aparecerá el monto aproximado del cobro y los especialistas que se encuentran disponibles, podrás elegir la ubicación en donde necesites el servicio. Si el servicio es requerido para otra persona tendrás que especificarlo. Por último, confirma tu consulta y listo, el especialista llegará hasta la ubicación brindada.',
                );
                break;
            case 24:
                Swal.fire(
                    '¿Cómo puedo identificar a mi especialista?',
                    'Al pedir tu consulta, te aparecerá un recuadro con los datos delespecialista y ubicación que te ayudaran a identificarlo con facilidad: 1. Nombre. 2. Foto. 3. Cedula profesional. Antes de iniciar la consulta el especialista se presentará contigo, asegúrate que los datos proporcionados coincidan con los que se indican en la app. Si ves que alguno de los datos no concuerda, cancela la consulta, eligiendo opción asociada y contacta a Soporte Healthy.',
                );
                break;
            case 25:
                Swal.fire(
                    '¿Qué debo hacer si se realizó un cobro sin recibir el servicio?',
                    'De parte del equipo Healthy te ofrecemos una disculpa por esto. Entra a tu app y en el menú da clic en el botón “Mi perfil”, selecciona Registro de Consultas y da clic en la consulta donde sucedió el percance, por último, elige “Soporte Técnico” y el equipo de Healthy te ofrecerá la mejor solución.',
                );
                break;
            case 26:
                Swal.fire(
                    ' ¿Cuenta con tarifa dinámica? ',
                    'Si, contamos con Tarifa dinámica en nuestras consultas, pero podrás consultar si tu cita se encuentra afectada por este motivo. ',
                );
                break;
            case 27:
                Swal.fire(
                    '¿Puedo pedir Healthy para algún conocido o familiar?',
                    '¡Si es posible! Antes de confirmar la consulta puedes seleccionar si el servicio es para ti o para alguien más. Este paso es importante ya que el especialista tiene prohibido brindar el servicio para alguien más que no sea el usuario que lo solicitó, esto por motivos de seguridad, sugerimos que tu conocido también descargue la app en caso de ser mayor de edad. ¡Recuerda que refiriendo a tu conocido, ambos recibirán beneficios!',
                );
                break;
            case 28:
                Swal.fire(
                    '¿Qué hacer en caso de emergencia?',
                    'Si te encuentras en una emergencia durante la consulta en Healthy: Da clic al icono del estetoscopio con escudo localizado en la parte inferior izquierda de la pantalla principal de tu app. Este botón abre el menú de seguridad, selecciona “911” para que enlace una línea directa con un equipo especializado que te brindaran apoyo.',
                );
                break;
        }
    }

    $scope.pe1 = false;
    $scope.pe2 = false;
    $scope.pe3 = false;
    $scope.pe4 = false;
    $scope.pe5 = false;
    $scope.pe6 = false;
    $scope.pe7 = false;
    $scope.pe8 = false;
    $scope.pe9 = false;
    $scope.pe10 = false;
    $scope.pe11 = false;
    $scope.pe12 = false;

    $scope.selectorPER = function (){
        $scope.pe1 = false;
        $scope.pe2 = false;
        $scope.pe3 = false;
        $scope.pe4 = false;
        $scope.pe5 = false;
        $scope.pe6 = false;
        $scope.pe7 = false;
        $scope.pe8 = false;
        $scope.pe9 = false;
        $scope.pe10 = false;
        $scope.pe11 = false;
        $scope.pe12 = false;    
    }
    
    $scope.selectorPE = function(p){
        switch (p){
            case 1:
                $scope.selectorPER();
                $scope.pe1 = true;
                break;
            case 2:
                $scope.selectorPER();
                $scope.pe2 = true;
                break;
            case 3:
                $scope.selectorPER();
                $scope.pe3 = true;
                break;
            case 4:
                $scope.selectorPER();
                $scope.pe4 = true;
                break;
            case 5:
                $scope.selectorPER();
                $scope.pe5 = true;
                break;
            case 6:
                $scope.selectorPER();
                $scope.pe6 = true;
                break;
            case 7:
                $scope.selectorPER();
                $scope.pe7 = true;
                break;
            case 8:
                $scope.selectorPER();
                $scope.pe8 = true;
                break;
            case 9:
                $scope.selectorPER();
                $scope.pe9 = true;
                break;
            case 10:
                $scope.selectorPER();
                $scope.pe10 = true;
                break;
            case 11:
                $scope.selectorPER();
                $scope.pe11 = true;
                break;
            case 12:
                $scope.selectorPER();
                $scope.pe12 = true;
                break;
            case 13:
                Swal.fire(
                    '¿Qué documentos necesito para convertirme en un especialista en Healthy?',
                    'Para ser parte de nuestra comunidad de usuario Especialista, necesitarás:	Cartilla de vacunación COVID,	Identificación oficial vigente (INE),	Cédula profesional, Certificado de no antecedentes penales federales (de no más de 3 meses de haber sido expedido), CURP,	Licencia de conducir (en caso de registrar algún vehículo o moto) *Esta información puede cambiar en conformidad con las legislaciones locales.',
                );
                break;
            case 14:
                Swal.fire(
                    '¿Qué áreas de especialistas se encuentran disponibles?',
                    'Healthy cuenta 3 áreas de especialistas en el área de salud,	Medicina General,	Fisioterapia,	Enfermería, Escoge en la que te desempeñaras y se parte de esta gran comunidad hoy.',
                );
                break;
            case 15:
                Swal.fire(
                    'Tengo una discapacidad. ¿Puedo usar Healthy?',
                    'En Healthy la inclusión es uno de nuestros pilares principales, por eso sin importar tu discapacidad si eres un profesional y pasas los filtros de seguridad puedes ser parte de nuestro equipo. ¿Tienes dudas puntuales? Puede contactar con el Soporte de Healthy.',
                );
                break;
            case 16:
                Swal.fire(
                    'Tengo Problemas con el registro',
                    'Pueden existir diversas razones por las cuales presentes problemas con el registro, para poder apoyarte con la mejor solución, contacta a Soporte Healthy.',
                );
                break;
            case 17:
                Swal.fire(
                    '¿Cómo se calculan las tarifas en Healthy?',
                    'Todas nuestras tarifas se calculan con base en el horario en el que se solicite el servicio además de la comisión de los especialistas.  ',
                );
                break;
            case 18:
                Swal.fire(
                    'No puedo terminar el servicio',
                    'Haz clic en el botón “Guía” para acceder de forma rápida al “registro de consultas”, luego ve a “ayuda” y selecciona la opción que mejor se adapte a tu problema.',
                );
                break;
            case 19:
                Swal.fire(
                    '¿Cómo acepto una consulta?',
                    'Una vez que llegue la alerta de servicio, aparecerá en tu pantalla el motivo de consulta y la dirección del paciente, en la parte inferior de esta pestaña verás la opción de “Aceptar” o “Rechazar” de acuerdo con la acción que desees realizar.',
                );
                break;
            case 20:
                Swal.fire(
                    '¿Cómo puedo identificar a mi usuario cuando me encuentre en el domicilio?',
                    'Una vez que te encuentras en el domicilio corrobora los datos proporcionados por el usuario, ya que este puede solicitar el servicio para otra persona. Por tu seguridad, siempre confirma que el usuario sea el que realizó la solicitud.',
                );
            break;
            case 21:
                Swal.fire(
                    '¿Dónde puedo encontrar mi historial de consultas?',
                    'Para encontrar tu historial de consultas: haz clic en “Guía” y selecciona “Registro de consultas”. Por seguridad del Usuario los registros se eliminan cada semana. ',
                );
            break;
            case 22:
                Swal.fire(
                    'Tuve una mala experiencia en una consulta',
                    'Para reportar una mala experiencia con la aplicación o con alguno de nuestros expertos haz clic en “Guía” y selecciona “Registro de consultas”, después haz clic en la consulta donde ocurrió el problema y repórtalo. ',
                );
                break;
            case 23:
                Swal.fire(
                    '¿Qué debo hacer en caso de Emergencia?',
                    'Durante una emergencia, debes presionar el botón de seguridad que se encuentra en la pantalla principal. Este botón abre una línea directa con el 911 (línea de emergencia en el estado de Puebla) donde podrás exponer tu situación.',
                );
                break;
            case 24:
                Swal.fire(
                    '¿Cómo agrego un contacto de emergencia?',
                    'Para agregar un contacto de emergencia haz clic en “Guía”, selecciona “Mi Perfil” y presiona el botón “Contacto de emergencia”, ahí podrás incluir o editar la información de tus contactos de emergencia.',
                );
                break;
        }
    }



    $scope.su1 = false;
    $scope.su2 = false;
    $scope.su3 = false;
    
    $scope.selectorSUR = function(){
        $scope.su1 = false;
        $scope.su2 = false;
        $scope.su3 = false;
    }

    $scope.selectorSU = function(p){
        switch (p){
            case 1:
                $scope.selectorSUR();
                $scope.su1 = true;
                break;
            case 2:
                $scope.selectorSUR();
                $scope.su2 = true;
                break;
            case 3:
                $scope.selectorSUR();
                $scope.su3 = true;
                break;
        }
    }

    $scope.se1 = false;
    $scope.se2 = false;
    $scope.se3 = false;
    
    $scope.selectorSER = function(){
        $scope.se1 = false;
        $scope.se2 = false;
        $scope.se3 = false;
    }

    $scope.selectorSE = function(p){
        switch (p){
            case 1:
                $scope.selectorSER();
                $scope.se1 = true;
                break;
            case 2:
                $scope.selectorSER();
                $scope.se2 = true;
                break;
            case 3:
                $scope.selectorSER();
                $scope.se3 = true;
                break;
        }
    }

})