import type { Blog } from "../../../model/Blog";

export function DisplayMarkedBlogs( {blog}: {blog: Blog} )
{
    return(
        <div className="blog-destacado">
            <img src={blog.getImagen()} alt={blog.getTitulo()}/>
        </div>
    );
}