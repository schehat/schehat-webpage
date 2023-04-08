import { RiRadioButtonFill } from "react-icons/ri";

const Technologies = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
      <div className="p-2">
        <p className="text-center font-bold pb-2">Technologies</p>
        <div className="grid grid-cols-3 md:grid-cols-1">
          {technologies.map((tech, index) => (
            <p key={index} className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
