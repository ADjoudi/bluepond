import search from "../assets/search.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/cart.svg";
import "../styles/header.scss";
import { Link } from "react-router-dom";

export default function Header({ isShop, nbrItems, handleCartClick }) {
  return (
    <header className="header">
      <div className="nav">
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/shop">Shop</Link>
        </h1>
        <h1>Hot</h1>
        <h1>New</h1>
        <h1>Essentials</h1>
        <h1>Accessories</h1>
      </div>
      <div className="language">
        <h1>English</h1>
        <h1>العربية</h1>
      </div>
      {isShop && (
        <>
          <div className="search">
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" />
          </div>
          <div className="user">
            <img src={profile} alt="profile" />
            <div className="cart-container" onClick={handleCartClick}>
              {nbrItems > 0 ? (
                <h4 style={{ backgroundColor: "red" }}>{nbrItems}</h4>
              ) : (
                <h4>{nbrItems}</h4>
              )}
              <img src={cart} alt="cart" />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
