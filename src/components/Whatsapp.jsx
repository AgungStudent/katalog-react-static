export default function Whatsapp({telp}) {
  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=${telp}&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202.`}
        className="float"
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp my-float"></i>
      </a>
    </>
  )
}
