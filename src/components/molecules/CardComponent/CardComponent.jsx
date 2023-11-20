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
    onButtonClick,
  } = props;
  return (
    <Card className="w-fit h-fit rounded-3xl bg-white ">
      <div className="flex flex-col rounded-3xl">
        <img
          src={
            srcImg
              ? srcImg
              : "https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
          }
          alt="Not found"
          className="rounded-tl-3xl rounded-tr-3xl object-cover h-80 w-96"
        />
        <CardBody className="mb-3 px-3">
          <h1 className="font-semibold text-2xl mb-2 mt-2">{title}</h1>
          <p className="text-gray-700">{description}</p>
        </CardBody>
        <div className="flex justify-end mb-3 mr-3">
          <ButtonComponent
            clazz={`${btnClazz} w-28 h-10`}
            type={btnType}
            disabled={btnDisable || false}
            onClick={onButtonClick}
          >
            {btnContent}
          </ButtonComponent>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
