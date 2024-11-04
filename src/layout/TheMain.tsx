import { useState } from 'react';
import Todo from '#types/Todo';
import ATodo from '#components/ATodo';
import TheAddTodo from '#components/TheAddTodo';

const TheMain = () => {
  return (
    <main className="wrapper">
      <h1>Ta liste de choses à faire</h1>
      <p>Ajoute tes affaires ici pour faire fonctionner les todos.</p>
      <p>J'ai mis des tests playwrights à utiliser pour savoir si ça fonctione!</p>
      <p>Tu as 50 minutes. Bonne chance!</p>
    </main>
  );
};

export default TheMain;

