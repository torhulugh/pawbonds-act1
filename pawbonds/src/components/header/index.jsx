import "./style.css";
export default function Header() {
  return (
 
    <header>
        <img id="site-logo" src="./public/assets/pawbonds-logo.png" alt="Site Logo"/>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
  );
}