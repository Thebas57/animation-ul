import { useEffect } from "react";

function App() {
  const intersectionFunction = () => {
    console.log("test")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 0.5 signifie que la moitié de la div est visible pour déclencher l'intersection
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          console.log("rt");
          observer.unobserve(entry.target); // Arrêter l'observation une fois que la div est visible
        }
      });
    }, observerOptions);

    const divToObserve = document.querySelector(".line");
    observer.observe(divToObserve);
  };
  useEffect(() => {
    intersectionFunction();
  }, []);
  return (
    <div className="App">
      <ul>
        <li className="line">
          <div className="img-back"></div>
          <div className="first">
            <span>01</span>
            <h3>Chasing Gold</h3>
          </div>
          <div className="second">
            <span>INTEGRATED</span>
            <h5>TACO BELL</h5>
          </div>
        </li>
        <li className="line">
          <div className="img-back"></div>
          <div className="first">
            <span>02</span>
            <h3>Be More Human</h3>
          </div>
          <div className="second">
            <span>BRAND</span>
            <h5>REEBOK</h5>
          </div>
        </li>
        <li className="line">
          <div className="img-back"></div>
          <div className="first">
            <span>03</span>
            <h3>Legacy Summit</h3>
          </div>
          <div className="second">
            <span>ACTIVATION</span>
            <h5>NIKE</h5>
          </div>
        </li>
        <li className="line">
          <div className="img-back"></div>
          <div className="first">
            <span>04</span>
            <h3>Creative We Stand</h3>
          </div>
          <div className="second">
            <span>INTEGRATED</span>
            <h5>NBCUNIVERSAL</h5>
          </div>
        </li>
        <li className="line">
          <div className="img-back"></div>
          <div className="first">
            <span>01</span>
            <h3>Chasing Gold</h3>
          </div>
          <div className="second">
            <span>INTEGRATED</span>
            <h5>TACO BELL</h5>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
