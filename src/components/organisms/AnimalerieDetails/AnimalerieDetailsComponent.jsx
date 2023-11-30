import DetailCardComponent from "../../atoms/DetailCard/DetailCardComponent";

const AnimalerieDetailsComponent = (props) => {
  const { animalerie } = props;

  return (
    <div className="bg-slate-100 w-2/5 xl:w-1/3 flex flex-col flex-grow gap-5 p-5">
      <div className="flex justify-center">
        <img
          className="rounded-3xl w-80 lg:w-full h-64 object-cover"
          src={`data:image/webp;base64,${animalerie?.media?.content}`}
          alt="Not found"
        />
      </div>
      <div className="rounded bg-white p-6 shadow-md">
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
          <div className="col-span-2">
            <textarea
              value={animalerie.content}
              disabled={true}
              className="resize-none border h-40 p-2 rounded-lg w-full font-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalerieDetailsComponent;
