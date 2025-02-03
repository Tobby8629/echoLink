import Card from "../components/Blogs/Card";
import SearchInput from "../components/Home/SearchInput"

function Blog() {
  const arr = Array.from({ length: 6 });
  return (
    <section className="max-sm:py-0 pt-28">
      <header className="blog_header">
        <div className="bg-white max-sm:w-full md:p-16 w-[80%] xl:w-[60%]">
          <h2 className="header_text_regular">Blog</h2>
          <p className="my-5 text !text-gray-600 xl:w-[70%] mx-auto">
            Our latest web design tips and insights, 
            hot off the presses.
            Sign up for our newsletter to stay updated!
          </p>
          <SearchInput className="mx-auto" />
        </div>
      </header>
      <main className="my-28 relative ">
        <div className="max-sm:block flex flex-wrap gap-8 justify-center">
          {arr.map((_, index)=>(
            <Card key={index.toString()} index={index}/>
          ))}
        </div>
      </main>
    </section>
  )
}

export default Blog