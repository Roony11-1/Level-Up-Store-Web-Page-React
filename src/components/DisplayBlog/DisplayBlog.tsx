import { Blog } from "../../model/Blog";


export function DisplayBlog({ blog }: { blog: Blog }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <p>Id: {blog.getId()}</p>
            <p>Titulo: {blog.getTitulo()}</p>
            <p>Descripcion: {blog.getDescripcion()}</p>
            <p>URL: <a href={blog.getUrl()}>Ver Noticia</a></p>
            <img src={blog.getImagen()} alt={blog.getTitulo()} style={{ maxWidth: "200px" }} />
        </div>
    );
}
