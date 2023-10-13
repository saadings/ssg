import Link from "next/link";

const page = async ({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) => {
  const url = `https://stride-v2.exarta.com/api/products?category=${
    params.category
  }${searchParams.color ? `&color=${searchParams.color}` : ""}`;

  const response = await fetch(url);

  const { data } = await response.json();

  console.log("Category SP: ", searchParams);

  return (
    <div>
      {data?.map((product: any, index: number) => (
        <Link
          href={`/${product.productMeta.category}/${product.id}`}
          key={index}
        >
          <div>{product.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default page;
