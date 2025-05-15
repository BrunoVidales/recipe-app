import { Cards } from "../Card/Card";

export const RecentFound = () => {
  return (
    <section className="spacing">
        <h2>Recipes Found</h2>
        <div className="cards">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
    </section>
  );
};
