import PropTypes from "prop-types"
import { MdArrowOutward } from "react-icons/md"
import { Link } from "react-router-dom"

const CertificateCard = ({imgSrc,title,tags,classes,certificateLink}) => {
  return (
    <div className={classes+" relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"}>
            <figure className="img-box aspect-square rounded-lg mb-4">
                <img src={imgSrc} alt={title+"_Mohamed_Khassar"} loading="lazy" className="img-cover" />
            </figure>
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h3 className="title-1 mb-3">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, index) => (
                            <span className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg" key={index}>{label}</span>
                        ))}

                    </div>
                </div>
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                    <MdArrowOutward aria-hidden="true"  className="text-[18px]" />
                </div>
            </div>
            <Link to={certificateLink} target="_blank" className="absolute inset-0">

            </Link>
        </div>
  )
}

CertificateCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    certificateLink: PropTypes.string,
    classes: PropTypes.string

}

export default CertificateCard