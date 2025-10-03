# Projet TODO

Objectifs :

1. Perfectionner ta compréhension en react
2. Découvrir et comprendre le localStorage
3. Découvrir et comprendre le fonctionnement d'une communication avec un API.

## Compréhension globale du projet.

Va lire dans TheMain et assures-toi de comprendre le code en traçant un diagramme de composants et réponds aux questions suivantes :
note : Ne porte pas attention au useEffect pour l'instant.

**Q:** Quel composant possède la liste des Todos?

**R:**

**Q:** Où est située l'interface qui défini ce qu'est un TODO?

**R:**

**Q:** Comment fait-on pour relier le input à la valeur du texte entrée dans le input?

**R:**

**Q:** Demande à Antoine de faire une démo du dual binding avec Vue. Est-ce que React est mieux que vue?

**R:**

## Rendont le site web fonctionnel en local seulement

Utilise le useLocalStorage dans le dossier composable pour ajouter les todos dans le localstorage.
L'idée ici est de sauvegarder les todos dans le localStorage en utilisant la fonctionnalitée useEffect.

1. Ouvre la console et recharge la page. Que remarques-tu? Pourquoi est-ce que c'est affiché deux fois?

   Va lire les deux premiers paragraphes de ce [lien](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development)

2. Ajoute un todo? Que remarques-tu? Est-ce que c'est affiché deux fois?

**Q:** Quel serait le meileur endroit pour ajouter le chargement de la liste storée dans le localStorage?

**Q:** Quel serait le meileur endroit pour sauvegarder la liste entière des todos dans le local storage?

Comme je suis gentil, je te fourni le fichier useLocalStorage qui pourra sauvegarder adéquatement tes todos dans le local storage.

```tsx
//1. importer le composable useLocalStorage
import useFetch from '#composables/useFetch';

//2. importer les fonctions qu'on veut utiliser, la string dans la fonction représente le nom de la clé qui sera utilisée dans le local storage :
const { getItem, setItem } = useLocalStorage<Todo[]>('todos');

//3. utiliser les fonctions au bon endroit!
const todosFromLocalStorage = getItem('todos');
setTodos(todosFromLocalStorage);
```

## Le site branché à l'API

On branche ça sur un api!

Maintenant qu'on est en local, il est temps d'entrer dans la cours des grands! Branchons notre Todos à notre API!

À l'aide de useEffect, charge les Todos présents dans l'API. Attention, tu dois utiliser une fonction async comme je t'ai montré en démo! Voici un petit rappel :

```tsx
const getDataFromApi = async () => {
  const response = await fetch('ApiUrl');
  const data = await response.json();
  setData(data);
};
useEffect(() => {
  getDataFromApi(); //pas de await ici car useEffect ne supporte pas await.
}, [todos]);
```

Par contre, dans ton cas, comme je suis gentil, je te fourni le fichier useFetch qui pourra former adéquatement tes appels au serveur. Ce dernier fonctionne ainsi.

```tsx
//1. importer le composable useFetch
import useFetch from '#composables/useFetch';
const { POST } = useFetch();

// utiliser les fonctions en spécifiant le type de données envoyées, reçues, etc...
// Ici, on va envoyer à l'API un objet todo.
const todo = await POST<TODO>(newTodo);
```

Encore une fois, tu dois te demander où faire ces appels.

Pour les étudiants en PWA, adapter le type Todo dans types pour qu'il corresponde à ce que ton API demande.

