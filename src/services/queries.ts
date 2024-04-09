import { useQuery, useQueries } from "@tanstack/react-query";
import { getTodo, getTodosIds } from "./api";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
}

export function useTodosById(ids: (number | undefined)[] | undefined)  {
   return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todo", { id }],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
