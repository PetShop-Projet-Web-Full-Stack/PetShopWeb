import { Card, CardBody } from "@material-tailwind/react";
import ButtonComponent from "../../atoms/ButtonComponent/ButtonComponent";

const CardComponent = (props) => {
  const {
    srcImg,
    title,
    description,
    btnDisable,
    btnType,
    btnClazz,
    btnContent,
  } = props;
  return (
    <Card className="w-fit h-fit rounded-3xl bg-white ">
      <div className="flex flex-col rounded-3xl">
        <img
          src={srcImg}
          alt="Not found"
          className="rounded-tl-3xl rounded-tr-3xl object-cover h-80 w-96"
        />
        <CardBody className="mb-5 p-3">
          <h1 className="font-semibold text-2xl mb-2 mt-2">{title}</h1>
          <p className="text-gray-700">{description}</p>
        </CardBody>
        <div className="flex justify-end m-4">
          <ButtonComponent
            clazz={`${btnClazz} w-20 h-10 py-0`}
            type={btnType}
            disabled={btnDisable || false}
          >
            {btnContent}
          </ButtonComponent>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
