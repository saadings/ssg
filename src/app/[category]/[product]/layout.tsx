export const generateStaticParams = async () => {
  const url = `https://stride-v2.exarta.com/api/products`;

  const response = await fetch(url);

  const { data } = await response.json();

  return data.map((product: any) => {
    product.productMeta.category, product.id;
  });
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
