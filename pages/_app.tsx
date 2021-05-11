import "normalize.css";

function MyApp({ Component, pageProps }) {
  const { error } = pageProps;
  if (error) {
    return (
      <p>
        {error.status} {error.error}
      </p>
    );
  }
  return <Component {...pageProps} />;
}

export default MyApp;
