import "../../pages/MoviesListPage/MoviesListPage.css";

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function ActorCard({ actor }) {
  let num = getRandomNumber(250, 400);

  return (
    <div
      className="item-card"
    >
      <div className="title">
        <h1>{actor}</h1>
      </div>
    </div>
  );
}
