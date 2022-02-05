import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./InfiniteScroll.module.css";
import { Data, colors } from "../util/Constant";

const InfiniteScrollComponent = () => {
  const myRef = useRef(null);
  const [data, setData] = useState([...Data]);

  const loadData = () => {
    setData([...data, ...Data]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadData();
      }
    });
    observer.observe(myRef.current);
    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  });

  return (
    <div className={styles.container}>
      <h1>Infinite-Scroll</h1>
      {data.length > 0 &&
        data.map((i) => {
          return (
            <div
              key={`i.name${Math.random() * i + 100 + 1})`}
              className={styles.listItem}
              style={{
                backgroundColor: `${colors[Math.floor(Math.random() * 5 + 1)]}`,
              }}
            >
              <p className={styles.text}>{i.name}</p>
            </div>
          );
        })}
      <div ref={myRef}>loading...</div>
    </div>
  );
};

export default InfiniteScrollComponent;
