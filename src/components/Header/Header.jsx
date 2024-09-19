
const Header = () => {
  return (
    <div className="bg-[#222222] flex justify-around">
        <div>
            <img src="../../public/images/logo.png" alt="" />
        </div>
        <div className="text-white flex items-center gap-10">
            <div>Home</div>
            <div>Projects</div>
            <div>Experience</div>
            <div>Contact</div>
        </div>
    </div>
  )
}

export default Header