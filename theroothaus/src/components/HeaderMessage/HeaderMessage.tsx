import { FC } from "react";
import "./HeaderMessage.scss";
interface IHeaderMessageProps {
  message: string;
}

const HeaderMessage: FC<IHeaderMessageProps> = (props) => {
  const { message } = props;

  return (
    <div className="header-message-container">
      <p>{message}</p>
    </div>
  );
};

export default HeaderMessage;
