import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <Header />
    <h1><b>Modern programming languages of 2024</b></h1>
    <div className="parentcontainer">
      <div className="childcontainer">
  
        <div className="imagecontainer"><img src="/image/html images.png"></img></div>
          <h1 className="heading">HTML</h1>
          <p>HTML is the standard language that is used for creating webpages and web applications.it is used to design a basic webpage stucture.</p>

          <Link href={"/html"}>
          <button className="btn">Read More</button>
          </Link>
      
      </div>
      <div className="childcontainer">
  
  <div className="imagecontainer"><img src="/image/css image.png"></img></div>
    <h1 className="heading">CSS</h1>
    <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.</p>
    <Link href={"/css"}>
    <button className="btn">Read More</button>
    </Link>

</div>
<div className="childcontainer">
  
  <div className="imagecontainer"><img src="/image/javascript image.png"></img></div>
    <h1 className="heading">JAVA SCRIPT</h1>
    <p>JavaScript is an open-source programming language designed for creating web-centric applications.</p>
    <Link href={"/javascript"}>
    <button className="btn">Read More</button>
    </Link>

</div>


      
<div className="childcontainer">
  
  <div className="imagecontainer"><img src="/image/typescript image.png"></img></div>
    <h1 className="heading">TYPE SCRIPT</h1>
    <p>TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript,.</p>
<Link href={"/typescript"}>
    <button className="btn">Read More</button>
    </Link>
    

</div>
<div className="childcontainer">
  
  <div className="imagecontainer"><img src="/image/next.js image.png"></img></div>
    <h1 className="heading">NEXT.js</h1>
    <p>Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications.

.</p>
<Link href={"/next.js"}>
    <button className="btn">Read More</button>
    </Link>

</div>
<div className="childcontainer">
  
  <div className="imagecontainer"><img src="/image/paython image.png"></img></div>
    <h1 className="heading">PYTHON</h1>
    <p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures.</p>

    <Link href={"/python"}>
    <button className="btn">Read More</button>
    </Link>

</div>


</div>
<Footer />



    </div>
    
    
  )
}
