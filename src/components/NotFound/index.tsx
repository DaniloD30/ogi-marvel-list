import "./index.css";

type NotFoundProps = {
  titleError: string;
};

const NotFound = ({ titleError }: NotFoundProps) => {
  return (
    <div className="container-not-found ">
      <p>{titleError}</p>
    </div>
  );
};

export default NotFound;
