import qrcode from "../../assets/image-qr-code.png";

const Card = () => {
  return (
    <main className="bg-blue-100 min-h-screen flex justify-center items-center">
        <div className="bg-white w-96 rounded-2xl flex flex-col justify-center items-center">
          <img src={qrcode} alt="qr-code" className="w-5/6 mt-7 rounded-2xl"/>
          <h3 className="text-center text-blue-900 w-5/6 my-6">Improve your front-end skills by building projects </h3>
          <p className="text-center text-gray-500 w-5/6 mb-7">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
        </div>  
    </main>
  )
}

export default Card;