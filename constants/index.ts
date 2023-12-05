//Logo principal
export const LOGOF = '/images/Logo.png'

//Animação Titulo
export const tituloIn = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

export const letra = {
  initial: {
    opacity: 0,
    scale: 1, // Add initial scale value
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: [1, 1.2, 0.8, 1.1, 1], // Add an array of scale values for bounce effect
    transition: {
      duration: 1,
    },
  },
};