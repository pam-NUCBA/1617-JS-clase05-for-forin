const cuantosOjos = alien => {
  switch (alien) {
    case 0:
      console.log("miraluka");
      break;
    case 1:
      console.log("abyssin");
      break;
    case 2:
      console.log("wookie");
      break;
    case 3:
      console.log("gran");
      break;
    case 4:
      console.log("dyplotids");
      break;
    default:
      console.log("no sé pero seguro está en el desierto de Tatooine");
  }
}  

cuantosOjos(3)