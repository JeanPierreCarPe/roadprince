import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 } from "@/public/assets"
import ImageSquare from "../components/ImageSquare"

const Gallery = () => {
  return (
    <section className="w-full bg-black-background h-fit max-container flex justify-center items-center px-6 md:px-20">
        <div className="flex flex-col justify-center items-center gap-9 py-20">
            <h2 className="text-4xl md:text-5xl text-white text-center font-montserrat">Scenic Routes Captured</h2>
            <div className="flex flex-wrap w-full max-w-[1258px] gap-8 items-center justify-center">
                <ImageSquare image={gallery1} type="gallery" />
                <ImageSquare image={gallery2} type="gallery" />
                <ImageSquare image={gallery3} type="gallery" />
                <ImageSquare image={gallery4} type="gallery" />
                <ImageSquare image={gallery5} type="gallery" />
                <ImageSquare image={gallery6} type="gallery" />
            </div>
        </div>
    </section>
  )
}

export default Gallery