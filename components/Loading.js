import Image from 'next/image';

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png "
          alt="loading"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <h1>LOADING ....</h1>
      </div>
    </center>
  );
}

export default Loading;
