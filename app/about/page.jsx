import Link from "next/link"

const AboutPage = () => {
    return (
        <div className="">
            <h1 className="text-4xl">About Page</h1>
            <p className="py-4 text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde doloribus voluptates voluptate perspiciatis eos, corporis aliquam sapiente sint veritatis dolorum quidem placeat obcaecati, ea reiciendis, cum recusandae in esse.</p>
            <Link href='/' >Home</Link>
        </div>
    )
}

export default AboutPage