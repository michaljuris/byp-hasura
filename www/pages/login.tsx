// import Cookies from "js-cookie";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Auth from "../components/Auth";
import { AUTH, useStore } from "../store/store";

const Login: NextPage = () => {
  const authed = useStore((state) => state.user.authed);
  const router = useRouter();

  // React.useEffect(() => {
  //   if (authed === AUTH.AUTHED) {
  //     router.push("/dashboard");
  //   }
  // }, [authed]);
  return (
    <div>
      <Head>
        <title>BYP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Auth />
      </main>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const authed = Cookies.get("byp-user-id");

  // if (authed) {
  //   return {
  //     redirect: {
  //       destination: "/dashboard",
  //       permanent: false,
  //     },
  //   };
  // }

  return { props: {} };
};