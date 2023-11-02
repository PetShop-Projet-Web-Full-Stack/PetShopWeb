# Getting Started with Create React App

## Pour lancer l'application front

### `npm install`

### `npm start`

## Utilisation des différents composants:

### Button

clazz = une classe spécifique qu'on veut donner ne plus des classes de base du composant
disabled = gestion du disable du boutton dynamiquement
type = submit / reset / button

### Input

name = nom de lin'put opur qu'on puisse faire des références dans les formulaires
required = gestion de l'obligation ou non du field (permet de changer de style)
onChange = méthode du field faisant un traitement spécifique permettant un max de dynamisme dans les algo
value = la valeur affichée dans le field
...otherProps = placeholder par exemple et d'autres props

### Dropdown

{
icon: HomeIcon,
name: "Home",
path: "/",
},

### Combo box

Attention à bien mettre les values en string si on s'en sert pour une formulaire sinon ça va planter on faigt un .trim, or sur un nombre ça va pas marcher !
{
icon: PencilIcon,
name: "Modifier",
value: "0",
},
