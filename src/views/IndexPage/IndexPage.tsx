import { Form } from "../../components/Form/Form"
import { RecipesFound } from "../../components/RecipesFound/RecipesFound"
import { RecentSearch } from "../../components/RecentSearch/RecentSearch";
import { useEffect } from "react";
import { useAppStore } from "../../stores/useAppStore";


export const IndexPage = () => {

   const setRecipeStorage = useAppStore((state) => state.setRecipeStorage);

  useEffect(() => {
    setRecipeStorage()
  }, [])

  return (
    <>
      <Form />
      <RecipesFound />
      <RecentSearch />
    </>
    
  );
};
