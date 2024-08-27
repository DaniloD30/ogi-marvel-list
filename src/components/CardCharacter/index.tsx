import "./index.css";

const CardCharacter = () => {
  return (
    <div>
      <div className="container-card-character">
        <div className="item-card-character">
          <img src="photo-test.png" className="image-character" />
          <p>Scott Lang</p>
        </div>
        <div className="item-card">
          <p>Ant-Man</p>
          <p>Giant-Man</p>
          <p>Infinity Wars</p>
        </div>
        <div className="item-card">
          <p>Ant-Man</p>
          <p>Giant-Man</p>
          <p>Infinity Wars</p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
