import { Form } from "../../components/Form/Form"
import { RecentFound } from "../../components/RecipesFound/RecipesFound"
import { RecentSearch } from "../../components/RecentSearch/RecentSearch";
import { useLocation } from "react-router-dom";

export const IndexPage = () => {

  return (
    <>
      <Form />
      <RecentFound />
      <RecentSearch />
    </>
    
  );
};
