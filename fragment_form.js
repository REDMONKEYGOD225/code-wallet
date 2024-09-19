import React from 'react';
import './fragment_form.css';

const FragmentForm = () => {
  return (
    <form action="/fragment" method="get" className="fragment_form">
      <div>
        <input type="text" placeholder="titre" id="fragment-title" />
      </div>
      <div>
        <input type="text" placeholder="content" id="fragment-content" />
      </div>
      <div>
        <button type="submit" id="delete">supprimer</button>
        <button type="submit" id="save">sauvegarder</button>
      </div>
    </form>
  );
};

export default FragmentForm;