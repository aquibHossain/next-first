import { useRouter } from "next/router";
import React from "react";

const Page = () => {
  const router = useRouter();
  return <div>hello Post {router?.query?.id}</div>;
};

export default Page;
