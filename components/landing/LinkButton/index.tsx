import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface LinkButtonProps {
  href: string;
}

/**
 * LinkButton
 */
const LinkButton = ({ href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-green-500 rounded p-2 flex items-center justify-center w-fit"
    >
      <FontAwesomeIcon icon={faLink} className="w-6 h-6 text-white" />
    </Link>
  );
};

export default LinkButton;
