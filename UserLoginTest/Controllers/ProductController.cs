using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserLoginTest.Models;

namespace UserLoginTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductDAL pDB = new ProductDAL();

        //localhost/api/product/list
        [HttpGet("list")]
        public List<Product> GetProducts()
        {
            List<Product> p = pDB.GetProducts();
            return p;
        }
    }
}
