const page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  console.log(params);

  const url = `https://stride-v2.exarta.com/api/products?id=${params.product}${
    searchParams.color ? `&color=${searchParams.color}` : ""
  }`;

  const response = await fetch(url);

  const { data } = await response.json();

  console.log("Product SP: ", searchParams);

  return <div>{data[0].name}</div>;
};

export default page;
