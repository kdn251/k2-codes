import { type GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = ({ res }) => {
  res.setHeader("Location", "/api/test.sh");
  res.statusCode = 308; // Permanent Redirect
  res.end();

  return Promise.resolve({ props: {} });
};

export default function Setup() {
  return null;
} 

