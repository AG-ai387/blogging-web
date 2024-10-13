import Link from "next/link"
export default function Header(){
    return(
        <div className="header">
            <ul className="hbtn">
        

                
                <Link href={"/"}><li>Home</li></Link>


               <Link href={"/about-me"}> <li>About </li></Link>
        
               <Link href={"/contact-me"} > <li>Contact </li></Link>
            </ul>
        </div>
    )
}