import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setISEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialName);

  function handelEditiClick() {
    setISEditing((editing) => !editing);
    if (isEditing) onChangeName(symbol, playerName);
  }

  function handelChange(event) {
    setplayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditiClick}>{isEditing ? "Save" : "Edit"} </button>
    </li>
  );
}
