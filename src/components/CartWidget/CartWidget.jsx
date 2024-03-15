import cart from './assets/carro.png'

export default function CartWidget() {
    return (
    <>
        <div>
            <img src={cart} alt="cart" className="cart"></img>
        </div>
    </>
    )
  }