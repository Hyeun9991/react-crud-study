import React from "react";

function Nav({ topics, ohChangeMode }) {
  // const lis = [];
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i];
  //   lis.push(
  //     <li key={t.id}>
  //       <a
  //         id={t.id}
  //         href={"/read" + t.id}
  //         onClick={(e) => {
  //           e.preventDefault();
  //           props.onChangeMode(e.target.id);
  //         }}
  //       >
  //         {t.title}
  //       </a>
  //     </li>
  //   );
  // }
  return (
    <nav>
      <ol>
        {topics.map((item) => (
          <li key={item.id}>
            <a
              id={item.id}
              href={"/read" + item.id}
              onClick={(e) => {
                e.preventDefault();
                ohChangeMode(e.target.id);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Nav;
