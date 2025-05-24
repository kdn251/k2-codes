import { type GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Location", "/api/setup.sh");
  res.statusCode = 308; // Permanent Redirect
  res.end();

  return { props: {} };
};

export default function Setup() {
  return null;
} 