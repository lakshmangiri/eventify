import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#161616'}}>
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
            />
        </Link>
        <p style={{color: '#f8f9fa'}}> 2024 Eventify. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer


