const evaluarClima = (clima) => {
  switch (true) {
    case clima < 0:
      console.log(`Che te vas a congelar hace ${clima}°`);
      break;
    case clima >= 0 && clima < 10:
      console.log(`Invierno con estos ${clima}°`);
      break;
    case clima >= 10 && clima < 18:
      console.log(`Esta fresquito con estos ${clima}°`);
      break;
    case clima >= 18 && clima < 27:
      console.log(`Ideal el clima con ${clima}°`);
      break;
    case clima >= 27 && clima < 40:
      console.log(`Calurosa la cosa con estos ${clima}°`);
      break;
    case clima >= 40:
      console.log(`No salgas, es un horno hace ${clima}°`);
      break;
    default:
      console.log("esto con qué se come");
  }
};

evaluarClima("lalala");
