import { RecentCard } from "../Cards/RecentCard/RecentCard";
import './_RecentSearch.scss';

export const RecentSearch = () => {
  return (
    <section className="spacing">
            <h2>Recent Search</h2>
            <div className="recentCards">
              <RecentCard />
            </div>
        </section>
  );
};
