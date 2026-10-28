// type : "moduule" permet d'utiliser les modules ES6 dans Node.js. Cela signifie que vous pouvez utiliser la syntaxe d'importation et d'exportation de modules dans votre code JavaScript. 
// from : permet de spécifier le chemin du fichier à partir duquel vous souhaitez importer la fonction. Dans ce cas, nous importons la fonction calculerCout depuis le fichier calcul.js situé dans le même répertoire que main.js.
import { calculerCout } from "./calcul.js";
const prix = 500;
const quantite = 20;
const coutTotal = calculerCout(prix, quantite);
console.log("coût total:", coutTotal, "FCFA");