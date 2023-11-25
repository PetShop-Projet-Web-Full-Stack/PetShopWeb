# PETSHOP WEB

## Pré recquis

### `node js`

Pour installer node js, rendez-vous sur ce site : https://nodejs.org/en/download/
Installez la **version LTS** en fonction de votre système d'exploitation.
Une fois installé, vérifiez que l'installation s'est bien effectuée.

Pour cela effecutez la commande **node --version**
Si vous n'avez pas d'erreur et que dans votre terminal vous avez comme résultat **v.1X.XX.X** c'est que votre node js s'est bien installé

## Configuration du projet

Créer le **fichier .env** s'il n'existe pas et ajouter tout les valeurs que l'on retrouve dans le fichier **.env.example**
La configuration dépendra de votre configuration fait pour le backend. (définition du host, du port front et du port backend de laravel)

## Pour lancer l'application front

### `npm install`

### `npm start`

## Fonctionnalités de l'application :

- Gestion d'un compte utilisateur (inscription / connexion / changement de mot passe / déconnexion)
- Affichage de tout les animaux et possibilité de les filtrer en fonction de l'espèce de la race et de la tranche d'âge
- Affichage de toutes les animaleries et possibilité de les filtrer en fonction de la ville et du code postal
- Affichage les détails d'un animal cliqué (infos de l'animal)
- Affichage les détails d'une animalerie cliquée (infos + animaux)
- Affichage de la liste des animaux favoris de l'utilisateur connecté
