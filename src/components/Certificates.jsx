import { certificates } from '../data'
import CertificateCard from './CertificateCard'

const Certificates = () => {
  return (
    <section id="certificates" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up capitalize">
                    My certificates
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
                    {certificates.map(({imgSrc,title,tags,certificateLink},key)=>(
                        <CertificateCard imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        classes={"reveal-up"}
                        certificateLink={certificateLink} key={key} />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Certificates