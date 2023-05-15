import { useEffect } from "react";

function App() {
  // Pour le curseur
  document.addEventListener("mousemove", function (event) {
    let cursor = document.querySelector(".cursor");
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
  });
  // Quand une div s'affiche, on lui ajoute la classe visible
  const intersectionFunction = () => {
    console.log("test");
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 50px 0px",
      threshold: 1, // 0.5 signifie que la moitié de la div est visible pour déclencher l'intersection
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const divsToObserve = document.querySelectorAll(".line");
    divsToObserve.forEach((div) => {
      observer.observe(div);
    });
  };
  useEffect(() => {
    intersectionFunction();
  }, []);
  return (
    <div className="App">
      <div className="cursor"></div>
      <div className="header">
        <span>Théo HELF</span>
        <h3>Animation Menu</h3>
        <span>2023</span>
      </div>
      <div className="scroll">
        <span>SCROLL</span>
      </div>
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
