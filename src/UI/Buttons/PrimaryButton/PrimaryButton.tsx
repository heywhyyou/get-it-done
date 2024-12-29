import { IPrimaryButton } from "./PrimaryButton.types";

const PrimaryButton: React.FC<IPrimaryButton> = ({ children }) => {
  return <button>{children}</button>;
};
