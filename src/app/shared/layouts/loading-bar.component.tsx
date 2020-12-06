import React from "react";
import Loading from "react-top-loading-bar";
import { loadingBarStatusVar } from "../../../apollo-client/variables";
import { useGetLoadingBarStatusQuery } from "../../generated/api";

const LoadingBar: React.FunctionComponent = () => {
  function resetBar() {
    loadingBarStatusVar(0);
  }
  const {
    data: { loadingBarStatus } = { loadingBarStatus: 0 },
  } = useGetLoadingBarStatusQuery();
  return (
    <Loading
      progress={loadingBarStatus}
      color="#bb141b"
      onLoaderFinished={resetBar}
    />
  );
};

export default LoadingBar;
