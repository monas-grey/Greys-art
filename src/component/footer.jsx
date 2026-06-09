function Footer() {
  return (
    <div className="flex place-items-start mt-[0.5rem] gap-[7rem] py-[5rem]">
      <div className="flex flex-col gap-[1.5rem]">
        <p className="font-[1000] tracking-[0.3rem] text-[12px]">LOGISTICS</p>
        <div>
          <div className="flex items-center gap-[0.5rem] mt-[0.7rem] text-[0.7rem] font-bold tracking-[0.2rem]">
            <ion-icon className="w-4 h-4" name="time-outline"></ion-icon>
            <p>EST.DELIVERY TIME</p>
          </div>
          <p className="font-bold text-[#c5c1be] tracking-[0.2rem] text-[12px]">
            30 - 45 Minutes
          </p>
        </div>

        <div>
          <div className="flex items-center gap-[0.5rem]  text-[0.7rem] font-bold tracking-[0.2rem]">
            <ion-icon className="w-4 h-4" name="location-outline"></ion-icon>
            <p>DELIVERY ZONE</p>
          </div>
          <p className="font-bold text-[#c5c1be] tracking-[0.2rem] text-[12px]">
            Ilorin, Nigeria
          </p>
        </div>

        <div className="flex items-center gap-[0.5rem] text-[#78716c] text-[0.7rem] font-bold tracking-[0.2rem]">
          <ion-icon name="bus-outline"></ion-icon>
          <p className="border-b border-[#fbbf23] hover:text-black">DELIVERY FAQ</p>
        </div>
      </div>
    </div>
  );
}


export default Footer;  