function ImagenCarrusel({ src, texto }) {
  return (
    <img
      className="d-block mx-auto"
      src={src}
      alt={texto}
      style={{
    width: '100%',
    height: '500px',
    objectFit: 'contain',
    padding: '120px', 
  }}
    />
  );
}

export default ImagenCarrusel;