import { certificates } from '../data'
import AnimatedHeader from '../UI/AnimatedHeader'
import CertificateCard from '../UI/CertificateCard'

const Certificates = () => {
    return (
        <section id="certificates" className="section">
            <div className="container space-y-8">
                <AnimatedHeader className={"headline-2 capitalize"}>
                    My certificates
                </AnimatedHeader>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
                    {certificates.map(({ imgSrc, title, tags, certificateLink }, key) => (
                        <CertificateCard imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            certificateLink={certificateLink} key={key} index={key} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certificates