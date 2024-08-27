import { Characters } from "../../modules/Characters/types";
import "./index.css";

const CardCharacter = ({ name, thumbnail, events, series }: Characters) => {
  return (
    <div>
      <div className="container-card-character">
        <div className="item-card-character">
          <img
            loading="lazy"
            src={`${thumbnail.path}.${thumbnail.extension}`}
            className="image-character"
            alt="name"
          />
          <p>{name}</p>
        </div>
        <div className="item-card">
          {series.items.length === 0
            ? "--"
            : series.items.map((serie, index) => (
                <p key={`${index}-${serie.name}`}>{serie.name}</p>
              ))}
        </div>
        <div className="item-card">
          {events.items.length === 0
            ? "--"
            : events.items.map((event, index) => (
                <p key={`${index}-${event.name}`}>{event.name}</p>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
