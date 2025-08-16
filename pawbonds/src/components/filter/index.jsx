import "./style.css";
export default function Filter() {
  return (
    <section id="glass-filter">
      <div id="filter--option--dogType">
        <div className="select--arrow--backgroundColor">▾</div>
        <select name="glass-filter" id="dogType">
          <option value="allTypes">All Types</option>
          <option value="breeName">breeName</option>
          <option value="breeName">breeName</option>
        </select>
      </div>
      <div id="filter--option--dogAge">
        <div className="select--arrow--backgroundColor">▾</div>
        <select name="glass-filter" id="dogAge">
          <option value="allTypes">All Ages</option>
          <option value="size">size</option>
          <option value="size">size</option>
        </select>
      </div>
      <div id="filter--option--dogSize">
        <div className="select--arrow--backgroundColor">▾</div>
        <select name="glass-filter" id="dogSize">
          <option value="allTypes">All Sizes</option>
          <option value="size">size</option>
          <option value="size">size</option>
        </select>
      </div>
      <div id="filter-btn-container">
        <button id="filter--btn">Filter</button>
        <button id="reset--filter--btn">Reset</button>
      </div>
    </section>
  );
}
