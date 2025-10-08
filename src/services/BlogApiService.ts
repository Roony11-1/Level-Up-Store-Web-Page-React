import { Blog } from "../model/Blog";
import { blogController } from "../API/Api";
import { BaseApiService } from "./BaseApiService";

export class BlogApiService extends BaseApiService<Blog> 
{
  constructor() 
  {
    super(blogController, Blog);
  }
}