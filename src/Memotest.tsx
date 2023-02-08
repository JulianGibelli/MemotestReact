import React, { useEffect, useState } from "react";

const images = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/django-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/facebook-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/git-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/mongodb-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
]
  .flatMap((img) => {
    return [`a|${img}`, `b|${img}`];
  })
  .sort(() => Math.random() - 0.5);

function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length == 2) {
      if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length == images.length) {
      alert("Ganaste!");
      location.reload();
    }
  }, [guessed]);

  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(128px,1fr))",
        gap: "24px",
      }}
    >
      {images.map((img) => {
        const [, url] = img.split("|");
        return (
          <li
            onClick={() =>
              selected.length < 2 &&
              setSelected((selected) => selected.concat(img))
            }
            style={{
              padding: 4,
              border: "solid 1px #666",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            key={img}
          >
            {guessed.includes(img) || selected.includes(img) ? (
              <img key={img} src={url} alt="icon" />
            ) : (
              <img src="https://icongr.am/clarity/eye.svg?size=128&color=e65b5b" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default Memotest;
