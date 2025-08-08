import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServicesTypes } from "@/types/ServicesTypes";

export function ServicesCard(props: ServicesTypes) {
  return (
    <div
      className="
        w-60               /* normal card width (~288px) */
        h-auto               /* height adjusts to content */
        bg-white 
        shadow-md 
        rounded-xl 
        overflow-hidden 
        flex 
        flex-col 
        border 
        border-gray-200
        font-montserrat
      "
    >
      {/* Image */}
      <img
        src={props.imageSrc}
        alt={props.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {props.title}
        </h3>
        <p className="text-gray-600 text-sm flex-grow">
          {props.description}
        </p>

        {/* Learn More Link */}
        <Link
          to={props.link}
          className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
