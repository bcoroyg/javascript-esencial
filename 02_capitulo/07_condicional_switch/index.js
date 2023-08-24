var signo = prompt("Cual es tu signo?");

/* if (signo === "cancer") {
  console.log(
    "Sepa que necesitará proyectar mejor las actividades para poder llegar a cumplir con todas las obligaciones en tiempo y forma como usted quiere."
  );
}
if (signo === "tauro") {
  console.log(
    "Aproveche, ya que marchará por una etapa de buena suerte. Sepa aprovecharla y obtendrá mucha alegría para compartirla con la gente que quiere."
  );
}
if (signo === "acuario") {
  console.log(
    "Será un período en el que deberá aprender de los errores cometidos tiempo atrás y recapacitar. Procure no volver a cometer las mismas equivocaciones."
  );
}
 */
switch (signo) {
  case "acuario":
    console.log(
      "Será un período en el que deberá aprender de los errores cometidos tiempo atrás y recapacitar. Procure no volver a cometer las mismas equivocaciones."
    );
    break;
  case "geminis":
  case "géminis":
    console.log(
      "Aproveche, ya que marchará por una etapa de buena suerte. Sepa aprovecharla y obtendrá mucha alegría para compartirla con la gente que quiere."
    );
    break;
  case "cancer":
    console.log(
      "Sepa que necesitará proyectar mejor las actividades para poder llegar a cumplir con todas las obligaciones en tiempo y forma como usted quiere."
    );
    break;
  default:
    console.log('No es un signo valido.')
    break;
}
