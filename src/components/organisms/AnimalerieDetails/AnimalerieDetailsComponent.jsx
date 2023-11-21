import DetailCardComponent from "../../atoms/DetailCard/DetailCardComponent";

const AnimalerieDetailsComponent = (props) => {
  const { animalerie } = props;

  return (
    <div className="bg-slate-100 w-2/5 xl:w-1/3 flex flex-col flex-grow gap-5 p-5 ">
      <div className="flex gap-3 justify-center">
        <img
          className="rounded-3xl w-80 lg:w-full"
          src={
            animalerie.medias_id ||
            "https://www.franchise-magazine.com/wp-content/uploads/Franchise-Animalerie-Tom-Co-Magasin-Facade.jpg"
          }
          alt="Not found"
        />
      </div>
      <div className="text-4xl font-bold text-center">{animalerie.name}</div>
      <div className="font-bold grid grid-cols-2 gap-4">
        <DetailCardComponent value={animalerie.address}>
          Adresse :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.city}>
          Ville :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.phone}>
          N° de téléphone :
        </DetailCardComponent>
        <DetailCardComponent value={animalerie.zipcode}>
          Code postal :
        </DetailCardComponent>
        <textarea
          value={animalerie.content}
          disabled={true}
          className="resize-none border h-60 p-2 rounded-lg col-span-2 font-normal"
        />
      </div>
    </div>
  );
};

export default AnimalerieDetailsComponent;
