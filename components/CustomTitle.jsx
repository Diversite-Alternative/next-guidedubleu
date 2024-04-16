import React from 'react';



function CustomTitle({ tag, color, size, marginTop, marginBottom, children }) {
  const Tag = tag || 'h1'; // Par défaut, utilise h1 si aucun tag n'est spécifié
  const defaultColor = '#C9660C'; // Couleur par défaut
  const style = {
    color: color || defaultColor, // Utilise la couleur spécifiée ou la couleur par défaut
    fontSize: size || 30, // Par défaut, utilise la taille héritée
    marginTop: marginTop || 2, // Utilise la marge externe supérieure spécifiée ou 0 par défaut
    marginBottom: marginBottom || 2 // Utilise la marge externe inférieure spécifiée ou 0 par défaut
  };

 

  return (
    <>
        <br />
        <Tag style={style}>{children}</Tag>
    </>
  )
}

export default CustomTitle;
