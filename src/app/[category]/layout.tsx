export async function generateStaticParams() {
  return ["boots", "sneakers", "loafers", "explore"];
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default layout;
