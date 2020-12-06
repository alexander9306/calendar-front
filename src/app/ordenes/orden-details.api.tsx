import { useGetOrdenQuery } from "../generated/api";

interface IDataProps {
  orden: string;
}

function useOrdenesDetailsAPI({
  orden,
}: IDataProps): [typeof ordenes[0], typeof loading, typeof error] {
  const {
    data: { ordenes } = { ordenes: [] },
    loading,
    error,
  } = useGetOrdenQuery({
    variables: {
      orden,
    },
  });

  return [ordenes[0], loading, error];
}

export default useOrdenesDetailsAPI;
