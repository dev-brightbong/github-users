export default function HomePage() {
  return <></>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/users",
    },
  };
};
