import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <section className="container-fluid">
          <article className="container">
            <div className="row">
              <div className="col-12">
                <h1>Aprendiendo Next Js</h1>
                <Link className="btn btn-primary" href={"/nosotros"}>
                  Ir a nosotros
                </Link>
                <Image src={''} alt={''} />
              </div>
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
}
