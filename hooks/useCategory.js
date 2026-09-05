import { getCategories } from "@/services/getCategories";
import { useQuery } from "@tanstack/react-query";

const useCategory = () => {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return query;
};

export default useCategory;
