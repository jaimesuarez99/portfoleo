import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (ietm: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${activeIndex === index && "active"}`}
            onClick={() => {
              setActiveIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
