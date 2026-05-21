import { useAuthToast } from "@/pages/home/useAuthToast.tsx";

export const Home = () => {
  useAuthToast();

  return (
    <>
      <div>Home</div>
    </>
  );
};
