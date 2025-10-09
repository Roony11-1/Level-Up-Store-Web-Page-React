import { useEffect } from "react";
import { useState } from "react";
import { DisplayBlog } from "../components/DisplayBlog/DisplayBlog";
import { BlogApiService } from "../services/BlogApiService"
import type { Blog } from "../model/Blog";

export function Blogs()
{
    const [blogs, setBlogs] = useState<Blog[]>([])
    const blogService = new BlogApiService();

    useEffect(() => {
        const fetchBlogs = async () => {
            const datos = await blogService.fetchAll();
            setBlogs(datos);
          };
        
          fetchBlogs();
    }, []);

    return(
        <div>
          {blogs.map((p) => (
            <DisplayBlog blog={p} />
          ))}
        </div>
    )
}