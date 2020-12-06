import { useEffect } from "react";
import useLoadingBar from "../shared/loading-bar.service";
import {
  useGetOrdenesQuery,
  SortOrder,
  GetOrdenesQueryVariables,
} from "../generated/api";

function useOrdenesAPI(
  where: GetOrdenesQueryVariables["where"]
): [typeof ordenes, typeof fetchMoreData, boolean, typeof loading] {
  // const [hasMore, setHasMore] = useState(true);
  const first = 20;
  const pollInterval = process.env.NODE_ENV === "test" ? 100 : 2000;

  const {
    data: { ordenes } = { ordenes: [] },
    loading,
    fetchMore,
  } = useGetOrdenesQuery({
    variables: {
      first,
      after: null,
      orderBy: [
        {
          fecha_registro: SortOrder.Desc,
        },
      ],
      where,
    },
    pollInterval,
  });

  const [startLoading, stopLoading] = useLoadingBar();
  useEffect(() => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
    // Disabled because needs to update the bar only when loading changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  async function fetchMoreData() {
    const { orden } = ordenes[ordenes.length - 1];
    fetchMore({
      variables: { after: { orden } },
    });
  }

  return [ordenes, fetchMoreData, true, loading];
}

export default useOrdenesAPI;
