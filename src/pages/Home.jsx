function Home() {
  return (
    <>
      <p>Home 페이지입니다.</p>

      <div className="flex flex-col">
        <strong className="mb-2">Color Code</strong>
        <ul className="flex">
          <li className="grow p-2 text-white" style={{ backgroundColor: "#0E1A25" }}>Primary <br /> #0E1A25</li>
          <li className="grow p-2" style={{ backgroundColor: "#F2F4F7" }}>Secondary <br /> #F2F4F7</li>
          <li className="grow p-2" style={{ backgroundColor: "#4A7EA0" }}>Accent <br /> #4A7EA0</li>
          <li className="grow p-2" style={{ backgroundColor: "#D1D5DB" }}>Line <br /> #D1D5DB</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
