import { Link } from "react-router-dom";
import HeartButton from "../Button/HeartButton";

const Card = () => {
  return (
    <Link to={`/room/`} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src="https://a0.muscache.com/im/pictures/914d65dd-3859-4ea0-b9f3-fa36575c6caa.jpg?im_w=720"
            alt="Room"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Abiansemal, Bali</div>
        <div className="font-light text-neutral-500">
          5 nights.Jan 9, 2024 - Jan 14, 2024
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ 59</div>
          <div className="font-light">night</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
